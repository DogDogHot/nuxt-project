<template>
  <div>
    <v-card class="mx-auto pa-10" max-width="380" light flat v-if="!isChange">
      <h2 class="headline font-weight-black pt-12 pb-7 text-center">
        비밀번호 변경
      </h2>
      <form @submit.prevent="onSubmitForm">
        <v-label for="inputPwd" class="body-2 grey--text text--darken-4"
          >비밀번호</v-label
        >
        <v-text-field
          v-model="password"
          id="inputPwd"
          :error-messages="passwordErrors"
          placeholder="비밀번호를 입력해주세요."
          type="password"
          outlined
          dense
          full-width
          color="primary"
          append-icon="mdi-check"
          required
          autofocus
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-label for="inputPwd" class="body-2 grey--text text--darken-4"
          >비밀번호 재확인</v-label
        >
        <v-text-field
          v-model="reconfirmPassword"
          :error-messages="reconfirmPasswordErrors"
          placeholder="비밀번호를 다시 한번 입력해 주세요."
          type="password"
          outlined
          dense
          full-width
          color="primary"
          append-icon="mdi-check"
          required
          @input="$v.reconfirmPassword.$touch()"
          @blur="$v.reconfirmPassword.$touch()"
        ></v-text-field>
        <v-btn
          block
          light
          height="50"
          color="indigo accent-4"
          class="white--text"
          @click="submit"
          >비밀번호 변경
        </v-btn>
      </form>
    </v-card>
    <v-card class="mx-auto pa-10" max-width="480" light flat v-else>
      <h2 class="headline font-weight-black pt-12 text-center">
        비밀번호 변경 완료
      </h2>
      <v-card-subtitle class="subtitle-1 font-weight-medium text-center mb-7">
        이제부터 변경된 비밀번호로 서비스 이용이 가능합니다.
      </v-card-subtitle>
      <v-btn
        block
        light
        height="50"
        color="indigo accent-4"
        class="white--text"
        nuxt
        to="/login"
        >로그인하기</v-btn
      >
    </v-card>
    <div class="copyRight">
      <v-flex color="#999" class="copyright text-center caption grey--text">
        nuxtProject CO.,Ltd All rights reserved
      </v-flex>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  layout: "signup_default",
  mixins: [validationMixin],
  data() {
    return {
      password: "",
      reconfirmPassword: "",
      isChange: false
    };
  },
  validations: {
    password: { required, minLength: minLength(6) },
    reconfirmPassword: { sameAsPassword: sameAs("password") }
  },
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) {
        return errors;
      }
      !this.$v.password.minLength &&
        errors.push("비밀번호는 6자리 이상입니다.");
      !this.$v.password.required && errors.push("비밀번호를 입력해주세요.");
      return errors;
    },
    reconfirmPasswordErrors() {
      const errors = [];
      if (!this.$v.reconfirmPassword.$dirty) {
        return errors;
      }
      !this.$v.reconfirmPassword.sameAsPassword &&
        errors.push("비밀번호가 일치하지 않습니다.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      this.isChange = true;
    }
  }
};
</script>

<style scoped>
.copyRight {
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
}
</style>
