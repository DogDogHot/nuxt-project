<template>
  <v-app>
    <v-card class="overflow-hidden pb-12" height="100%" tile flat light>
      <v-app-bar color="white" flat max-width="1280" class="mx-auto navArea">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        >
        </v-app-bar-nav-icon>
        <v-btn
          class="NavLogoWrap mr-sm-3"
          width="172"
          height="45"
          color="transparent"
          text
          nuxt
          to="/"
        >
          <img src="/images/logo.jpg" class="navLogo" />
        </v-btn>
        <v-container class="lg-Navlist hidden-sm-and-down">
          <v-btn
            text
            v-for="(menu, i) in navList"
            :key="i"
            color="grey lighten-4"
            nuxt
            :to="menu.to"
            large
            active-class="font-weight-black"
            class="grey--text font-weight-regular subtitle-1 text--darken-4"
          >
            {{ menu.title }}
          </v-btn>
        </v-container>
        <v-spacer></v-spacer>
        <div class="d-inline text-right rightBtn hidden-sm-and-up">
          <v-flex v-if="$store.state.accessToken !== null">
            <v-btn
              text
              small
              color="grey"
              class="grey--text font-weight-medium text--darken-2"
              nuxt
              to="/myPage"
            >
              마이페이지
            </v-btn>
            <v-btn
              text
              small
              color="grey"
              class="grey--text font-weight-medium text--darken-2"
              nuxt
              @click="logout"
            >
              로그아웃
            </v-btn>
          </v-flex>
          <v-flex v-else>
            <v-btn
              text
              small
              color="grey"
              class="grey--text font-weight-medium text--darken-2"
              nuxt
              to="/login"
            >
              로그인
            </v-btn>
            <span class="grey--text text--darken-2">|</span>
            <v-btn
              text
              small
              color="grey"
              class="grey--text font-weight-medium text--darken-2"
              nuxt
              to="/signup"
            >
              회원가입
            </v-btn>
          </v-flex>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-content class="d-flex justify-start pt-12 text-left">
            <v-btn icon absolute right top @click="drawer = !drawer">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-card flat class="pa-0 mt-2">
              <v-btn
                text
                nuxt
                v-if="$store.state.isLogin"
                color="grey darken-2"
                to="/myPage"
                class="pl-0 font-weight-bold"
              >
                <v-icon color="grey" class="mr-1">mdi-account-circle</v-icon>
                마이 페이지
              </v-btn>
              <v-btn
                text
                nuxt
                color="grey"
                to="/login"
                v-else
                class="pl-0 font-weight-bold"
              >
                <v-icon color="grey" class="mr-1">mdi-account-circle</v-icon>
                로그인 해주세요
              </v-btn>
            </v-card>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
        <v-list nav dense color="white">
          <v-list-item-group v-model="group" color="grey">
            <v-list-item
              v-for="(menu, i) in navList"
              :key="i"
              link
              nuxt
              :to="menu.to"
            >
              <v-list-item-icon class="mr-5">
                <v-icon v-text="menu.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <nuxt />
    </v-card>
    <v-footer light padless class="pa-0">
      <v-card width="100%" class="footerCard" color="#454fef" flat tile>
        <v-row
          class="mx-auto pt-10 white--text"
          :style="{ maxWidth: '1280px' }"
        >
          <v-col cols="12" md="6" sm="12">
            <v-flex class="footerLink">
              <a href="#" class="white--text" title="이용약관 보기">
                이용약관
              </a>
              <a href="#" class="white--text" title="개인정보 처리방침 보기">
                개인정보 처리방침
              </a>
              <a href="#" class="white--text" title="공지사항 보기">
                공지사항
              </a>
            </v-flex>
            <v-flex class="companyInfo mt-10">
              <p class="mb-2 mb-md-0">
                nuxtProject<span class="divider">|</span> 대표 : 홍길동<span
                  class="divider"
                  >|</span
                >
                사업자 등록 번호 : 123-45-678901
              </p>
              <p>
                e-mail:
                <a
                  href="mailto:nuxtProject@nuxtProject.com"
                  class="white--text"
                  title="이메일"
                  >nuxtProject@nuxtProject.com</a
                ><span class="divider">|</span>
                주소 : 미상
              </p>
              <p>
                nuxtProject 정확한 정보와 대입상담을 도와주기 위해 노력하고
                있으며 정보 제공에 따른 법적 책임을 지지 않습니다.
              </p>
            </v-flex>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <v-flex class="footerBtn text-center text-md-right pt-5">
              <v-btn
                outlined
                light
                width="132"
                height="40"
                class="white--text overflow-hidden"
              >
                <v-img
                  src="/images/googleplay.png"
                  alert="구글플레이로 이동"
                ></v-img>
              </v-btn>
              <v-btn
                outlined
                light
                width="132"
                height="40"
                class="white--text overflow-hidden ml-2"
              >
                <v-img
                  src="/images/appstore.png"
                  alert="앱스토어로 이동"
                ></v-img>
              </v-btn>
            </v-flex>
          </v-col>
          <v-container fluid class="text-center text--secondary body-2"
            >nuxtProject CO.,Ltd, All rights reserved
          </v-container>
        </v-row>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      navList: [
        {
          icon: "mdi-newspaper",
          title: "News & Issue",
          to: "/newsissueList"
        },
        {
          icon: "mdi-google-analytics",
          title: "성적 분석",
          to: "/scoreAnalysis"
        },
        {
          icon: "mdi-information-variant",
          title: "케어 정보",
          to: "/careInfomationList"
        },
        {
          icon: "mdi-school-outline",
          title: "대입 특강",
          to: "/specialLectureList"
        },
        {
          icon: "mdi-human-handsup",
          title: "진로 정보",
          to: "/careerInfomation"
        }
      ]
    };
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  head() {
    return {
      title: "nuxtProject",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, intial-scale=1" },
        { name: "Keywords", content: "nuxtProject" },
        { hid: "description", name: "description", content: "nuxtProject" }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.v-btn:before {
  background-color: #fff !important;
}
.navArea {
  border-bottom: 1px solid #ccc !important;
}
.navLogo {
  max-width: 140px;
}
.lg-Navlist {
  padding-bottom: 6px;
}
.lg-Navlist .v-btn {
  padding-top: 20px;
}
.rightBtn {
  padding: 33px 0 3px;
  width: 400px;
}
/* footer */
.footerCard {
  height: 300px;
}
.footerLink > a {
  display: inline-block;
  font-weight: 700;
  padding-right: 15px;
}
.companyInfo {
  font-size: 13px;
}
.companyInfo a {
  color: #fff;
  text-decoration: none;
}
.divider {
  margin: 0 10px;
}
.footerBtn .v-btn {
  border: 1px solid #fff;
}
@media (min-width: 959px) and (max-width: 1024px) {
  .lg-Navlist .v-btn {
    padding: 20px 10px 0;
  }
}
@media (max-width: 959px) {
  .NavLogoWrap {
    position: absolute;
    left: 50%;
    margin-left: -86px;
  }
  .rightBtn {
    width: auto;
    display: none !important;
  }
  .navLogo {
    max-width: 120px;
  }
  .footerCard {
    height: auto;
    padding-bottom: 50px;
  }
  .footerLink {
    padding-right: 0;
    text-align: center;
  }
  .companyInfo {
    text-align: center;
  }
  .footerBtn {
    padding-top: 0 !important;
  }
}
</style>
