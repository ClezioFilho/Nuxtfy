export const state = () => ({
  headers: [
    {
      text: "Nome",
      align: "start",
      value: "firstname",
    },
    { text: "Sobrenome", value: "lastname" },
    { text: "Idade", value: "age" },
    { text: "Telefone", value: "phone" },
    {text: 'Ações', value: 'actions', sortable: false},
  ],
  
  users: [],
  user : {}
})

export const getters = {
  headers(state) {
    return state.headers
  },
  users(state) {
    return state.users
  },
  user(state) {
    return state.user
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    const res = await this.$dataApi.get('/users')
    console.log(res.data)
    commit('SET_USERS', res.data.hits)
  },

  async fetchUser({ commit }, id) {
    const res = await this.$dataApi.get('/users/'+id)
    console.log(res.data)
    commit('SET_USER', res.data)
  },
}

export const mutations = {
  SET_USERS(state, data) {
    state.users = data
  },
  SET_USER(state, data) {
    state.user = data
  },
}