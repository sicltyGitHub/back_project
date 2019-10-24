<template>
  <div>
    <h1>首页页面</h1>
    <select name id v-model="num" @change="changeClass">
      <option value="请选择班级" selected disabled hidden>请选中下列数据</option>
      <option :value="item.id" v-for="item in classes" :key="item.id">{{item.class_name}}</option>
    </select>
    <table width="600px" border="1" cellspacing="0" cellpadding="10">
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>头像</th>
        <th>入学时间</th>
      </tr>
      <tr v-for="(item,index) in students" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.student_name }}</td>
        <td>{{ item.age }}</td>
        <td>
          <img :src="item.face" />
        </td>
        <td>{{ item.time }}</td>
      </tr>
    </table>

    <!-- 渲染假数据 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    // 调用接口获取数据
    this.$http.get("/classes").then(res => {
      // window.console.log(res);
      // 保存到data 中
      this.classes = res.data.data;
      window.console.log(res);
    });
  },
  methods: {
    changeClass() {
      if (this.isLogin == false) {
        alert("您未登录");
        return;
      }
      this.$http.get(`/classes/${this.num}/students`).then(res => {
        this.students = res.data.data;
      });
    }
  },
  watched: {},
  computed: {
    ...mapState(["isLogin"])
  },
  // 页面中要使用的数据
  data() {
    return {
      students: [],
      classes: [],
      num: ""
    };
  }
};
</script>


<style  scoped>
/* 奇数 */
table tr:nth-child(odd) {
  background-color: pink;
}
/* 偶数 */
table tr:nth-child(even) {
  background-color: skyblue;
}

/* 奇数 */
/* table > tr:nth-child(2n + 1) {
  background-color: pink;
}
/* 偶数 */
/* table > tr:nth-child(2n) {
  background-color: skyblue;
}  */
</style>