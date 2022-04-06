<template>
    <v-card class="px-10 pt-8 pb-4 mb-7">
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
                <v-img
                    max-width="200"
                    :src="list.university.logoSrc"
                    lazy-src="/images/Eclipse-1s-214px.svg"
                    aspect-ratio="1"
                    class="mx-auto"
                ></v-img>
                <p class="text-center" style="line-height:14px">
                    {{ list.university.name }}
                    <small class="grey--text text--darken-2 ml-1">[{{ list.university.place }}]</small><br>
                    <span class="body-2 grey--text text--darken-2">{{ list.university.department }}</span>
                </p>
            </v-col>
            <v-col
            cols="12"
            md="8"
            >
                <v-simple-table class="table text-center">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th :class="list.result.korean == '' ? 'grey--text' : 'black--text'">국어</th>
                                <th :class="list.result.english == '' ? 'grey--text' : 'black--text'">영어</th>
                                <th :class="list.result.math == '' ? 'grey--text' : 'black--text'">수학</th>
                                <th :class="list.result.explore1 == '' ? 'grey--text' : 'black--text'">탐구1</th>
                                <th :class="list.result.explore2 == '' ? 'grey--text' : 'black--text'">탐구2</th>
                                <th :class="list.result.secondLanguage == '' ? 'grey--text' : 'black--text'">제2외국어</th>
                                <th :class="list.result.history == '' ? 'grey--text' : 'black--text'">한국사</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <v-icon :color="getIcon(list.result.korean).color">{{ getIcon(list.result.korean).icon }}</v-icon>
                                </td>
                                <td>
                                    <v-icon :color="getIcon(list.result.english).color">{{ getIcon(list.result.english).icon }}</v-icon>
                                </td>
                                <td>
                                    <v-icon :color="getIcon(list.result.math).color">{{ getIcon(list.result.math).icon }}</v-icon>
                                </td>
                                <td>
                                    <v-icon :color="getIcon(list.result.explore1).color">{{ getIcon(list.result.explore1).icon }}</v-icon>
                                </td>
                                <td>
                                    <v-icon :color="getIcon(list.result.explore2).color">{{ getIcon(list.result.explore2).icon }}</v-icon>
                                </td>
                                <td>
                                    <v-icon :color="getIcon(list.result.secondLanguage).color">{{ getIcon(list.result.secondLanguage).icon }}</v-icon>
                                </td>
                                <td>
                                    <v-icon :color="getIcon(list.result.history).color">{{ getIcon(list.result.history).icon }}</v-icon>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <v-card
                    tile
                    elevation="0"
                    color="grey lighten-3 mt-5 summaryArea"
                >
                    <v-row>
                        <v-col cols="12" md="4" class="text-right pb-2 pr-md-0">
                            <v-card-text class="py-2 subtitle-1 font-weight-medium">합격 평균 점수</v-card-text>
                        </v-col>
                        <v-col cols="12" md="8" class="pl-md-0 pb-2 result_whiteWarp">
                            <v-card-text
                                class="px-8 py-1 title result_whiteBox"
                            >{{ list.summary.averageScore }}% (내 점수 : <span class="purple--text">{{ myScore }}</span>%)
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-row class="">
                        <v-col cols="12" md="4" class="text-right pt-0 pr-md-0">
                            <v-card-text class="py-2 subtitle-1 font-weight-medium">성적 분석 한줄평</v-card-text>
                        </v-col>
                        <v-col cols="12" md="8" class="pl-md-0 pt-0 result_whiteWarp">
                            <v-card-text
                                class="px-8 py-1 title result_whiteBox"
                            >{{ list.summary.comment }}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
  props: ['list', 'myScore'],
  methods: {
    getIcon (val) {
      const res = {
        icon: '',
        color: ''
      }
      switch (val) {
        case 'up':
          res.icon = 'mdi-triangle'
          res.color = 'indigo accent-4'
          break
        case 'down':
          res.icon = 'mdi-triangle mid-rotate-180'
          res.color = 'purple'
          break
        case 'middle':
          res.icon = 'mdi-window-minimize'
          res.color = 'grey darken-3'
          break
        default :
          res.icon = ''
          res.color = ''
          break
      }
      return res
    }
  }
}
</script>

<style scoped>
    .v-data-table th {
        font-size:14px;
        font-weight:500;
        text-align: center;
    }
    .v-data-table {
        border-width: 1px 0;
        border-style: solid;
        border-color: #ddd;
    }
    .result_whiteBox {
        background-color:#fff;
        max-width: 70%;
    }
    @media (max-width: 600px) {
        .v-data-table td,
        .v-data-table th {
            padding: 3px !important;
        }
        .summaryArea .text-right{
            text-align: left !important;
            padding-bottom: 0;
        }
        .result_whiteWarp {
            padding: 0 20px 8px 20px !important;
        }
        .result_whiteBox {
            max-width: 100%;
        }
    }
</style>
