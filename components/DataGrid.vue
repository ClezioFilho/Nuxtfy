<template>
  <v-card>
    <v-card-title>
      {{ title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      />
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
      dense
    >
      <!-- eslint-disable-next-line -->
      <template v-slot:item.image="{ item }">
      <v-avatar
        size="62"
      >
        <img
          alt="Avatar"
          :src="item.image"
        >
        </v-avatar>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: {
        required: true,
        type: String
      },

      headers: {
        required: true,
        type: Array 
      },

      data: {
        required: true,
        type: Array
      }
    },

    data () {
      return {
        search: '',
      }
    },
  }
</script>