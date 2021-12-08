<template>
  <v-hover v-slot="{ hover }">
    <v-card :elevation="hover ? 24 : 5">
      <v-tabs
        v-model="tab"
        color="grey lighten-1"
        centered
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
          <v-card
            class="pa-6 overflow-y-auto"
            height="300"
          >  
            <v-card-title class="display-1">
              Title
            </v-card-title>

            <v-card-subtitle>
              Subtitle
            </v-card-subtitle>

            <v-card-text :class="{'pa-3': hover}">
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </h2>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "Tabs",
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Missão', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        { tab: 'Visão', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
        { tab: 'Valores', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      ],
    }
  },
}
</script>
