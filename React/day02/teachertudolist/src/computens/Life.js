import React, { Component } from 'react'

export default class Life extends Component {
  // 构造器（组件一创建就执行相当于VUE中的creat）
  constructor(props) {
    super(props)

    this.state = {
      // 定义一个当前事件
      data: new Date().toLocaleString(),
      // 预存定时器（一开始不执行）
      Interval: null
    }
  }

  render() {
    return (
      <div>
        <h2>生命周期组件</h2>
        {/* 渲染页面时间 */}
        {this.state.data}
      </div>
    )
  }

  // 生命周期（组件挂载后调用）
  componentDidMount() {
    // 启动定时器（Ajax、取数据、业务启动逻辑种尽量写在这里，因为浏览者打卡页面时间短）
    let Interval = setInterval(() => {
      this.setState({
        data: new Date().toLocaleString()
      })
    }, 1000)

    // 设置定时器
    this.setState({
      Interval
    })
  }

  // 生命周期（销毁组件时执行：使用了类似定时器这种持久资源需要在这里手动销毁）
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.state.Interval)
  }
}


  // // 生命周期（组件挂载前调用）
  // componentWillMount() {
  // }
  // // 生命周期（组件更新后调用）
  // componentDidUpdate() {
  // }

