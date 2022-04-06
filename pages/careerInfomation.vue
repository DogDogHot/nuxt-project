<template>
    <div class="subpageWrap">
        <v-row class="">
            <v-col lg="12" sm="12" class="pa-0 pl-4 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3">진로 정보</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">아래 카테고리를 선택하시면 자세한 진로 정보를 보실 수 있습니다.(복수 선택 가능)</p>
            </v-col>
        </v-row>
        <v-container fluid class="px-lg-0 mt-2">
          <v-item-group multiple>
            <v-container class="ma-0 mx-auto" style="max-width: 1280px;">
              <v-row>
                <v-col
                  class="infoCard pa-0"
                  v-for="(info, n) in getCareerInfo"
                  :key="n"
                  cols="12"
                  lg="2"
                  md="3"
                  sm="4"
                >
                  <v-item v-slot:default="{ active }">
                    <v-card
                      :color="active ? 'rgba(10,25,220,0.5)' : ''"
                      class="d-flex align-center"
                      light
                      outlined
                      tile
                      height="80"
                      @click="getCategory(categories)"
                    >
                      <v-row v-if="!active">
                        <v-col
                          cols="12"
                          lg="5"
                          md="4"
                          sm="6"
                          class="pl-7"
                        >
                          <img
                            :src="info.src"
                            style="width:50px;"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          lg="7"
                          md="8"
                          sm="6"
                        >
                          <v-card-text class="grey--text text--darken-3 pl-0">{{ info.text }}</v-card-text>
                        </v-col>
                      </v-row>
                      <v-row v-else>
                        <v-col
                          cols="12"
                          lg="5"
                          md="4"
                          sm="6"
                          class="pl-7"
                          color="blue"
                        >
                          <img
                            :src="info.src"
                            style="width:50px;-webkit-filter: invert(100%);filter: invert(100%);"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          lg="7"
                          md="8"
                          sm="6"
                        >
                          <v-card-text class="white--text font-weight-bold pl-0">{{ info.text }}</v-card-text>
                        </v-col>
                      </v-row>
                      <!--
                      <v-scroll-y-transition>
                        <div
                          v-if="active"
                          class="flex-grow-1 text-center"
                        >
                          <v-icon>mdi-check-bold</v-icon> {{careerInfo.text}}
                        </div>
                      </v-scroll-y-transition>
                      -->
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
        </v-container>
        <v-row>
            <v-col lg="12" xs="6" class="pa-0 pl-4 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">상세 정보</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">선택한 카테고리의 상세정보를 보실 수 있습니다.</p>
            </v-col>
        </v-row>
        <v-container fluid class="px-0 mt-2">
          <div class="categoryCard" v-if="categories.length > 0">
            <v-btn
              class="careerCategory text-center pa-2"
              height="80"
              light
              color="white"
              @click.stop="dialog = true"
              v-for="(category, i) in categories"
              :key="i"
            >
              {{ category.name }}
            </v-btn>
          </div>
          <p v-else class="full-width text-center grey--text my-10">선택하신 카테고리가 없습니다.</p>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="6"
              color="indigo"
            ></v-pagination>
          </div>
          <!-- dialog -->
          <v-dialog
              v-model="dialog"
              width="1200"
            >
            <v-card
              color="rgb(58,32,214)"
              class="pa-8"
            >
              <v-btn
                icon
                absolute
                right
                top
                color="white"
                @click.stop="dialog = false"
              >
                <v-icon large>mdi-close</v-icon>
              </v-btn>
              <v-card-title class="white--text body-1 pa-0 font-weight-light">순수예술 > 큐레이터</v-card-title>
              <v-card-title class="white--text display-1 font-weight-bold pa-0">지역수배전문가</v-card-title>
              <v-card
                color="white"
                class="mt-3 overflow-auto"
                height="300"
              >
                <v-card-text class="black--text">
                  <p class="title">무슨 일을 할까요?</p>
                  <p class="body-1 font-weight-light">'거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는 말고요.
                    거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는
                  </p>
                  <p class="title">작업의 장래성은?</p>
                  <p class="body-1">'거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는 말고요.
                    거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는거인','시성'으로 불리는 괴테의 로마 여행 이야기로 조금 거창하게 시작했으나, 오해는
                  </p>
                </v-card-text>
              </v-card>
            </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      page: 1,
      careerInfos: [],
      categories: []
    }
  },
  computed: {
    getCareerInfo: () => {
      const info = [
        {
          src: '/icon/travel.png',
          text: '여행'
        },
        {
          src: '/icon/food.png',
          text: '음식'
        },
        {
          src: '/icon/hotel.png',
          text: '호텔'
        },
        {
          src: '/icon/transport.png',
          text: '수송'
        },
        {
          src: '/icon/tour.png',
          text: '관광레저'
        },
        {
          src: '/icon/game.png',
          text: '게임'
        },
        {
          src: '/icon/animation.png',
          text: '애니메이션'
        },
        {
          src: '/icon/naturalart.png',
          text: '순수예술'
        },
        {
          src: '/icon/movie.png',
          text: '영화'
        },
        {
          src: '/icon/music.png',
          text: '음반'
        },
        {
          src: '/icon/finance.png',
          text: '금융'
        },
        {
          src: '/icon/sport.png',
          text: '스포츠'
        },
        {
          src: '/icon/medical.png',
          text: '의료'
        },
        {
          src: '/icon/scientfic.png',
          text: '과학수사와 법'
        },
        {
          src: '/icon/culturalart.png',
          text: '문화/예술'
        },
        {
          src: '/icon/broadcating.png',
          text: '방송/언론'
        },
        {
          src: '/icon/advertisement.png',
          text: '광고/마케팅'
        },
        {
          src: '/icon/design.png',
          text: '디자인'
        },
        {
          src: '/icon/infomation.png',
          text: '정보통신'
        },
        {
          src: '/icon/construction.png',
          text: '건설/교통'
        }
      ]
      return info
    }
  },
  methods: {
    getCategory: (categories) => {
      categories.push(
        {
          name: '공연 기획자',
          code: '001'
        },
        {
          name: '국악인',
          code: '002'
        },
        {
          name: '무용가',
          code: '003'
        },
        {
          name: '무용가',
          code: '004'
        },
        {
          name: '무용가',
          code: '005'
        },
        {
          name: '무용가',
          code: '006'
        }
      )
    }
  },
  head () {
    return {
      title: '진로 정보'
    }
  }
}
</script>

