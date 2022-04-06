<template>
    <div>
        <v-form>
            <v-container fluid class="mt-12 pa-0">
                <label class="black--text font-weight-medium">
                    {{ month }} {{ type == 'sat' ? '을 입력하세요' : '월 모의고사 성적을 입력하세요' }}
                </label>
                <v-card outlined class="mt-3">
                    <v-simple-table class="table text-center">
                        <template v-slot:default>
                            <colgroup>
                                <col width="12%">
                                <col width="25%">
                                <col span="3" width="21%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="titleTd">국어</td>
                                    <td></td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.korean.standard"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="표준점수 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.korean.percentage"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="백분위 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        v-model="sat.korean.grade"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="등급 입력"
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr class="mathArea">
                                    <td class="titleTd">수학</td>
                                    <td>
                                        <v-radio-group
                                        mandatory
                                        hide-details="auto"
                                        class="mt-0"
                                        v-model="sat.math.type"
                                        >
                                            <v-radio label="가형" color="black"></v-radio>
                                            <v-radio label="나형" color="black"></v-radio>
                                        </v-radio-group>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.math.standard"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="표준점수 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.math.percentage"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="백분위 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        v-model="sat.math.grade"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="등급 입력"
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="titleTd">영어</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <v-text-field
                                        v-model="sat.english.grade"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="등급 입력"
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr class="exploreArea">
                                    <td class="titleTd" rowspan="2">
                                        <v-radio-group
                                          mandatory
                                          light
                                          hide-details="auto"
                                          class="mt-0"
                                          v-model="sat.explore.type"
                                        >
                                            <v-radio label="사회탐구" color="black"></v-radio>
                                            <v-radio label="과학탐구" color="black"></v-radio>
                                            <v-radio label="직업탐구" color="black"></v-radio>
                                        </v-radio-group>
                                    </td>
                                    <td>
                                        <v-select
                                        v-model="sat.explore.subjectA.type"
                                        outlined
                                        dense
                                        label="과목 선택"
                                        :items="sat.explore.subjectA.typeList"
                                        hide-details="auto"
                                        background-color="white"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.explore.subjectA.standard"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="표준점수 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.explore.subjectA.percentage"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="백분위 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                          v-model="sat.explore.subjectA.grade"
                                          outlined
                                          single-line
                                          dense
                                          hide-details="auto"
                                          background-color="white"
                                          placeholder="등급 입력"
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                      <v-select
                                        v-model="sat.explore.subjectB.type"
                                        outlined
                                        dense
                                        label="과목 선택"
                                        :items="sat.explore.subjectB.typeList"
                                        hide-details="auto"
                                        background-color="white"
                                      ></v-select>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.explore.subjectB.standard"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="표준점수 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.explore.subjectB.percentage"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="백분위 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        v-model="sat.explore.subjectB.grade"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="등급 입력"
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="titleTd">제2외국어</td>
                                    <td>
                                        <v-select
                                        v-model="sat.secondLanguage.type"
                                        outlined
                                        dense
                                        label="과목 선택"
                                        :items="sat.secondLanguage.typeList"
                                        hide-details="auto"
                                        background-color="white"
                                        ></v-select>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.secondLanguage.standard"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="표준점수 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        type="number"
                                        v-model="sat.secondLanguage.percentage"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="백분위 입력"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        v-model="sat.secondLanguage.grade"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="등급 입력"
                                        ></v-text-field>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="titleTd">한국사</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <v-text-field
                                        v-model="sat.history.grade"
                                        outlined
                                        single-line
                                        dense
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="등급 입력"
                                        ></v-text-field>
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
                        @click="saveScore"
                        >저장하기
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
  props: {
    month: String,
    type: String
  },
  data () {
    return {
      sat: {
        korean: {
          standard: '131',
          percentage: '93',
          grade: '2'
        },
        math: {
          type: '1',
          standard: '137',
          percentage: '95',
          grade: '2'
        },
        english: {
          grade: '1'
        },
        explore: {
          type: '1',
          subjectA: {
            type: '',
            typeList: ['생명과학1', '생명과학2', '생명과학3'],
            standard: '53',
            percentage: '75',
            grade: '4'
          },
          subjectB: {
            type: '',
            typeList: ['지구과학1', '지구과학2', '지구과학3'],
            standard: '64',
            percentage: '93',
            grade: '2'
          }
        },
        secondLanguage: {
          type: '',
          typeList: ['독일어', '프랑스어', '중국어'],
          standard: '69',
          percentage: '95',
          grade: '2'
        },
        history: {
          grade: '1'
        }
      }
    }
  },
  method: {
    saveScore: () => {
      alert('저장완료')
    }
  }
}
</script>

<style scoped>
    .v-data-table td {
        padding: 12px 18px;
        border-right: 1px solid #ccc;
    }
    .titleTd {
        background-color: #eee;
        font-weight: 700;
    }
    .exploreArea td:not(:first-child) {
    border-bottom: 0 !important;
    padding-bottom: 0;
    }
    @media (max-width: 600px){
        .selectTypeContainer,
        .periodContainer,
        .scoreInputContainer {
            padding-left: 0;
            padding-right: 0;
        }
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
    }
</style>