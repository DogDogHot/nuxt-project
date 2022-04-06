<template>
    <v-container fluid class="mt-12">
        <v-flex class="lineTitle headline font-weight-black text-center">
          <p>{{ title }}</p>
      </v-flex>
      <v-divider class="line"/>
    </v-container>
</template>

<script>
export default {
  props: ['title']
}
</script>
<style scoped>
    .lineTitle {
        margin-bottom: -53px;
    }
    .lineTitle p {
      display: inline-block;
      background-color:#fff;
      padding: 0 10px;
    }
    .line {
        margin-top: 20px;
    }
</style>
