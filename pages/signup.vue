<template>
  <v-card class="mx-auto" max-width="300" light flat>
    <v-list-item three-line>
      <v-list-item-content class="text-center">
        <v-list-item-title class="headline font-weight-black pt-12"
          >회원가입</v-list-item-title
        >
        <v-list-item-subtitle class="title font-weight-medium"
          >nuxtProject회원이 되면,
          <span class="indigo--text">다양한 혜택</span>을 받을 수
          있습니다.</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn
        block
        large
        color="indigo"
        height="50"
        class="mt-1 subtitle-1 font-weight-bold white--text"
        nuxt
        to="/signupForm"
      >
        이메일 회원가입
      </v-btn>
    </v-card-actions>
    <sns-btn />
    <copy-right />
  </v-card>
</template>

<script>
import SnsBtn from "../components/snsBtn";
import CopyRight from "../components/copyright";
export default {
  layout: "signup_default",
  components: {
    SnsBtn,
    CopyRight
  }
};
</script>
