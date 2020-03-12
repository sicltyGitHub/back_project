<template>
  <div>
    商品页面
    商品ID为：{{$route.query.id}}
  </div>
</template>

<script>
export default {
  // 使用layout下面的me.vue 作为布局文件
  layout: "me"
};
</script>