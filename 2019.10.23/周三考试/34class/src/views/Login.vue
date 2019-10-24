<template>
  <div>
    <h1>登录页面</h1>
    <div>
      用户名：
      <input type="text" v-model="username" />
    </div>
    <div>
      密码：
      <input type="text" v-model="password" />
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // 异步添加
      this.$http.post("access_token").then(res => {
        // 判断有没有值
        if (res.data.ok == 1) {
          // 设置token 令牌
          localStorage.setItem("token", res.data.data.token);
          this.Login(this.username);
          this.$router.push("/");
        } else {
          alert(res.data.error);
        }
      });
    },
    ...mapMutations(["Login"])
  }
};
</script>