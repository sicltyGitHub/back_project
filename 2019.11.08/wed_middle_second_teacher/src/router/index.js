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
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    name: '注册',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/me',
    name: '个人中心',
    component: () => import('../views/Me.vue'),
    meta: {
      mustLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 登录之前判断是否有数据
  if (to.meta !== undefined && to.meta.mustLogin !== undefined && to.meta.mustLogin) {
    // 判断是否登录
    let token = localStorage.getItem('token')
    if (token === null) {
      next('/login')
    } else {
      // 放行
      next()
    }
  } else {
    // 放行
    next()
  }
})

export default router
