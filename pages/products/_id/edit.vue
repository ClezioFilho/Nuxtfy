<template>
  <v-container>
    {{ route }} Edit
  </v-container>
</template>

<script>
export default {
  name: "ProductEdit",

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
