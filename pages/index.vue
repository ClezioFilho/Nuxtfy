<template>
<v-container>
  <v-row>
    <v-col>
      <Tabs />
    </v-col>

    <v-col>
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 5"
          class="pa-6 overflow-y-auto"
          height="350"
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
      </v-hover>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-parallax height="300" src="https://picsum.photos/1920/1080?random">
        <v-row align="center" justify="center">
          <v-col>
            <h1 class="grey--text text--lighten-2 text-center">Title</h1>
            <h2 class="grey--text text--lighten-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h2>  
          </v-col>
        </v-row>
      </v-parallax>
    </v-col>
  </v-row>

  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 24 : 5"
          class="pa-6 overflow-y-auto"
          height="350"
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
      </v-hover>
    </v-col>
  </v-row>
</v-container>
</template>
