<template>
  <div>
    order 的子页面：jack
    <!-- 跳转按钮 -->
    <nuxt-link to="/order/jack/j1">order中Jack中的j1页面</nuxt-link>
    <nuxt-link to="/order/jack/j2">order中Jack中的j2页面</nuxt-link>
    <hr />

    <!-- 显示子页面 -->
    <nuxt-child />
  </div>
</template>