<template>
  <div class="index">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in Steapimages" :key="index">
        <van-image :src="item.images" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(item,index) in classify"
        :key="index"
        :icon="item.classify_image"
        :text="item.classify_name"
      />
    </van-grid>
    <!-- 倒计时商品 -->
    <div class="daojs">
      <!-- 倒计时商品上部分 -->
      <div class="daojs_top clearfix">
        小样秒杀
        <span class="daojs_top_span">秒杀尽享好物</span>
        <!-- 倒计时 -->
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>:
            <span class="item">{{ timeData.minutes }}</span>:
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <!-- 倒计时商品呢下部分 -->
      <div class="floor-container seckill-slider j_sk_wrapper" style="overflow-x: scroll">
        <ul
          class="seckill-new-list j_sk_list"
          style="transition: all 0.3s ease 0s; transform: translate3d(0px, 0px, 0px); width: 890.011px;"
          v-for="(item,index) in seckill"
          :key="index"
        >
          <li class="seckill-new-item j_sk_li" style="width: 84.3011px;">
            <div class="seckill-item-img">
              <a class="seckill-new-link">
                <img :src="item.seckill_image" class="seckill-photo" />
              </a>
            </div>
            <div class="seckill-item-price">
              <!-- 活动价格 -->
              <span class="seckill-new-price">
                <em>¥</em>
                <span class="j_init_price" price="126600">{{item.seckill_sprice_del}}</span>
              </span>
              <!-- 原价 -->
              <span class="seckill-original-price">
                <em>¥</em>
                <del class="j_init_price" price="220000">{{item.seckill_sprice_yuanjia}}</del>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新人领卷 -->
    <div class="newPeople">
      <div class="newPeople_img">
        <img src="../assets/新人领卷(1).jpg" alt />
        <img src="../assets/新人领卷(2).png" alt />
      </div>
    </div>
    <!-- 每日逛 -->
    <div class="padding">
      <div class="everday">
        <img src="../assets/每日逛.jpg" alt />
      </div>
      <van-grid :column-num="4">
        <van-grid-item v-for="(item,index) in everyshop" :key="index">
          <span class="backRed">
            <strong
              class="graphic-tit j_linear_color"
              style="background: -webkit-linear-gradient(left,#FF765C,#FF23B3);background: linear-gradient(90deg, #FF765C,#FF23B3);-webkit-background-clip: text;color: transparent;"
            >{{item.everyshop_mx_star}}</strong>
          </span>
          <p class="graphic-wz">{{item.everyshop_mx_go}}</p>
          <van-image :src="item.everyshop_image" />
        </van-grid-item>
      </van-grid>
      <!-- 通知栏 -->
      <van-notice-bar
        color="#1989fa"
        background="#ecf9ff"
        text="书法练习永远不会落伍，心中的才情由钢笔施展出来"
        left-icon="volume-o"
      />
      <!-- 为你推荐 -->
      <div class="everday">
        <img src="../assets/为你推荐.jpg" alt />
      </div>
      <!-- list组件 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是有底线的~"
        @load="onLoad"
        :offset="0"
      >
        <van-grid :column-num="2">
          <van-grid-item v-for="(item,index) in recommended" :key="index">
            <van-image width="100%" height="100%" :src="item.recommended_image" />
            <div>
              <p>{{item.recommended_name}}</p>
              <span class="goods_one">¥:{{item.recommended_price}}</span>
              <van-button color="#3f3f3f" size="mini" @click="addToCart(item.id)">加入购物车</van-button>
            </div>
          </van-grid-item>
        </van-grid>
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 存放轮播图数据
      Steapimages: [],
      // 存放宫格图
      classify: [],
      // 开启倒计时
      time: 30 * 60 * 60 * 60,
      // 存放秒杀图
      seckill: [],
      // 每日逛图片
      everyshop: [],

      // list组件
      loading: false,
      finished: false,
      // 存放list图片
      recommended: [],
      page: 1,
      per_page: 6,
      show: true
    }
  },
  methods: {
    onLoad () {
      this.$http
        .get(`/stape_recommended?page=${this.page}&per_page=${this.per_page}`)
        .then(res => {
          if (res.data.data.length === 0) {
            this.show = false
          } else {
            this.show = true
          }
          this.recommended.push(...res.data.data)
          console.log(this.recommended)

          this.page += 1
          // console.log(this.page)

          // 加载状态结束
          this.loading = false
          // 大于24条数据时提示“我是有底线的”
          if (this.recommended.length >= 25) {
            this.finished = true
          }
        })
    },

    // 加入购物车
    addToCart (id) {
      // ------------操作id----------------
      // 浏览器取数据
      let ids = localStorage.getItem('id')
      // console.log(ids)
      // 第一次购买东西，浏览器为null,先判断
      if (ids === null) {
        // 如果还没有，定义一个空数据，加入id
        ids = [id]
      } else {
        // 转成数组
        ids = JSON.parse(ids)
        // 把新商品id加入
        ids.push(id)
        // es6新语法去重
        ids = Array.from(new Set(ids))
      }
      // 转成字符串保存回浏览器
      localStorage.setItem('id', JSON.stringify(ids))

      // ------------操作cart----------------
      // 浏览器取数据
      let cart = localStorage.getItem('cart')
      // console.log(ids)
      // 第一次购买东西，浏览器为null,先判断
      if (cart === null) {
        cart = []
        cart[id] = {
          // 默认不勾选
          ischk: false,
          // 购买数量
          count: 1
        }
      } else {
        // 先转成数组
        cart = JSON.parse(cart)
        // 判断是否有这件商品，若有数量+1，没有设置为1
        if (cart[id] === undefined || cart[id] === null) {
          cart[id] = {
            ischk: false,
            count: 1
          }
        } else {
          cart[id].count++
        }
      }
      // 转成字符串保存回浏览器
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  },
  // 刚打开页面就渲染数据
  created () {
    // 轮播图
    this.$http.get('/stape_images').then(res => {
      this.Steapimages = res.data.data
    })
    // 宫格
    this.$http.get('/stape_classify').then(res => {
      this.classify = res.data.data
    })
    // 秒杀
    this.$http.get('/stape_seckill').then(res => {
      this.seckill = res.data.data
    })
    // 每日购
    this.$http.get('/stape_everyshop').then(res => {
      this.everyshop = res.data.data
    })
  }
}
</script>

