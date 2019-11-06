import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    face: '',
    integral: 0
  },
  mutations: {
    setusername (state, data) {
      state.username = data.username
      state.face = data.face
    },
    setintegraljia (state, data) {
      state.integral++
    },
    setintegraljien (state, data) {
      if (state.integral !== 0) {
        state.integral--
      } else {
        state.integral = 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
