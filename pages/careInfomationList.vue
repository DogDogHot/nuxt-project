<template>
    <div class="subpageWrap">
        <v-row class="mx-0">
            <v-col lg="12" sm="12" class="pa-0 borderbtm">
                <h2 class="pt-md-10 pt-xs-10 pl-lg-0 pl-sm-3 pl-xs-5">케어 정보</h2>
                <p class="subtitle-2 font-regular grey--text text--darken-1 pl-lg-0 pl-sm-3">성적 향상에 도움이 되는 헬스, 멘탈, 푸드 등의 케어정보를 제공합니다.</p>
            </v-col>
        </v-row>
        <v-container fluid class="px-0 mt-2">
            <div class="listWarp" v-if="getList.length > 0">
                <a
                  class="careList d-block"
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
                          max-height="200"
                          :alt="list.title"
                        />
                        <v-card-title
                          class="body-2 px-0 py-0 mt-2 twoLine"
                        >{{ list.title }}</v-card-title>
                        <v-card-text class="text-right grey--text text--darken-1 caption pa-0">{{ list.date }}</v-card-text>
                    </v-card>
                </a>
            </div>
            <p v-else class="full-width text-center grey--text mt-10 mb-12">선택하신 카테고리가 없습니다.</p>
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
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능 끝! 이뻐질 차례! 수험생 여러분 고생하셨습니다. 이제 피부를 가꿔봐요',
          date: '2020.01.15'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://www.spcmagazine.com/wp-content/uploads/2018/11/SPC%EC%82%BC%EB%A6%BD_%EB%B9%9A%EC%9D%80-%EC%88%98%EB%8A%A5%EC%84%A0%EB%AC%BC%EC%84%B8%ED%8A%B8-%EC%B6%9C%EC%8B%9C_20181101.jpg',
          title: '떡 하니 합격, 카카오프렌즈 수능선물세트로 응원하세요.',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        },
        {
          to: '/careInfomationDetail',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTs1XP99KS037qBjVoD8Lf8dHSoyNVAQ2bropJcvtOfwrFQt_g',
          title: '수능음식 BEST 4',
          date: '2020.01.12'
        }
      ]
      return list
    }
  },
  head () {
    return {
      title: '케어 정보'
    }
  }
}
</script>

<style scoped>
  .careList {
    width: calc((100% - 2%*4)/5);
    margin: 0 2% 15px 0;
    float:left;
  }
  .careList:nth-child(5n) {
    margin-right: 0;
  }
  .careList .v-card {
      transition: all .3s;
  }
  .careList:hover .theme--light.v-card,
  .careList:focus .theme--light.v-card {
    background-color:#eee;
  }
  .listWarp:after {
      display: block;
      content: "";
      clear: both;
  }
  @media (min-width: 601px) and (max-width: 1264px) {
    .careList {
        width: calc((100% - 2%*3)/3);
        margin: 0 1% 15px 1%;
    }
    .careList:nth-child(5n) {
        margin-right: 1%;
    }
  }
  @media (max-width: 600px) {
    .careList {
        width: 48%;
        margin: 0 1% 15px 1%;
    }
    .careList:nth-child(5n) {
        margin-right: 1%;
    }
  }
</style>
