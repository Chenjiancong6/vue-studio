/**
 * 登录模块vuex逻辑，接口的数据通过vuex进行存储并在页面之间使用
 */

import { Module } from 'vuex';
import { ILoginState, IAccount } from './type';
import Api from './api';
import localCache from '@/utils/cache';
import router from '@/router';

// 动态路由的实现
import { mapMenusToRoutes } from '@/utils/map-menuRoutes'

// 两个参数，一个当前模块state的，一个根的state
const LoginModule: Module<ILoginState, any> = {
    // namespaced: true,
    state() {
        return {
            token: '', // 获取登录用户的token
            userInfo: {}, // 用户信息
            userMenus: []
        };
    },
    getters: {},
    mutations: {
        changeToken(state, token: string) {
            state.token = token;
        },
        changeUserInfo(state, userInfo: any) {
            state.userInfo = userInfo;
        },
        changeUserMenus(state, userMenus: any) {
            state.userMenus = userMenus
            console.log(userMenus, "userMenus");

            //动态路由的实现，调用方法
            const routes = mapMenusToRoutes(userMenus)

            /**
             * 将获取的动态路由进行注册 ！！！
             */
            routes.forEach(route => {
                router.addRoute('main', route)
            })

        }
    },
    actions: {
        async accountLoginAction({ commit }, payload: IAccount) {
            console.log(payload);

            // 1.实现登录逻辑
            const loginResult = await Api.accountLoginRequest(payload);
            const { id, token } = loginResult.data;
            commit('changeToken', token); // 把token传到mutations
            localCache.setCache('token', token); // 把token本地缓存

            //2. 查询用户信息
            const { data } = await Api.requestUserInfoById(id)
            commit("changeUserInfo", data)
            localCache.setCache("userInfo", data)

            // 3.请求用户菜单
            const userMenusResult = await Api.requestUserMenusByRoleId(
                data.role.id
            );
            const userMenus = userMenusResult.data;
            console.log(userMenus, 'userMenus');

            commit('changeUserMenus', userMenus);
            localCache.setCache('userMenus', userMenus);

            //登录成功后定位到首页
            router.push('/main');
        },

        // 为防止vuex刷新后数据丢失的问题
        loadLocalLogin({ commit }) {
            const token = localCache.getCache('token');
            if (token) {
                commit('changeToken', token);
            }
            const userInfo = localCache.getCache('userInfo');
            if (userInfo) {
                commit('changeUserInfo', userInfo);
            }
            const userMenus = localCache.getCache('userMenus');
            if (userMenus) {
                commit('changeUserMenus', userMenus);
            }
        }
    }
};

export default LoginModule;
