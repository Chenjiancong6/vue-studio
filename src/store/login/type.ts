// login模块vuex中的state
export interface ILoginState {
    token: string;
    userInfo: any;
    userMenus: any;
}

export interface IAccount {
    name: string;
    password: string;
    accountLoginAction?: object;
}

// 接口的返回数据类型结构
export interface IDataType<T = any> {
    code: number;
    data: T;
}

// 接口返回的具体数据格式
export interface ILoginResult {
    id: number;
    name: string;
    token: string;
}
