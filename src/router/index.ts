import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ElLoading } from 'element-plus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'experience',
    component: () => import('../view/experience/index.vue')
  },
  {
    path: '/emergency',
    name: 'emergency',
    component: () => import('../view/emergency-command/index.vue')
  },
  {
    path: '/monitoring',
    name: 'monitoring',
    component: () => import('../view/monitoring/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中',
    background: 'rgba(0, 0, 0, 0.7)'
  }) // 显示加载中

  // 页面加载完毕后，关闭加载中
  router.afterEach(() => {
    loading.close()
  })

  next()
})

export default router
