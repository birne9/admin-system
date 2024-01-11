import { post } from "@/http/request";
export type LoginRequest ={
    username: string,
    password: string,
}


export type LoginResponse = {
    username: string,
    roles:Array<string>,
    accessToken:string,
}

//定义接口
export const userLogin=async (data?:LoginRequest)=>{
    return  post<LoginResponse>({},"/user/login",data)
}

export const refreshUserInfo = async (data?:LoginRequest)=>{
    return  post<LoginResponse>({},"/user/refresh",data)
}