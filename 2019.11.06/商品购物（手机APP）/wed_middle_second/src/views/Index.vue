<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <!-- 遍历生生成图片 -->
      <van-swipe-item v-for="(item,index) in ImgList" :key="index">
        <!-- 绑定假数据 -->
        <img :src="item.image" alt />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="4">
      <van-grid-item v-for="item in classList" :key="item.id" :text="item.cat_name" />
    </van-grid>
    <!-- list图片懒加载 -->
    <!-- offset 滚动条与底部距离小于 offset 时触发load事件 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :offset="0"
    >
      <!-- 宫格图片 -->
      <van-grid :column-num="2">
        <van-grid-item v-for="item in goodsList" :key="item.id">
          <img :src="item.image" alt />
          <span class="goods_name">{{item.goods_name}}</span>
          <van-button type="warning" size="small">加入购物车</van-button>
          <span class="price">¥{{item.price}}</span>
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
      page: 0,
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
        if (res.data.ok) {
          this.classList = res.data.data
          // console.log(this.classList)
        }
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
          // 图片加载完后自动获取页数（否则一打开页面就到底了）
          this.page++
        })
      // 加载状态结束
      this.loading = false
    }
  }
}
</script>
<style>
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
</style>
