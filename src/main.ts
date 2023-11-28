import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '@/design/variables.less'

const el = document.documentElement

// 设置 css 变量
el.style.setProperty('--el-bg-color-overlay', '#022056')
el.style.setProperty('--el-fill-color-blank', '#022056')
el.style.setProperty('--el-text-color-placeholder', '#ffffff')
el.style.setProperty('--el-text-color-regular', '#ffffff')
el.style.setProperty('--el-text-color-primary', '#ffffff')
el.style.setProperty('--el-border-color-extra-light', '#0058FF')
el.style.setProperty('--el-text-color-regular', '#B5EAFF')

const app = createApp(App)

app.use(router)
app.mount('#app')
