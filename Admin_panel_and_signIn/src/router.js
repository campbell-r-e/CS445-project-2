import { createRouter, createWebHashHistory } from 'vue-router'
import AdminLogin from './components/AdminLogin.vue'
import AdminAddData from './components/AdminAddData.vue'

const routes = [
  {
    path: '/',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/add-data',
    name: 'AdminAddData',
    component: AdminAddData
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
