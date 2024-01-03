// 引入重置样式
import './styles/reset.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

const app=createApp(App)
app.use(router)
app.use(pinia)
app.mount("#app")