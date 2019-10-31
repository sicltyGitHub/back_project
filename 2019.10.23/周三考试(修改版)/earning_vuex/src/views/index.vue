<template>
  <div>
    <!-- 下拉列表 -->
    <select @change="getStudents">
      <option>请选择班级</option>
      <option v-for="(item, index) in classes" :key="index" :value="item.id">{{item.class_name}}</option>
    </select>

    <!-- 表格 -->
    <table border="1" width="80%" cellspacing="0">
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>头像</th>
        <th>时间</th>
      </tr>
      <tr v-for="(item,index) in students" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>
          <img :src="item.face" alt />
        </td>
        <td>{{item.time}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// 引入映射的函数
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  created () {
    // 根据change 显示表格中的数据
    this.getclasses()
  },
  // vue中的 state 映射到 computed
  computed: {
    ...mapState(['username', 'classes', 'students'])
  },
  methods: {
    ...mapMutations(['setstudents']),
    ...mapActions(['login', 'getclasses', 'getstudents']),
    // 选择班级获取数据 保存到vuex中
    getStudents (e) {
      if (this.classId !== '') {
        this.getstudents({
          id: e.target.value
        })
      } else {
        // 清空学生数据
        this.setstudents([])
      }
    }
  }
}
</script>

<style>
table tr {
  text-align: center;
}
table tr:nth-child(odd) {
  background: rgb(219, 231, 167);
}
table tr:nth-child(even) {
  background: rgb(124, 159, 173);
}
table tr:hover {
  color: #eeeeee;
  background-color: rgb(241, 193, 241);
}

select {
  width: 10%;
  display: block;
  margin-top: 5%;
}
</style>
