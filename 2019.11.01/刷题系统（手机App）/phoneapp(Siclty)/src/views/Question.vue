<template>
  <div class="question">
    <!-- 导航 -->
    <van-nav-bar
      :title="$route.query.cat_name"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 标签页 -->
    <van-tabs v-model="type">
      <van-tab name="all" :title="`全部(${total})`"></van-tab>
      <van-tab name="wrong" :title="'做得对('+ right +')'"></van-tab>
      <van-tab name="right" :title="'做错的('+ worry +')'"></van-tab>
      <van-tab name="undo" :title="'未得对('+ undo +')'"></van-tab>
    </van-tabs>

    <div class="ti">
      <!-- 没有题时显示按钮，否则显示题 -->
      <van-button v-if="questions.length==0" type="primary" @click="getQuestions">开始答题</van-button>
      <!-- 有题时才显示 -->
      <div v-else>
        <h2>题目：{{ questions[cur_que].title }}</h2>
        <van-radio-group v-model="answer">
          <!-- 循环并切割字符串 -->
          <van-radio
            v-for="(item, index) in questions[cur_que].options.split(',')"
            :key="index"
            :name="index"
          >{{alph[index]}}. {{item}}
          </van-radio>
        </van-radio-group>

        <van-button size="large" type="danger" @click="submit">提交，进入下一道</van-button>
        <br />
        <br />
        <van-button @click="showAnswer=!showAnswer" size="large" type="danger">查看答案</van-button>
        <br />
        <br />
        <van-tag
          v-if="showAnswer"
          size="large"
          type="primary"
        >正确答案：{{ alph[questions[cur_que].right] }}</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 总条数
      total: 0,
      // 答对的
      right: 0,
      // 错误的
      worry: 0,
      // 没做的
      undo: 0,
      // 获取的题目的类型
      type: 'all',
      questions: [],
      // 当前是第几道题  默认时第一道
      cur_que: 0,
      // 勾选的答案
      answer: '',
      // 是否显示答案
      showAnswer: false,
      alph: ['A', 'B', 'C', 'D']
    }
  },
  created () {
    // // 调用
    // this.go()
    // 通过学生分类做题信息渲染页面
    this.$http
      .get(`/categories/${this.$route.query.id}/question_count_info`)
      .then(res => {
        this.total = res.data.data.total
        this.right = res.data.data.right
        this.wrong = res.data.data.wrong
        this.undo = res.data.data.undo
      })
  },
  methods: {
    // 开始答题
    getQuestions () {
      this.$http
        .get(`/categories/${this.$route.query.id}/questions?type=${this.type}`)
        .then(res => {
          this.questions = res.data.data
          // console.log(res.data.data)
        })
    },
    // 点击登录提交答案
    submit () {
      // 判断用户有没有勾选一个答案
      if (this.answer === '') {
        // 给出弹框提示
        this.$toast('请选择一个答案')
        // 退出函数 进后后面函数不执行
        return false
      }
      // 判断是否回答正确
      if (this.answer === this.questions[this.cur_que].right) {
        // 给出弹框
        this.$toast('恭喜! 回答正确')
      } else {
        // 给出弹框
        this.$toast('恭喜! 回答正确')
      }
      // 提交答案到服务器
      this.$http
        .post(`/questions/${this.$route.query.id}/${this.answer}`)
        .then(res => {
          // 进入下一道
          this.cur_que++
          // 清空勾选
          this.answer = ''
          // 重新设置新的数字
          this.total = res.data.data.total
          this.right = res.data.data.right
          this.wrong = res.data.data.wrong
          this.undo = res.data.data.undo
        })
    }

    // // 申明go登录
    // go () {
    //   // 用户登录
    //   let username = sessionStorage.getItem('username')
    //   // 用户未登录之前跳转到登录页面
    //   if (!username) {
    //     this.$router.push('/login')
    //   }
    // }
  }
}
</script>

<style>
.question .ti {
  padding: 20px;
}

/* 只设置当前页面的单选框样式 */
.question .van-radio {
  margin-bottom: 10px;
}
</style>
