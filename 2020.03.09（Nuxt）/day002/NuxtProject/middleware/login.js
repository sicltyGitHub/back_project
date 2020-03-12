// 中间件文件
// function hello(context) {
//   console.log("hello world");
// }
// export default hello;


// （使用中间件）判断用户是否登录
function auth(context) {
  // 客户端：获取不到服务器端的令牌，就跳转到登录页面
  if (!process.serve) {
    // 是否获取到令牌
    if (null === localStorage.getItem('token')) {
      // 没有跳转到登录页面-----> 使用这种方法返回时候能回到订单页面
      // location.href = '/login'
      context.redirect('/login')
    }
    // 浏览器端
  } else {
    // 直接在服务器中进入订单页面
    context.redirect('/login')
  }
}

export default auth