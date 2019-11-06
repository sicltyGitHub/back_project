import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant导入所有组件
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入Mock
import './mock'

// 引入axios
import axios from 'axios'
Vue.use(Vant)
// 挂载个根路径
axios.defaults.baseURL = 'http://localhost:9999/api/v1/'
// 挂载axios到Vue
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
