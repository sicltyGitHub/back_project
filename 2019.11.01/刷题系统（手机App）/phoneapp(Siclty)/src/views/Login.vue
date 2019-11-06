<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="登录" left-arrow @click-left="onClickLeft" />

    <!-- 输入框 -->
    <van-cell-group class="inputTop">
      <van-field
        v-model="username"
        required
        label="用户名"
        left-icon="manager"
        placeholder="请输入用户名"
        label-class="left right"
        :error-message="error1 "
      />
      <van-field
        v-model="password"
        required
        label="密码"
        type="password"
        left-icon="lock"
        placeholder="请输入密码"
        label-class="left right"
        :error-message="error2 "
      />
    </van-cell-group>

    <!-- 按钮 -->
    <van-button type="danger" class="login-btn" @click="loginenter">登录</van-button>
    <van-button type="warning" class="login-btn" @click="newLogin">没有账号？点击注册</van-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      error1: '',
      error2: ''
    }
  },
  methods: {
    onClickLeft () {
      // 返回上一层
      this.$router.push('/aswer')
    },
    // 登录
    ...mapActions(['login']),
    loginenter () {
      // 判断是否登录（用户名、密码）
      if (!this.username) {
        this.error1 = '用户名不能为空'
        return false
      } else {
        this.error1 = ''
      }
      if (!this.password) {
        this.error2 = '密码不能为空'
        return false
      } else {
        this.error2 = ''
      }
      // 调用登录接口login
      this.login({
        username: this.username,
        password: this.password
      })
    },
    // 注册按钮
    newLogin () {
      // 跳转到另一个页面
      this.$router.push('/loginNew')
    }
  }
}
</script>

<style>
.inputTop {
  margin-top: 100px;
}
.left {
  padding-left: 25px;
}
.right {
  margin-right: -25px;
}

/* 按钮 */
.login-btn {
  margin-top: 50px;
  width: 70%;
  padding: 0 15px;
  font-size: 14px;
  margin-left: 15%;
}
</style>
