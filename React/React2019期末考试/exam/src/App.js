import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
//引入home组件
import Home from './page/home'
export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Route path="/"  component={Home}/>
      </BrowserRouter>
      </div>
    )
  }
}
