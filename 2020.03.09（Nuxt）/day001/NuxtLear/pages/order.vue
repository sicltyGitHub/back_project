<template>
  <div>
    订单页面
    默认使用default布局文件，
    布局文件中一边写网站公认的内容：顶部导航和底部导航！！

    <div style="overflow:hidden;">
      <div class="left">
        <!-- 跳转按钮 -->
        <nuxt-link to="/order/tom">tom页面</nuxt-link> <br/>
        <nuxt-link to="/order/jack">jack页面</nuxt-link>
      </div>
      <div class="right">
        <!-- 显示子页面 -->
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<style>
.left{
  float: left;
  width: 20%;
}
.right{
  float: right;
  width: 78%;
  background-color: skyblue;
}

</style>