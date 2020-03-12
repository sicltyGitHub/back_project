<template>
  <div class="aaa">
    <div class="header">
      <span>cnode 论坛</span>
      <!-- 跳转按钮 -->
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/order">订单</nuxt-link>
    </div>
    <!-- 主体部分 会改变的部分 -->
    <div class="main">
      <!-- 显示子页面 -->
      <nuxt />
    </div>
    <div class="footer">
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
a {
  color: #333;
  text-decoration: none;
}
.header {
  height: 50px;
  color: #fff;
  line-height: 50px;
  padding: 0 100px;
  background-color: #434343;
}
.header a {
  color: #fff;
}
.main {
  background-color: #e1e1e1;
  padding: 20px 0 20px 0;
}
.footer {
  padding: 50px;
  background-color: #fff;
}
</style>
