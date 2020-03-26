<template>
  <div class="index">
    <!-- 最顶部会隐藏固定条 -->
    <div>
      <topFixedTop />
    </div>
    <!-- 顶部导航 -->
    <TopBaar />
    <!-- 顶部logo、搜索、广告图片 -->
    <TopMenu />
    <!-- 分类、轮播图 -->
    <div class="container" style="margin-top:10px">
      <div class="row gutter">
        <!-- 商品分类组件 -->
        <CatTreeMenu />
        <div class="col-6">
          <!-- 轮播图组件 -->
          <Swiper />
        </div>
        <div class="col-2 himages">
          <!-- 三个图片轮播 -->
          <Hswiper />
        </div>
        <div class="col-2">
          <div class="tright">
            <!-- 头像 登录-->
            <div class="row">
              <div class="col-4">
                <img
                  class="tright-avater"
                  src="data:image/png;base64,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"
                  alt
                />
              </div>
              <div class="col-8">
                <div>
                  <nuxt-link to="/login">Hi~欢迎逛京东！</nuxt-link>
                </div>
                <div>
                  <nuxt-link to="/login">登录</nuxt-link>|
                  <nuxt-link to="regist">注册</nuxt-link>
                </div>
              </div>
            </div>
            <!-- 两个按钮 -->
            <div class="tright-twobtn">
              <nuxt-link class="tright-fl" to>新人福利</nuxt-link>
              <nuxt-link class="tright-plus" to>PLUS会员</nuxt-link>
            </div>
            <!-- 京东快报 -->
            <div class="tright-news">
              <h3>
                京东快报
                <nuxt-link to>更多</nuxt-link>
              </h3>
              <ul class="tright-news-item">
                <li v-for="(item, index) in 4" :key="index">
                  <nuxt-link to>
                    <span>HOT</span>
                    降了！iPhone 11.....
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <!-- 12个图标 -->
            <div class="row gutter tright-icons">
              <div class="col-4" v-for="(item, index) in 12" :key="index">
                <img
                  src="//m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"
                  alt
                />
                <div>花费</div>
              </div>
              <div class="col-4"></div>
              <div class="col-4"></div>
              <div class="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 秒杀 -->
    <div class="container seckill">
      <div class="row">
        <!-- 左边秒杀 -->
        <div class="col-2">
          <Conut-Down title="8:00" start="2020-3-27 18:00:00" />
        </div>
        <!-- 中间轮播图 -->
        <div class="col-8">
          <!-- 商品循环滚动 -->
          <GoodsScroll />
        </div>
        <div class="col-2">
          <!-- 两张图片小轮播 -->
          <ISwiper />
        </div>
      </div>
    </div>
    <!-- 每日特价、品牌闪购 -->
    <div class="container">
      <div class="row gutter tj">
        <!-- 每日特价 -->
        <div class="col-6">
          <Every-Tejia/>
        </div>
        <!-- 品牌闪购 -->
        <div class="col-6">
          <Brand-Shangou/>
        </div>
      </div>

      <!-- 新品首发、排行榜、逛好店、领卷中心 -->
      <div class="row gutter xp">
        <div class="col-3">
          <Card title="新品首发"></Card>
        </div>
        <div class="col-3">
          <Card title="排行榜"></Card>
        </div>
        <div class="col-3">
          <Card title="逛好店">
            <!-- 插槽 -->
            <template>
              <div class="ghd">
                <div class="ghd-item-1">
                  <img
                    src="https://img20.360buyimg.com/mobilecms/s100x100_jfs/t30649/285/1325340926/266795/c281e15/5cdcc7d4N16e78c84.jpg.webp"
                    alt
                  />
                  <div class="ghd-title">奥义瑜伽京东自营旗舰店</div>
                  <nuxt-link to>随心所动</nuxt-link>
                  <p>14.8万人关注</p>
                </div>
                <div class="ghd-item-2">
                  <img
                    src="https://img12.360buyimg.com/mobilecms/s100x100_jfs/t1/92936/22/4456/117828/5de75596Edb5ff3f7/ed165932b9ac8e18.jpg.webp"
                    alt
                  />
                  <div class="ghd-title">新经典文化京东自营店</div>
                  <nuxt-link to>博览群书</nuxt-link>
                  <p>41.6万人关注</p>
                </div>
              </div>
            </template>
          </Card>
        </div>
        <div class="col-3">
          <Card title="领卷中心"></Card>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">页脚</div>
  </div>
