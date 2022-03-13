# vue-studio

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration


# vue-studio

# 封装了一个网络请求CRequest方法，有两种使用方式
```
// 使用方式1:
CRequest.request({
    url: '/home/multidata',
    methods: "GET",
    // 可以传入对应的请求和响应拦截器
    interceptors: {
        requestInterceptor: (config: any) => {
            console.log('单独请求的config')
            config.headers['token'] = '123'
             return config
         },
        responseInterceptor: (res: any) => {
           console.log('单独响应的response')
            return res
        }
    }
 })

// 使用方式2:
CRequest.get({
    url: '/home/multidata',
    showLoading: false
})
```
