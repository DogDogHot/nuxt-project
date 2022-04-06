<template>
  <div class="snsBtnGroup">
    <v-btn
      small
      outlined
      color="grey lighten-2"
      width="35"
      height="35"
      class="overflow-hidden"
      rounded
      v-for="(snsList, i) in sns"
      :key="i"
    >
      <v-img :src="snsList.src" aspect-ratio="1.2" max-width="33"></v-img>
    </v-btn>
    <KakaoLogin
      api-key="apiKey"
      image="kakao_login_btn_large"
      :on-success="onSuccess"
      :on-failure="onFailure"
    />
  </div>
</template>

<script>
import axios from "axios";
import KakaoLogin from "vue-kakao-login";

export default {
  data() {
    return {
      sns: [
        {
          src: "/icon/kakao.png",
          href: "https://www.kakao.com"
        },
        {
          src: "/icon/facebook.png",
          href: "https://www.facebook.com"
        },
        {
          src: "/icon/naver.png",
          href: "https://www.naver.com"
        },
        {
          src: "/icon/twitter.png",
          href: "www.twitter.com"
        }
      ]
    };
  },
  components: {
    KakaoLogin
  },
  methods: {
    onSuccess: function(data) {
      console.log(data);
      console.log("success");
      Kakao.API.request({
        url: "/v2/user/me",
        success: function(res) {
          console.log(res);
        },
        fail: function(error) {
          alert(console.log(error));
        }
      });
    },
    onFailure: function(data) {
      console.log(data);
      console.log("failure");
    }
  }
};
</script>

<style scoped>
.snsBtnGroup {
  text-align: center;
  margin: 30px 0 120px;
}
.snsBtnGroup > .v-btn {
  margin-right: 10px;
}
.snsBtnGroup > .v-btn:last-child {
  margin-right: 0;
}
</style>
