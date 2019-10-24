import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 1.引包 axios传数据
import axios from "axios";

// 2.引包 mock假数据
import "./mock";

// 配置接口基地址
axios.defaults.baseURL = "http://127.0.0.1:9999/api/v1";

// 添加axios拦截器
axios.interceptors.request.use(function (config) {
  // 获取token令牌
  let token = sessionStorage.getItem('token');
  // 如果有了令牌就传到服务器
  if (token !== undefined) {
    // 为http协议添加一个 authorization 保存令牌
    config.headers.Authorization = 'Bearer' + token
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
