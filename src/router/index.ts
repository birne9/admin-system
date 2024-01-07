import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 配置路由
const routes:Array<RouteRecordRaw>=[{
    path:'/',
    name:'home',
    component: ()=>import('../pages/home/index.vue'),
    meta:{},
    children: []
}]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach(async (_to,_from,next)=>{
    NProgress.start();
    next()
})


router.afterEach(async (_to)=>{
    NProgress.done();
})

export default router;