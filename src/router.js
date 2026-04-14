import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ConeflowerPage from './components/ConeflowerPage.vue'
import RedbudPage from './components/RedbudPage.vue'
import MaplePage from './components/MaplePage.vue'
import MapPage from './components/MapPage.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/plant/coneflower',
    name: 'ConeflowerPage',
    component: ConeflowerPage
  },
  {
    path: '/plant/redbud',
    name: 'RedbudPage',
    component: RedbudPage
  },
  {
    path: '/plant/maple',
    name: 'MaplePage',
    component: MaplePage
  },
  {
    path: '/map',
    name: 'MapPage',
    component: MapPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
