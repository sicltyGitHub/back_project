<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <!-- 遍历生生成图片 -->
      <van-swipe-item v-for="(item,index) in ImgList" :key="index">
        <!-- 绑定假数据 -->
        <img :src="item.image" alt class="swipeclass" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="4">
      <van-grid-item v-for="item in classList" :key="item.id" :text="item.cat_name" />
    </van-grid>
    <!-- list图片懒加载 -->
    <!-- offset 滚动条与底部距离小于 offset 时触发load事件 -->
    <van-list
      finished-text="我是有底线的~"
      v-model="loading"
      :finished="finished"
      @load="onLoad"
      :offset="0"
    >
      <!-- 宫格图片 -->
      <van-grid :column-num="2">
        <van-grid-item v-for="item in goodsList" :key="item.id">
          <!-- 使用插存放图片 文字 -->
          <template slot="icon">
            <van-image :src="item.image"></van-image>
          </template>
          <template slot="text">
            <span class="goods_name">{{item.goods_name}}</span>
            <van-button type="warning" size="small" @click="addToCart(item.id)">加入购物车</van-button>
            <span class="price">¥{{item.price}}</span>
          </template>
        </van-grid-item>
      </van-grid>
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 存放数据
      ImgList: [],
      // 分类
      classList: [],
      // 图片加载
      loading: false,
      // 完成
      finished: false,
      goodsList: [],
      page: 1,
      per_page: 10
    }
  },
  created () {
    // 调用轮播图
    this.List()
    // 分类
    this.class()
  },
  methods: {
    // 渲染轮播图数据
    List () {
      this.$http.get('/main_ad_images').then(res => {
        this.ImgList = res.data.data
      })
    },
    // 渲染分类数据
    class () {
      this.$http.get('/index_categories').then(res => {
        this.classList = res.data.data
        // console.log(this.classList)
      })
    },
    // 图片加载
    onLoad () {
      // 通过接口发起请求
      this.$http
        .get(`/index_goods?page=${this.page}&per_page=${this.per_page}`)
        .then(res => {
          // 把获取的数据放到goodsList中
          this.goodsList.push(...res.data.data)
          console.log(this.goodsList)
          // 加载状态结束
          this.loading = false

          // 判断是否已经10条了
          if (this.goodsList.length >= 16) {
            // 标记为已经没有更多 数据了，禁止加载事件
            this.finished = true
          } else {
            // 图片加载完后自动获取页数（否则一打开页面就到底了）
            this.page++
          }
        })
    },
    // 加入购物车
    addToCart (id) {
      // 先从浏览器去出 id(商品信息)
      let goods = localStorage.getItem('id')
      // 如果还没有就定义一个数组并把ID放进去
      if (goods === null) {
        goods = [id]
      } else {
        // 先转成数组
        goods = JSON.parse(goods)
        // 把新商品id加入
        goods.push(id)
        // ES6去重
        goods = Array.from(new Set(goods))
      }
      //  把 ids 转字符串，然后再保存回浏览器
      localStorage.setItem('id', JSON.stringify(goods))

      // 1.先从浏览器中取出 商品信息数组
      let cart = localStorage.getItem('cart')
      // 如果还没有就直接定义数组并把ID放进去
      if (cart === null) {
        // 先把cart 设置成一个数组
        cart = []
        cart[id] = {
          // 默认不勾选
          ischk: false,
          // 默认是1
          count: 1
        }
      } else {
        // 先转成数组
        cart = JSON.parse(cart)
        // 先把新的商品加进去
        cart[id] = {
          ischk: false,
          count: 1
        }
      }
      // 把ids 转成字符串，然后再保存回浏览器
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }
}
</script>

<style>
.swipeclass {
  width: 100%;
  height: 240px;
}
.goods_name {
  font-size: 15px;
  font-family: "Microsoft YaHei";
  margin-bottom: 5px;
}
.price {
  color: red;
  margin-top: 5px;
  font-weight: bold;
  font-family: "Microsoft YaHei";
}

.van-list {
  margin-bottom: 50px;
}
</style>
