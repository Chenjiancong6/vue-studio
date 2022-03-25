/**
 * 登录模块vuex逻辑，接口的数据通过vuex进行存储并在页面之间使用
 */

import { Module } from 'vuex'
import { ILoginState, IAccount } from "./type"
import Api from "./api"
import localCache from '@/utils/cache'

// 两个参数，一个当前模块state的，一个根的state
const LoginModule: Module<ILoginState, any> = {
    // namespaced: true,
    state() {
        return {
            token: '',  // 获取登录用户的token
            userInfo: {}, // 用户信息
            userMenus: []
        }
    },
    getters: {},
    mutations: {
        changeToken(state, token: string) {
            state.token = token
        },
        changeUserInfo(state, userInfo: any) {
            state.userInfo = userInfo
        },
        changeUserMenus(state, userMenus: any) {
            state.userMenus = userMenus
        }
    },
    actions: {
        async accountLoginAction({ commit }, payload: IAccount) {
            console.log(payload)

            // 1.实现登录逻辑
            const loginResult = await Api.accountLoginRequest(payload)
            const { id, token } = loginResult.data
            commit("changeToken", token)  // 把token传到mutations
            localCache.setCache('token', token) // 把token本地缓存

            //2. 查询用户信息
            let { data } = await Api.requestUserInfoById(id)
            commit("changeUserInfo", data)
            localCache.setCache("userInfo", data)

            // 3.请求用户菜单
            const userMenusResult = await Api.requestUserMenusByRoleId(data.role.id)
            const userMenus = userMenusResult.data
            commit('changeUserMenus', userMenus)
            localCache.setCache('userMenus', userMenus)



        }
    }
}

export default LoginModule