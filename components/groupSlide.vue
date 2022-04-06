<template>
  <div>
    <line-title :title="sectionTitle" class="hidden-sm-and-down"/>
    <v-card flat class="mobileTitle hidden-md-and-up px-7 mt-10">
        <v-card flat>
            <p class="headline font-weight-medium mb-2">대입정보 자료실</p>
        </v-card>
        <v-card flat class="ml-auto mt-1">
            <v-btn text small nuxt to="/newsissueList">
                <v-icon small>mdi-plus</v-icon> 더보기
            </v-btn>
        </v-card>
    </v-card>
    <v-sheet
      class="mx-auto mt-sm-12 mt-3 pa-0"
      elevation="0"
      max-width="1280"
    >
      <v-card flat class="text-right pa-0 hidden-md-and-down">
        <v-btn
          text
          color="grey darken-2"
          nuxt
          to="/newsissueList"
        >
          전체보기<v-icon small>mdi-chevron-right</v-icon></v-btn>
      </v-card>
      <v-slide-group
        v-model="model"
        light
        class="pa-4 pt-0"
        prev-icon="mdi-chevron-left-box mdi-48px"
        next-icon="mdi-chevron-right-box mdi-48px"
        show-arrows
      >
        <v-slide-item
          v-for="(data, i) in infoData"
          :key="i"
        >
          <v-card
            class="ma-2 overflow-hidden"
            height="280"
            width="220"
            flat
            rounded
            nuxt
            :to="data.href"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
                <v-col class="pt-0">
                    <v-img
                      :src="data.src"
                      style="max-width:100%;"
                      :idx="data.idx"
                    ></v-img>
                </v-col>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import lineTitle from '../components/lineTitle'
export default {
  components: {
    lineTitle
  },
  data () {
    return {
      sectionTitle: '대입 정보 자료실',
      model: null,
      infoData: [
        {
          src: '/images/groupslide1.png',
          href: 'newsissueDetail',
          idx: '1'
        },
        {
          src: '/images/groupslide2.png',
          href: 'newsissueDetail',
          idx: '2'
        },
        {
          src: '/images/groupslide3.png',
          href: 'newsissueDetail',
          idx: '3'
        },
        {
          src: '/images/groupslide1.png',
          href: 'newsissueDetail',
          idx: '4'
        },
        {
          src: '/images/groupslide2.png',
          href: 'newsissueDetail',
          idx: '5'
        },
        {
          src: '/images/groupslide3.png',
          href: 'newsissueDetail',
          idx: '6'
        },
        {
          src: '/images/groupslide1.png',
          href: 'newsissueDetail',
          idx: '7'
        }
      ]
    }
  }
}
</script>

<style scoped>
  @media (max-width: 960px) {
      .mobileTitle {
          display: flex !important;
      }
  }
</style>
