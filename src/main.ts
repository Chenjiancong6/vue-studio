import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'; // 全局引入
import 'element-plus/dist/index.css'; // element样式


//  这里注册全局的组件和库
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
