import { MockMethod } from "vite-plugin-mock";
export default [{
    url: '/mock/api/login',
    method: 'post',
    response: ({ body }) => {
        if (body.username !== 'birne9' || body.password !== '123456') {
            return {
                code: 1,
                message: '用户名或密码错误',
                data: {
                    username: '',
                    roles: [],
                    accessToken: ''
                }
            }
        }

        if (body.username === 'birne9' && body.password === '123456') {
            return {
                code: 0,
                message: "登陆成功",
                data: {
                    username: 'admin',
                    roles: ['admin'],
                    accessToken: 'admin'
                }
            }
        } else {
            return { 
                code: 1, 
                message: 'Token失效',
                 data: { 
                    username: '', 
                    roles: [],
                     accessToken: '' } }
        }
    }
}] as MockMethod[]