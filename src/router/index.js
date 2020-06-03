import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home1',
    component: Home
  },
  {
    path: '/home',
    redirect:"/home/recommend",  //重定向
    name: 'Home',
    component: Home,
     //配置首页的二级路由
     children:[
      {path:"recommend",component:()=>import ('../components/recommend.vue')},
      {path:"shenzhen",component:()=>import ('../components/shenzhen.vue')},
      {path:"brand",component:()=> import ('../components/brand.vue')},
      {path:"tvlive",component:()=> import('../components/tvlive.vue')},
      {path:"strategy",component:()=>import('../components/strategy.vue')},
      {path:"housing",component:()=>import('../components/housing.vue')},
      {path:"meitu",component:()=>import('../components/meitu.vue')},
      {path:"diray",component:()=>import('../components/diray.vue')},
      {path:"case",component:()=>import('../components/case.vue')},
      {path:"topic",component:()=>import('../components/topic.vue')},
      {path:"vedio",component:()=>import('../components/vedio.vue')},
      {path:"logsorting",component:()=>import('../components/logsorting.vue')},
      {path:"fengshui",component:()=>import('../components/fengshui.vue')}
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/renovate',
    // redirect:"/broadcast/films",  //重定向
    name: 'Renovate',
    component: () => import(/* webpackChunkName: "about" */ '../views/Renovate/renovate.vue'),
  },
  {
    path: '/choosematerials',
    name: 'Choosematerials', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Choosematerials/choosematerials.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "about" */'../views/Community/community.vue')
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',//就是去掉了#号 默认是hash模式是加了#号的
})

export default router
