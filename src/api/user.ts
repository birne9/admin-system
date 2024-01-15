import { post } from "@/http/request";
export type LoginRequest ={
    username: string,
    password: string,
}

export type reLoginRequest ={
    accessToken: string,
}

export type LoginResponse = {
    username: string,
    roles:Array<string>,
    accessToken:string,
}

//定义接口
export const userLogin=async (data?:LoginRequest)=>{
    return  post<LoginResponse>({},"/login",data)
}

export const refreshUserInfo = async (data?:reLoginRequest)=>{
    return  post<LoginResponse>({},"/getUserInfo",data)
}