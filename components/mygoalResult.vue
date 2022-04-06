<template>
    <v-container fluid>
        <v-divider class="my-12"/>
        <v-row class="mx-0">
            <v-col lg="12" sm="12" class="pa-0 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">나의 목표 분석</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">모의고사 성적 결과를 토대로 내가 설정한 대학/과에 대한 피드백을 제공합니다.</p>
            </v-col>
        </v-row>
        <v-card flat class="d-flex body-2 pt-7 pb-5">
            <v-card
              flat
              class="px-5 grey--text text--darken-2 legendArea"
              v-for="(legend, i) in legends"
              :key="i"
            >
                <v-icon small :color="legend.color" class="mr-1">{{ legend.icon }}</v-icon>
                <span>{{ legend.title }}</span>
            </v-card>
        </v-card>
        <div class="listWarp px-5" v-if="result.length > 0">
            <mygoal-card
              v-for="(list, i) in result"
              :key="i"
              :list="list"
              :my-score="myScore"
            />
        </div>
        <p v-else class="full-width text-center grey--text mt-10 mb-12">결과가 없습니다.</p>
    </v-container>
</template>

<script>
import MygoalCard from '../components/mygoalCard'

export default {
  components: {
    MygoalCard
  },
  props: ['result', 'myScore'],
  data () {
    return {
      legends: [
        {
          title: '성적유지',
          color: 'indigo accent-4',
          icon: 'mdi-triangle'
        },
        {
          title: '성적 향상 필요',
          color: 'purple',
          icon: 'mdi-triangle mdi-rotate-180'
        },
        {
          title: '성적 유지 또는 향상 필요',
          color: 'grey darken-3',
          icon: 'mdi-window-minimize'
        }
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .legendArea {
    padding: 0 !important;
    padding-right: 5px !important
  }
  .legendArea:last-child {
    padding-right: 0 !important
  }
  .listWarp {
    padding: 0 !important;
  }
  .listWarp > div {
    padding: 10px !important;
  }
}
</style>