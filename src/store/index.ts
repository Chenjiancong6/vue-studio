import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState, IStoreType } from "./type"
import Login from "./login"

const store = createStore<IRootState>({
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

// 定义vuex各个模块的类型，保证数据不会乱用
export function useStore(): Store<IStoreType> {
    return useVuexStore()
}


export default store
