<template>
  <div class="leaderboard">
    <van-tabs @click='adas'>
      <van-tab title="全部">
          <van-row  class="aaa">
            <van-col span="8">排名</van-col>
            <van-col span="8">姓名</van-col>
            <van-col span="8">积分</van-col>
          </van-row>
          <van-row  v-for="(itme,index) in Leaderboard" :key="index" style="text-align: center;">
            <van-col span="8">{{index}}</van-col>
            <van-col span="8">{{itme.username}}</van-col>
            <van-col span="8">{{itme.integral}}</van-col>
          </van-row>
      </van-tab>
      <van-tab v-for="itme in categoriesList" :key="itme.id" :title="itme.cat_name">
            <van-row  class="aaa">
            <van-col span="8">排名</van-col>
            <van-col span="8">姓名</van-col>
            <van-col span="8">积分</van-col>
          </van-row>
          <van-row  v-for="(itme,index) in Leaderboard" :key="index" style="text-align: center;">
            <van-col span="8">{{index}}</van-col>
            <van-col span="8">{{itme.username}}</van-col>
            <van-col span="8">{{itme.integral}}</van-col>
          </van-row>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoriesList: [],
      Leaderboard: []
    }
  },
  created () {
    this.getCategoriesList()
    this.getleaderboard()
  },
  methods: {
    getCategoriesList () {
      this.$http.get('/categories').then(res => {
        if (res.data.ok === 1) {
          this.categoriesList = res.data.data
        }
      })
    },
    getleaderboard () {
      this.$http.get('/questions/topn').then(res => {
        if (res.data.ok === 1) {
          this.Leaderboard = res.data.data
        }
      })
    },
    adas () {
      this.getleaderboard()
    }
  }
}
</script>

<style lang="less" scoped>
.aaa {
  margin-top: 20px;
  text-align: center;
  background-color: #eeeeee;
  color: #000;
  padding: 5px 0;
}
</style>
