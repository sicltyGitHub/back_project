import Vue from 'vue'
import Vuex from 'vuex'

// 引入路由
import router from '../router/index'

// 引入Ajax
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据
  state: {
    // 用户名
    username: '',
    // 0 未登录 1登录
    isLogin: 0
  },

  mutations: {
    // 设置用户名
    setusername (state, data) {
      state.username = data
    },
    // 登录
    setIsLogin (state) {
      state.isLogin = 1
    },
    // 退出登录
    exitLogin (state) {
      state.isLogin = 0
    }
  },
  actions: {
    login (context, data) {
      // window.console.log(data)

      // 通过ajax发起异步
      axios.post('/users/access_token', data).then(res => {
        // 判断用户是否登录成功
        if (res.data.ok === 1) {
          // 设置令牌
          sessionStorage.setItem('token', res.data.data.token)
          // 设置用户登录的用户名
          sessionStorage.setItem('username', data.username)
          // 在vuex中保存用户名：调用 mutations 保存到 username 数据
          context.commit('setusername', data.username)
          // 获取state中的登录按钮方法
          context.commit('setIsLogin')
          // 登陆后跳转回答页面
          router.push('/answer')
        } else {
          alert('登录失败！：原因：' + res.data.error)
        }
      })
    }
  },
  modules: {
  }
})
