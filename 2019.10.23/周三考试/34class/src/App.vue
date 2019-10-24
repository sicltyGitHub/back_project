<template>
  <div>
    <router-link to="/">首页</router-link>&nbsp;&nbsp;
    <template v-if="isLogin">
      <span>欢迎您，{{name}}</span>
      <img
        width="80"
        height="80"
        src="https://img14.360buyimg.com/babel/s1180x940_jfs/t1/59905/38/13532/82667/5dad648eEbda8c289/4184095b875ca7f3.jpg.webp"
      />
      <br />
      <button @click="logout">退出</button>
    </template>
    <template v-else>
      <router-link to="/login">登录</router-link>&nbsp;&nbsp;
    </template>

    <hr />
    <!-- 占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["isLogin", "name"])
  },
  methods: {
    ...mapState(["logout"]),
    toIndex() {
      this.$router.push("/");
    },
    toLogin() {
      this.$router.push("/login");
    },
    logout() {
      this.Logout(null);
      // this.$router.push('/login');
    },
    ...mapMutations(["Login", "Logout"])
  }
};
</script>
<style scoped>
</style>
