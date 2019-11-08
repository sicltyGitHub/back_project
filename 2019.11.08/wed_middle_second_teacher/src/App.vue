<template>
  <div>
    <!-- 标签栏 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
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
</style>
