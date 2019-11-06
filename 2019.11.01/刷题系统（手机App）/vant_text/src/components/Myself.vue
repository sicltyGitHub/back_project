<template>
  <div class="myself">
    <van-row class="logo-box">
      <van-col span="8">
        <van-uploader :after-read="onRead">
          <van-image round width="70px" height="70px" :src="face" />
        </van-uploader>
      </van-col>
      <van-col span="8">
        <van-row>
          <span class="yhm">{{username}}</span>
        </van-row>
        <van-row>
          <span class="jf">
            <van-icon name="gem-o" color="#fff" size="10px" />
            {{integral}}
          </span>
        </van-row>
      </van-col>
      <van-col span="8">
        <van-button type="primary" size="small">修改密码</van-button>
      </van-col>
    </van-row>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="value in categoriesList" :key="value.id">
        <van-row>{{value.cat_name}}</van-row>
        <van-row>
          <span class="zql">(正确率: %)</span>
        </van-row>
      </van-grid-item>
    </van-grid>
    <van-button color="#00659f" style="width: 258px" class="logout" @click="logout">退出</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      username: '',
      face: '',
      categoriesList: []
    }
  },
  created () {
    this.initialize()
    this.getCategoriesList()
  },
  computed: {
    ...mapState(['integral'])
  },
  methods: {
    ...mapMutations(['setusername']),
    initialize () {
      let username = sessionStorage.getItem('username')
      let face = sessionStorage.getItem('face')

      if (!username) {
        this.$router.push('/login')
      }
      this.username = username
      this.face = face
    },
    getCategoriesList () {
      this.$http.get('/categories').then(res => {
        if (res.data.ok === 1) {
          this.categoriesList = res.data.data
        }
      })
    },
    logout () {
      sessionStorage.clear()
      this.setusername({
        username: '',
        face: ''
      })
      this.$router.push('/login')
    },
    onRead (file) {
      this.face = file.content
      sessionStorage.setItem('face', file.content)
    }
  }
}
</script>

<style lang="less" scoped>
.logo-box {
  padding: 25px;
  background-color: #00659f;
}
.van-image {
  border: 2px solid #ffffff;
}
.jf {
  color: #ffffff;
  font-size: 12px;
}
.zql {
  color: #ff4c15;
  font-size: 12px;
}
.van-grid {
  border-top: 15px solid #eee;
  border-bottom: 15px solid #eee;
}
.logout {
  display: block;
  margin: 50px auto;
}
.yhm {
  font-size: 18px;
  color: #ffffff;
}
</style>
