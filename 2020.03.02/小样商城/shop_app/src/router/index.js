import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    // 需要登录后才能看
    meta: { mustLogin: true },
    path: '/Classify',
    name: '分类',
    component: () => import('../views/Classify.vue')
  },
  {
    // 需要登录后才能看
    meta: { mustLogin: true },
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
  // 商品数据
  {
    path: '/goods/:id',
    // 开启路由传参
    props: true,
    name: '商品数据',
    component: () => import('../views/Goods.vue')
  }
]

const router = new VueRouter({
  routes
})

// 添加导航守卫
router.beforeEach((to, from, next) => {
  // 没有添加meta，直接跳转其他页面
  if (to.meta !== undefined && to.meta.mustLogin !== undefined && to.meta.mustLogin) {
    // 获取令牌
    let token = localStorage.getItem('token')
    // 判断有没有令牌
    if (token === null) {
      // 没有跳转到登录页面
      next('/login')
    } else {
      // 由令牌放行
      next()
    }
  } else {
    next()
  }
})

export default router
