<template>
  <div class="login">
    <van-nav-bar
      title="注册"
      left-arrow
      @click-left="$router.push('/')" />

      <van-cell-group>
        <van-field
          v-model="form.mobile"
          required
          clearable
          left-icon="manager"
          label="手机号码"
          placeholder="请输入11位手机号码"
          :error-message="error.mobile"
        />
        <van-field
          v-model="form.password"
          type="password"
          label="密码"
          required
          clearable
          placeholder="请输入 6~18 位的数字、字母、下划线做为密码"
          left-icon="lock"
          :error-message="error.password"
        />
        <van-field
          v-model="form.cpassword"
          type="password"
          label="确认密码"
          required
          clearable
          placeholder="请输入确认密码"
          left-icon="lock"
          :error-message="error.cpassword"
        />
      </van-cell-group>
      <van-button @click="login" class="login-btn" type="danger">注册</van-button>
      <van-button @click="$router.push('/login')" class="login-btn" type="warning">已有账号？点击登录</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        cpassword: '',
        password: ''
      },
      error: {
        mobile: '',
        password: '',
        cpassword: ''
      }
    }
  },
  methods: {
    login () {
      let mobileRe = /^1(3|5|7|8|9)\d{9}$/
      if (!mobileRe.test(this.form.mobile)) {
        this.error.mobile = '手机号码格式不正确'
        return false
      }

      let passwordRe = /^[0-9a-zA-Z_]{6,18}$/
      if (!passwordRe.test(this.form.password)) {
        this.error.password = '密码必须是6~18位数字、字母、下划线'
        return false
      }

      if (this.form.password !== this.form.cpassword) {
        this.error.cpassword = '两次密码输入不一致'
        return false
      }

      // 创建一个 URLSearchParams 对象
      let formData = new URLSearchParams()
      formData.append('mobile', this.form.mobile)
      formData.append('password', this.form.password)

      this.$http.post('/regist', formData).then(res => {
        if (res.data.ok === 1) {
          this.$toast('注册成功')
          // 跳转
          this.$router.push('/login')
        } else {
          this.$toast(res.data.error)
        }
      })
    }
  }
}
</script>

<style>
  .login .van-cell-group {
    margin-top: 100px;
  }
  .login {
    text-align: center;
  }
  .login .login-btn {
    margin-top: 50px;
    width: 70%;
  }
</style>