<style scoped>
  .infoCard .v-item--active {
    background-color: rgb(52,26,229) !important;
  }
  /* careerCategory */
  .careerCategory {
    width: calc((100% - 2%*4)/5);
    margin: 0 2% 15px 0;
  }
  .careerCategory:nth-child(5n) {
    margin-right: 0;
  }
  @media (min-width: 1264px) {
    .theme--light.v-card.v-card--outlined  {
      border-right-width: 0;
      border-top-width: 0;
    }
    .infoCard:nth-child(6n+0) .theme--light.v-card.v-card--outlined,
    .infoCard:last-child .theme--light.v-card.v-card--outlined {
      border-right-width: 1px;
    }
    .infoCard:nth-child(-n+6) .theme--light.v-card.v-card--outlined {
      border-top-width: 1px;
    }
  }
  @media (min-width: 960px) and (max-width: 1263px) {
    .theme--light.v-card.v-card--outlined  {
      border-right-width: 0;
      border-top-width: 0;
    }
    .infoCard:nth-child(-n+4) .theme--light.v-card.v-card--outlined {
      border-top-width: 1px;
    }
    .infoCard:nth-child(4n+0) .theme--light.v-card.v-card--outlined {
      border-right-width: 1px;
    }
  }
  @media (min-width: 600px) and (max-width: 959px) {
    .theme--light.v-card.v-card--outlined  {
      border-bottom-width: 0;
      border-right-width: 0;
    }
    .infoCard:nth-child(3n+0) .theme--light.v-card.v-card--outlined,
    .infoCard:last-child .theme--light.v-card.v-card--outlined {
      border-right-width: 1px;
    }
    .infoCard:nth-child(n+18) .theme--light.v-card.v-card--outlined {
      border-bottom-width: 1px;
    }
  }
  @media (max-width: 599px) {
    .infoCard,
    .infoCard .row .col-12 {
      width: 50%;
      max-width:50%;
    }
    .infoCard .row .col-12 .v-image.v-responsive {
      position: absolute;
      left:15px;
      top:15px;
    }
    /* careerCategory */
    .careerCategory {
      width: 48%;
      margin: 0 1% 15px 1%;
    }
    .careerCategory:nth-child(5n) {
      margin-right: 1%;
    }
  }
</style>