</template>

<script>
// 引入组件
import TopBaar from "~/components/TopBar";
import Logo from "~/components/Logo";
import cart from "~/components/cart";
import TopMenu from "~/components/TopMenu";
// 商品分类树 组件
import CatTreeMenu from "~/components/CatTreeMenu";
// 轮播图组件
import Swiper from "~/components/Swiper";
// 引入小轮播图
import Hswiper from "~/components/Hswiper";
// 秒杀
import ConutDown from "~/components/ConutDown";
// 商品滚动
import GoodsScroll from "~/components/GoodsScroll";
// 引入两张图片轮播图
import ISwiper from "~/components/ISwiper";
// 引入顶部导航滚动
import topFixedTop from "~/components/topFixedTop";
// 每日特价
import EveryTejia from "~/components/EveryTejia";
// 卡片
import Card from "~/components/Card";
// 品牌闪购
import BrandShangou from "~/components/BrandShangou";
export default {
  // 注册引入的组件
  components: {
    TopBaar,
    Logo,
    cart,
    TopMenu,
    CatTreeMenu,
    Swiper,
    Hswiper,
    ConutDown,
    GoodsScroll,
    topFixedTop,
    ISwiper,
    Card,
    EveryTejia,
    BrandShangou
  },
};
</script>

<style lang="scss">
.index {
  background-color: #f2f2f2;
  .tright {
    padding: 5px;
    background-color: #fff;
    &-icons {
      .col-4 {
        margin-top: 5px;
      }
      text-align: center;
      img {
        width: 28px;
        height: 28px;
      }
    }
    &-avater {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    &-twobtn {
      text-align: center;
      padding: 10px;
      margin: 15px 0;
      border-bottom: 1px solid #ccc;
    }
    &-fl,
    &-plus {
      height: 25px;
      padding: 8px;
      font-size: 12px;
      line-height: 25px;
      margin: 10px auto;
      border-radius: 15px 15px 15px 15px;
    }
    &-fl {
      background-color: red;
      color: #fff;
    }
    &-plus {
      background-color: black;
      color: rgb(219, 206, 139);
      &:hover {
        background-color: rgb(200, 22, 35);
      }
    }
    &-news {
      margin-bottom: 3px;
      padding-bottom: 5px;
      border-bottom: 1px solid #ddd;
      h3 {
        a {
          float: right;
          color: #aaa;
          font-size: 12px;
          font-weight: normal;
        }
      }
      &-item {
        padding: 5px;
        line-height: 2em;
        span {
          padding: 3px;
          margin-right: 5px;
          color: rgb(225, 37, 27);
          background-color: rgb(253, 238, 237);
        }
      }
    }
  }

  // 秒杀
  .seckill {
    margin-top: 20px;
    cursor: pointer;
  }
  // 页脚
  .footer {
    height: 1000px;
  }
  // 每日特价
  .tj {
    margin-top: 20px;
    .today {
      background-color: #fff;
      padding: 10px;
    }
  }
  // 逛好店
  .ghd {
    padding: 10px;
    &-item-1,
    &-item-2 {
      position: relative;
      height: 110px;
      margin-top: 8px;
      img {
        float: right;
        width: 30%;
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
      }
      padding: 15px;
      a {
        padding: 2px;
        color: #596fab;
        border: 1px solid #596fab;
      }
      p {
        position: absolute;
        color: 10px;
        bottom: 10px;
      }
    }
    &-item-1 {
      background-color: #f1f5f9;
      margin-bottom: 15px;
    }
    &-item-2 {
      background-color: #f1f5f0;
    }
  }
  .xp {
    margin-top: 20px;
  }
}
</style>