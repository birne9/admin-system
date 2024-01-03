// 引入重置样式
import './styles/reset.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app=createApp(App)
app.use(router)
app.mount("#app")