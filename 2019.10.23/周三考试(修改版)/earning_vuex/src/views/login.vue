<template>
  <div class="login">
    <!-- card 组件 -->
    <el-card class="card">
      <!-- 图片 -->
      <div class="avatar">
        <img src="../assets/girl.jpeg" />
      </div>
      <!-- 表单 -->
      <!-- :rules 表单校验规则对象 -->
      <el-form class="login-form" :model="loginForm" :rules="loginFormRules" ref="loginFormRef">
        <!-- 账号/用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <div class="clearfix">
          <el-button type="primary" class="button-login" @click="doLogin">登录</el-button>
          <el-button type="info" class="button-reset" @click="handleReset">重置</el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 映射登录
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 校验规则对象
      loginFormRules: {
        username: [
          { required: true, message: '请输入您的用户名', trigger: 'blur' },
          {
            min: 3,
            max: 18,
            message: '用户名长度在 3 到 18个字符之间',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          {
            min: 6,
            max: 18,
            message: '密码长度在 6 到 18个字符之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 重置表单数据
    handleReset () {
      this.$refs.loginFormRef.resetFields()
    },

    // 映射登录
    ...mapActions(['login']),
    // @click调用登录接口
    doLogin () {
      // 调用登录接口login
      this.login(this.loginForm)
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #d6f7c1;

  .card {
    width: 450px;
    height: 304px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // 这句话就是为了干掉 overflow:hidden 就和没写一样效果
    overflow: initial;
  }

  .avatar {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 8px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    background-color: #fff;
    left: 50%;
    transform: translate(-50%, -60%);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }

  .login-form {
    margin-top: 100px;
  }

  .button-reset {
    float: right;
  }
}
</style>
