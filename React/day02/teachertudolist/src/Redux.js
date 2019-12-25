// 引入 redux    combineReducers合并多个redux
import { createStore,combineReducers } from 'redux'

// 放到ToDoList所有数据中
import Alldata from './ToDoListAlldata/Alldata'

// 传入combineReducers
// 注意：用合并之后的reducers创建创建stor
let reducer = combineReducers({
  Alldata
})

// 放到ToDoList所有数据中
// // 定义数据
// const state = {
//   value: '',
//   message: []
// }

// // 定义 renducer 函数
// // 参数一、修改旧数据（之前的数据）
// // 参数二、对象，代表如何修改
// // （！！！！！！！！！！！！这个函数必须式是纯函数！！！！！！！！！！！！！！！）
// function reducer(prevState = state, action) {
//   // 1.为了保证函数是纯函数，先对原数据克隆
//   let temp = JSON.parse(JSON.stringify(prevState))

//   // 2.修改克隆后的数据
//   // 判断input
//   if (action.type === 'edit_value') {
//     temp.value = action.value
//     // 判断是否添加到数据中
//   } else if (action.type === 'add_message') {
//     temp.message.push(temp.value)
//     // 添加后清空
//     temp.value = ''
//   } else if (action.type === 'del_message') {
//     temp.message.splice(action.k, 1)
//   }
//   // 3.返回修改之后的新值
//   return temp
// }

// 创建store（store：中央数据管理器）
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// 暴露store
export default store