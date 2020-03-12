<template>
  <div>
    <h1>{{ topic.title }}</h1>
    <p v-html="topic.content"></p>
  </div>
</template>

<script>
export default {
  // // 页面中间件
  // middleware: "hello",
  // 使用params接收参数

  // 单独设置页面标题信息
  head() {
    return {
      title: this.topic.title,
      // SEO(搜索)：页面关键字与描述
      meta: [
        { name: "keywords", content: this.topic.title },
        // hid：如果要覆盖全局中的 description , 就可以设置这个hid 和父级的相同，就会覆盖父级
        { hid: "description", name: "description", content: this.topic.title }
      ],
      // 引入外部js文件
      script: [
        {
          src:
            "https://misc.360buyimg.com/??jdf/lib/jquery-1.6.4.js,mtd/pc/common/js/o2_ua.js,mtd/pc/base/1.0.0/event.js"
        }
      ],
      // 引入外部样式文件
      link: [
        {
          type: "stylesheet",
          href:
            "https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/static/css/first-screen.chunk.css"
        }
      ]
    };
  },
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

<style></style>
