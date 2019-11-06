<template>
  <div>
    <!-- 标签栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/answer">答题</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/ranking">排行榜</van-tabbar-item>
      <!-- 通过 template 判断-->
      <template v-if="isLogin">
        <van-tabbar-item icon="user-o" to="/registerLogin">个人中心</van-tabbar-item>
      </template>
      <template v-else>
        <van-tabbar-item icon="user-o" to="/login">登录</van-tabbar-item>
      </template>
    </van-tabbar>
    <!-- 占位符 -->
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    isLogin () {
      // 重新计算并监听当前触发的状态（$store.state 变化的时候，都会冲重新求取计算属性，并且触发相关关联的DOM）
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
</style>
