import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'; // 全局引入
import 'element-plus/dist/index.css'; // element样式

import CRequest from './network';

console.log(process.env.VUE_APP_BASE_URL)
CRequest.request({
    url: '/home/multidata',
    methods: "GET",
    interceptors: {
        requestInterceptor: (config: any) => {
            console.log('单独请求的config')
            // config.headers['token'] = '123'
            return config
        },
        responseInterceptor: (res: any) => {
            console.log('单独响应的response')
            return res
        }
    }
})

// CRequest.get({
//     url: '/home/multidata',
//     showLoading: false
// })

//  这里注册全局的组件和库
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
