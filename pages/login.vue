<template>
  <v-card outlined class="loginBox">
    <v-flex fluid max-width="1280" class="text-center mb-4">
      <v-btn width="140" text nuxt to="/" color="transparent" class="mb-5">
        <img src="images/logo.jpg" style="width: 140px" />
      </v-btn>
    </v-flex>
    <form @submit.prevent="login(userId, password)">
      <v-text-field
        v-model="userId"
        :error-messages="userIdErrors"
        placeholder="아이디"
        outlined
        dense
        full-width
        color="primary"
        required
        hide-details="auto"
        class="mb-2"
        :autofocus="userId ? false : true"
        @input="$v.userId.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        placeholder="비밀번호"
        type="password"
        outlined
        dense
        full-width
        color="primary"
        required
        hide-details="auto"
        class="mb-2"
        :autofocus="userId != '' ? true : false"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <v-btn block dark height="40" color="indigo" class="mb-2" type="submit"
        >로그인</v-btn
      >
      <p id="loginErrCaption" class="red--text caption d-none">
        가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.
      </p>
      <v-checkbox
        v-model="checkbox"
        label="로그인 상태 유지"
        class="loginContinue"
      ></v-checkbox>
    </form>
    <v-flex class="snsLabel">
      <p>SNS로 로그인</p>
    </v-flex>
    <v-divider class="snsLine" />
    <sns-btn />
    <v-divider />
    <v-container fluid class="text-center">
      <v-btn
        text
        small
        color="grey darken-3"
        background-color="transparent"
        nuxt
        to="/findPassword"
        >비밀번호 찾기</v-btn
      >
      <span class="gre--text text--darken-3">|</span>
      <v-btn
        text
        small
        background-color="transparent"
        color="grey darken-3"
        nuxt
        to="/signup"
        >회원가입</v-btn
      >
    </v-container>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import SnsBtn from "../components/snsBtn";
import axios from "axios";

export default {
  layout: "login_default",
  components: {
    SnsBtn
  },
  mixins: [validationMixin],
  data: () => ({
    userId: "",
    password: "",
    checkbox: false,
    bottomOption: [
      {
        text: "아이디 찾기",
        disabled: false,
        href: "/"
      },
      {
        text: "비밀번호 찾기",
        disabled: false,
        href: "/"
      },
      {
        text: "회원가입",
        disabled: false,
        href: "/signup"
      }
    ]
  }),
  validations: {
    userId: { required, email },
    password: { required, minLength: minLength(6) }
  },
  computed: {
    userIdErrors() {
      const errors = [];
      if (!this.$v.userId.$dirty) {
        return errors;
      }
      !this.$v.userId.email && errors.push("유효한 이메일이 아닙니다.");
      !this.$v.userId.required && errors.push("아이디를 입력해주세요.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) {
        return errors;
      }
      !this.$v.password.required && errors.push("비밀번호를 입력해주세요.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      this.$store.state.isLogin = true;
      this.$router.push("/");
      // 마이페이지 접근을 위해 임시로 처리해둠
    },
    login(userId, password) {
      let params = new URLSearchParams();
      params.append("email", userId);
      params.append("password", password);

      axios
        .post("http://api.nuxtproject-sample.com/email", params)
        .then(response => {
          let res = response.data;
          if (res.result === true) {
            console.log(res.data);
            this.$store.dispatch("login", res.data);
            this.$router.push("/");
          } else {
            document
              .getElementById("loginErrCaption")
              .classList.remove("d-none");
          }
        });
    },
    redirect() {
      const { search } = window.location;
      const tokens = search.replace(/^\?/, "").split("&");
      const { returnPath } = tokens.reduce((qs, tkn) => {
        const pair = tkn.split("=");
        qs[pair[0]] = decodeURIComponent(pair[1]);
        return qs;
      }, {});

      // 리다이렉트 처리
      this.$router.push(returnPath);
    }
  }
};
</script>

<style scoped>
.loginBox {
  width: 420px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -220px;
  margin-top: -308px;
}
.snsLabel {
  position: relative;
}
.snsLabel p {
  width: 100px;
  text-align: center;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 12px;
  margin-left: -50px;
  color: #999;
}
.snsLine {
  margin-top: 20px;
}
@media (max-width: 600px) {
  .loginBox {
    position: static;
    margin: 30px auto;
    width: 100%;
    max-width: 320px;
    padding: 30px 20px;
  }
}
</style>
