import axios, { AxiosResponse, InternalAxiosRequestConfig ,AxiosError, AxiosRequestConfig} from 'axios';
import { ElMessage} from 'element-plus'
import { getMessageInfo } from './status';

interface BaseResponse <T = any> {
    code : number | string,
    message:string,
    data:T
}
const service = axios.create({
    // 这样我们就可以在环境变量中改变 axios 的 baseURL
    baseURL: Boolean(import.meta.env.VITE_APP_USE_MOCK) ? import.meta.env.VITE_APP_MOCK_BASEURL : import.meta.env.VITE_APP_BASE_API,
    timeout: 15000,
});

//axios 实例拦截请求
service.interceptors.request.use(
    (config:InternalAxiosRequestConfig) => {
        return config
    },
    (error:AxiosError) => {
        return Promise.reject(error)
    }
)

//axios 实例拦截响应
service.interceptors.response.use(
    (response: AxiosResponse)=> {
        if(response.status === 200){
            return response.data
        }
        // 请求失败的处理
        ElMessage({
            message: getMessageInfo(response.status),
            type:'error'
        })
        return response.data
    },
    (error:any) => {
        //结构error信息
        const {response} = error
        if(response){
            ElMessage({
                message: getMessageInfo(response.status),
                type:'error'
            })
            return Promise.reject(response.data)
        }
        
        ElMessage({
            message: '网络连接异常，请稍后再试',
            type:'error'
        })
    }
)


// BaseResponse 为 res.data 的类型
// T 为 res.data.data 的类型 不同的接口会返回不同的 data 所以我们加一个泛型表示
// 此处相当于二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config;
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<BaseResponse>>(conf)
      .then((res: AxiosResponse<BaseResponse>) => {
        const data = res.data;
        // 如果data.code为错误代码返回message信息
        if (data.code != 1) {
          ElMessage({
            message: data.message,
            type: 'error',
          });
          reject(data.message);
        } else {
          ElMessage({
            message: data.message,
            type: 'success',
          });
          // 此处返回data信息 也就是 api 中配置好的 Response类型
          resolve(data.data as T);
        }
      });
  });
};


//封装请求
export function get<T = any, U = any>(
    config: AxiosRequestConfig,
    url: string,
    params?: U
  ): Promise<T> {
    return requestInstance({ ...config, url, method: 'GET', params: params });
  }
  
  export function post<T = any, U = any>(
    config: AxiosRequestConfig,
    url: string,
    data: U
  ): Promise<T> {
    return requestInstance({ ...config, url, method: 'POST', data: data });
  }


export function put<T = any, U = any>(config:AxiosRequestConfig, url: string,params?:U): Promise<T>{
    return requestInstance({ ...config, url, method: 'PUT', params:params });
}

export function del<T = any, U = any>(config:AxiosRequestConfig, url: string,data:U): Promise<T>{
    return requestInstance({ ...config, url, method: 'DELETE', data:data });
}
export default service