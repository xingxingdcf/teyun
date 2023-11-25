import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'

import * as echarts from 'echarts'

const app = createApp(App)

app.use(router)
app.mount('#app')
