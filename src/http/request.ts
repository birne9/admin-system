import axios from 'axios';
const service= axios.create({
    // 这样我们就可以在环境变量中改变 axios 的 baseURL
    baseURL: import.meta.env.VITE_APP_BASE_API,
      timeout: 15000,
    });

//axios 实例拦截请求
service.interceptors.request.use(
    config=>{
        return config
    },
    error=>{
        return Promise.reject(error)
    }
)

//axios 实例拦截响应
service.interceptors.response.use(
    response=>{
        return response.data
    },
    error=>{
        return Promise.reject(error)
    }
)

export default service