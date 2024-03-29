import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 配置路由
// const routes:Array<RouteRecordRaw>=[{
//     path:'/',
//     name:'home',
//     component: ()=>import('@/views/home/index.vue'),
//     meta:{},
//     children: []
// }]
const modules:Record<string,any> = import.meta.glob(['./modules/*'],{eager:true});
//公用的路由 404、error
export const aboutRouter={
    path:'/about',
    name:'about',
    component: ()=>import('@/views/about/index.vue'),
    meta:{},
    children: []
} as RouteRecordRaw
//配置路由
const routes:Array<RouteRecordRaw> = []
Object.keys(modules).forEach((key)=>{
    const module=modules[key].default;
    routes.push(module)
})
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
router.addRoute(aboutRouter)

// 无需权限登录的页面
const noAuthRouter:Array<string>=['/login']

router.beforeEach(async (_to,_from,next)=>{
    NProgress.start();
    
    const isLogin=sessionStorage.getItem('userInfo')?true:false;
    if(isLogin || noAuthRouter.includes(_to.path)){
        next()
    }else{
        next('/login')
    }
})


router.afterEach(async (_to)=>{
    NProgress.done();
})

export default router;