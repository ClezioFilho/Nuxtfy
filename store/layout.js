export const state = () => ({
  drawer: false
})

export const getters = {
  drawer(state) {
    return state.drawer
  },
}

export const actions = {
  async toggleDrawer({ commit }) {
    commit('TOGGLE_DRAWER')
  },
}

export const mutations = {
  TOGGLE_DRAWER(state) {
    state.drawer = !state.drawer
  },
}