<template>
  <div class="subpageWrap">
    <v-row class="mx-0">
      <v-col cols="12" lg="12" sm="12" class="pa-0 pl-lg-0">
        <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3">대학 입시 특강</h2>
        <p
          class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3"
        >
          신청하기 어려웠던 대학 입시 특강을 nuxtProject에서 쉽게 신청하실 수
          있습니다.
        </p>
      </v-col>
      <v-col cols="12" sm="12" class="pa-0 pr-4 mt-sm-n7 text-right">
        <v-btn
          outlined
          small
          height="27"
          color="grey darken-1"
          nuxt
          to="/specialLectureList"
        >
          목록
        </v-btn>
      </v-col>
      <v-col cols="12" sm="12" class="pa-0 mt-2">
        <v-card
          outlined
          width="100%"
          min-height="280"
          class="infoArea d-inline-block mx-auto pt-sm-10 pa-md-10 pa-lg-10"
        >
          <div class="lectureImg float-md-left">
            <v-img
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/79986324_845898239174441_6603893549158029246_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=v7CWu_29du8AX8WiD2H&oh=6766e7c07914b036541d48ea1aa1620d&oe=5EDD0DEC"
              aspect-ratio="1"
            />
          </div>
          <div class="lectureList float-md-left">
            <v-row>
              <v-col cols="12" sm="12" class="pa-0 px-5">
                <v-card-title class="text-truncate pt-0 px-0" max-width="100%">
                  {{ getLecture.title }}
                </v-card-title>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1">
                <v-card width="100%" flat class="d-flex">
                  <v-card
                    width="70"
                    flat
                    class="d-flex justify-space-between body-2"
                    style="line-height:24px"
                  >
                    <v-card flat class="grey--text text--darken-1">강</v-card>
                    <v-card flat class="grey--text text--darken-1">사</v-card>
                    <v-card flat class="grey--text text--darken-1">님</v-card>
                  </v-card>
                  <v-card flat class="ml-3">{{ getLecture.name }}</v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1">
                <v-card width="100%" flat class="d-flex">
                  <v-card
                    width="70"
                    flat
                    class="d-flex justify-space-between body-2"
                    style="line-height:24px"
                  >
                    <v-card flat class="grey--text text--darken-1">강</v-card>
                    <v-card flat class="grey--text text--darken-1">의</v-card>
                    <v-card flat class="grey--text text--darken-1">기</v-card>
                    <v-card flat class="grey--text text--darken-1">간</v-card>
                  </v-card>
                  <v-card flat class="ml-3">{{ getLecture.period }}</v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1">
                <v-card width="100%" flat class="d-flex">
                  <v-card
                    width="70"
                    flat
                    class="d-flex justify-space-between body-2"
                    style="line-height:24px"
                  >
                    <v-card flat class="grey--text text--darken-1">강</v-card>
                    <v-card flat class="grey--text text--darken-1">의</v-card>
                    <v-card flat class="grey--text text--darken-1">시</v-card>
                    <v-card flat class="grey--text text--darken-1">간</v-card>
                  </v-card>
                  <v-card flat class="ml-3">{{ getLecture.time }}</v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1">
                <v-card width="100%" flat class="d-flex">
                  <v-card
                    width="70"
                    flat
                    class="d-flex justify-space-between body-2"
                    style="line-height:24px"
                  >
                    <v-card flat class="grey--text text--darken-1">신</v-card>
                    <v-card flat class="grey--text text--darken-1">청</v-card>
                    <v-card flat class="grey--text text--darken-1">방</v-card>
                    <v-card flat class="grey--text text--darken-1">법</v-card>
                  </v-card>
                  <v-card flat class="ml-3">{{ getLecture.method }}</v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1">
                <v-card width="100%" flat class="d-flex">
                  <v-card
                    width="70"
                    flat
                    class="d-flex justify-space-between body-2"
                    style="line-height:24px"
                  >
                    <v-card flat class="grey--text text--darken-1">장</v-card>
                    <v-card flat class="grey--text text--darken-1">소</v-card>
                  </v-card>
                  <v-card flat class="ml-3">{{ getLecture.place }}</v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1">
                <v-card width="100%" flat class="d-flex">
                  <v-card
                    width="70"
                    flat
                    class="d-flex justify-space-between body-2"
                    style="line-height:24px"
                  >
                    <v-card flat class="grey--text text--darken-1">장</v-card>
                    <v-card flat class="grey--text text--darken-1">소</v-card>
                  </v-card>
                  <v-card flat class="ml-3">{{ getLecture.place }}</v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="px-5 py-1 mt-5">
                <v-card width="100%" flat class="d-flex">
                  <v-card width="100" flat class="body-2">
                    찜목록
                    <v-btn icon x-small class="mt-n1" color="purple">
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-card>
                  <v-card flat class="ml-3 body-2">
                    <span class="mr-2">공유하기</span>
                    <v-btn
                      icon
                      x-small
                      v-for="(share, i) in getLecture.shareLink"
                      :key="i"
                      color="black"
                      :href="share.link"
                      class="px-3"
                      target="_blank"
                    >
                      <v-icon>mdi-{{ share.type }}</v-icon>
                    </v-btn>
                  </v-card>
                </v-card>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="py-1 mt-5">
                <v-card width="100%" flat>
                  <v-btn
                    text
                    small
                    v-for="(tag, i) in getLecture.tag"
                    :key="i"
                    :href="tag.link"
                    color="white"
                    class="px-2 purple--text"
                    target="_blank"
                  >
                    {{ tag.name }}
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" class="pa-0 mt-2">
        <v-card
          outlined
          width="100%"
          min-height="500px"
          class="detailArea d-inline-block mx-auto pa-10"
        >
          상세페이지
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-btn outlined tile small color="#888" class="mr-2">
          <v-icon left>mdi-chevron-up</v-icon> 이전글
        </v-btn>
        <v-btn outlined tile small color="#888">
          <v-icon left>mdi-chevron-down</v-icon> 다음글
        </v-btn>
        <v-btn
          ref="button"
          tile
          small
          color="#888"
          class="white--text ml-auto"
          @click="
            $vuetify.goTo(1, {
              durtion: '200',
              offset: '0',
              easing: 'easeInOutCubic'
            })
          "
        >
          <v-icon left>mdi-triangle</v-icon> TOP
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lecture: {
        img: "",
        title: "",
        name: "",
        period: "",
        time: "",
        method: "",
        place: "",
        fixNumber: "",
        tag: [],
        favorite: true,
        shareLink: []
      }
    };
  },
  computed: {
    getLecture: () => {
      const lecture = {
        img: "../assets/images/logo.jpg",
        title: "심리상담 대학원 입시 준비반",
        name: "nuxtProject Developer",
        period: "2020-01-20 ~ 2020-01-24",
        time: "15:00 ~ 17:00 / 4일동안 동일",
        method: "온라인 무료 강의",
        place: "온라인 강의를 볼 수 있는 곳 어디서나",
        fixNumber: "10",
        tag: [
          {
            name: "#대학입시특강",
            link: "#"
          },
          {
            name: "#심리상담",
            link: "#"
          },
          {
            name: "#대학원입시",
            link: "#"
          },
          {
            name: "#온리안강의",
            link: "#"
          }
        ],
        favorite: true,
        shareLink: [
          {
            type: "instagram",
            link: "https://www.instagram.com/nuxtProject/"
          },
          {
            type: "facebook",
            link: "#"
          },
          {
            type: "twitter",
            link: "#"
          },
          {
            type: "web",
            link: "#"
          }
        ]
      };
      return lecture;
    }
  }
};
</script>

<style scoped>
.lectureImg {
  width: 200px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  border-radius: 0 !important;
  border: 1px solid #ccc;
}
.lectureList {
  width: calc(100% - 200px);
  height: 100%;
  padding: 0 15px;
  overflow: auto;
}
@media (max-width: 960px) {
  .lectureImg {
    width: 90%;
    margin: 0 auto;
  }
  .lectureList {
    width: 100%;
    margin-top: 15px;
  }
  .infoArea {
    padding-top: 15px;
  }
  .detailArea {
    padding: 15px !important;
  }
}
</style>
