export default {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {},
    children: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('@/views/home/index.vue'),
            meta: {
                isShow:true,
                title: '项目介绍'
            },
            children: []
        },
        {
            path: '/user',
            name: 'UserPage',
            component: () => import('@/views/user/index.vue'),
            meta: {
                isShow:true,
                title: '用户列表'
            },
            children: []
        },
        {
            path: '/roles',
            name: 'RolesPage',
            component: () => import('@/views/roles/index.vue'),
            meta: {
                isShow:true,
                title: '角色列表'
            },
            children: []
        },
        {
            path: '/auth',
            name: 'AuthPage',
            component: () => import('@/views/auth/index.vue'),
            meta: {
                isShow:true,
                title: '权限列表'
            },
            children: []
        }
    ]
}