import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../view/experience/index.vue')
  },
  {
    path: '/emergency',
    component: () => import('../view/emergency-command/index.vue')
  },
  {
    path: '/monitoring',
    component: () => import('../view/monitoring/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
