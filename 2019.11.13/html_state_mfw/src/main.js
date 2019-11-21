import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入mock
import './mock'

// 引包
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入CSS样式
import './CSS/reset.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
