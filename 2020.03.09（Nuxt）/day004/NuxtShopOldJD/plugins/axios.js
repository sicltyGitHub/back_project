export default function ({ $axios, redirect }) {
  // 前置拦截器（每次发请求之前触发的函数）
  $axios.onRequest(config => {
    // 获取令牌
    let token = localStorage.getItem('token')
    // 判断是否获取到令牌
    if (token === null) {
      config.headers.Authorization = 'Bearer' + token
    }
  })

  // // 调用接口出错了就发起请求
  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })

  // // 后置拦截器（每次发送请求之后返回结果时触发）
  // $axios.onResponse(response => {
  // })
}