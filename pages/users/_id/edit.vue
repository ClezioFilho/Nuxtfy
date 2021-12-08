<template>
  <v-container>
    {{ route }} Edit
  </v-container>
</template>

<script>
export default {
  name: "UserEdit",

  data() {
    return {
      route: null
    }
  },

  async fetch() {
    this.route = this.$route.name
  }
}
</script>
