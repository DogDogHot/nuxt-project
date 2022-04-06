<template>
    <div class="subpageWrap">
        <v-row>
            <v-col lg="12" xs="6" class="pa-0 pl-4">
                <h2 class="pt-md-10 pt-xs-4">케어 정보</h2>
            </v-col>
            <v-col md="12" xs="6" class="py-md-0 pr-4 pt-xs-5 text-right">
                <v-btn
                  outlined
                  small
                  height="27"
                  color="grey darken-1"
                  nuxt
                  to="/careInfomationList"
                >
                    목록
                </v-btn>
            </v-col>
        </v-row>
        <v-card
          class="mt-2 px-10 py-3"
          outlined
          tile
        >
            <v-row>
                <v-col cols="12" class="text-right">
                    <v-card-text class="text-right grey--text text--darken-1 pa-0">{{article.date}}</v-card-text>
                </v-col>
            </v-row>
            <v-card-title class="display-1 borderbtm px-0 mb-5">{{article.title}}</v-card-title>
            <div class="article" v-html="article.content"></div>
        </v-card>
        <v-row>
            <v-col cols="12" class="d-flex">
                <v-btn
                  outlined
                  tile
                  small
                  color='#888'
                  class="mr-2"
                >
                    <v-icon left>mdi-chevron-up</v-icon> 이전글
                </v-btn>
                <v-btn
                  outlined
                  tile
                  small
                  color='#888'
                >
                    <v-icon left>mdi-chevron-down</v-icon> 다음글
                </v-btn>
                <v-btn
                  ref="button"
                  tile
                  small
                  color='#888'
                  class="white--text ml-auto"
                  @click="$vuetify.goTo(1, {durtion: '200',offset:'0',easing:'easeInOutCubic'})"
                >
                    <v-icon left>mdi-triangle</v-icon> TOP
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        date: '2020-01-20 17:09',
        title: '심리상담 대학원 입시 준비반 멘탈케어 영상',
        content: '<p>인간관계에서 받은 상처가...</p><p class="text-center"><img src="https://cgeimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=2020011917054507210283f60ce7c17519313130.jpg" style="max-width:80%;" alt="멘탈" /></p><br><br><p>"3대3이 됐을 때 살짝 멘탈에 금이 간 것 같았는데 우리가 상대보다 이기고 싶어 하는 욕망이 강했다. 끝까지 멘탈을 놓지 않고 잘 해서 이길 수 있었다. 잘먹고갑니다는 19일 서울 마포구 에스플렉스센터에서 펼쳐진 로스트아크 로열로더스 결승전 경기에서 다음달반오십에 4대3으로 승리하며 초대 우승을 차지했다. 잘먹고갑니다는 3대1에서 3대3으로 추격당한 상황에서도 끝까지 멘탈을 잡고 경기에 임해 우승을 할 수 있었다고 전했다. 다음은 잘먹고갑니다 선수단과의 일문일답.<br><br>Q 우승을 차지한 소감은.<br>A "광어광어광어" 차광호=로열로더가 됐는데 너무 감회가 새롭고 우리가 열심히 한 대가를 받을 수 있어 너무 행복하고 만족스럽다.A "히트" 이주원=우승해서 기쁘다. 오늘도 극적으로 이겨서 기쁨이 두 배인 것 같아 너무 기분이 좋다.</p>'
      }
    }
  },
  head () {
    return {
      title: '케어 정보'
    }
  }
}
</script>

<style scoped>
    .article img {
        width: 50% !important;
    }
    @media screen and (max-width: 1264px) {
        .article img {
            max-width: 90%;
        }
    }
</style>
