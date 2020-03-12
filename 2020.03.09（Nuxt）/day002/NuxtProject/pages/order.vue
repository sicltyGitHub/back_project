<template>
  <div>订单页面需要登录才能访问</div>
</template>

<script>
export default {
  middleware: "login"
};
</script>

<style scoped>
div {
  line-height: 100px;
  padding: 0 100px;
  background-color: skyblue;
}
</style>
