// import React, { Component } from 'react'

// export default class TodolistInput extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.props.valueChang} value={this.props.dataInput} />
//         <button onClick={this.props.add}>添加</button>
//       </div>
//     )
//   }
// }

// 把class变为函数组件（省略this）
import React from 'react'

export default function TodolistInput(props) {
  return (
    <div>
      <input type="text" onChange={props.valueChang} value={props.dataInput} />
      <button onClick={props.add}>添加</button>
    </div>
  )
}