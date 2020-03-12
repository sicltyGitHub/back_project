<template>
  <div>
    <h1>{{topic.title}}</h1>
    <p v-html="topic.content"></p>
  </div>
</template>

<script>
export default {
  // 使用params接收参数
  async asyncData({ $axios, params, payload }) {
    // console.log(params.id);
    // 判断如有有数据了就直接使用这个数据
    if (payload) return { topic: payload };
    // 没有就调用接口
    else {
      let res = await $axios.get(
        "https://cnodejs.org/api/v1/topic/" + params.id
      );
      // console.log(res);
      return {
        topic: res.data.data
      };
    }
  }
};
</script>


<style>
</style>
