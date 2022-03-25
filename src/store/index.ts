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
export function setupStore() {
    store.dispatch('loadLocalLogin')
}


export default store
