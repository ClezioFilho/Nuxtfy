<template>
  <v-row>
    <v-col>
      <DataGrid title="Clientes" :headers="headers" :data="customers"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Customers",

  computed: {
    ...mapGetters({
      headers: 'customer/headers',
      customers: 'customer/customers',
    })
  }
};
</script>
