import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// import Home from "../views/Home.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "login",
        component: () => import(/*webpackChunkName: "login" */ "@/views/login/index.vue")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
