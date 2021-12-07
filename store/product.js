export const state = () => ({
  headers: [
    {text: "Imagem", value: "image"},
    {
      text: "Titulo",
      align: "start",
      sortable: false,
      value: "title",
    },
    {text: "Categoria", value: "category"},
    {text: "Preço", value: "price"},
    {text: "Descrição", value: "description"},
    {text: "Avaliação", value: "rating"},
    {text: 'Actions', value: 'actions', sortable: false},
  ],
  
  products: [],
})

export const getters = {
  headers(state) {
    return state.headers
  },

  products(state) {
    return state.products
  },
}

export const actions = {
  async fetchProducts({ commit }) {
    const res = await this.$dataApi.get('/products')
    commit('SET_PRODUCTS', res.data.hits)
  },
}

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data
  },
}