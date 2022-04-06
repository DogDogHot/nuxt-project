<template>
  <v-container class="formWrap">
    <h3 class="headline text-center font-weight-bold black--text py-5">
      회원정보 입력
    </h3>
    <form dark class="pt-2">
      <label class="mb-0 font-weight-bold">이메일</label>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        placeholder="이메일을 입력해 주세요."
        required
        outlined
        dense
        append-icon="mdi-check"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <label class="mb-0 font-weight-bold">비밀번호</label>
      <v-text-field
        v-model="password"
        type="password"
        :error-messages="passwordErrors"
        placeholder="비밀번호를 입력해주세요."
        required
        outlined
        dense
        append-icon="mdi-check"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
      <label class="mb-0 font-weight-bold">비밀번호 재확인</label>
      <v-text-field
        v-model="reconfirmPassword"
        type="password"
        :error-messages="reconfirmPasswordErrors"
        placeholder="비밀번호를 다시 한번 입력해주세요."
        required
        outlined
        dense
        append-icon="mdi-check"
        @input="$v.reconfirmPassword.$touch()"
        @blur="$v.reconfirmPassword.$touch()"
      ></v-text-field>
      <label class="mb-0 font-weight-bold">이름 또는 닉네임</label>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        placeholder="nuxtProject 내에 사용될 이름을 적어주세요."
        required
        outlined
        dense
        append-icon="mdi-check"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <label class="mb-0 font-weight-bold">가입 유형</label>
      <v-item-group active-class="indigo accent-4" v-model="signupType">
        <v-container class="pt-0">
          <v-row class="typeArea">
            <v-col cols="12" sm="6" class="pa-0 pb-1 pr-1">
              <v-item v-slot:default="{ active, toggle }">
                <v-btn
                  outlined
                  block
                  color="grey"
                  height="40"
                  @click="toggle"
                  value="0"
                >
                  <span
                    :class="
                      active ? 'white--text' : 'grey--text text--darken-1'
                    "
                    >학생</span
                  >
                </v-btn>
              </v-item>
            </v-col>
            <v-col cols="12" sm="6" class="pa-0 pb-1 pl-1">
              <v-item v-slot:default="{ active, toggle }">
                <v-btn
                  outlined
                  block
                  color="grey"
                  height="40"
                  @click="toggle"
                  value="1"
                >
                  <span
                    :class="
                      active ? 'white--text' : 'grey--text text--darken-1'
                    "
                    >학부모</span
                  >
                </v-btn>
              </v-item>
            </v-col>
          </v-row>
          <p class="red--text caption mb-0 mt-n1" v-if="typeError">
            가입유형을 선택해주세요.
          </p>
        </v-container>
      </v-item-group>
      <label class="mb-0 font-weight-bold">학교</label>
      <v-text-field
        v-model="school"
        :error-messages="schoolErrors"
        placeholder="재학중인 학교를 입력해주세요. ex) 단대부고, 이화여고"
        hint="* 학부모님이실 경우 자녀의 학교를 입력하여주세요."
        persistent-hint
        required
        outlined
        dense
        append-icon="mdi-check"
        @input="$v.school.$touch()"
        @blur="$v.school.$touch()"
      ></v-text-field>
      <h3 class="headline text-center font-weight-bold black--text pt-10 pb-5">
        이용약관 동의
      </h3>
      <terms-component />
      <v-checkbox
        v-model="termsChk"
        :error-messages="termsChkErrors"
        label="동의합니다."
        required
        class="mt-0"
        @change="$v.termsChk.$touch()"
        @blur="$v.termsChk.$touch()"
      ></v-checkbox>
      <privacy-policy />
      <v-checkbox
        v-model="privacyPolicyChk"
        :error-messages="privacyPolicyChkErrors"
        label="동의합니다."
        required
        class="mt-0"
        @change="$v.privacyPolicyChk.$touch()"
        @blur="$v.privacyPolicyChk.$touch()"
      ></v-checkbox>
      <v-btn
        class="mr-4 subtitle-1 mt-5 font-weight-bold"
        block
        large
        color="indigo darken-2 white--text"
        @click="submit"
      >
        가입하기
      </v-btn>
      <copy-right class="mt-4" />
    </form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import CopyRight from "../components/copyright";
import TermsComponent from "../components/terms";
import PrivacyPolicy from "../components/privacyPolicy";

export default {
  layout: "signup_default",
  mixins: [validationMixin],
  components: {
    CopyRight,
    TermsComponent,
    PrivacyPolicy
  },
  validations: {
    email: { required, email },
    password: { required, maxLength: maxLength(20) },
    reconfirmPassword: { required, maxLength: maxLength(20) },
    name: { required, maxLength: maxLength(15) },
    school: { required, maxLength: maxLength(20) },
    termsChk: {
      checked(val) {
        return val;
      }
    },
    privacyPolicyChk: {
      checked(val) {
        return val;
      }
    }
  },
  data() {
    return {
      email: "",
      password: "",
      reconfirmPassword: "",
      name: "",
      signupType: "",
      typeError: false,
      school: "",
      termsChk: false,
      privacyPolicyChk: false
    };
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) {
        return errors;
      }
      !this.$v.email.email && errors.push("올바른 이메일계정을 입력해주세요.");
      !this.$v.email.required && errors.push("이메일을 입력해주세요.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) {
        return errors;
      }
      !this.$v.password.maxLength &&
        errors.push("비밀번호는 20자를 이내로 입력해주세요.");
      !this.$v.password.required && errors.push("비밀번호를 입력해주세요.");
      return errors;
    },
    reconfirmPasswordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) {
        return errors;
      }
      !this.$v.password.maxLength &&
        errors.push("비밀번호는 20자 이내로 입력해주세요.");
      !this.$v.password.required && errors.push("비밀번호 확인을 해주세요.");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) {
        return errors;
      }
      !this.$v.name.maxLength &&
        errors.push("이름 또는 닉네임은 15자 이내로 입력해주세요.");
      !this.$v.name.required && errors.push("이름 또는 닉네임을 입력해주세요.");
      return errors;
    },
    schoolErrors() {
      const errors = [];
      if (!this.$v.school.$dirty) {
        return errors;
      }
      !this.$v.school.maxLength &&
        errors.push("이름 또는 닉네임은 20자 이내로 입력해주세요.");
      !this.$v.school.required &&
        errors.push("이름 또는 닉네임을 입력해주세요.");
      return errors;
    },
    termsChkErrors() {
      const errors = [];
      if (!this.$v.termsChk.$dirty) {
        return errors;
      }
      !this.$v.termsChk.checked &&
        errors.push("이용약관에 동의해야 회원가입이 가능합니다.");
      return errors;
    },
    privacyPolicyChkErrors() {
      const errors = [];
      if (!this.$v.privacyPolicyChk.$dirty) {
        return errors;
      }
      !this.$v.privacyPolicyChk.checked &&
        errors.push("개인정보처리방침에 동의해야 회원가입이 가능합니다.");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.signupType === "" || this.signupType === undefined) {
        this.typeError = true;
        return;
      }
      alert("전송");
    }
  },
  watch: {
    signupType(type) {
      if (type !== undefined || type !== "") {
        this.typeError = false;
      } else {
        this.typeError = true;
      }
    }
  }
};
</script>

<style scoped>
.formWrap {
  max-width: 400px;
}
@media (max-width: 600px) {
  .typeArea .col-12 {
    max-width: 50%;
  }
  .formWrap {
    padding: 12px 20px;
  }
}
</style>
