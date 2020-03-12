<template>
  <div>
    <!-- 3. 使用组件 -->
    <mylogin />
    <ul>
      <li v-for="(item,index) in topics" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
// 1.想要使用components中的Login组件时，先引入组件（~：表示引入根组件）
import Login from "~/components/Logo.vue";
export default {
  async asyncData({ $axios }) {
    // 调用接口
    let res = await $axios.get("https://cnodejs.org/api/v1/topics");
    // 返回值
    return {
      topics: res.data.data
    };
  },
  // 2.注册组件
  components: {
    // 起名：使用的组件
    mylogin: Login
  }
};
</script>