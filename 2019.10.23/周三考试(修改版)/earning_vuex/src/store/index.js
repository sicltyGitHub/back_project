import Vue from 'vue'
import Vuex from 'vuex'

// 引入路由
import router from '../router/index'

// 引入Ajax
import axios from 'axios'
// 配置Ajax 接口

Vue.use(Vuex)

export default new Vuex.Store({
  // 数据
  state: {
    // 用户名
    username: '',
    // 班级
    classes: [],
    // 学生
    students: []
  },

  // 对数据操作的方法(映射到methods)
  // mutations直接执行操作
  mutations: {
    // 参数一、state: 代表上面的state的对象
    // 参数二、传的数据
    // 用户名
    setusername (state, data) {
      state.username = data
    },

    // 班级
    setclasses (state, data) {
      state.classes = data
    },

    // 学生
    setstudents (state, data) {
      state.students = data
    },

    // 退出
    logout (state) {
      // 用户名为空
      state.username = ''
      // 清空浏览器中的token或用户名
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('username')
    }

  },

  // 对数据操作的方法(映射到methods)
  // actions通常用于异步操作
  actions: {
    // 参数一、context：上下文对象
    // 参数二、数据对象，包含用户名和密码
    // 调用用户名/登录
    login (context, data) {
      window.console.log(data)

      // 通过ajax发起异步
      axios.post('/access_token', data).then(res => {
        // 判断用户是否登录成功
        if (res.data.ok === 1) {
          // 设置令牌
          sessionStorage.setItem('token', res.data.data.token)
          // 设置用户登录的用户名
          sessionStorage.setItem('username', data.username)
          // 在vuex中保存用户名：调用 mutations 保存到 username 数据
          context.commit('setusername', data.username)
          // 登陆后跳转
          router.push('/login')
        } else {
          alert('登录失败！：原因：' + res.data.error)
        }
      })
    },

    // 调用班级
    getclasses (context, data) {
      // 通过Ajax发起异步调令
      axios.get('/classes', data).then(res => {
        // 调用 mutations 保存到 state中的classes中
        context.commit('setclasses', res.data.data)
      })
    },

    // 调用学生
    getstudents (context, data) {
      // 通过 Ajax 发起异步调令
      axios.get(`/classes/${data.id}/students`).then(res => {
        // 调用 mutations 保存到 students
        context.commit('setstudents', res.data.data)
      })
    }
  },

  modules: {
  }
})
