<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/Classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <!-- 退出了，显示登陆按钮 -->
      <van-tabbar-item icon="contact" @click="GoLogin" id="login">登录</van-tabbar-item>
      <!-- 登陆了，显示退出按钮 -->
      <van-tabbar-item icon="close" @click="logout" id="logout">退出</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
// 引入
export default {
  data () {
    return {
      active: 0
    }
  },
  created () {
    this.token = localStorage.getItem('token')
  },
  methods: {
    // 登录
    GoLogin () {
      // this.$router.push('/login')
      // document.getElementById('login').style.display = 'none'
      if (this.token === null) {
        this.$router.push('/login')
        document.getElementById('login').style.display = 'none'
      }
    },
    // 退出
    logout () {
      this.$router.push('/')
      localStorage.clear()
      if (this.token === '') {
        document.getElementById('login').style.display = 'show'
      }
    }
  }
}
</script>

<style>
</style>
