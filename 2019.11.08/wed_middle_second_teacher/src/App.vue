<template>
  <div class="app">
    <!-- 标签栏 -->
    <van-tabbar :route="true">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/me">个人中心</van-tabbar-item>
    </van-tabbar>
    <!-- 占位符 -->
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.app {
  padding-bottom: 110px;
}
</style>
