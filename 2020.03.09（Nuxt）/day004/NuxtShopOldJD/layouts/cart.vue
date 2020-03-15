<template>
  <div>
    <!-- 购物车头部 -->
    <div class="nuxt-top">
      <!-- 顶部导航 start -->
      <div class="topnav">
        <div class="topnav_bd w990 bc">
          <div class="topnav_left"></div>
          <div class="topnav_right fr">
            <ul>
              <!-- 登陆了 -->
              <li v-if="$store.state.auth.loggedIn">
                您好：{{$store.state.auth.user.username}}
                <img
                  :src="$store.state.auth.user.avatar"
                  style="width:19px; height:10px; border:5px solid skyblue; border-radius:50%"
                />
                <button @click="logout">退出</button>
              </li>
              <!-- 未登录 -->
              <li v-else>
                您好，欢迎来到京西！
                [
                <nuxt-link to="/login">登录</nuxt-link>]
                [
                <nuxt-link to="/regist">免费注册</nuxt-link>]
              </li>
              <li class="line">|</li>
              <li>
                <nuxt-link to="/order">我的订单</nuxt-link>
              </li>
              <li class="line">|</li>
              <li>客户服务</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 顶部导航 end -->
      <div style="clear:both;"></div>
    </div>
    <div class="nuxt-main">
      <nuxt />
    </div>
    <!-- 购物车底部 -->
    <div class="nuxt-footer">
      <div style="clear:both;"></div>
      <!-- 底部版权 start -->
      <div class="footer w1210 bc mt15">
        <p class="links">
          <a href>关于我们</a> |
          <a href>联系我们</a> |
          <a href>人才招聘</a> |
          <a href>商家入驻</a> |
          <a href>千寻网</a> |
          <a href>奢侈品网</a> |
          <a href>广告服务</a> |
          <a href>移动终端</a> |
          <a href>友情链接</a> |
          <a href>销售联盟</a> |
          <a href>京西论坛</a>
        </p>
        <p class="copyright">© 2005-2013 京东网上商城 版权所有，并保留所有权利。 ICP备案证书号:京ICP证070359号</p>
        <p class="auth">
          <a href>
            <img src="/jdshop/images/xin.png" alt />
          </a>
          <a href>
            <img src="/jdshop/images/kexin.jpg" alt />
          </a>
          <a href>
            <img src="/jdshop/images/police.jpg" alt />
          </a>
          <a href>
            <img src="/jdshop/images/beian.gif" alt />
          </a>
        </p>
      </div>
      <!-- 底部版权 end -->
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: "stylesheet", href: "/jdshop/style/base.css" },
        { rel: "stylesheet", href: "/jdshop/style/global.css" },
        { rel: "stylesheet", href: "/jdshop/style/header.css" },
        { rel: "stylesheet", href: "/jdshop/style/footer.css" }
      ]
    };
  },
  methods: {
    // 退出按钮
    logout() {
      // 调用 auth 模块中的退出方法
      this.$auth.logout();
    }
  }
};
</script>