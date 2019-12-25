import React, { Component } from 'react'
// 引入路由 Link:点击跳转 NavLink:点击跳转时可以设置样式 

// 引入首页
import index from './computens/index'
// 引入Todolist.js组件
import Todolist from './computens/Todolist'
// 引入生命周期组件
import Life from './computens/Life'

import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './app.css'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* 跳转路径 */}
        <NavLink exact activeClassName="active" to="/">首页</NavLink>
        <NavLink exact activeClassName="active" to="/todo-list">ToDolist案列</NavLink>
        <NavLink exact activeClassName="active" to="/life">生命周期案列</NavLink>
        <hr />
        {/* 路由对应的关系  exact(精确匹配)*/}
        <Route exact path="/" component={index}></Route>
        <Route path="/todo-list" component={Todolist}></Route>
        <Route path="/life" component={Life}></Route>
      </BrowserRouter>
    )
  }
}

