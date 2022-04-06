<template>
    <div class="subpageWrap">
        <v-row>
            <v-col lg="12" xs="6" class="pa-0 pl-4">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">NEWS &amp; ISSUE</h2>
            </v-col>
        </v-row>
        <v-container fluid class="px-lg-0 mt-2">
          <v-row
            v-for="(item, i) in items"
            :key="i"
            class="articleList mx-0 py-1 pb-xs-10"
          >
            <a href="/newsissueDetail">
              <div class="photoArea">
                <img :src="item.src"/>
              </div>
              <div class="textArea">
                <div>
                  <span
                    class="articleType float-left"
                    :style="{backgroundColor:item.typeBgColor}">
                    Official
                  </span>
                  <h3 class="articleTitle subtitle-1 font-weight-bold">{{ item.title }}</h3>
                </div>
                <p class="articleContent body-1">
                  {{ item.content }}
                </p>
              </div>
            </a>
          </v-row>
      </v-container>
      <div class="text-center mt-7">
        <v-pagination
          v-model="page"
          :length="4"
          prev-icon="mdi-chevron-left"
          next-icon="mdi-chevron-right"
        ></v-pagination>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: 'Official',
          typeBgColor: 'blue',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          content: '지난 설 연휴 직후부터 서서히 관광객 감소 조짐이 보이더니 제주를 관광한 뒤 귀국한 중국인 여성의 신종코로나 확진 판정 사실이 알려진 지난 1일 이후부터 본격화됐다.관광객 감소는 그대로 제주경제의 주축이 되는 관광업계에 영향을 미쳤다.제주를 찾는 관광객이 반토막 나면서 도내 한 대형렌터카의 경우 예약 취소가 평소의 2∼3배에 달해 매출이 50이상 급감, 사실상 적자로 돌아섰다. 제주시티투어 버스 이용객도, 골프장 이용객도 이전에 비해 50％ 이상 줄었다'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: 'Issue',
          typeBgColor: 'purple',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          content: '지난 설 연휴 직후부터 서서히 관광객 감소 조짐이 보이더니 제주를 관광한 뒤 귀국한 중국인 여성의 신종코로나 확진 판정 사실이 알려진 지난 1일 이후부터 본격화됐다.관광객 감소는 그대로 제주경제의 주축이 되는 관광업계에 영향을 미쳤다.제주를 찾는 관광객이 반토막 나면서 도내 한 대형렌터카의 경우 예약 취소가 평소의 2∼3배에 달해 매출이 50이상 급감, 사실상 적자로 돌아섰다. 제주시티투어 버스 이용객도, 골프장 이용객도 이전에 비해 50％ 이상 줄었다'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: 'Issue',
          typeBgColor: 'purple',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          content: '지난 설 연휴 직후부터 서서히 관광객 감소 조짐이 보이더니 제주를 관광한 뒤 귀국한 중국인 여성의 신종코로나 확진 판정 사실이 알려진 지난 1일 이후부터 본격화됐다.관광객 감소는 그대로 제주경제의 주축이 되는 관광업계에 영향을 미쳤다.제주를 찾는 관광객이 반토막 나면서 도내 한 대형렌터카의 경우 예약 취소가 평소의 2∼3배에 달해 매출이 50이상 급감, 사실상 적자로 돌아섰다. 제주시티투어 버스 이용객도, 골프장 이용객도 이전에 비해 50％ 이상 줄었다'
        }
      ]
    }
  },
  head () {
    return {
      title: 'News & Issue'
    }
  }
}
</script>

<style scoped>
  .photoArea {
    float:left;
    width: 200px;
    padding:0 20px 0 0;
  }
  .photoArea img {
    max-width: 180px;
    max-height: 120px;
  }
  .textArea {
    float:left;
    width: calc(100% - 200px);
    padding-top: 12px
  }
  .articleType {
    background-color:#ccc;
    display: inline-block;
    border-radius: 10px;
    padding: 1px 12px;
    color: #fff;
    font-size: 12px;
    margin-top: 4px;
    margin-right:5px
  }
  .articleTitle {
    display: inline-block;
  }
  .articleContent {
    padding-right:10px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.4em;
    height: 2.8em;
  }
  @media (max-width: 600px) {
    .articleList {
      margin-bottom: 15px;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
      padding-top: 20px !important;
    }
    .photoArea {
      float: none;
      width: 100%;
      text-align: center;
      padding-right: 0;
    }
    .photoArea img {
      max-width: 70% !important;
      max-height: initial;
    }
    .textArea {
      float: none;
      width: 90%;
      margin: 0 auto;
      text-align: center;
    }
    .v-application .float-left.articleType {
      float: none !important;
    }
  }
</style>
