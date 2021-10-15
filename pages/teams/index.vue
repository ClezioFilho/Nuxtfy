<template>
  <v-row>
    <v-col>
      <DataGrid title="Equipes" :headers="headers" :data="teams"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Teams",

  computed: {
    ...mapGetters({
      headers: 'team/headers',
      teams: 'team/teams',
    })
  }
};
</script>
