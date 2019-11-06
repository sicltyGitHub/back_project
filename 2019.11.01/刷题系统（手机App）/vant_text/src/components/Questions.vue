<template>
  <div class="questions">
    <van-nav-bar :title="all" left-arrow left-text="返回" @click-left="onClickLeft" />
    <van-tabs v-model="active">
      <van-tab :title="'全部(' + tm.length + ')'">
        <template v-if="ksdt">
          <van-button type="primary" @click="ksdt = !ksdt">开始答题</van-button>
        </template>
        <template v-else>
          <div class="ksdt">
            <h2>题目：{{this.tm[this.tm_sy].title}}</h2>
            <van-radio-group v-for="(item, index) in this.tm[this.tm_sy].options" :key="index" v-model="radio">
              <van-radio :name="index">{{item}}</van-radio>
            </van-radio-group>
            <van-button type="default" @click="tj">提交,进入下一题</van-button>
            <van-button type="default" @click="ckdan = !ckdan">查看答案</van-button>
            <template v-if="ckdan">
              <div>
                <van-tag type="primary">正确答案：{{this.tm[this.tm_sy].right + 1}}</van-tag>
              </div>
            </template>
          </div>
        </template>
      </van-tab>
      <van-tab :title="'答错的(' + dcd.length + ')'">
        <template v-if="ksdt1">
          <van-button type="primary" @click="ksdt1_s">开始答题</van-button>
        </template>
        <template v-else>
          <div class="ksdt">
            <h2>题目：{{dcd[dcd_sy].title}}</h2>
            <van-radio-group
              v-for="(item, index) in dcd[dcd_sy].options"
              :key="index"
              v-model="radio"
            >
              <van-radio :name="index">{{item}}</van-radio>
            </van-radio-group>
            <van-button type="default" @click="tj">提交,进入下一题</van-button>
            <van-button type="default" @click="ckdan = !ckdan">查看答案</van-button>
            <template v-if="ckdan">
              <div>
                <van-tag type="primary">正确答案：{{this.dcd[this.dcd_sy].right + 1}}</van-tag>
              </div>
            </template>
          </div>
        </template>
      </van-tab>
      <van-tab :title="'答对的(' + ddd.length + ')'">
        <template v-if="ksdt2">
          <van-button type="primary" @click="ksdt2_s">开始答题</van-button>
        </template>
        <template v-else>
          <div class="ksdt">
            <h2>题目：{{ddd[ddd_sy].title}}</h2>
            <van-radio-group
              v-for="(item, index) in ddd[ddd_sy].options"
              :key="index"
              v-model="radio"
            >
              <van-radio :name="index">{{item}}</van-radio>
            </van-radio-group>
            <van-button type="default" @click="tj">提交,进入下一题</van-button>
            <van-button type="default" @click="ckdan = !ckdan">查看答案</van-button>
            <template v-if="ckdan">
              <div>
                <van-tag type="primary">正确答案：{{this.ddd[this.ddd_sy].right + 1}}</van-tag>
              </div>
            </template>
          </div>
        </template>
      </van-tab>
      <van-tab :title="'没做过的(' + mzgd.length + ')'">
        <template v-if="ksdt3">
          <van-button type="primary" @click="ksdt3_s">开始答题</van-button>
        </template>
        <template v-else>
          <div class="ksdt">
            <h2>题目：{{mzgd[mzgd_sy].title}}</h2>
            <van-radio-group
              v-for="(item, index) in mzgd[mzgd_sy].options"
              :key="index"
              v-model="radio"
            >
              <van-radio :name="index">{{item}}</van-radio>
            </van-radio-group>
            <van-button type="default" @click="tj">提交,进入下一题</van-button>
            <van-button type="default" @click="ckdan = !ckdan">查看答案</van-button>
            <template v-if="ckdan">
              <div>
                <van-tag type="primary">正确答案：{{this.mzgd[this.mzgd_sy].right + 1}}</van-tag>
              </div>
            </template>
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import _ from 'lodash'
export default {
  props: ['id', 'all'],
  data () {
    return {
      // 所有题目
      tm: [],
      tm_sy: 0,
      dcd: [],
      dcd_sy: 0,
      ddd: [],
      ddd_sy: 0,
      mzgd: [],
      mzgd_sy: 0,
      active: 0,
      radio: '',
      myTitle: '',
      myOptions: [],
      ckdan: false,
      ksdt: true,
      ksdt1: true,
      ksdt2: true,
      ksdt3: true
    }
  },
  created () {
    this.gettm()
  },
  methods: {
    ...mapMutations(['setintegraljia', 'setintegraljien']),
    onClickLeft () {
      this.$router.push('/')
    },
    gettm () {
      this.$http.get(`/categories/${this.id}/questions/${this.sort}`).then(res => {
        if (res.data.ok === 1) {
          this.tm = res.data.data
          this.tm.forEach(item => {
            let arr = item.options.split(',')
            item.options = arr
          })
          this.mzgd = _.clone(this.tm)
        }
      })
    },
    tj () {
      if (this.radio === '') {
        this.$dialog.alert({
          message: '必须要选择一个答案'
        })
        return
      }
      if (this.active === 0) {
        if (this.radio !== this.tm[this.tm_sy].right) {
          this.$toast({
            message: '抱歉! 错误!',
            icon: 'fail'
          })
          this.dcd.push(this.tm[this.tm_sy])
          this.dcd = Array.from(new Set(this.dcd))
          this.setintegraljien()
        } else {
          this.$toast({
            message: '恭喜! 正确!',
            icon: 'success'
          })
          this.ddd.push(this.tm[this.tm_sy])
          this.ddd = Array.from(new Set(this.ddd))
          this.setintegraljia()
        }
        this.tm_sy += 1
        this.mzgd.splice(0, 1)
        if (this.tm_sy === this.tm.length) {
          this.$dialog.alert({
            message: '恭喜您，已完成本分类下所有的题目!'
          })
          this.tm_sy = 0
          this.ksdt = true
        }
        this.radio = ''
        this.ckdan = false
      } else if (this.active === 1) {
        if (this.radio !== this.dcd[this.dcd_sy].right) {
          this.$toast({
            message: '抱歉! 错误!',
            icon: 'fail'
          })
          this.setintegraljien()
        } else {
          this.$toast({
            message: '恭喜! 正确!',
            icon: 'success'
          })
          this.ddd.push(this.dcd[this.dcd_sy])
          this.dcd.splice(this.dcd_sy, 1)
          this.dcd_sy--
          if (this.dcd.length === 0) {
            this.ksdt1 = true
          }
          this.setintegraljia()
        }
        this.dcd_sy += 1
        console.log(this.dcd_sy)
        if (this.dcd_sy === this.dcd.length) {
          this.$dialog.alert({
            message: '恭喜您，已完成本分类下所有的题目!'
          })
          this.dcd_sy = 0
          this.ksdt1 = true
        }
        this.radio = ''
        this.ckdan = false
      } else if (this.active === 2) {
        if (this.radio !== this.ddd[this.ddd_sy].right) {
          this.$toast({
            message: '抱歉! 错误!',
            icon: 'fail'
          })
          this.dcd.push(this.ddd[this.ddd_sy])
          this.ddd.splice(this.ddd_sy, 1)
          this.ddd_sy--
          if (this.ddd.length === 0) {
            this.ksdt2 = true
          }
          this.setintegraljien()
        } else {
          this.$toast({
            message: '恭喜! 正确!',
            icon: 'success'
          })
          this.setintegraljia()
        }
        this.ddd_sy++
        if (this.ddd_sy === this.ddd.length) {
          this.$dialog.alert({
            message: '恭喜您，已完成本分类下所有的题目!'
          })
          this.ddd_sy = 0
          this.ksdt2 = true
        }
        this.radio = ''
        this.ckdan = false
      } else if (this.active === 3) {
        if (this.radio !== this.mzgd[this.mzgd_sy].right) {
          this.$toast({
            message: '抱歉! 错误!',
            icon: 'fail'
          })
          this.dcd.push(this.mzgd[this.mzgd_sy])
          this.setintegraljien()
        } else {
          this.$toast({
            message: '恭喜! 正确!',
            icon: 'success'
          })
          this.ddd.push(this.tm[this.mzgd_sy])
          this.setintegraljia()
        }
        this.mzgd.splice(this.mzgd_sy, 1)
        this.mzgd_sy = 0
        if (this.mzgd.length === 0) {
          this.$dialog.alert({
            message: '恭喜您，已完成本分类下所有的题目!'
          })
          this.ksdt3 = true
        }
        this.radio = ''
        this.ckdan = false
      }
    },
    ksdt1_s () {
      if (this.dcd.length !== 0) {
        this.ksdt1 = false
      } else {
        this.ksdt1 = true
      }
    },
    ksdt2_s () {
      if (this.ddd.length !== 0) {
        this.ksdt2 = false
      } else {
        this.ksdt2 = true
      }
    },
    ksdt3_s () {
      if (this.mzgd.length !== 0) {
        this.ksdt3 = false
      } else {
        this.ksdt3 = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-button {
  margin: 10px;
}
.ksdt {
  margin: 20px;
}
.van-radio {
  margin: 10px;
}
</style>
