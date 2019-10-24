import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 状态数据
  state: {
    isLogin: false,
    name:'',
  },
  // 修改状态数据的方法
  mutations: {
    // 登录
    Login(state,value) {
      state.isLogin = true ;
      state.name = value ;
    },
    // 退出
    Logout(state,value) {
      state.isLogin = false ;
      state.name = value ; 
    } 
  },
  actions: {},
  modules: {}
});
