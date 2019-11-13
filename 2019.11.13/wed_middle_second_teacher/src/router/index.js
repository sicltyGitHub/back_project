import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Index
  },
  {
    path: '/cart',
    name: '购物车',
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
