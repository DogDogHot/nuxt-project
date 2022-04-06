<template>
    <v-container fluid>
        <v-divider class="my-12"/>
        <v-row class="mx-0">
            <v-col lg="12" sm="12" class="pa-0 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">군외 대학/과 리스트</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">카이스트, 지스트, 디지스트 추천 점수를 만족 시에만 추천드립니다.</p>
            </v-col>
        </v-row>
        <div class="listWarp" v-if="special.length > 0">
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                    v-for="(list, i) in special"
                    :key="i"
                >
                    <recommanded-card
                        :list="list"
                        :my-score="myScore"
                        @sendDialogOn="showModal"
                    />
                </v-col>
            </v-row>
        </div>
        <p v-else class="full-width text-center grey--text mt-10 mb-12">검색된 결과가 없습니다.</p>
        <v-row class="mx-0 recommededListArea">
            <v-col lg="12" sm="12" class="pa-0 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">추천 대학/과 리스트</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">각 군별로 20개까지 추천합니다.</p>
            </v-col>
        </v-row>
        <div class="listWarp" v-if="recommad.length > 0">
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                    v-for="(list, i) in recommad"
                    :key="i"
                >
                    <recommanded-card
                        :list="list"
                        :my-score="myScore"
                        @sendDialogOn="showModal"
                    />
                </v-col>
            </v-row>
        </div>
        <p v-else class="full-width text-center grey--text mt-10 mb-12">검색된 결과가 없습니다.</p>
    </v-container>
</template>

<script>
import RecommandedCard from '../components/recommandedCard'

export default {
  components: {
    RecommandedCard
  },
  props: ['special', 'recommad', 'myScore'],
  methods: {
    showModal (info) {
      this.$emit('openModal', info)
    }
  }
}
</script>

<style scoped>
@media (max-width: 960px){
    .recommededListArea {
        margin-top: 20px;
    }
}
</style>
