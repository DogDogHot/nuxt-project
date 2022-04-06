<template>
    <div>
        <v-form>
            <v-container fluid class="mt-12 pa-0">
                <label class="black--text font-weight-medium">
                    {{ semester }} 내신 성적을 입력하세요
                </label>
                <v-card outlined class="mt-3 inputArea">
                    <v-simple-table class="table text-center">
                        <template v-slot:default>
                            <colgroup>
                                <col span="4" width="25%">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>교과</th>
                                    <th>과목</th>
                                    <th>단위수<span class="grey--text">(필수)</span></th>
                                    <th>석차등급<span class="grey--text">(필수)</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pa-0">
                                        <v-card
                                          class="mx-auto pa-0 overflow-auto"
                                          flat
                                          height="250"
                                        >
                                            <v-list>
                                                <v-list-item-group
                                                  v-model="selectedCurriculum"
                                                  mandatory
                                                  color="purple darken-4"
                                                  active-class="font-weight-bold"
                                                  class="px-3"
                                                >
                                                    <v-list-item
                                                      v-for="(item, i) in curriculumItems"
                                                      :key="i"
                                                    >
                                                        <v-list-item-content>
                                                            <v-list-item-title
                                                              v-text="item"
                                                              class="text-left body-2"
                                                            ></v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-card>
                                    </td>
                                    <td class="pa-0">
                                        <v-card
                                          class="mx-auto pa-0 overflow-auto"
                                          flat
                                          height="250"
                                        >
                                            <v-list>
                                                <v-list-item-group
                                                  v-model="selectedSubject"
                                                  mandatory
                                                  color="purple darken-4"
                                                  active-class="font-weight-bold"
                                                  class="px-3"
                                                >
                                                    <v-list-item
                                                      v-for="(subject, i) in filterSubject"
                                                      :key="i"
                                                    >
                                                        <v-list-item-content>
                                                            <v-list-item-title class="text-left body-2">
                                                              {{subject}}
                                                            </v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                        </v-card>
                                    </td>
                                    <td>
                                        <v-text-field
                                        flat
                                        single-line
                                        clearable
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="단위수를 입력해 주세요"
                                        ></v-text-field>
                                    </td>
                                    <td>
                                        <v-text-field
                                        flat
                                        single-line
                                        clearable
                                        hide-details="auto"
                                        background-color="white"
                                        placeholder="석차등급을 입력해 주세요"
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
                        >입력하기
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <v-container fluid class="pa-0 mt-12">
            <label class="black--text font-weight-medium">
                {{ semester }} 성적
            </label>
            <v-card outlined tile class="pa-0 resultArea mt-2">
                <v-simple-table class="text-center">
                    <template v-slot:default>
                        <colgroup>
                            <col span="5" width="20%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>교과</th>
                                <th>과목</th>
                                <th>단위수<span class="grey--text">(필수)</span></th>
                                <th>석차등급<span class="grey--text">(필수)</span></th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(list, i) in scoreList" :key="i">
                                <td>{{list.curriculum}}</td>
                                <td>{{list.subject}}</td>
                                <td>{{list.unitNumber}}</td>
                                <td>{{list.grade}}</td>
                                <td>
                                    <v-btn text small>
                                        수정
                                    </v-btn>
                                    <v-btn text small>
                                        삭제
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
  props: {
    semester: String
  },
  data () {
    return {
      selectedCurriculum: 0,
      selectedSubject: 0,
      curriculumItems: ['국어', '수학', '영어', '사회', '과학', '체육', '예술(음악/미술)'],
      subjectItems: [
        ['고전', '고전문학감상', '고전문학의 감상과 비평', '국어', '국어1', '국어2', '독서'],
        ['미분', '적분', '방정식', '피타고라스의 정의', '가우스이론', '수학1', '수학2']
      ],
      scoreList: [
        {
          curriculum: '국어',
          subject: '국어1',
          unitNumber: '단위수(필수)',
          grade: '석차등급(필수)'
        },
        {
          curriculum: '수학',
          subject: '미적분',
          unitNumber: '단위수(필수)',
          grade: '석차등급(필수)'
        }
      ]
    }
  },
  computed: {
    filterSubject () {
      const arr = this.subjectItems
      const newArr = arr.filter((e, i, a) => {
        return i == this.selectedCurriculum
      })
      console.log(newArr[0])
      return newArr[0]
    }
  }
}
</script>

<style scoped>
.v-data-table th {
    text-align: center;
    font-size: 15px;
    font-weight: 700;
}
.inputArea .v-data-table th {
    border-right: 1px solid #ddd;
}
.inputArea .v-data-table td {
    padding: 10px 20px;
    border-right: 1px solid #ddd;
}
.resultArea .v-data-table td {
    color: #777
}
.theme--light.v-list-item--active:hover::before,
.theme--light.v-list-item--active::before {
    border-radius: 30px;
    opacity: 0.2;
}
.v-list-item--link:before {
    border-radius: 30px;
}
@media (max-width: 600px){
    .v-data-table td {
        padding: 0 !important
    }
    .v-data-table td:first-child {
        width: 80px !important;
    }
    .v-data-table th:nth-child(3),
    .v-data-table th:nth-child(4) {
        min-width: 150px;
        padding: 0 5px !important;
    }
}
</style>