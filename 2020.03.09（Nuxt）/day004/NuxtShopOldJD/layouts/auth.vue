<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
// 这个布局页面用来起到路由导航首页，必须登录才能访问的页面 需要引入该布局文件
export default {
  middleware: "auth"
};
</script>