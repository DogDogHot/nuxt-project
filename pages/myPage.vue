<template>
  <div class="subpageWrap">
    <v-row>
      <v-col lg="12" xs="6" class="pa-0 pl-4">
        <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">마이페이지</h2>
      </v-col>
    </v-row>
    <v-card flat tile class="mt-5">
      <v-tabs
        v-model="tab"
        color="indigo accent-4"
        grow
        slide-color="red"
        style="border-width: 1px 0;border-style:solid;border-color:#ccc;"
      >
        <v-tab v-for="menu in menus" :key="menu">
          {{ menu }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" class="mt-3" light>
        <v-tab-item v-for="(menu, i) in menus" :key="i">
          <my-Info v-if="i == '0'" :user-info="userInfo" />
          <mygoal-config v-if="i == '1'" />
          <myscore-management v-if="i == '2'" />
          <saw-speciallecture v-if="i == '3'" />
          <saw-careinfomation v-if="i == '4'" />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import MyInfo from "../components/myPage/myInfo";
import MygoalConfig from "../components/myPage/mygoalConfig";
import MyscoreManagement from "../components/myPage/myScoreManagement";
import SawSpeciallecture from "../components/myPage/sawSpeciallecture";
import SawCareinfomation from "../components/myPage/sawCareInfomation";

export default {
  components: {
    MyInfo,
    MygoalConfig,
    MyscoreManagement,
    SawSpeciallecture,
    SawCareinfomation
  },
  data() {
    return {
      tab: null,
      menus: [
        "내 정보",
        "나의 목표 설정",
        "내 성적 관리",
        "내가 본 대입 특강",
        "내가 본 케어 정보"
      ],
      userInfo: {
        id: "nuxtProject@gmail.com",
        password: "12345678",
        newPassword: "",
        reconfirmPassword: "",
        name: "nuxtProject",
        type: "student",
        nickname: "Lab",
        school: ""
      }
    };
  },
  head() {
    return {
      title: "마이페이지"
    };
  }
};
</script>
