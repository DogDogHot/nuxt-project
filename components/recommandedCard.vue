  <template>
    <div>
        <v-card
          width="100%"
          class="pa-5"
          light
          @click="seeDetail()"
        >
            <v-card-title class="body-2 px-0 pt-0 pb-2" v-if="list.type">
                {{ list.type }} 군
            </v-card-title>
            <v-card-title class="body-1 font-weight-medium px-0 pt-0">
                {{ list.title }}
            </v-card-title>
            <v-card-subtitle class="body-1 px-0">
                <span
                    v-for="(n, i) in list.major"
                    :key="i"
                >{{ i !== list.major.length - 1 ? `${n} / ` : n}}</span>
            </v-card-subtitle>
            <v-card-text class="black--text px-0 pb-10">
                <span>추천 점수 : {{ list.recommandedScore }}</span>
                <v-icon x-small color="black">mdi-triangle</v-icon>
                <span> / {{ list.condition }}</span>
            </v-card-text>
            <v-card flat class="d-flex caption" color="transparent">
                <v-card flat color="transparent">
                    <span class="grey--text text--darken-3">내 점수:</span>
                    <span class="indigo--text text--accent-4">{{ myScore }}</span>
                </v-card>
                <v-card flat class="ml-auto" color="transparent">
                    <span class="grey--text text--darken-3">선호 대학/과 설정</span>
                    <v-btn
                        x-small
                        icon
                        class="mt-n1"
                    >
                        <v-icon v-if="list.favorite" color="indigo accent-4"> mdi-heart</v-icon>
                        <v-icon v-else>mdi-heart-outline</v-icon>
                    </v-btn>
                </v-card>
            </v-card>
        </v-card>
    </div>
</template>

<script>
export default {
  props: ['list', 'myScore'],
  methods: {
    seeDetail () {
      this.$emit('sendDialogOn', this.list)
    }
  }
}
</script>
