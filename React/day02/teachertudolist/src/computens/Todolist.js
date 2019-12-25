import React, { Component } from 'react'
// 引入Todolistdata（ul列表中的数据列表）
import Todolistdata from './TodolistData'
// 引入TodolistdataInput（输入框）
import TodolistdataInput from './TodolistInput'
// 引入Redux
import Redux from '../Redux'

export default class Todolist extends Component {
  // 创建数据
  constructor(props) {
    super(props)
    //  .Alldata取这个文件中的数据
    this.state = Redux.getState().Alldata

  }

  // 创建改变箭头函数
  valueChang = (e) => {
    // // 绑定数据
    // this.setState({
    //   value: e.target.value
    // })
    // 放到中央数据管理器中，上面代码就可以不要
    // 修改redux中的value值，1.参数必须是一个对象 2.必须要有一个type属性
    // 执行一个数值变化动作
    Redux.dispatch({
      type: 'edit_value',
      value: e.target.value
    })
  }

  // 组件挂载完成后
  componentDidMount() {
    //  启动redux中的监听器
    Redux.subscribe(v => {
      // 添加的数据与redux相对应   .Alldata取这个文件中的数据
      this.setState(Redux.getState().Alldata)
    })
  }

  // 添加箭头函数
  add = () => {
    // // 克隆一份新的数据
    // let newMessage = JSON.parse(JSON.stringify(this.state.message))
    // // 把要添加的值放在克隆后的数据中
    // newMessage.push(this.state.value)
    // // 克隆后的数组覆盖新的数组
    // this.setState({
    //   message: newMessage,
    //   // 清空输入后的值
    //   value: ''
    // })
    // 添加时于redux要做出相应的改变，执行一个添加动作
    Redux.dispatch({
      type: 'add_message',
    })
  }
  // 删除箭头函数
  del = (k) => {
    // // 克隆一份数组
    // let delMesage = JSON.parse(JSON.stringify(this.state.message))
    // // 删除一个
    // delMesage.splice(k, 1)
    // // 覆盖旧数组
    // this.setState({
    //   message: delMesage
    // })
    // 执行一个删除动作
    Redux.dispatch({
      type: 'del_message',
      k
    })
  }

  render() {
    return (
      <div>
        <h2>Todolist组件</h2>
        <ul>
          {/* 显示输入框 */}
          <TodolistdataInput
            // 输入值 
            dataInput={this.state.value}
            // 绑定input输入值
            valueChang={this.valueChang}
            // 添加 
            add={this.add}
          />

          {/* 显示ul中的数据 */}
          <Todolistdata
            // 把message中的值传给子组件
            dataMessage={this.state.message}
            // 删除传给子组件
            del={this.del}
          />
        </ul>
      </div>
    )
  }
}
