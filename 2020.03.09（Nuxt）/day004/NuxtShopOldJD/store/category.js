// 定义数据
export const state = () => ({
  // 分类数据
  categories:[]
})

// 定义mutations（修改数据的函数）
export const mutations = {
  // 设置categories 的值
  // 参数一：代码数据
  // 参数二：可选，要设置的值
  init(state,data) {
    state.categories = data
  }
}

// 相当于：categories = 100
// $store.commit('init',100)