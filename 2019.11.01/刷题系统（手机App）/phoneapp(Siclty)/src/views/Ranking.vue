<template>
  <div>
    <!--导航 -->
    <van-tabs v-model="activeName">
      <van-tab title="全部" name="a">排名</van-tab>
      <van-tab title="HTML" name="b">HTML</van-tab>
      <van-tab title="JavaScript" name="c">JavaScript</van-tab>
      <van-tab title="Vue" name="d">Vue</van-tab>
      <van-tab title="Node" name="e">Node</van-tab>
      <van-tab title="ES6" name="f">ES6</van-tab>
    </van-tabs>
    <!-- 布局 -->
    <van-row class="bagc">
      <van-col span="8">排名</van-col>
      <van-col span="8">姓名</van-col>
      <van-col span="8">积分</van-col>
    </van-row>
    <!-- list列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'a',
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style>
.bagc {
  background-color: #eeeeee;
}
</style>
