<template>
  <div>
    欢迎您，{{ username }} ,
    <!-- 退出按钮 -->
    <button @click="logout">退出</button>
    <hr />

    <!-- 显示分类 -->
    <div class="box category">
      <h2>选择答题分类</h2>
      <!-- 渲染列表 -->
      <ul>
        <li v-for="(item, index) in categories" :key="index">
          {{ item.cat_name }}
          <!-- 答题按钮 -->
          <button @click="getQuestions(item.id)">开始答题</button>
        </li>
      </ul>
    </div>

    <!-- 答题 -->
    <div class="box questions">
      <h2>开始答题</h2>
      <div v-if="questions.length > 0">
        题目数：{{ current_question_key + 1 + "/" + questions.length }}
      </div>
      <dl v-if="questions.length > 0">
        <dt>题目：{{ questions[current_question_key].title }}</dt>
        <dd
          v-for="(item, index) in questions[current_question_key].options"
          :key="index"
        >
          <label>
            <input
              type="radio"
              name="xx"
              :value="index"
              v-model="answers[current_question_key]"
            />
            {{ item }}
          </label>
        </dd>
      </dl>
      <button @click="next">确定，进入下一题</button>

      <!-- 显示所有题的按钮 -->
      <div>
        <!-- 答题按钮 -->
        <button
          :class="{
            active: current_question_key === index,
            wrong:
              answers.length > index &&
              answers[index] !== questions[index].answer,
            right: answers[index] === questions[index].answer
          }"
          @click="current_question_key = item - 1"
          :disabled="index > current_question_key_rd"
          v-for="(item, index) in questions.length"
          :key="index"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // 判断登录
    let username = sessionStorage.getItem("username");
    // 判断是否登录
    if (username !== null) {
      // 获取用户名
      this.username = username;
    } else {
      // 跳转到下一个页面
      this.$router.push("/login");
      return false;
    }

    // 获取分类
    this.$http.get("/categories").then(res => {
      this.categories = res.data.data;
      window.console.log(this.categories);
    });
  },
  data() {
    return {
      username: "", // 保存登录用户名
      questions: [], // 保存所有的题
      categories: [], // 保存所有的分类
      answers: [], // 所有的答案
      current_question_key: 0, // 当前正在查看的题
      current_question_key_rd: 0 // 当前做到的最后一道题
    };
  },
  methods: {
    // 每次在选择一个分类时需要重新把数据初始化成最初的状态
    init() {
      this.answers = [];
      this.current_question_key = 0;
      this.current_question_key_rd = 0;
    },
    // 退出
    logout() {
      this.username = "";
      sessionStorage.clear();
      this.$router.push("/login");
    },
    // 点击下一题时执行
    moveNext() {
      this.current_question_key_rd++;
      this.current_question_key++;
    },
    // 选择分类时，根据分类ID获取所有的题
    getQuestions(catId) {
      this.init();
      // 获取分类下的题
      this.$http.get(`/categories/${catId}/questions`).then(res => {
        this.questions = res.data.data;
      });
    },
    // 点击确定提交时执行
    next() {
      if (this.answers[this.current_question_key] === undefined) {
        alert("必须要选择一个答案");
      } else {
        this.moveNext();
      }
    }
  }
};
</script>

<style>
.box {
  border: 1px solid #000;
  padding: 20px;
  margin: 10px;
}
.category {
  width: 400px;
  float: left;
}
.questions {
  width: 400px;
  float: left;
}
.wrong {
  background: red;
}
.right {
  background: green;
}
.active {
  background: skyblue;
}
</style>
