<template>
  <div class="about">
    <h1>登录页</h1>
    <div>
      用户名：
      <input v-model="loginForm.username" type="text" />
    </div>
    <div>
      密码：
      <input v-model="loginForm.password" type="text" />
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      // 根据登录 接口登录
      this.$http.post("/access_token", this.loginForm).then(res => {
        // 判断是否登录
        if (res.data.ok === 1) {
          // 登陆成功弹出提示框
          alert("登录成功，可以开始答题了！");
          // 设置登录令牌
          sessionStorage.setItem("token", res.data.data.token);
          // 用户登录通过令牌
          sessionStorage.setItem("username", this.loginForm.username);
          // 登录成功跳转到下个页面
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
