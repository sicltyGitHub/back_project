<template>
  <div class="home">
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/index">答题</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/leaderboard">排行榜</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/myself">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
