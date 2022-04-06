<template>
    <div>
        <v-card outlined tile class="pa-0 beforeSearchArea">
            <v-simple-table class="text-center">
                <template v-slot:default>
                    <tbody>
                        <tr>
                            <td>대학명<span class="grey--text">(필수)</span></td>
                            <td class="px-10 py-5">
                                <v-combobox
                                  v-model="select"
                                  :items="seachItems"
                                  light
                                  outlined
                                  dense
                                  single-line
                                  :search-input.sync="search"
                                  hide-details="auto"
                                  background-color="white"
                                  label="대학명을 입력해주세요."
                                  append-outer-icon="mdi-magnify"
                                  style="max-width:300px"
                                >
                                    <template v-slot:no-data>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                "{{ search }}"와 일치하는 대학이 없습니다.                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-combobox>
                            </td>
                        </tr>
                        <tr>
                            <td>대학 조건</td>
                            <td class="px-10 py-5">
                                <v-row class="mx-0">
                                    <v-checkbox
                                      v-model="conditionAllCheck"
                                      label="전체"
                                      value="all"
                                      outlined
                                      color="purple"
                                      hide-details="auto"
                                      class="mt-0 mr-6"
                                    ></v-checkbox>
                                    <v-checkbox
                                      v-model="conditionCheck"
                                      v-for="(condition, i) in conditionItems"
                                      :key="i"
                                      :label="condition"
                                      :value="i"
                                      outlined
                                      color="purple"
                                      hide-details="auto"
                                      class="mt-0 mr-6"
                                    ></v-checkbox>
                                </v-row>
                            </td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
        <v-container fluid class="text-center">
            <v-btn
                x-large
                tile
                width="300"
                color="indigo accent-4"
                class="mt-6 mb-12 white--text title font-weight-bold"
            >검색하기</v-btn>
        </v-container>
        <v-container fluid class="text-center pa-0">
            <v-card outlined tile class="pa-0 resultArea">
                <v-simple-table class="text-center">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>대학명</th>
                                <th>계열</th>
                                <th>모집단위<span class="grey--text">(학과명)</span></th>
                                <th>추천점수</th>
                                <th>관심설정</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list, i) in result" :key="i">
                                <td>{{list.name}}</td>
                                <td>{{list.type}}</td>
                                <td>{{list.major}}</td>
                                <td>{{list.score}} <span class="mx-3">/</span> {{list.recommandedMajor}}</td>
                                <td>
                                    <v-btn icon small @click="favoriteClick(i)">
                                        <v-icon v-if="list.favorite" color="pink accent-2">mdi-heart</v-icon>
                                        <v-icon v-else color="grey">mdi-heart-outline</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      search: null,
      seachItems: ['서울대학교', '연세대학교', '고려대학교', '국민대학교'],
      conditionItems: ['인문사회계열', '자연과학계열', '예체능계열', '공학계열', '의학계열'],
      conditionAllCheck: null,
      conditionCheck: [],
      result: [
        {
          name: '서울과학기술대',
          type: '예체능계열',
          major: '시각디자인과',
          score: '99.82',
          recommandedMajor: '영어2등급',
          favorite: true
        },
        {
          name: '서울과학기술대',
          type: '예체능계열',
          major: '시각디자인과',
          score: '99.82',
          recommandedMajor: '영어2등급',
          favorite: true
        },
        {
          name: '서울과학기술대',
          type: '예체능계열',
          major: '시각디자인과',
          score: '99.82',
          recommandedMajor: '영어2등급',
          favorite: true
        },
        {
          name: '서울과학기술대',
          type: '예체능계열',
          major: '시각디자인과',
          score: '99.82',
          recommandedMajor: '영어2등급',
          favorite: true
        },
        {
          name: '서울과학기술대',
          type: '예체능계열',
          major: '시각디자인과',
          score: '99.82',
          recommandedMajor: '영어2등급',
          favorite: true
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    favoriteClick (i) {
      this.result[i].favorite = !this.result[i].favorite
    }
  },
  watch: {
    conditionAllCheck (val) {
      if (val == 'all') {
        this.conditionCheck = [0, 1, 2, 3, 4]
      } else {
        this.conditionCheck = []
      }
    },
    conditionCheck (val) {
      if (val.length == this.conditionItems.length) {
        this.conditionAllCheck = 'all'
      } else {
        this.conditionAllCheck = null
      }
    }
  }
}
</script>

<style scoped>
    .beforeSearchArea .v-data-table td:first-child {
        width: 250px;
        border-right: 1px solid #ddd;
        font-weight: 700;
    }
    .beforeSearchArea .v-data-table td:last-child {
        text-align: left;
    }
    .resultArea .v-data-table th {
        text-align: center;
        font-size: 15px;
        font-weight: 700;
        border-right: 1px solid #ddd;
    }
    .resultArea .v-data-table td {
        padding: 10px 20px;
        border-right: 1px solid #ddd;
    }
    @media (max-width: 600px){
        .v-data-table td {
            padding: 15px !important
        }
        .v-data-table td:first-child {
            width: 80px !important;
        }
    }
</style>