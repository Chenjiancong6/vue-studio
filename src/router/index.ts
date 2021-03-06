// import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache';
// import Home from "../views/Home.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',  // name一定要写，不然router.addRoute('main', route)不起作用！！
        component: () =>
            import(/*webpackChunkName: "main" */ '@/views/main/main.vue')
    },

    {
        path: '/login',
        name: 'login',
        component: () =>
            import(/*webpackChunkName: "login" */ '@/views/login/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',  // 当页面路径不存在时，跳转到当前页面
        name: 'notFound',
        component: () => import('@/views/not-found/not-found.vue')
    }
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    routes,
    history: createWebHashHistory(),
});

// 进行页面导航守卫，当没有token的时候，跳转到登录页面
router.beforeEach((to) => {
    if (to.path !== '/login') {
        const token = localCache.getCache('token');
        if (!token) {
            return '/login';
        }
    }
});

export default router;
