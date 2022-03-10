import { createStore } from "vuex";

const store = createStore({
  state: () => {
    return {
      name: 'hello vue-studio'
    }
  },
  mutations: {},
  getters: {},
  actions: {}
})

export default store