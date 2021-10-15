<template>
  <v-row>
    <v-col>
      <DataGrid title="Usuários" :headers="headers" :data="users"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Users",

  async fetch() {
    await this.fetchUsers()
  },

  methods: {
    ...mapActions({
      fetchUsers: 'user/fetchUsers',
    })
  },

  computed: {
    ...mapGetters({
      headers: 'user/headers',
      users: 'user/users',
    })
  }
};
</script>
