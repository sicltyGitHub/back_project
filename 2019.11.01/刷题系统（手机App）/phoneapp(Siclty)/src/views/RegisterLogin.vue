<template>
  <div class="app">
    <div class="me">
      <div class="logo-box">
        <van-row>
          <van-col span="8">
            <van-image round width="69px" height="73px" />
          </van-col>

          <van-col span="8" class="nameClocr">
            <van-row>
              <span>沐熙</span>
            </van-row>
            <van-row class="Icon">
              <van-icon name="gem-o" />
            </van-row>
          </van-col>

          <van-col span="8">
            <van-row>
              <van-button color="#81c6f3" size="small">修改密码</van-button>
            </van-row>
          </van-col>
        </van-row>
      </div>

      <!-- 宫格 -->
      <van-grid :border="false" :column-num="3" class="borderColor">
        <van-grid-item v-for="(index,item) in 6" :key="item.id">
          <van-row>{{item}}</van-row>
          <van-row>
            <span class="rate">(正确率：%)</span>
          </van-row>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 退出按钮 -->
    <div class="btnOutBox">
      <van-button type="warning" size="normal" class="btnOut" @click="quitLogin">退出</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 点击退出按钮
    quitLogin () {
      // 重新求取属性 触发相关乱的DOM
      this.$store.commit('exitLogin')
      // 清除令牌
      sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.app {
  padding-bottom: 10px;
}
.me .logo-box {
  padding: 25px;
  background-color: pink;
}
.nameClocr {
  color: #ffffff;
  /* color: #81c6f3; */
}
.Icon {
  width: 12px;
  height: 12px;
  color: #eaf2f4;
  margin-top: 3px;
}
.borderColor {
  border-top: 20px solid #eeeeee;
  border-bottom: 20px solid #eeeeee;
}
.btnOutBox {
  margin-left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #00659f;
  color: #fff;
  margin-top: 20px;
  width: 50%;
  border-radius: 5px;
}
.btnOut {
  width: 100%;
  height: 100%;
  /* margin-top: 25px; */
}
</style>
