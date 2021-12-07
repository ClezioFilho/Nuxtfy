export const state = () => ({
  headers: [
    {
      text: "Nome",
      align: "start",
      value: "firstname",
    },
    { text: "Sobrenome", value: "lastname" },
    { text: "CEP", value: "zip_code" },
    {text: 'Actions', value: 'actions', sortable: false},
  ],
  
  users: []
})

export const getters = {
  headers(state) {
    return state.headers
  },

  users(state) {
    return state.users
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const res = await this.$dataApi.get('/users')
    console.log(res.data)
    commit('SET_USERS', res.data.hits)
  },
}

export const mutations = {
  SET_USERS(state, data) {
    state.users = data
  },
}