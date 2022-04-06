<template>
  <div>
    <v-card
      class="passResetWrap mx-auto"
      max-width="380"
      light
      flat
      v-if="isSend"
    >
      <h2 class="headline font-weight-black pt-12 pb-0 text-center">
        비밀번호 재설정
      </h2>
      <v-card-subtitle class="subtitle-1 font-weight-medium text-center">
        가입한 이메일 주소를 입력해주세요.<br />
        이메일 인증 완료 후 비밀번호를 재설정할 수 있습니다.
      </v-card-subtitle>
      <form @submit.prevent="onSubmitForm">
        <v-text-field
          v-model="userId"
          :error-messages="emailErrors"
          placeholder="이메일"
          outlined
          dense
          full-width
          color="primary"
          required
          hide-details="auto"
          class="mb-2"
          autofocus
          @input="$v.userId.$touch()"
          @blur="$v.userId.$touch()"
        ></v-text-field>
        <v-btn
          block
          large
          color="indigo accent-4"
          height="50"
          class="mt-1 subtitle-1 font-weight-bold white--text"
          type="submit"
        >
          인증메일 전송
        </v-btn>
      </form>
    </v-card>
    <v-card class="mx-auto px-5" max-width="380" light flat v-else>
      <h2 class="headline font-weight-black pt-12 pb-0 text-center">
        이메일 발송 완료
      </h2>
      <div class="text-center my-2">
        <img src="images/emailSend.png" />
      </div>
      <v-card-subtitle class="subtitle-1 font-weight-medium text-center">
        비밀번호를 재설정 할 수 있는 인증 메일이
      </v-card-subtitle>
      <v-row class="mx-0">
        <v-text-field
          placeholder="authMail"
          outlined
          dense
          readonly
          color="grey lighten-2"
          class="float-left"
          hide-details="auto"
        ></v-text-field>
        <span
          class="subtitle-1 font-weight-medium grey--text text--darken-2 ml-2 mt-4"
          >로</span
        >
      </v-row>
      <v-card-subtitle class="subtitle-1 font-weight-medium text-center">
        발송되었습니다. 메일함을 확인해주세요
      </v-card-subtitle>
      <v-divider class="mt-7"></v-divider>
      <v-card-text class="pl-0 pb-1 body-2 resendArea"
        >이메일을 찾을 수 없나요?</v-card-text
      >
      <v-btn
        text
        small
        color="indigo accent-4"
        class="body-2 pa-0 resendBtn"
        style="text-decoration: underline"
        nuxt
        to="/changePassword"
        >인증 메일 재발송</v-btn
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
import { required, email } from "vuelidate/lib/validators";

export default {
  layout: "signup_default",
  mixins: [validationMixin],
  data() {
    return {
      userId: "",
      authMail: "daeibyong@gmail.com",
      isSend: true
    };
  },
  validations: {
    userId: { required, email }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.userId.$dirty) {
        return errors;
      }
      !this.$v.userId.email && errors.push("유효한 이메일이 아닙니다.");
      !this.$v.userId.required && errors.push("이메일을 입력해주세요.");
      return errors;
    }
  },
  methods: {
    onSubmitForm() {
      this.isSend = false;
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
@media (max-width: 600px) {
  .passResetWrap {
    padding: 0 20px;
  }
  .resendArea {
    text-align: center;
  }
  .resendBtn {
    display: block;
  }
}
</style>
