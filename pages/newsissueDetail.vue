<template>
    <div class="subpageWrap">
        <v-row>
            <v-col lg="12" xs="6" class="pa-0 pl-4">
                <h2 class="pt-md-10 pt-xs-4">NEWS &amp; ISSUE</h2>
            </v-col>
            <v-col md="12" xs="6" class="pa-md-0 pr-4 pt-xs-5 text-right">
                <v-btn
                  outlined
                  small
                  height="27"
                  color="grey darken-1"
                  nuxt
                  to="/newsissueList"
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
                <v-col xs="6">
                    <a href="/newsissueList" title="News &amp; Issue로 이동하기">News &amp; Issue</a>
                    <span class="px-1">&gt;</span>
                    <a href="" title="Official 카테고리로 이동">Official</a>
                </v-col>
                <v-col xs="6">
                    <v-card-text class="text-right grey--text text--darken-1 pa-0">{{article.date}}</v-card-text>
                </v-col>
            </v-row>
            <v-card-title class="display-1 borderbtm px-0 mb-7">{{article.title}}</v-card-title>
            <div class="article" v-html="article.content"></div>
        </v-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        date: '2020-01-20 17:09',
        title: '"당분간 출근 안해도 됩니다" 신종코로나 이유로 강제 휴가, 무급일까 유급일까?',
        content: '<div style="text-align:center;"><img src="https://img6.yna.co.kr/photo/yna/YH/2020/02/03/PYH2020020307230005600_P4.jpg" style="width:50%;" alt="news"/></div><p style="text-align:center;font-size:12px;color:#777">사진=뉴스1<p><br><br>신종코로나바이러스 감염증 우려로 인해 국내 소비가 급격히 위축되고 있는데요. 특히 사람들이 외출을 까리면서 음식점 등 자영업자들의 타격이 심각하다고 합니다. 손님들의 발갈이 뜸해지자 아예 휴업을 하거나 종업원에게 휴가를 권유하는 상점도 늘고 있습니다. <br><br>임시 휴업이나 휴가 권유로 출근하지 못하게 됐다면 어떻게 대응해야 할까요?<br><br><span style="color:blue;font-size:1.2rem">◇ 일 나가고 싶어도 못하게 한다면 휴업수당 줘야</span><br><br>근로기준법에 따르면 사업자의 귀책사유로 휴업하는 경우 사업자는 근로자에게 평균임금의 70%를 지급해야 합니다. 이 돈을 &quot;휴업수당&quot;이라고 부르는데요. 근로의 의사가 있지만 자신의 의사와 무관하게 근로를 제공하지 못하게 됐다면 사용자는 휴업수당을 지급해야 합니다.다만 신종코로나 의심환자 발생 등의 이유로 휴업한 경우에는 휴업수당을 지급하지 않아도 됩니다. 이는 감염증 확산을 막기 위해 휴업을 결정한 것으로 휴업에 대한 사업주의 귀책사유가 인정되지 않습니다.<br>그러나 매출 감소와 같은 간접적인 영향으로 휴업하는 경우에는 근로자에게 휴업수당을 줘야 합니다. 고객·매출·예약의 감소 혹은 유사 사고에 대한 대비가 사업주의 귀책사유로 인정되기 때문입니다. 예외적으로 사업주와 직원이 별도로 무급 휴가에 관한 내용에 합의했다면 휴업수당을 지급하지 않을 수 있습니다.<br><br>건설 하청업체를 운영하는 A씨는 휴업수당을 미지급한 혐의로 벌금 1000만원을 선고받았는데요.<br><br>한 건설현장에서 크레인 충돌사고가 발생하면서 고용노동부는 해당 현장에 대해 작업중지를 명령하는데요. A씨는 작업중단 기간동안 근로자에게 휴업수당을 지급하지 않았습니다. A씨는 원청업체 사고로 휴업을 하게 됐으니 자신에게 귀책사유가 없다고 주장하는데요.<br><br>그러나 법원은 "작업 중지는 유사사고에 대한 대비 차원이므로 사업주가 불가항력이라고 항변할 수 없다"며 근로자의 손을 들어줬습니다. (대법 2019도9604)<br><br>그러나 5인 미만의 사업장에는 이런 규정이 적용되지 않습니다. 근로자와 사업주가 사전에 휴업수당에 관한 내용을 근로계약서에 추가하지 않은 이상 사업주 처벌이 어렵습니다. 사실상 종업원 수 5인 미만의 영세 자영업의 경우, 휴업수당을 지급하지 않아도 이를 강제할 수 없는 거죠.<br><br>[출처] "당분간 출근 안해도 됩니다" 신종코로나 이유로 강제 휴가, 무급일까 유급일까|작성자 법률N미디어</p>'
      }
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
    .article img {
        width: 50% !important;
    }
    @media screen and (max-width: 1264px) {
        .article img {
            max-width: 90%;
        }
    }
</style>
