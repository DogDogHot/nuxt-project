<template>
    <div>
        <v-card outlined tile class="pa-0">
            <v-simple-table class="text-center basicTable">
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td>모의 고사</td>
                            <td class="px-10 py-5">
                                <v-card
                                  flat
                                  color="transparent"
                                  class="d-flex justify-space-around"
                                >
                                        <div v-for="(mocktest, i) in mocktests" :key="i">
                                            <v-btn
                                              class="px-10 subtitle-1"
                                              outlined
                                              rounded
                                              height="32"
                                              :color="mocktest.value ? 'purple':'grey'"
                                              :value="mocktest.month"
                                              style="background-color:#fff"
                                              @click="inputMocktestScore"
                                            >
                                                {{ mocktest.month }}월
                                            </v-btn>
                                            <p
                                            :class="mocktest.value ? 'purple--text':'grey--text'"
                                            class="text-center mb-0 caption"
                                            >
                                              {{ mocktest.value ? '입력됨' : '입력필요'}}
                                            </p>
                                        </div>
                                </v-card>
                            </td>
                        </tr>
                        <tr>
                            <td>내신 성적</td>
                            <td class="px-10 py-5">
                                <v-card
                                  flat
                                  color="transparent"
                                  class="d-flex justify-space-around"
                                >
                                        <div v-for="(score, i) in schoolGradesScore" :key="i">
                                            <v-btn
                                              class="px-6 subtitle-1"
                                              outlined
                                              rounded
                                              height="32"
                                              :color="score.value ? 'purple':'grey'"
                                              :value="score.semester"
                                              style="background-color:#fff"
                                              @click="inputSchoolGradeScore"
                                            >
                                                {{ score.semester }}
                                            </v-btn>
                                            <p
                                            :class="score.value ? 'purple--text':'grey--text'"
                                            class="text-center mb-0 caption"
                                            >
                                              {{ score.value ? '입력됨' : '입력필요'}}
                                            </p>
                                        </div>
                                </v-card>
                            </td>
                        </tr>
                        <tr>
                            <td>수능 성적</td>
                            <td class="px-10 py-5">
                                <v-card
                                  flat
                                  color="transparent"
                                  class="d-flex justify-start"
                                >
                                        <div v-for="(score, i) in satScore" :key="i">
                                            <v-btn
                                              class="px-6 subtitle-1"
                                              outlined
                                              rounded
                                              height="32"
                                              :color="score.value ? 'purple':'grey'"
                                              :value="score.type"
                                              style="background-color:#fff"
                                              @click="inputSatScore"
                                            >
                                                {{ score.type }}
                                            </v-btn>
                                            <p
                                            :class="score.value ? 'purple--text':'grey--text'"
                                            class="text-center mb-0 caption"
                                            >
                                              {{ score.value ? '입력됨' : '입력필요'}}
                                            </p>
                                        </div>
                                </v-card>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>

        <score-form
          v-if="isMocktestScoreForm"
          :month="selectedMocktest"
          :type="inputScoreType"
        />
        <schoolgrade-scoreform
          v-if="isSchoolGradeeForm"
          :semester="selectedSemester"
        />
        <score-form
          v-if="isSat"
          :month="selectedSat"
          :type="inputScoreType"
        />
    </div>
</template>

<script>
import ScoreForm from './scoreForm'
import SchoolgradeScoreform from './schoolgradeScoreform'

export default {
  components: {
    ScoreForm,
    SchoolgradeScoreform
  },
  data () {
    return {
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
      schoolGradesScore: [
        {
          semester: '1학년 1학기',
          value: true
        },
        {
          semester: '1학년 2학기',
          value: false
        },
        {
          semester: '2학년 1학기',
          value: false
        },
        {
          semester: '2학년 2학기',
          value: false
        },
        {
          semester: '3학년 1학기',
          value: false
        },
        {
          semester: '3학년 2학기',
          value: false
        }
      ],
      satScore: [
        {
          type: '수능 성적',
          value: false
        }
      ],
      selectedMocktest: '',
      isMocktestScoreForm: false,
      selectedSemester: '',
      isSchoolGradeeForm: false,
      selectedSat: '',
      isSat: false,
      inputScoreType: ''
    }
  },
  computed: {
  },
  methods: {
    inputMocktestScore (e) {
      let value
      if (e.target.tagName == 'SPAN') {
        e.target.parentNode.style.backgroundColor = '#871ADE'
        e.target.style.color = '#fff'
        value = e.target.parentNode.value
      } else {
        e.target.style.backgroundColor = '#871ADE'
        e.target.childNodes[0].style.color = '#fff'
        value = e.target.value
      }
      this.selectedMocktest = value
      this.inputScoreType = 'mockTest'
      this.isMocktestScoreForm = true
    },
    inputSchoolGradeScore (e) {
      let value
      if (e.target.tagName == 'SPAN') {
        e.target.parentNode.style.backgroundColor = '#871ADE'
        e.target.style.color = '#fff'
        value = e.target.parentNode.value
      } else {
        e.target.style.backgroundColor = '#871ADE'
        e.target.childNodes[0].style.color = '#fff'
        value = e.target.value
      }
      this.selectedSemester = value
      this.isSchoolGradeeForm = true
    },
    inputSatScore (e) {
      let value
      if (e.target.tagName == 'SPAN') {
        e.target.parentNode.style.backgroundColor = '#871ADE'
        e.target.style.color = '#fff'
        value = e.target.parentNode.value
      } else {
        e.target.style.backgroundColor = '#871ADE'
        e.target.childNodes[0].style.color = '#fff'
        value = e.target.value
      }
      this.selectedSat = value
      this.inputScoreType = 'sat'
      this.isSat = true
    }
  }
}
</script>

<style scoped>
    .v-data-table td:first-child {
        width: 250px;
        border-right: 1px solid #ddd;
        font-weight: 700;
        background-color: #eee;
    }
    .v-data-table td:last-child {
        text-align: left;
    }
    @media (max-width: 600px){
        .v-data-table td {
            padding: 15px !important
        }
        .v-data-table td:first-child {
            width: 80px !important;
        }
        .v-data-table td .d-flex {
          display: block !important;
        }
        .v-data-table td .d-flex:after {
          content: '';
          display: block;
          clear: both;
        }
        .v-data-table td .d-flex > div {
          width: 50%;
          float: left;
          text-align: center !important
        }
        .v-application button.px-10,
        .v-application button.px-6 {
          padding: 0 10px !important;
        }
    }
</style>