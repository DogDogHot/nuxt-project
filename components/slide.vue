<template>
  <v-container class="warp pa-0 pt-md-5">
    <v-carousel
      :height="imageHeight"
      width="100%"
      cycle
      hide-delimiter-background
      interval="4500"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      cycle: false,
      items: [
        {
          src: '/images/slide1.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: '/images/slide1.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '230'
        case 'sm': return '300'
        case 'md': return '380'
        case 'lg': return '437'
        case 'xl': return '500'
      }
    }
  }
}
</script>

<style scoped>
.warp {
  max-width: 1280px;
}
</style>
