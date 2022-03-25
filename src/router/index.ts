import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// import Home from "../views/Home.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        component: () => import(/*webpackChunkName: "main" */'@/views/main/main.vue')
    },

    {
        path: "/login",
        name: "login",
        component: () => import(/*webpackChunkName: "login" */ "@/views/login/index.vue")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
