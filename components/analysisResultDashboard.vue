<template>
  <div class="analysisResult mx-auto">
    <v-row>
      <v-col cols="12" class="hidden-md-and-up">
        <v-card class="analysisTextBox" height="100%">
          <v-card-text>
            <p>
              <span class="bigText">{{ userInfo.userName }}님</span>의 성적 평균
              백분위는 {{ userInfo.userScore }}%이며,
            </p>
            <p>
              희망하는
              <span class="bigText">{{
                `${university[model].name} ${university[model].major}`
              }}</span
              >의
            </p>
            <p>
              입결 평균 백분위는
              <span class="bigText">{{ university[model].percent }}%</span
              >입니다.
            </p>
            {{ model }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" class="slideColumn pt-lg-10 pb-lg-0">
        <v-sheet
          :style="{ backgroundColor: 'transparent', margin: '0 auto' }"
          class="slideSheet"
        >
          <v-slide-group
            show-arrows
            :center-active="true"
            v-model="model"
            mandatory
            prev-icon="mdi-chevron-left mdi-48px"
            next-icon="mdi-chevron-right mdi-48px"
          >
            <v-slide-item
              v-for="(result, i) in university"
              :key="i"
              v-slot:default="{ active, toggle }"
            >
              <v-card class="universityCard" @click="toggle">
                <p class="logoArea">
                  <img :src="result.src" />
                </p>
                <p class="textArea">
                  <span class="name"
                    >{{ result.name }} [<small>{{ result.place }}</small
                    >]</span
                  ><br />
                  <span class="major">{{ result.major }}</span>
                </p>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </v-col>
      <v-col cols="12" md="4" class="hidden-sm-and-down">
        <v-card class="analysisTextBox" height="100%">
          <v-card-text>
            <p>
              <span class="bigText">{{ userInfo.userName }}님</span>의 성적 평균
              백분위는 {{ userInfo.userScore }}%이며,
            </p>
            <p>
              희망하는
              <span class="bigText">{{
                `${university[model].name} ${university[model].major}`
              }}</span
              >의
            </p>
            <p>
              입결 평균 백분위는
              <span class="bigText">{{ university[model].percent }}%</span
              >입니다.
            </p>
          </v-card-text>
          <v-container class="bottomArea">
            <p class="goTooltip hidden-md-and-up">바로가기</p>
            <ul>
              <li><a href="#">추천 도서</a></li>
              <li class="divider">|</li>
              <li><a href="#">추천 과목</a></li>
              <li class="divider">|</li>
              <li><a href="#">추천 대입 특강</a></li>
            </ul>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 1,
      userInfo: {
        userName: "nuxtProject",
        userScore: "96.43"
      },
      university: [
        {
          name: "서울대학교",
          place: "본교",
          major: "경영대학",
          src: "/images/seoul.jpg",
          active: true,
          percent: 98.45
        },
        {
          name: "국민대학교",
          place: "본교",
          major: "법학부",
          src: "/images/hanyang.png",
          active: false,
          percent: 98.45
        },
        {
          name: "명지대학교",
          place: "본교",
          major: "시각디자인과",
          src: "/images/myungji.jpg",
          active: false,
          percent: 87
        },
        {
          name: "홍익대학교",
          place: "본교",
          major: "조소과",
          src: "/images/hanyang.png",
          active: false,
          percent: 99
        },
        {
          name: "연세대학교",
          place: "본교",
          major: "물리학과",
          src: "/images/hanyang.png",
          active: false,
          percent: 80
        }
      ]
    };
  }
};
</script>

