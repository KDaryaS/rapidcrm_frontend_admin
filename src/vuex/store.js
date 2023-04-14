// import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    async GET_USERS_FROM_API({commit}) {
        return axios.get('http://192.168.31.74:8082/api/users')
                    .then((response) => {
                        commit('SET_USERS_TO_VUEX', response.data)
                    })
                    .catch((err) => console.log(err))
    }
  },
  mutations: {
    SET_USERS_TO_VUEX: (state, users) => {
        state.users = users
    }
  },
  getters: {
    USERS(state) {
        return state.users
    }
  }
})

export default store