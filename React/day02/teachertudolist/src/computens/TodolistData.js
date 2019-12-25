// import React, { Component } from 'react'

// export default class TodolistData extends Component {
//   render() {
//     return (
//       <div>
//         {
//           // props接收父组件传来的值
//           this.props.dataMessage.map((v, k) => {
//             // 删除点击箭头函数
//             return <li key={k}>{v}———————<button onClick={() => { this.props.del(k) }}>删除</button></li>
//           })
//         }
//       </div>
//     )
//   }
// }

// class变为function（省略this）
import React from 'react'

export default function TodolistData(props) {
  return (
    <div>
      {
        // props接收父组件传来的值
        props.dataMessage.map((v, k) => {
          // 删除点击箭头函数
          return <li key={k}>{v}———————<button onClick={() => { props.del(k) }}>删除</button></li>
        })
      }
    </div>
  )
}
