<template>
    <div class="subpageWrap">
        <v-row class="mx-0">
            <v-col lg="12" sm="12" class="pa-0 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">성적 분석</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">원하시는 분석 유형을 선택하여 주세요.</p>
            </v-col>
        </v-row>
        <!-- 성적 입력 -->
        <v-form>
            <v-container fluid class="mt-5 selectTypeContainer">
                <label class="black--text font-weight-medium">1. 분석 받으실 유형을 선택해 주세요</label>
                <v-item-group v-model="analysisType">
                    <v-container fluid class="mx-0 mt-3 selectTypeArea">
                        <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              xs="6"
                              class="pl-0 pr-2 pt-0"
                            >
                                <v-item
                                  v-slot:default="{ active, toggle }"
                                  :class="analysisType === 0 ? 'v-item--active':''"
                                >
                                    <v-card
                                      outlined
                                      light
                                      @click="toggle"
                                      class="selectTypeCard d-flex title text-left px-6 py-2"
                                      style="line-height:50px"
                                      :style="active ? 'border-color: rgb(48,58,245)' : ''"
                                    >
                                        <v-card flat color="transparent">
                                            <v-icon left x-large :color="active ? 'indigo accent-4' : ''" class="leftIcon">mdi-newspaper-variant</v-icon>
                                        </v-card>
                                        <v-card flat color="transparent" class="ml-5">
                                            <v-card-title class="font-weight-bold subtitle-1" :class="{ 'indigo--text text--accent-4': active }">수능 분석</v-card-title>
                                        </v-card>
                                        <v-card flat light color="transparent" class="ml-auto">
                                            <v-icon right large :color="active ? 'indigo accent-4' : ''" class="rightIcon" >mdi-check</v-icon>
                                        </v-card>
                                    </v-card>
                                </v-item>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                xs="6"
                                class="pr-0 pl-2 pt-0"
                            >
                                <v-item v-slot:default="{ active, toggle }">
                                    <v-card
                                    outlined
                                    light
                                    @click="toggle"
                                    value="myGoal"
                                    class="selectTypeCard d-flex title text-left px-6 py-2"
                                    style="line-height:50px"
                                    :style="active ? 'border-color: rgb(48,58,245)' : ''"
                                    >
                                        <v-card flat color="transparent">
                                            <v-icon left x-large :color="active ? 'indigo accent-4' : ''" class="leftIcon">mdi-newspaper-variant</v-icon>
                                        </v-card>
                                        <v-card flat color="transparent" class="ml-5">
                                            <v-card-title class="font-weight-bold subtitle-1" :class="{ 'indigo--text text--accent-4': active }">내 목표 분석(모의고사)</v-card-title>
                                        </v-card>
                                        <v-card flat light color="transparent" class="ml-auto">
                                            <v-icon right large :color="active ? 'indigo accent-4' : ''" class="rightIcon" >mdi-check</v-icon>
                                        </v-card>
                                    </v-card>
                                </v-item>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-item-group>
            </v-container>
            <v-container fluid class="mb-5 periodContainer" v-if="analysisType == '1'">
                <label class="black--text font-weight-medium">2. 입력 하실 모의고사 기간을 선택하세요.</label>
                <v-card flat class="mt-5 d-flex justify-space-around periodArea">
                    <v-chip-group
                      active-class="purple white--text"
                      style="width: 100%;"
                      v-model="selectedPeriod"
                    >
                        <v-chip
                          v-for="(mocktest, i) in mocktests"
                          :key="i"
                          style="border: 1px solid #ccc;height:auto;"
                          class="px-7 py-4 d-block"
                          active-class="white--text activePeriod"
                          :style="mocktest.value ? 'background-color:#E1BEE7':'background-color:#f5f5f5'"
                          @click="clickMonth"
                          :data-value="mocktest.value"
                        >
                            <span class="body-2">{{ mocktest.month }}월</span>
                            <p class="text-center mb-0 caption">
                              {{ mocktest.value ? '입력됨' : '입력필요'}}
                            </p>
                        </v-chip>
                    </v-chip-group>
                </v-card>
            </v-container>
            <v-container fluid class="scoreInputContainer">
                <label class="black--text font-weight-medium">
                    <span v-if="analysisType != '1'">2</span>
                    <span v-else>3</span>. 성적을 입력하세요
                </label>
                <v-card outlined class="mt-5 mb-7 scoreCard">
                  <ul class="pa-0">
                    <li>
                      <div class="liTitle">국어</div>
                      <div>
                        <v-text-field
                          type="number"
                          v-model="sat.korean.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="백분위"
                          append-outer-icon="%"
                        ></v-text-field>
                      </div>
                    </li>
                    <li>
                      <div class="liTitle">수학</div>
                      <div>
                        <v-text-field
                          type="number"
                          v-model="sat.math.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="백분위"
                          append-outer-icon="%"
                        ></v-text-field>
                      </div>
                    </li>
                    <li>
                      <div class="liTitle">영어</div>
                      <div>
                        <v-text-field
                          v-model="sat.english.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="등급"
                          append-outer-icon="등급"
                        ></v-text-field>
                      </div>
                    </li>
                    <li>
                      <div class="liTitle">탐구1</div>
                      <div>
                        <v-text-field
                          type="number"
                          v-model="sat.explore1.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="백분위"
                          append-outer-icon="%"
                        ></v-text-field>
                      </div>
                    </li>
                    <li>
                      <div class="liTitle">탐구2</div>
                      <div>
                        <v-text-field
                          type="number"
                          v-model="sat.explore2.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="백분위"
                          append-outer-icon="%"
                        ></v-text-field>
                      </div>
                    </li>
                    <li>
                      <div class="liTitle">제2외국어</div>
                      <div>
                        <v-text-field
                          type="number"
                          v-model="sat.secondLanguage.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="백분위"
                          append-outer-icon="%"
                        ></v-text-field>
                      </div>
                    </li>
                    <li>
                      <div class="liTitle">한국사</div>
                      <div>
                        <v-text-field
                          v-model="sat.history.percentage"
                          outlined
                          single-line
                          dense
                          hide-details="auto"
                          background-color="white"
                          placeholder="등급"
                          append-outer-icon="등급"
                        ></v-text-field>
                      </div>
                    </li>
                  </ul>
                </v-card>
                <v-card outlined class="mt-5" v-if="analysisType != '1'">
                    <v-simple-table class="table text-center">
                        <template v-slot:default>
                            <colgroup>
                                <col width="12%">
                                <col width="*">
                            </colgroup>
                            <tbody>
                                <tr class="seriesArea">
                                    <td class="titleTd py-0">계열<small class="caption d-block indigo--text text--accent-4">(*필수)</small></td>
                                    <td class="py-0">
                                       <v-radio-group v-model="sat.series.seriesRadio" row>
                                        <v-radio
                                          v-for="(list, i) in sat.series.seriesList"
                                          :key="i"
                                          :label="list"
                                          :value="i"
                                          outlined
                                          hide-details="auto"
                                          color="purple"
                                          class="mr-lg-9 mr-md 7"
                                        ></v-radio>
                                      </v-radio-group>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="titleTd">지역<small class="caption d-block">(*선택)</small></td>
                                    <td>
                                        <div class="checkArea">
                                            <div class="allCheckArea float-left">
                                                <v-checkbox
                                                  v-model="regionAllCheck"
                                                  label="전체"
                                                  outlined
                                                  color="indigo darken-4"
                                                  hide-details="auto"
                                                  class="mt-1"
                                                  value="all"
                                                ></v-checkbox>
                                                <br>
                                            </div>
                                            <div class="besidesCheckArea float-left">
                                                <v-row class="mx-0">
                                                    <v-checkbox
                                                      v-model="regionCheck"
                                                      v-for="(list, i) in sat.region.regionList"
                                                      :key="i"
                                                      :label="list"
                                                      outlined
                                                      color="indigo darken-4"
                                                      hide-details="auto"
                                                      class="mt-1 mr-6"
                                                      :value="i"
                                                    ></v-checkbox>
                                                </v-row>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="titleTd">학교<small class="caption d-block">(*선택)</small></td>
                                    <td>
                                        <v-combobox
                                          v-model="universitySearch"
                                          :items="universitySeachItems"
                                          light
                                          outlined
                                          dense
                                          single-line
                                          full-width
                                          :search-input.sync="universitySearch"
                                          hide-details="auto"
                                          background-color="white"
                                          label="대학명을 입력해주세요."
                                          class="comboboxArea"
                                          append-outer-icon="mdi-magnify purple--text"
                                          style="max-width: 100%"
                                        >
                                            <template v-slot:no-data>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                        "{{ universitySearch }}"와 일치하는 대학이 없습니다.                                                </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                        </v-combobox>
                                        <div class="text-left">
                                          <v-chip
                                            small
                                            v-if="universitySearch"
                                            close
                                            @click:close="universitySearch = null"
                                            label
                                            outlined
                                            class="mt-1"
                                          >
                                            {{universitySearch}}
                                          </v-chip>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="titleTd">학과<small class="caption d-block">(*선택)</small></td>
                                    <td>
                                        <v-combobox
                                          v-model="majorSearch"
                                          :items="majorSeachItems"
                                          light
                                          outlined
                                          dense
                                          single-line
                                          full-width
                                          :search-input.sync="majorSearch"
                                          hide-details="auto"
                                          background-color="white"
                                          label="학과명을 입력해주세요."
                                          class="comboboxArea"
                                          append-outer-icon="mdi-magnify purple--text"
                                          style="max-width: 100%"
                                        >
                                            <template v-slot:no-data>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                        "{{ majorSearch }}"와 일치하는 학과명이 없습니다.                                                </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                        </v-combobox>
                                        <div class="text-left">
                                          <v-chip
                                            small
                                            v-if="majorSearch"
                                            close
                                            @click:close="majorSearch = null"
                                            label
                                            outlined
                                            class="mt-1"
                                          >
                                            {{majorSearch}}
                                          </v-chip>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn
                        dark
                        color="indigo accent-4"
                        width="300"
                        tile
                        large
                        class="mx-auto mt-12"
                        @click="checkResult"
                        >결과보기
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <!-- result -->
        <sat-result
          v-if="isResultOfSAT && analysisType == '0'"
          :special="getSpecialList"
          :recommad="getRecommandedList"
          :my-score="myScore"
          @openModal="showModal"
        />
        <mygoal-result
          v-if="isResultOfMyGoal && analysisType == '1'"
          :result="getMyGoalList"
          :my-score="myScore"
        />
        <!-- modal dialog -->
        <v-dialog v-model="dialog" width="517">
            <v-card
              light
              class="modalCard px-5 pt-10 pb-10"
              color="#fcfcfc"
            >
                <v-btn
                  icon
                  absolute
                  right
                  top
                  class="hidden-sm-and-down"
                  @click.stop="dialog = false"
                >
                    <v-icon large>mdi-close</v-icon>
                </v-btn>
                <v-card-title class="headline font-weight-black pb-5">
                   <div class="text-center" style="width: 100%">대학 상세 정보</div>
                </v-card-title>
                <v-card-subtitle class="subtitle-2 font-weight-medium text-center">
                  <span>{{ selectCard.isRegular }} / </span>
                  <span>{{ selectCard.title }} / </span>
                  <span>{{ selectCard.schoolArea }}</span>
                  <span v-if="selectCard.type"> [{{ selectCard.type }}]군</span>
                </v-card-subtitle>
                <v-divider class="mx-1 mb-5"></v-divider>
                <v-card flat class="d-flex px-5 scoreArea mb-3">
                    <v-card flat color="transperant">
                        <span class="font-weight-bold">추천 점수 : </span>
                        <span class="grey--text text--darken-3">{{ selectCard.recommandedScore }}</span>
                        <v-icon x-small color="black">mdi-triangle</v-icon>
                        <span class="grey--text text--darken-3"> / {{ selectCard.condition }}</span>
                    </v-card>
                    <v-card flat class="ml-auto">
                        <span class="font-weight-bold">내 점수</span>
                        <span class="indigo--text text--accent-4"> : {{ myScore }}</span>
                    </v-card>
                </v-card>
                <v-card
                  flat
                  class="px-12 pt-5 pb-1 summaryArea"
                  color="white"
                >
                    <v-row class="body-2">
                       <v-col cols="12" sm="12">
                            <p class="mb-0 font-weight-bold">계열 / 학부 / 학과 / 전공</p>
                            <p class="grey--text text--darken-1">
                              <span
                                v-for="(n, i) in selectCard.major"
                                :key="i"
                              >
                                {{ i !== selectCard.major.length - 1 ? `${n} / ` : n}}
                              </span>
                            </p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p class="mb-0 font-weight-bold">전형 요약</p>
                            <p class="grey--text text--darken-1">{{ selectCard.addinfo.summary }}</p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p class="mb-0 font-weight-bold">정원(20학년도)</p>
                            <p class="grey--text text--darken-1">{{ selectCard.addinfo.quota }}명</p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p class="mb-0 font-weight-bold">경쟁률(20학년도)</p>
                            <p class="grey--text text--darken-1">{{ selectCard.addinfo.thisYearcompetitionRate }}</p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <p class="mb-0 font-weight-bold">경쟁률(19학년도)</p>
                            <p class="grey--text text--darken-1">{{ selectCard.addinfo.lastYearcompetitionRate }}</p>
                        </v-col>
                    </v-row>
                </v-card>
                <v-btn
                  block
                  height="40"
                  class="hidden-md-and-up white--text bottomCloseBtn"
                  color="indigo accent-4"
                  @click.stop="dialog = false"
                >닫기
                </v-btn>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import SatResult from '../components/satResult'
