<template>
  <v-container>
    <!-- <p v-if="$fetchState.pending">Loading....</p>
    <p v-else-if="$fetchState.error">Error while fetching</p>
    <ul v-else>
      {{ id }}
    </ul> -->
    {{ id }}
  </v-container>
</template>

<script>
export default {
  async fetch() {
    console.log(this.$route)
    this.id = this.$route.params.id
  },

  data() {
    return {
      id: null
    };
  },
}
</script>
