export interface IUserState {
    username:string,
    accessToken:string,
    refreshToken:string,
    roles:string[],// 第二种写法泛型 Array<string>
}