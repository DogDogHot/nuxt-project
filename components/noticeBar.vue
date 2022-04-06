<template>
  <v-system-bar
    height="45"
    class="noticebar my-md-7"
    color="rgb(65,85,231)"
  >
    <v-container
      fluid
      class="px-0"
    >
      <span class="iconArea mr-3"></span>
      <span
        class="white--text font-weight-bold subtitle-1 hidden-md-and-down"
        :style="{verticalAlign:'middle'}"
      >알림 소식 / 최신 소식</span>
      <a class="yellow--text font-weight-bold subtitle-1">{{ title }}</a>
    </v-container>
  </v-system-bar>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
    .iconArea {
      display: inline-block;
      width: 25px;
      height: 25px;
      position: relative;
      top: 8px;
      left: 5px;
      background: url('/images/promotion.png') center center no-repeat;
      background-size: 100%;
    }
    .noticebar .container {
      max-width: 1280px;
      line-height: 45px;
      padding: 0;
    }
    .noticebar a {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      margin-left: 10px;
      vertical-align: middle;
      width: calc(100% - 190px);
    }
    @media (max-width:1264px) {
      .iconArea {
        position:static;
        float: left;
        margin-left: 10px
      }
      .noticebar {
        height: 50px !important;
        text-align: center;
      }
      .noticebar .container {
        line-height: 10px;
        padding: 0;
      }
      .noticebar a {
        display: block;
        float: left;
        width: calc(100% - 50px);
        text-align: left;
        margin-left: 0;
      }
    }
</style>
