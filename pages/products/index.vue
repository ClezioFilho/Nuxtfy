<template>
  <v-row>
    <v-col>
      <DataGrid title="Produtos" :headers="headers" :data="products"/>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Products",

  async fetch() {
    await this.fetchProducts()
  },

  methods: {
    ...mapActions({
      fetchProducts: 'product/fetchProducts'
    })
  },

  computed: {
    ...mapGetters({
      headers: 'product/headers',
      products: 'product/products',
    })
  }
};
</script>
