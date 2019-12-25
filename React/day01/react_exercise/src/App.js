// import React, { Component } from 'react'
// // 类组件
// class App extends Component {
//   // 渲染页面
//   render() {
//     return ()
//   }
// }

import React, { Component } from 'react'
// 类组件(rec)
export class App extends Component {
  // consternation(构造器)：和vue中的声明周期类似会自动调用 (rconst) 
  constructor(props) {
    super(props)
    this.delBtn = this.delBtn.bind(this);

    // 定义数据,和vue中的data类似
    this.state = {
      value: '',
      message: []
    }
  }

  // 定义一个点击事件函数
  valueChange(e) {
    // 修改定义数据中的值
    this.setState({
      value: e.target.value
    })
  }
  // 定义一个点击添加事件
  addClick() {
    // 修改点击添加事件得值
    this.setState({
      // 用原来的message加上value合并到一起的新值
      message: [...this.state.message, this.state.value,],
      // 清空值
      value: ''
    })
  }

  // 删除
  delBtn(index) {
    this.setState({
      message: this.state.message.filter((v, i) => index !== i)
    })
  }

  // 显示数据(rce)
  render() {
    const view = (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.valueChange.bind(this)}
        />
        <button onClick={this.addClick.bind(this)}>添加</button>
        <hr />
        <ul>
          {
            this.state.message.map((v, index) => {
              return <li key={index}>{v}------<button onClick={ () => this.delBtn(index) }
              >删除</button></li>
            })
          }
        </ul>
      </div>
    )
    // 结束当前执行语句，显示页面
    return (
      view
    )
  }
}

export default App

