import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 设置根路径
    path: '/',
    // 默认路径答题页面
    redirect: '/answer'
  },
  {
    title: '答题',
    path: '/answer',
    // 默认可点击页面
    meta: { noLogin: true },
    component: () => import('../views/Answer.vue')
  },
  {
    title: '问题',
    path: '/question',
    component: () => import('../views/Question.vue')
  },
  {
    title: '排行榜',
    path: '/ranking',
    // 默认可点击页面
    meta: { noLogin: true },
    component: () => import('../views/Ranking.vue')
  },
  {
    title: '登录',
    path: '/login',
    // 默认可点击页面
    meta: { noLogin: true },
    component: () => import('../views/Login.vue')
  },
  {
    title: '注册登录',
    path: '/loginNew',
    // 默认可点击页面
    meta: { noLogin: true },
    component: () => import('../views/LoginNew.vue')
  },
  {
    title: '个人中心',
    path: '/registerLogin',
    component: () => import('../views/RegisterLogin.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由导航
router.beforeEach(function (to, from, next) {
  // 如果这个路由上有 noLogin 这个属性，那么就直接放行
  if (to.meta.noLogin) {
    next()
  } else {
    // 只要未登录就跳到登录页
    let token = sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
