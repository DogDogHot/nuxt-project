<template>
    <div>
        <v-container fluid class="px-0 mt-2">
            <div class="listWarp" v-if="getList.length > 0">
                <a
                  class="lectureList d-block"
                  v-for="(list, i) in getList"
                  :key="i"
                  :href="list.to"
                >
                    <v-card
                      width="100%"
                      class="pa-5"
                      light
                    >
                        <v-img
                          :src="list.src"
                          aspect-ratio="1"
                          lazy-src="/images/Eclipse-1s-214px.svg"
                        />
                        <v-card-title class="body-2 px-0 pb-1">{{ list.title }}</v-card-title>
                        <v-card-text class="grey--text text--darken-1 caption pa-0">{{ list.period }}</v-card-text>
                        <v-card-text class="text-md-right text-sm-left purple--text px-0 py-0">
                            {{ list.type }}
                        </v-card-text>
                    </v-card>
                </a>
            </div>
            <p v-else class="full-width text-center grey--text mt-10 mb-12">내가 본 특강이 없습니다.</p>
            <div class="text-center mt-12">
                <v-pagination
                  v-model="page"
                  :length="page"
                  prev-icon="mdi-chevron-left"
                  next-icon="mdi-chevron-right"
                ></v-pagination>
          </div>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      items: []
    }
  },
  computed: {
    getList: () => {
      const list = [
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        },
        {
          to: 'specialLectureDetail',
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          type: '유료',
          title: '심리상담 대학원 입시 준비 심화반 1클래스',
          period: '2020.01.12 ~ 2020.01.14'
        }
      ]
      return list
    }
  }
}
</script>

<style scoped>
  .lectureList {
    width: calc((100% - 2%*4)/5);
    margin: 0 2% 15px 0;
    float:left;
  }
  .lectureList:nth-child(5n) {
    margin-right: 0;
  }
  .lectureList .v-card {
      transition: all .3s;
  }
  .lectureList:hover .theme--light.v-card,
  .lectureList:focus .theme--light.v-card {
    background-color:#eee;
  }
  .listWarp:after {
      display: block;
      content: "";
      clear: both;
  }
  @media (min-width: 601px) and (max-width: 1264px) {
    .lectureList {
        width: calc((100% - 2%*3)/3);
        margin: 0 1% 15px 1%;
    }
    .lectureList:nth-child(5n) {
        margin-right: 1%;
    }
  }
  @media (max-width: 600px) {
    .lectureList {
        width: 48%;
        margin: 0 1% 15px 1%;
    }
    .lectureList:nth-child(5n) {
        margin-right: 1%;
    }
  }
</style>
