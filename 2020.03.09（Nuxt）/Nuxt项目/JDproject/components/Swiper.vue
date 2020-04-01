<template>
  <!-- 轮播图 -->
  <div class="swiper">
    <img :style="{opacity}" :src="data[current].image" alt />
    <!-- 轮播小点导航 -->
    <ul>
      <li
        @mousemove="current= index"
        :class="{active:current == index}"
        v-for="(item, index) in data.length"
        :key="index"
      ></li>
    </ul>
    <div @click="prve" class="swiper-left-btn">
      <svg
        t="1584613905127"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4969"
        width="16"
        height="16"
      >
        <path
          d="M798.68464831 1015.46050477l-88.42880081 91.53170357-619.00317687-615.9002741 619.00317687-615.9002741 88.42880081 91.53170357-521.26566777 524.36857053z"
          fill="#ffffff"
          p-id="4970"
        />
      </svg>
    </div>
    <div @click="next" class="swiper-right-btn">
      <svg
        t="1584614027861"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7526"
        width="16"
        height="16"
      >
        <path
          d="M792.651852 451.318519l-428.562963-428.562963c-30.340741-30.340741-79.644444-30.340741-106.192593 0-30.340741 30.340741-30.340741 79.644444 0 106.192592l375.466667 375.466667-375.466667 375.466666c-30.340741 30.340741-30.340741 75.851852 0 106.192593s79.644444 30.340741 106.192593 0L792.651852 557.511111c15.17037-15.17037 22.755556-34.133333 22.755555-53.096296 0-18.962963-7.585185-37.925926-22.755555-53.096296"
          fill="#ffffff"
          p-id="7527"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 是否启动定时器
      inter: null,
      // 当前图片的下表
      current: 0,
      // 图片透明度
      opacity: 1,
      data: [
        {
          image:
            "https://img13.360buyimg.com/da/s590x470_jfs/t1/97140/18/15578/144877/5e7245f4E8c6570c6/aad170141c057cd4.jpg.webp",
          link: "www.jd.com"
        },
        {
          image:
            "https://imgcps.jd.com/ling/100000998920/5b2x6Z-z5aix5LmQ55yB5b-D6LSt/5L2g5YC85b6X5YWl5omL/p-5bd8253082acdd181d02fa0f/dc7aba36/590x470.jpg",
          link: "www.baidu.com"
        },
        {
          image:
            "https://img14.360buyimg.com/pop/s590x470_jfs/t1/104185/12/15287/271527/5e6f31a4Ef5b07718/9257434455a65fa9.jpg.webp",
          link: "www.taobao.com"
        },
        {
          image:
            "https://img20.360buyimg.com/pop/s590x470_jfs/t1/91184/3/15477/54627/5e71db6bEd058ca55/ab51cff6d4596c7e.jpg.webp",
          link: "www.me.com"
        },
        {
          image:'https://img14.360buyimg.com/da/s590x470_jfs/t1/10946/29/10024/80143/5c52fe4bE2b5ad0cb/69540484fe7067c6.jpg.webp',
          link:'www.baidu.com'
        }
      ]
    };
  },
  // 生命周期函数（页面调用成功加载定时器）
  mounted() {
    // 调用定时器
    this.inter = setInterval(this.start, 4000);
  },
  // 组件销毁之前销毁定时器
  beforeDestroy() {
    clearInterval(this.inter);
  },
  methods: {
    // 启动定时器
    start() {
      // 设置透明度
      this.opacity = 0;
      // 设定一个时间显示图片透明度
      setTimeout(() => {
        // 如果现在是最后一张
        if (this.current === this.data.length - 1) {
          // 当前图片返回第一张
          this.current = 0;
        } else {
          // 每过5秒加一
          this.current++;
        }
        // 设置透明度
        this.opacity = 1;
      }, 500);
    },
    // 左边点击事件
    prve() {
      // 如果现在是最后一张(循环滚动)
      if (this.current == 0) {
        // 当前图片返回第一张
        this.current = this.data.length - 1;
      } else {
        this.current--;
      }
    },
    // 右边点击事件(循环滚动)
    next() {
      // 最后一张，返回第一个图片
      if (this.current == this.data.length - 1) {
        this.current = 0;
      } else {
        this.current++;
      }
    }
  }
};
</script>

<style lang="scss">
.swiper {
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    // 鼠标移入变小手
    cursor: pointer;
    transition: all 0.5s;
  }
  ul {
    position: absolute;
    bottom: 20px;
    left: 50px;
    li {
      opacity: 0.5;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 10px;
      display: inline-block;
      // 基线对齐
      vertical-align: middle;
      background-color: #fff;
      &.active {
        width: 15px;
        height: 15px;
        opacity: 1;
        border: 3px solid #ddd;
      }
    }
  }
  &-left-btn,
  &-right-btn {
    top: 50%;
    // 配合 top 使用，居中
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    opacity: 0.2;
    color: #fff;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    background-color: #000;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  &-left-btn {
    position: absolute;
    left: -15px;
    padding-left: 12px;
    border-radius: 0 50px 50px 0;
  }
  &-right-btn {
    position: absolute;
    right: -15px;
    padding-right: 7px;
    border-radius: 50px 0 0 50px;
  }
}
</style>