import MygoalResult from '../components/mygoalResult'

export default {
  components: {
    SatResult,
    MygoalResult
  },
  data () {
    return {
      analysisType: '0',
      resultBtn: 'false',
      myScore: '97.21',
      dialog: false,
      selectedPeriod: null,
      selectCard: {
        title: '',
        major: [''],
        recommandedScore: '',
        condition: '',
        favorite: false,
        addinfo: {
          major: '',
          summary: '',
          quota: '',
          thisYearcompetitionRate: '',
          lastYearcompetitionRate: ''
        }
      },
      sat: {
        korean: '',
        math: '',
        english: '',
        explore1: '',
        explore2: '',
        secondLanguage: '',
        history: '',
        series: {
          seriesRadio: 1,
          seriesList: ['인문사회계열', '자연과학계열', '예체능계열', '공학계열']
        },
        region: {
          regionList: ['강원', '경기', '경남', '경북', '광주', '대구', '대전', '부산', '서울', '세종', '울산', '인천', '전남', '전북', '제주', '충남', '충북']
        }
      },
      mocktests: [
        {
          month: '3',
          value: true
        },
        {
          month: '4',
          value: false
        },
        {
          month: '6',
          value: false
        },
        {
          month: '7',
          value: false
        },
        {
          month: '9',
          value: false
        },
        {
          month: '10',
          value: false
        },
        {
          month: '11',
          value: false
        }
      ],
      selectMonth: '',
      isResultOfSAT: false,
      isResultOfMyGoal: false,
      regionAllCheck: null,
      regionCheck: [],
      universitySearch: null,
      universitySeachItems: ['서울대학교', '연세대학교', '고려대학교', '국민대학교'],
      majorSearch: null,
      majorSeachItems: ['경영학과', '국문학과', '나노공학과', '법학과']
      
    }
  },
  created () {
    this.analysisType = 0
  },
  computed: {
    getSpecialList () {
      const list = [
        {
          title: '서울과학기술대',
          schoolArea: '서울',
          isRegular: '정시',
          major: ['조형대학', '디자인학과(비실기)', '시각디자인'],
          recommandedScore: '80.58',
          condition: '영어 2등급',
          favorite: true,
          addinfo: {
            summary: '수능 100% / 수능(일반)',
            quota: '15',
            thisYearcompetitionRate: '7.12:1',
            lastYearcompetitionRate: '4.89:1'
          }
        },
        {
          title: '울산과학기술대',
          schoolArea: '울산',
          isRegular: '수시',
          major: ['컴퓨터학부 ', '법학대학', '상경대학'],
          recommandedScore: '90.58',
          condition: '영어 1등급',
          favorite: false,
          addinfo: {
            summary: '수능 100% / 수능(일반)',
            quota: '5',
            thisYearcompetitionRate: '8.12:1',
            lastYearcompetitionRate: '8.89:1'
          }
        }
      ]
      return list
    },
    getRecommandedList () {
      const list = [
        {
          title: '서울과학기술대',
          schoolArea: '울산',
          isRegular: '정시',
          type: '가',
          major: ['조형대학', '디자인학과(비실기)', '시각디자인'],
          recommandedScore: '80.58',
          condition: '영어 2등급',
          favorite: true,
          addinfo: {
            summary: '수능 100% / 수능(일반)',
            quota: '15',
            thisYearcompetitionRate: '7.12:1',
            lastYearcompetitionRate: '4.89:1'
          }
        }
      ]
      return list
    },
    getMyGoalList () {
      const list = [
        {
          university: {
            name: '서울대학교',
            place: '본교',
            logoSrc: '/images/seoul.jpg',
            department: '경영대학'
          },
          result: {
            korean: 'up',
            english: 'down',
            math: 'down',
            explore1: 'up',
            explore2: '',
            secondLanguage: 'down',
            history: 'middle'
          },
          summary: {
            averageScore: '98.52',
            comment: '영어 등급을 올려야합니다!'
          }
        },
        {
          university: {
            name: '명지대학교',
            place: '본교',
            logoSrc: '/images/myungji.jpg',
            department: '법학대학'
          },
          result: {
            korean: 'down',
            english: 'down',
            math: 'middle',
            explore1: '',
            explore2: 'up',
            secondLanguage: '',
            history: 'up'
          },
          summary: {
            averageScore: '95.52',
            comment: '국어 등급을 올려야합니다!'
          }
        }
      ]
      return list
    }
  },
  methods: {
    showModal (list) {
      this.dialog = true
      this.selectCard = list
    },
    clickMonth (e) {
      let val = ''
      if (e.target.parentNode.tagName == 'DIV') {
        val = e.target.dataset.value
      } else {
        val = e.target.parentNode.dataset.value
      }
      this.selectMonth = val
    },
    checkResult () {
      if (this.selectMonth == '' && this.analysisType == '1') {
        alert('모의고사 기간을 선택하세요.')
        return
      }
      if (this.analysisType == '0') {
        this.isResultOfSAT = true
      } else {
        this.isResultOfMyGoal = true
      }
    }
  },
  watch: {
    regionAllCheck (val) {
      if (val == 'all') {
        this.regionCheck = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
      } else {
        this.regionCheck = []
      }
    },
    regionCheck (val) {
      if (val.length == this.sat.region.regionList.length) {
        this.regionAllCheck = 'all'
      } else {
        this.regionAllCheck = null
      }
    }
  },
  head () {
    return {
      title: '성적 분석'
    }
  }
}
</script>

