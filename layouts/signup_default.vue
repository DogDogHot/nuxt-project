<template>
    <v-app>
        <v-card
          tile
          flat
          light
          height="100%"
        >
        <v-container fluid class="text-center" style="border-bottom:1px solid #ddd;">
            <v-btn
              width="130"
              text
              color="transparent"
              nuxt
              to="/"
              class="py-10">
                <img src="images/logo.jpg" style="max-width:150px;margin-left:-20px;"/>
            </v-btn>
        </v-container>
        <nuxt />
        </v-card>
    </v-app>
</template>
