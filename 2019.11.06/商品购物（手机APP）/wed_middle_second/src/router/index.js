import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 首页
    name: 'index',
    component: () => import('../views/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
