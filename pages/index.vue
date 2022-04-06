<template>
  <v-content>
    <slide-component />
    <notice-bar :title="noticeTitle" />
    <analysis-result />
    <special-lecture />
    <news-issue />
    <group-slide />
  </v-content>
</template>

<script>
import SlideComponent from '../components/slide'
import NoticeBar from '../components/noticeBar'
import AnalysisResult from '../components/analysisResultDashboard'
import SpecialLecture from '../components/specialLectureInDashboard'
import NewsIssue from '../components/newsIssueDashboard'
import GroupSlide from '../components/groupSlide'

export default {
  components: {
    SlideComponent,
    NoticeBar,
    AnalysisResult,
    SpecialLecture,
    NewsIssue,
    GroupSlide
  },
  data () {
    return {
      noticeTitle: '2020학년도 정시대학 입학정보 박람회 1:1 대입상담관 신청 안내'
    }
  }
}
</script>
