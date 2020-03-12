<template>
  <div>
    <div class="header">
      <!-- 按钮 -->
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/order">订单</nuxt-link>
    </div>
    <div class="main">
      <!-- 页面加载文件 -->
      <nuxt />
    </div>
    <div class="footer">技术支持：全栈</div>
  </div>
</template>

<style>
.header {
  height: 50px;
  line-height: 50px;
  background-color: #f2f2f2;
}
.main {
  background-color: #eee;
  width: 1000px;
  margin: 10px auto;
}
.footer {
  height: 50px;
  background-color: black;
  color: #fff;
}
</style>