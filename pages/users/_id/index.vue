<template>
  <v-container>
    <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching</p>
    <div v-else>
      <v-card>
        <v-img
          height="250"
          src="https://picsum.photos/1920/1080?random"
        >
        <v-container>
          <v-row justify="end">
            <v-col md="1">
              <v-btn
                class="px-2"
                color="success"
                elevation="12"
                small
                nuxt
                to="/users"
              >Voltar</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-avatar
                size="164"
                rounded
              >
                <v-img :lazy-src="user.user_image" :src="user.user_image"></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-container>
        </v-img>

        <v-card-title>
          {{ fullName }} 
          <v-divider ></v-divider>
        </v-card-title>

        <v-card-text class="mt-3">
          <v-row
            align="center"
            justify="space-around"
            class="mx-0"
          >
            <v-col>
              <v-chip
                color="blue"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-account
                </v-icon>
                Idade
              </v-chip>

              <div class="ml-10 mt-2">
                {{ user.age }}
              </div>
            </v-col>
            
            <v-col>
              <v-chip
                color="blue"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-phone
                </v-icon>
                Telefone
              </v-chip>

              <div class="ml-10 mt-2">
                {{ user.phone }}
              </div>
            </v-col>
          </v-row>

          <v-divider class="my-2"></v-divider>

          <v-row
            align="center"
            class="mx-0"
          >
            <v-col>
              <v-chip
                color="blue"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-email
                </v-icon>
                Email
              </v-chip>

              <div class="ml-10 mt-2">
                {{ user.email }}
              </div>
            </v-col>

            <v-col>
              <v-chip
                color="blue"
                label
                text-color="white"
              >
                <v-icon left>
                  mdi-mailbox
                </v-icon>
                CEP
              </v-chip>

              <div class="ml-10 mt-2">
                {{ user.zip_code }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    await this.fetchUser(this.$route.params.id)
  },

  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser',
    })
  },

  computed: {
    ...mapGetters({
      user: 'user/user',
    }),

    fullName(){
      return this.user.firstname + ' ' + this.user.lastname
    }
  }
}
</script>
