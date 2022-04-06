<template>
  <div>
    <line-title :title="sectionTitle" class="hidden-sm-and-down" />
    <v-card flat class="mobileTitle hidden-md-and-up px-7 mt-10">
        <v-card flat>
            <p class="headline font-weight-medium mb-2">대입 뉴스 &amp; 이슈</p>
        </v-card>
        <v-card flat class="ml-auto mt-1">
            <v-btn text small nuxt to="newsissueList">
                <v-icon small>mdi-plus</v-icon> 더보기
            </v-btn>
        </v-card>
    </v-card>
    <v-row class="listWarp mx-auto mt-7 hidden-sm-and-down" v-if="items.length > 0">
        <v-col cols="12" lg="4" md="12" class="hidden-md-and-down">
            <a
                class="firstNews d-block"
                :href="items[0].href"
            >
                <v-card
                    width="100%"
                    class="pa-5"
                    height="100%"
                    light
                >
                    <v-img
                        :src="items[0].src"
                        aspect-ratio="1.1"
                        width="100%"
                    />
                    <v-card-title class="title px-0 pb-1 titleArea">{{ items[0].title }}</v-card-title>
                    <v-card-text class="primary--text text--darken-1 body-2 pa-0">{{ items[0].type }}</v-card-text>
                    <v-card-text class="body-2 text-sm-left grey--text text--darken-2 px-0 pt-2">
                        {{ items[0].date }}
                    </v-card-text>
                </v-card>
            </a>
        </v-col>
        <v-col cols="12" lg="8" md="12" class="pl-md-0">
            <a
                class="newsList d-block"
                v-for="(item, i) in getSubitems"
                :key="i"
            >
                <v-card
                  width="100%"
                  height="100%"
                  class="pa-4 text-left"
                  light
                >
                    <v-img
                      :src="item.src"
                      aspect-ratio="1.1"
                      max-width="100%"
                      class="mx-auto"
                    />
                    <v-card-title class="body-2 px-0 pt-1 titleArea">{{item.title }}</v-card-title>
                    <v-row>
                        <v-col cols="12" sm="6" class="pr-md-0 pt-2">
                            <v-card-text class="primary--text text--darken-1 caption pa-0">
                                {{ item.type  }}
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" sm="6" class="pl-md-0 pt-2">
                            <v-card-text class="caption text-md-right text-sm-left grey--text text--darken-2 px-0 py-0">
                                {{item.date}}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </a>
        </v-col>
    </v-row>
    <p v-else class="full-width text-center grey--text mt-10 mb-12">선택하신 카테고리가 없습니다.</p>
    <v-row class="listWarp mx-auto px-4 hidden-md-and-up" v-if="items.length > 0">
        <v-col cols="12">
            <a
                class="newsList d-block"
                v-for="(item, i) in getMobileSubitems"
                :key="i"
            >
                <v-card
                  width="100%"
                  height="100%"
                  class="pa-4 text-left"
                  light
                >
                    <v-img
                      :src="item.src"
                      lazy-src="/images/Eclipse-1s-214px.svg"
                      aspect-ratio="1.1"
                      max-width="100%"
                      class="mx-auto"
                    />
                    <v-card-title class="body-2 px-0 pt-1 titleArea">{{item.title }}</v-card-title>
                    <v-row>
                        <v-col cols="12" sm="6" class="pr-md-0 pt-2">
                            <v-card-text class="primary--text text--darken-1 caption pa-0">
                                {{ item.type  }}
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" sm="6" class="pl-md-0 pt-2">
                            <v-card-text class="caption text-md-right text-sm-left grey--text text--darken-2 px-0 py-0">
                                {{item.date}}
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </a>
        </v-col>
    </v-row>
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
      sectionTitle: '대입 뉴스 & 이슈',
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 특보 대학 소개',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/store.jpg',
          href: 'newsissueDetail',
          type: 'Official',
          title: '[전문] 유은혜 부총리 겸 교육부장관 신년사',
          date: '2020.01.15'
        }
      ]
    }
  },
  computed: {
    getSubitems () {
      const arr = this.items
      const newArr = arr.filter((element, index) => {
        return index > 0
      })
      return newArr
    },
    getMobileSubitems () {
      const arr = this.items
      const newArr = arr.filter((element, index) => {
        return index < 4
      })
      return newArr
    }
  }
}
</script>

<style scoped>
    .listWarp {
        max-width: 1280px;
    }
    .newsList {
        float: left;
        width: calc(25% - 10px);
        height: 245px;
        margin-bottom: 15px;
        margin-left: 10px;
    }
    .newsList:first-child,
    .newsList:nth-child(5) {
        margin-left:0 ;
    }
    .firstNews {
        height: 505px;
    }
    .firstNews .titleArea {
        line-height: 1.5em;
        height: 4em;
        min-height: 80px;
    }
    .titleArea {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        line-height: 1.4em;
        height: 2.8em;
    }
    @media (min-width: 960px) and (max-width: 1264px) {
      .newsList {
            width: calc(25% - 10px);
            height: auto;
            margin-bottom: 15px;
            margin-left: 10px;
        }
        .newsList:first-child,
        .newsList:nth-child(5) {
            margin-left:0 ;
        }
    }
    @media (max-width: 960px) {
        .newsList {
            width: calc(50% - 10px);
            height: auto;
            margin-bottom: 15px;
            margin-left: 15px;
        }
        .newsList:first-child,
        .newsList:nth-child(5) {
            margin-left:15px;
        }
        .newsList:first-child,
        .newsList:nth-child(3) {
            margin-left: 0;
        }
        .mobileTitle {
            display: flex !important;
        }
    }
</style>