export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
}

export const actions = {
  async login({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => {
          //resolve('mock-token');
          reject('mock-token')
        }, 1000)
      });
      dispatch('setToken', token);
    } catch (error) {
      commit('setError', error, {root: true})
      throw error;
    }
  },
  setToken({commit}, token) {
    commit('setToken', token)
  },
  logout({ commit }) {
    commit('clearToken')
  } 
}

export const getters = {
  isAuthenticated: state => !!state.token
}