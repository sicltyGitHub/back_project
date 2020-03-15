// 每个页面都会执行，只适用于所有页面都需要用到的数据
export const actions = {
  // 参数一：vuex
  // 参数二：上下文对象
  async nuxtServerInit({ commit }, { $axios }) {
    let res = await $axios.get("/categories");
    // 调接口，把数据填充到vuex中
    commit('category/init', res.data.data)
  }
}