<style>
.index {
  width: 100%;
}
.everday {
  position: relative;
  height: 38.63px;
  width: 100%;
}
.everday img {
  width: 100%;
  max-height: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: rgb(246, 246, 246);
}
.padding {
  padding-bottom: 50px;
}
.goods_one {
  color: #fc2c4d;
  margin-right: 25px;
}
p {
  font-size: 15px;
}
.colorsize {
  font-size: 13px;
}
/* 倒计时 */
.daojs {
  height: 185px;
  padding: 6px;
  border-radius: 25px;
  background-color: rgb(246, 246, 246);
}
/* 倒计时上部分 */
.daojs_top {
  font-size: 20px;
  font-weight: bold;
  padding: 0 7px 0 7px;
  margin-bottom: 10px;
  background: url(../assets/倒计时背景颜色.png);
  background-size: contain;
}
.daojs_top_span {
  font-size: 15px;
  color: #f77e92;
  font-weight: inherit;
}
/* 自定义倒计时样式 */
.item {
  margin-top: 7px;
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #dfdfdf;
  background-color: rgb(255, 255, 255);
}
/* 清除浮动 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
.van-count-down {
  float: right;
}
/* 倒计时下部分 */
.floor .floor-container:last-child {
  border-bottom: none;
}
.floor-container:last-child {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
.floor-container {
  width: 100%;
  font-size: 0;
  overflow: hidden;
}
.seckill-new-list {
  position: relative;
  background-color: #fff;
  padding-left: 0.25rem;
}
.seckill-new-item {
  width: 4rem;
  float: left;
}
/* li中的div */
.seckill-item-img,
.seckill-item-price {
  width: 100%;
  padding: 0 0.25rem;
}
.seckill-item-img a {
  text-decoration: none;
}
.floor-container img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
/* li中的div */
.seckill-item-price {
  margin: 0 auto;
  text-align: center;
}
.seckill-item-img,
.seckill-item-price {
  width: 100%;
  padding: 0 0.25rem;
}
/* 原价 */
.seckill-new-price {
  font-family: JDZhengHT-EN-Bold;
  margin-top: 10px;
  display: block;
  color: #e93b3d;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  text-align: center;
}
.seckill-new-price em {
  font-size: 11px;
  padding-right: 2px;
}
em,
i {
  font-style: normal;
}
/* 活动价格 */
.seckill-original-price {
  color: #999;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 11px;
  text-align: center;
  padding: 0 2px;
  display: inline-block;
  position: relative;
}
.seckill-original-price em {
  font-size: 9px;
  position: relative;
  padding-right: 2px;
}
.seckill-original-price {
  color: #999;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 11px;
  text-align: center;
  padding: 0 2px;
  display: inline-block;
  position: relative;
}
/* 新人领卷 */
.newPeople {
  height: 132.47px;
  padding: 1px 10px 10px 10px;
}
.newPeople_img img {
  /* width: 195.95px; */
  width: 50%;
  height: 132.47px;
}
/* 每日逛街 */
.graphic-wz {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #222222;
  font-size: 0.6rem;
  line-height: 0.825rem;
  height: 0.75rem;
}
</style>
