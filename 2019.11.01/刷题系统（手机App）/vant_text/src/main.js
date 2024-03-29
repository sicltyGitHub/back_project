import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

import './mock.js'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3434/api/v1'
Vue.prototype.$http = axios

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