<style scoped>
/* 성적입력 */
.scoreCard > ul > li {
  float:left;
  width: 14.28%;
}
.scoreCard > ul > li:last-child {
  width: calc(100% - 85.68%);
}
.scoreCard > ul:after {
  content: '';
  display: block;
  clear: both;
}
.scoreCard > ul > li > div {
  padding: 12px 18px;
  border-right: 1px solid #ddd;
}
.scoreCard > ul > li:last-child > div {
  border-right: 0;
}
.liTitle {
  background-color: #eee;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  border-bottom: 1px solid #ddd;
}
.v-data-table td {
  padding: 12px 18px;
  border-right: 1px solid #ddd;
}
.titleTd {
  background-color: #eee;
  font-weight: 700;
}
.exploreArea td:not(:first-child) {
  border-bottom: 0 !important;
  padding-bottom: 6px;
}
.exploreArea2 td {
  padding-top: 6px;
}
.checkArea {
  height: 100%;
}
.checkArea:after {
  content: '';
  display: block;
  clear: both;
}
.allCheckArea {
  width: 80px;
  height: 100%;
}
.besidesCheckArea {
  width: calc(100% - 80px);
  height: 100%;
}
.v-card--link:before {
    background: none;
}
.summaryArea {
  border: 1px solid #ececec !important;
}
.summaryArea {
  padding-left: 70px !important;
  padding-right: 5px !important;
}
.periodContainer .v-chip {
  display: block;
  text-align: center;
  margin: 0;
  width: 14.28%;
  border-radius: 0;
  border-color: #ddd !important;
  border-left: 0 !important;
}
.periodContainer .v-chip:first-child {
  border-radius: 4px 0 0 4px;
}
.periodContainer .v-chip:last-child {
  width: calc(100% - 85.68%);
  border-radius: 0 4px 4px 0;
}
.activePeriod {
  background-color: purple !important;
}
@media (min-width: 601px) and (max-width: 960px) {
  .selectTypeArea .col-12:last-child .v-card__title {
    margin-left:0;
    padding: 16px 0;
  }
}
@media (max-width: 960px) {
  .favoriteArea {
    text-align: center !important;
    border-top:1px solid #ddd;
    padding-top: 20px;
  }
  .scoreCard > ul > li {
    float: none;
    width:  100%;
  }
  .scoreCard > ul > li:last-child {
    width: 100%;
  }
  .scoreCard > ul > li > div:last-child {
    float:left;
    width: calc(100% - 80px);
    border-bottom: 1px solid #ddd;
    border-right: 0;
  }
  .scoreCard > ul > li:last-child > div:last-child {
    border-bottom: 0;
  }
  .liTitle {
    float: left;
    width: 80px;
    height: 65px;
    padding: 0 !important;
    line-height: 65px;
    font-size: 0.7rem
  }
  .scoreCard > ul > li:last-child > .liTitle {
    border-bottom: 0;
  }
  .scoreCard > ul > li:after {
    content: '';
    display: block;
    clear: both;
  }
  .periodContainer .v-chip {
    width: 25%;
    float: left;
    border-top-width: 0 !important;
  }
 .periodContainer .v-chip:first-child {
    border-radius: 4px 0 0 0;
    border-left: 1px solid #ddd !important;
  }
  .periodContainer .v-chip:nth-child(4) {
    border-radius: 0 4px 4px 0;
  }
  .periodContainer .v-chip:nth-child(5) {
    border-radius: 0 0 0 4px;
    border-left: 1px solid #ddd !important;
  }
  .periodContainer .v-chip:nth-child(1),
  .periodContainer .v-chip:nth-child(2),
  .periodContainer .v-chip:nth-child(3),
  .periodContainer .v-chip:nth-child(4) {
    border-top-width: 1px !important;
  }
  .periodContainer .v-chip:last-child {
    width: 25%;
    border-radius: 0 0 4px 0;
  }
  .modalCard {
    padding: 0 !important;
  }
  .modalCard .v-divider {
    margin-left: 15px !important;
    margin-right: 15px !important;
  }
  .modalCard .v-card__title {
    padding-top: 30px;
  }
  .bottomCloseBtn {
    margin: 0;
    border-radius: 0 0 4px 4px !important;
  }
  .scoreArea > div {
    background-color: transparent;
  }
  .summaryArea {
    padding: 10px 20px !important;
    margin: 10px;
  }
  .summaryArea .col-12 {
    max-width: 50%;
  }
  .summaryArea .col-12:first-child {
    max-width: 100%;
  }
  .summaryArea .col-12 p {
    margin-bottom: 0 !important;
  }
  .scoreArea {
    display: block !important
  }
}
@media (max-width: 600px) {
  .selectTypeContainer,
  .periodContainer,
  .scoreInputContainer {
    padding-left: 0;
    padding-right: 0;
  }
  /* 종류 선택 버튼 */
  .seriesArea .v-input--radio-group.v-input--radio-group--row .v-radio {
    min-width: 95px;
  }
  .seriesArea .v-input--radio-group.v-input--radio-group--row .v-radio:nth-child(1),
  .seriesArea .v-input--radio-group.v-input--radio-group--row .v-radio:nth-child(2) {
    margin-bottom: 7px;
  }
  .selectTypeArea .col-12 {
    max-width: 50%;
  }
  .selectTypeCard {
    display: block !important;
    text-align: center !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .selectTypeCard .v-card {
    margin:0 !important;
    text-align: center;
  }
  .selectTypeCard .v-card .v-card__title {
    padding: 0;
    display: block !important;
    font-size: 0.8rem !important;
  }
  .selectTypeCard .ml-auto {
    display: none;
  }
  /* 성적 입력표 */
  .v-data-table td.titleTd {
    padding: 8px 4px;
    min-width: 80px;
    font-size: 0.7rem;
  }
  .v-data-table td:not(.titleTd) {
    border-right: 0;
    padding:8px 4px;
  }
  .v-input,
  .v-radio .label {
    font-size: 0.7rem !important;
    padding: 0 !important
  }
  .v-select {
    max-width: 75px;
  }
  .v-application .allCheckArea.float-left,
  .v-application .besidesCheckArea.float-left {
    float: none !important;
  }
  .allCheckArea {
    width: 100%;
    height: 25px;
  }
  .besidesCheckArea {
    width: 100%;
    height: auto;
  }
  .besidesCheckArea > .row {
    display: block;
  }
  .besidesCheckArea > .row > div {
    display: block;
    width: 50%;
    float: left;
    margin-right: 0 !important;
  }
}
</style>
