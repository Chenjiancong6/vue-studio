import Request from "@/network/index"
import { IAccount, IDataType, ILoginResult } from "./type"

// 枚举
enum LoginAPI {
    AccountLogin = '/login',
    LoginUserInfo = '/users/', // 用法: /users/1
    UserMenus = '/role/' // 用法: role/1/menu
}
export default {
    // 账号登录验证
    accountLoginRequest(account: IAccount) {
        return Request.post<IDataType<ILoginResult>>({
            url: LoginAPI.AccountLogin,
            data: account
        })
    },

    // 根据登录后返回的用户id查询用户信息
    requestUserInfoById(id: number) {
        return Request.get<IDataType>({
            url: LoginAPI.LoginUserInfo + id,
        })
    },

    // 根据用户权限，请求用户菜单
    requestUserMenusByRoleId(id: number) {
        return Request.get<IDataType>({
            url: LoginAPI.UserMenus + id + '/menu'
        })
    },
}