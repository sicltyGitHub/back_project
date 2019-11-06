import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [
      {
        path: '/index',
        component: () => import('../components/Index.vue')
      },
      {
        path: '/leaderboard',
        component: () => import('../components/Leaderboard.vue')
      },
      {
        path: '/myself',
        component: () => import('../components/Myself.vue')
      },
      {
        path: '/login',
        component: () => import('../components/Login.vue')
      },
      {
        path: '/categories/:id/questions/:all',
        component: () => import('../components/Questions.vue'),
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
