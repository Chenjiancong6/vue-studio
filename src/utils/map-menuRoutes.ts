/**
 * 动态路由的实现，
 * 封装了一个获取动态路由的并处理的方法
 */

import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
    // 创建一个保存动态路由的数组
    const routes: RouteRecordRaw[] = []

    //1. 先去加载所有默认的路由 routes
    const allRoutes: RouteRecordRaw[] = []
    /**
     * require.context： webpack 的一个方法去遍历路由文件夹内容,
     * (第一个参数：文件路径，第二个参数：是否遍历文件字点，第三个参数：遍历哪一个文件)
     * routeFiles =  "./system/user/user.ts": "./src/router/main/system/user/user.ts"
     */
    const routeFiles = require.context('../router/main', true, /\.ts/)
    // console.log(routeFiles, "routeFiles");

    routeFiles.keys().forEach((key) => {
        // console.log(key, "key");
        //key: ./system/user/user.ts

        // 路由文件的路径地址，进行拼接
        const route = require('../router/main' + key.split('.')[1])
        // console.log(route);

        allRoutes.push(route.default)
    })

    // 2.根据菜单获取需要添加的routes; 创建一个回调函数
    const _recurseGetRoute = (menus: any) => {
        for (const item of menus) {
            // 如果type =2，说明该菜单在该层级能有路径
            if (item.type == 2) {
                // 查找相同路由的数据，这点很重要，是过滤功能！！
                const route = allRoutes.find((route) => route.path === item.url)
                if (route) routes.push(route)
            } else {
                // 还有下一级菜单，则继续遍历 (回调函数)
                _recurseGetRoute(item.children)
            }
        }
    }

    _recurseGetRoute(userMenus)

    return routes
}