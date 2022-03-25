import { createStore } from "vuex"

import Login from "./login"

const store = createStore({
    state: () => {
        return {
            name: "hello vue-studio"
        }
    },
    mutations: {},
    getters: {},
    actions: {},
    modules: {
        Login
    }
})

export default store
