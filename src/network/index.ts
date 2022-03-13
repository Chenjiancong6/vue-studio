/**
 * new 实例化一个axios网络请求
 * 通过暴露一个Crequest类，不同的接口请求可以进行多个实例化
 */
import Crequest from "./request";
const TIME_OUT = 1000;

const CRequest = new Crequest({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config: any) => {
            // token拦截
            // let token = '';
            // if (token) {
            //     config.headers.Authorization = `Bearer ${token}`
            // }
            console.log('请求成功的拦截')
            return config;
        },
        requestInterceptorCatch: (err) => {
            // console.log('请求失败的拦截')
            return err;
        },
        responseInterceptor: (res) => {
            // console.log('响应成功的拦截')
            return res;
        },
        responseInterceptorCatch: (err) => {
            // console.log("响应失败的拦截");
            return err;
        }
    }
})

export default CRequest;