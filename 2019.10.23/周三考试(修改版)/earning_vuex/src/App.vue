<template >
  <div class="backcolor clearfix">
    <router-link class="odiv" to="/index">首页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
    <!-- 登录之后显示XXX登录成功 -->
    <template v-if="username !== ''">
      欢迎您，{{username}}
      <el-button type="info" round @click="logout">退出</el-button>
    </template>

    <!-- 未登录 -->
    <router-link v-else to="/" class="odiv">登录</router-link>
    <!-- 占位符 -->
    <router-view />
  </div>
</template>

<script>
// 映射
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['username'])
  },
  methods: {
    ...mapMutations(['logout'])
  }
}
</script>

<style lang="less">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0px;
  background-color: rgb(175, 172, 172);
}
.backcolor {
  width: 100%;
  height: 100%;
  background-size: 100%;
}

.clearfix::after {
  content: " ";
  display: block;
  clear: both;
  width: 0;
  height: 0;
}

.odiv {
  float: left;
  width: 49%;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 35px;
  border-right: 19px solid skyblue;
  box-sizing: border;
  background-color: #faf49a;
}
</style>
