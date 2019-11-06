<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" />

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
      <van-field
        v-model="passwordok"
        required
        label="确认密码"
        type="passwordok"
        left-icon="lock"
        placeholder="请输入密码"
        label-class="left right"
        :error-message="error3"
      />
    </van-cell-group>

    <!-- 按钮 -->
    <van-button type="danger" class="login-btn" @click="submit">登录</van-button>
    <van-button type="warning" class="login-btn" @click="haveID">已有账号？点击注册</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      passwordok: '',
      error1: '',
      error2: '',
      error3: ''
    }
  },
  methods: {
    onClickLeft () {
      // 返回首页
      this.$router.push('/aswer')
    },
    haveID () {
      // 返回登录页面
      this.$router.push('/login')
    },
    // 登录
    submit () {
      // 用户名验证
      if (this.username === '') {
        this.error1 = '用户名不能为空'
        return false
      } else {
        this.error1 = ''
      }
      // 密码验证
      if (this.password === '') {
        this.error2 = '密码不能为空'
        return false
      } else {
        this.error2 = ''
      }
      // 确认密码
      if (this.password !== this.passwordok) {
        this.error3 = '两次密码不一致'
        return false
      } else {
        this.error3 = ''
      }
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