<style scoped>
.analysisResult {
  background-image: linear-gradient(to bottom, #1346d7, #5545ee);
  padding: 25px;
  max-width: 1280px;
}
.universityCard {
  padding: 10px;
  background-color: transparent;
  margin: 20px 0px;
  box-shadow: none;
}
.v-card--link:before {
  background-color: none !important;
}
.v-slide-group .v-icon {
  color: #fff !important;
}
.universityCard.v-slide-item--active {
  z-index: 1;
  margin: 20px -50px;
}
.logoArea {
  width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 50% !important;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
}
.slideSheet {
  width: 720px;
}
.universityCard.v-slide-item--active .logoArea {
  width: 260px;
  height: 260px;
  margin-top: -30px;
  background-color: rgba(255, 255, 255, 1);
}
.logoArea img {
  width: 100%;
}
.textArea {
  text-align: center;
  margin-top: 15px;
  font-size: 18px;
  color: #fff;
}
.textArea .name {
  font-size: 20px;
}
.textArea .major {
  font-size: 18px;
}
.analysisTextBox {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
.analysisTextBox .v-card__text {
  padding: 0;
  padding-top: 70px;
}
.analysisTextBox p {
  margin-bottom: 25px;
  font-size: 18px;
  color: #fff;
}
.bigText {
  font-size: 30px;
  font-weight: 700;
  text-decoration: underline;
}
.theme--light.v-icon {
  color: #fff !important;
}
.bottomArea ul {
  position: absolute;
  right: 10px;
  bottom: 0;
}
.bottomArea ul li {
  list-style: none;
  float: left;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
}
.bottomArea ul li a {
  color: #fff !important;
  text-decoration: none;
}
.bottomArea ul:after {
  content: "";
  clear: both;
  display: block;
}
.bottomArea .divider {
  padding: 0 10px;
  color: #fff;
}
@media (max-width: 1264px) {
  .bottomArea ul {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
  .bottomArea ul li {
    list-style: none;
    float: left;
    font-size: 13px;
  }
  .goTooltip {
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
    position: absolute;
    left: 0;
    top: -8px;
    padding: 2px 10px;
    font-size: 13px;
    color: #1346d7 !important;
    margin: 0;
  }
  .goTooltip:before {
    content: "";
    display: block;
    position: absolute;
    left: 68px;
    top: 9px;
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-left: 10px solid #fff;
    border-bottom: 3px solid transparent;
  }
  .bottomArea .divider {
    padding: 0 5px;
  }
  .slideColumn {
    padding: 0 !important;
    margin: 0 auto;
  }
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: 0 1 45px !important;
  }
}
@media (min-width: 961px) and (max-width: 1120px) {
  .slideSheet {
    width: 550px;
  }
  .analysisTextBox p {
    font-size: 16px;
    text-align: center;
  }
  .bigText {
    font-size: 25px;
  }
  .logoArea {
    width: 150px;
    height: 150px;
  }
  .universityCard.v-slide-item--active .logoArea {
    width: 200px;
    height: 200px;
    margin-top: -25px;
  }
  .textArea {
    display: none;
    margin-top: 15px;
    font-size: 18px;
    color: #fff;
  }
  .universityCard.v-slide-item--active .textArea {
    display: block;
  }
  .textArea .name {
    font-size: 18px;
  }
  .textArea .major {
    font-size: 16px;
  }
}
@media (max-width: 960px) {
  .analysisResult {
    margin: 15px;
    width: calc(100% - 30px);
    border-radius: 20px;
  }
  .analysisTextBox {
    margin: -5px auto;
  }
  .slideSheet {
    width: 350px;
  }
  .analysisTextBox .v-card__text {
    padding-top: 0;
    text-align: center;
  }
  .analysisTextBox p {
    margin-bottom: 15px;
    font-size: 14px;
  }
  .bigText {
    font-size: 20px;
  }
  .logoArea {
    width: 90px;
    height: 90px;
  }
  .universityCard.v-slide-item--active .logoArea {
    width: 120px;
    height: 120px;
    margin-top: -20px;
  }
  .textArea {
    display: none;
    margin-top: 15px;
    font-size: 18px;
    color: #fff;
  }
  .universityCard.v-slide-item--active .textArea {
    display: block;
  }
  .textArea .name {
    font-size: 18px;
  }
  .textArea .major {
    font-size: 16px;
  }
}
</style>
