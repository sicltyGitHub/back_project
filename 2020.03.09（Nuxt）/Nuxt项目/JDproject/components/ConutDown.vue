<template>
  <div class="ConutDown">
    <h2>京东秒杀</h2>
    <div class="ConutDown-info">
      <span>{{title}}</span>
      点场 倒计时
    </div>
    <div class="ConutDown-time">
      <span>{{hour}}</span>
      <strong>:</strong>
      <span>{{minute}}</span>
      <strong>:</strong>
      <span>{{sec}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性（秒杀开始时间）
  props: {
    start: {
      type: String,
      required: true
    },
    // 秒杀标题（8:00点场）
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // 小时
      hour: "",
      // 分钟
      minute: "",
      // 秒
      sec: "",
      // 定时器
      inter: null
    };
  },
  mounted() {
    // 启动定时器
    this.inter = setInterval(this.compute, 1000);
  },
  // 销毁之前的定时器
  beforeDestroy() {
    clearInterval(this.inter);
  },
  methods: {
    // 补零（个位数时候补零）
    leftzero(data) {
      return data > 9 ? data : "0" + data;
    },
    // 计算
    compute() {
      //当前毫秒 转 秒
      let now = parseInt(Date.now() / 1000);
      // 开始时间的秒数
      let start = parseInt(new Date(this.start).getTime() / 1000);
      // 距离开始时间剩余的秒数
      let surplus = start - now;

      // 判断到达预极时间不需要往下减
      if (surplus <= 0) {
        this.hour = '00';
        this.minute = '00';
        this.sec = '00';
        clearInterval(this.inter);
      } else {
        // 剩余的小时
        this.hour = this.leftzero(parseInt(surplus / 3600));
        // 剩余分钟
        this.minute = this.leftzero(parseInt((surplus % 3600) / 60));
        // 剩余秒数
        this.sec = this.leftzero((surplus % 3600) % 60);
      }
    }
  }
};
</script>

<style lang="scss">
.ConutDown {
  width: 190px;
  height: 260px;
  color: #fff;
  text-align: center;
  background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/img/4a15d8883775742e3efbb850ae14def7.png");
  // 图片缩到合适区域
  background-size: cover;
  // 图片不重复
  background-repeat: no-repeat;
  h2 {
    font-size: 32px;
    margin-bottom: 100px;
  }
  &-info {
    text-align: center;
    font-size: 14px;
    padding-top: 15px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
  }
  &-time {
    margin-top: 10px;
    span {
      padding: 3px;
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background-color: rgb(47, 52, 48);
    }
    strong {
      margin-top: 0 5px;
      font-size: 18px;
    }
  }
}
</style>