<template>
  <!-- 顶部导航 -->
  <div class="top-bar">
    <!-- 居中容器 -->
    <div class="container">
      <div class="col-5">
        <!-- 折叠框 -->
        <zdk title="山西" loaction>
          <!-- 组件中设置了插槽，现在可以直接放东西 -->
          <ul class="top-bar-zdk-dzul">
            <li v-for="(item,index) in 30" :key="index" style="color: #333;">
              <nuxt-link to>北京</nuxt-link>
            </li>
          </ul>
        </zdk>
      </div>
      <div class="col-7">
        <ul class="top-bar-menu">
          <li>
            <nuxt-link to>你好，请登录</nuxt-link>
            <nuxt-link to style="color:red">免费注册</nuxt-link>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <nuxt-link to style="color:red">我的订单</nuxt-link>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <zdk arrow title="我的京东">
              <!-- 组件中设置了插槽，现在可以直接放东西 -->
              <ul class="top-bar-zdk-dzul">
                <li v-for="(item,index) in 10" :key="index" style="color: #333;">
                  <nuxt-link to>处理订单待</nuxt-link>
                </li>
              </ul>
            </zdk>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <nuxt-link to>京东会员</nuxt-link>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <zdk arrow title="企业采购" style="color:red">
              <!-- 组件中设置了插槽，现在可以直接放东西 -->
              <ul class="top-bar-zdk-dzul">
                <li v-for="(item,index) in 6" :key="index" style="color: #333;">
                  <nuxt-link to>企业购</nuxt-link>
                </li>
              </ul>
            </zdk>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <Right arrow title="客户服务">
              <!-- 组件中设置了插槽，现在可以直接放东西 -->
              <ul class="top-bar-zdk-dzul">
                <li v-for="(item,index) in 10" :key="index" style="color: #333;">
                  <nuxt-link to>帮助中心</nuxt-link>
                </li>
              </ul>
            </Right>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <Right arrow title="网站导航">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Right>
          </li>
          <li class="top-bar-line"></li>
          <li>
            <nuxt-link to>手机京东</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入折叠框组件
import zdk from "~/components/zdk";
import Right from "~/components/Right";
export default {
  // 使用组件时先注册一下
  components: { zdk, Right }
};
</script>

<style lang="scss">
.top-bar {
  width: 100%;
  height: 35px;
  background-color: #e3e4e5;
  &-zdk-dzul {
    width: 295px;
    color: rgb(153, 153, 153);
    li {
      display: inline-block;
      color: rgb(153, 153, 153);
      a {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        margin-right: 35px;
        a:hover {
          color: rgb(227, 51, 51);
          background-color: rgb(244, 244, 244);
        }
      }
    }
  }
  &-menu {
    float: right;
    li {
      float: left;
      height: 35px;
      line-height: 35px;
    }
  }
  &-line {
    width: 1px;
    height: 0.9em !important;
    margin: 0 7px;
    margin-top: 12px;
    background-color: #ccc;
  }
}
</style>