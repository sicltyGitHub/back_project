<template>
  <div>
    <!-- 面板 -->
    <van-nav-bar title="选择题目分类" />
    <!-- 宫格 -->
    <van-grid clickable :column-num="3">
      <!-- 遍历6个数 通过id、用户名 -->
      <van-grid-item
        v-for="item in categoriesList"
        :key="item.id"
        :text="item.cat_name"
        :to="'/question?id=' + item.id + '&cat_name=' + item.cat_name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 存放数据
      categoriesList: []
    }
  },
  created () {
    // 调用
    this.getCategoriesList()
  },
  methods: {
    // 渲染数据
    getCategoriesList () {
      this.$http.get('/categories').then(res => {
        if (res.data.ok === 1) {
          this.categoriesList = res.data.data
        }
      })
    }
  }
}
</script>
