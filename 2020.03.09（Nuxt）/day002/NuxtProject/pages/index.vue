<template>
  <div class="index">
    <!-- 引入assets图片 -->
    <img src="~/assets/1410L214511Y0-91L27.jpg" alt="皮卡丘~"   width="200">
    <!-- 引入 static 中的图片-->
    <img src="/girl.jpeg" alt="女孩" width="200">
    <ul>
      <li v-for="(item,index) in topice" :key="index">
        <nuxt-link :to="'/content/'+item.id">{{item.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 使用es6新语法  nuxt中必须使用asyncData，必须有返回值
  async asyncData({$axios}) {
    let res = await $axios.get('https://cnodejs.org/api/v1/topics')
    return {
      topice: res.data.data
    }
  },
};
</script>


<style>
.index {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
</style>
