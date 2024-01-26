import {defineStore} from 'pinia'
import pinia from "@/store"
import { LoginRequest, refreshUserInfo, userLogin } from '@/api/user';
import { IUserState } from './types'
// Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字
//这个名字 ，也被用作 id ，是必须传入的， Pinia 将用它来连接 store 和 devtools。
//为了养成习惯性的用法，将返回的函数命名为 use... 是一个符合组合式函数风格的约定。
//defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
export const useUserStoreHook = defineStore('userInfo', {
    // other options...
    state:():IUserState=>({
        userName:'birne9',
        accessToken:'',
        roles:['common']
    }),
    getters:{},
    actions:{
        async storeUserLogin(data: LoginRequest){
          return  userLogin(data).then((res)=>{
                this.userName = res.username;
                this.roles = res.roles;
                this.accessToken = res.accessToken;
                return res;
            })
        },
        storeRefreshUserInfo(){
            if(this.userName == 'birne9' && this.accessToken !=''){
                refreshUserInfo({
                    accessToken:this.accessToken
                }).then((res)=>{
                    this.userName = res.username;
                    this.roles = res.roles;
                    this.accessToken = res.accessToken;
                  
                }).catch((err)=>{
                    this.accessToken='';
                    console.log(err)
                })
            }
           
        }

    },
    persist:{
        key:'userInfo',
        storage:sessionStorage,
        paths:['accessToken', 'userName','roles']
    }
  })


export function useUserStore(){
    return useUserStoreHook(pinia)
}