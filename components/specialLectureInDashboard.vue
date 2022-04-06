<template>
  <v-container fluid>
      <div class="subpageWrap mt-7">
          <span class="indigo--text font-weight-medium subtitle-2">NEW</span>
          <p class="headline font-weight-medium mb-2">대입특강 소식</p>
          <v-row class="mx-0 hidden-sm-and-down">
              <v-container class="selectSection">
                  <v-card
                    outlined
                    width="100%"
                    height="280"
                    class="d-inline-block mx-auto"
                  >
                    <v-card
                      flat
                      class="lectureImg float-left"
                      nuxt
                      to="specialLectureDetail"
                    >
                      <v-img
                        max-height="278"
                        :src="lectureLists[selectedImg].src"
                      ></v-img>
                    </v-card>
                    <div class="lectureList float-left">
                        <v-list>
                            <v-list-item-group v-model="selectedImg" mandatory color="purple accent-4">
                                <v-list-item
                                  v-for="(leture, i) in lectureLists"
                                  :key="i"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title v-text="leture.title"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                  </v-card>
              </v-container>
              <v-container class="bannerSection">
                <v-card
                  outlined
                  nuxt
                  to="specialLectureDetail"
                >
                  <v-img
                    :src="bannerSrc"
                    max-height="278"
                    max-width="100%"
                  ></v-img>
                </v-card>
              </v-container>
              <v-container class="threeslideSection">
                <v-card
                  min-height="278"
                >
                  <p class="body-2 text-center pt-2 mb-2">최근 본 특강</p>
                  <v-window v-model="onboarding" reverse>
                    <v-window-item
                      v-for="(three, i) in recently"
                      :key="i"
                      class="px-4"
                    >
                      <v-card
                        color="transparent"
                        height="200"
                        flat
                        class="d-flex flex-column"
                      >
                        <v-card
                          height="60"
                          class="my-1 overflow-hidden"
                          tile
                          v-for="(one, j) in three"
                          :key="j"
                        >
                          <v-btn
                            text
                            nuxt
                            tile
                            width="100%"
                            :to="one.href"
                          >
                            <v-img
                              :src="one.src"
                              width="100%"
                              aspect-ratio="1"
                            ></v-img>
                          </v-btn>
                        </v-card>
                      </v-card>
                    </v-window-item>
                  </v-window>
                  <v-card-actions
                    class="justify-space-between threeSildeBtn"
                    color="grey"
                  >
                    <v-btn
                      text
                      @click="prev"
                      class="px-0"
                      min-width="40"
                    >
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-card flat>
                      <span>{{onboarding+1}}/{{recently.length}}</span>
                    </v-card>
                    <v-btn
                      text
                      @click="next"
                      class="px-0"
                      min-width="40"
                    >
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-container>
          </v-row>
          <v-row style="position:relative" class="hidden-sm-and-up">
            <v-carousel
                v-model="slideActive"
                cycle
                height="185"
                hide-delimiter-background
                show-arrows-on-hover
                hide-delimiters
              >
                <v-carousel-item
                  v-for="(list, i) in lectureLists"
                  :key="i"
                >
                  <v-sheet
                    color="white"
                    height="100%"
                  >
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <v-card flat>
                        <v-img
                          :src="list.src"
                        ></v-img>
                      </v-card>
                    </v-row>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
              <v-chip class="mobileSlideCnt">{{slideActive+1}}/{{lectureLists.length}}</v-chip>
          </v-row>
      </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      slideActive: 0,
      selectedImg: 0,
      bannerSrc: '/images/specialbanner.png',
      lectureLists: [
        {
          id: '0',
          title: '대입특강 리스트_0',
          src: '/images/speciallecture1.png'
        },
        {
          id: '1',
          title: '대입특강 리스트_1',
          src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
        },
        {
          id: '2',
          title: '대입특강 리스트_2',
          src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
        },
        {
          id: '3',
          title: '대입특강 리스트_3',
          src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
        },
        {
          id: '4',
          title: '대입특강 리스트_4',
          src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
        },
        {
          id: '5',
          title: '대입특강 리스트_5',
          src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
        },
        {
          id: '6',
          title: '대입특강 리스트_6',
          src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
        }
      ],
      recently: [
        [
          {
            name: '대입특강 리스트_3',
            href: 'specialLectureDetail',
            src: '/images/speciallecture1.png'
          },
          {
            name: '대입특강 리스트_1',
            href: 'specialLectureDetail',
            src: '/images/speciallecture1.png'
          },
          {
            name: '대입특강 리스트_2',
            href: 'specialLectureDetail',
            src: '/images/speciallecture1.png'
          }
        ],
        [
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          },
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          },
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          }
        ],
        [
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          },
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          },
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          }
        ],
        [
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: '/images/speciallecture1.png'
          },
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          },
          {
            name: '대입특강 리스트_5',
            href: 'specialLectureDetail',
            src: 'https://www.seoularts.ac.kr/upload/board/153/editor/1511497181871_img.png'
          }
        ]
      ],
      onboarding: 0
    }
  },
  methods: {
    next () {
      this.onboarding = this.onboarding + 1 === this.length ? 0 : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1
    }
  },
  computed: {
  }
}
</script>

<style scoped>
    .lectureImg {
        width: calc(100% - 200px);
        height: 100%;
        border-radius: 0 !important;
    }
    .lectureList {
        width: 200px;
        height: 100%;
        padding:5px;
        overflow: auto;
    }
    .selectSection {
      width: 65%;
    }
    .bannerSection {
      width: 20%;
      margin: 0 2%
    }
    .threeslideSection {
      width: 11%;
    }
    .threeSildeBtn {
      position: absolute;
      bottom: -5px;
      left: 50%;
      margin-left: -60px;
    }
    .v-item-group {
      height: 200px;
    }
    .mobileSlideCnt {
      position: absolute;
      right: 10px;
      bottom: 10px;
      height: 25px;
      background-color: rgba(0,0,0,0.5) !important;
      padding: 3px 15px;
      color: #fff;
    }
</style>
