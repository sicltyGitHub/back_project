<template>
  <div class="login">
    <van-nav-bar :title="title" left-arrow  @click-left="onClickLeft"/>
    <van-cell-group class="box">
      <van-field
        v-model="username"
        required
        clearable
        :error-message="error_1"
        label="用户名"
        left-icon="manager"
        label-align="center"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        required
        clearable
        left-icon="lock"
        label-align="center"
        type="password"
        label="密码"
        :error-message="error_2"
        placeholder="请输入密码"
      />
      <van-field
        v-if="title !== '登录'"
        v-model="password_s"
        required
        clearable
        left-icon="lock"
        label-align="center"
        :error-message="error_3"
        type="password"
        label="确认密码"
        placeholder="请输入确认密码"
      />
    </van-cell-group>
    <template v-if="title == '登录'">
      <van-button type="danger"  style="width:285px" @click="log_in">登录</van-button>
      <van-button type="warning" style="width:285px" @click="title = '注册'">没有账号？点击注册</van-button>
    </template>
    <template v-else>
      <van-button type="danger"  style="width:285px" @click="login">注册</van-button>
      <van-button type="warning" style="width:285px" @click="title = '登录'">已有账号？点击登录</van-button>
    </template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      title: '登录',
      password_s: '',
      error_1: '',
      error_2: '',
      error_3: ''
    }
  },
  methods: {
    ...mapMutations(['setusername']),
    onClickLeft () {
      this.$router.push('/')
    },
    login () {
      if (!this.username) {
        this.error_1 = '用户名不能为空'
        return false
      } else {
        this.error_1 = ''
      }
      if (!this.password) {
        this.error_2 = '密码不能为空'
        return false
      } else {
        this.error_2 = ''
      }
      if (this.password_s !== this.password) {
        this.error_3 = '两次密码输入不一致'
        return false
      } else {
        this.error_3 = ''
      }
      this.$http.post('/users/register', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.ok !== 1) {
          this.$dialog.alert({
            message: res.data.error
          })
        } else {
          this.title = '登录'
          this.username = ''
          this.password = ''
          this.password_s = ''
          this.$dialog.alert({
            message: res.data.msg
          })
        }
      })
    },
    log_in () {
      if (!this.username) {
        this.error_1 = '用户名不能为空'
        return false
      } else {
        this.error_1 = ''
      }
      if (!this.password) {
        this.error_2 = '密码不能为空'
        return false
      } else {
        this.error_2 = ''
      }
      this.$http.post('/access_token', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.ok !== 1) {
          this.$dialog.alert({
            message: res.data.error
          })
        } else {
          sessionStorage.setItem('token', res.data.data.token)
          sessionStorage.setItem('username', this.username)
          sessionStorage.setItem('face', res.data.data.face)
          this.setusername({
            username: this.username,
            face: res.data.data.face
          })
          this.$router.push('/')
          this.username = ''
          this.password = ''
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  margin-top: 100px;
}
.van-button {
    display: block;
    margin: 50px auto;
}
</style>
