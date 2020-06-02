import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BuildingMaterials from "../views/buildingMaterials/BuildingMaterials.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/buildingMaterials',
    name: 'BuildingMaterials',
    component: () => import('../views/buildingMaterials/BuildingMaterials.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
