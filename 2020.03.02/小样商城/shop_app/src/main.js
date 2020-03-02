import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入axios
import axios from 'axios'
Vue.use(Vant)
// 配置axios基地址
axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1'
// 添加拦截器
axios.interceptors.request.use(function (config) {
  // 从浏览器取出令牌
  let token = localStorage.getItem('token')
  if (token !== null) {
    // 添加令牌
    config.headers.Authorization = 'Bearer' + token
  }
  return config
})
// 通过原型挂载到http中
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
