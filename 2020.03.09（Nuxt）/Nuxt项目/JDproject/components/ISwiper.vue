<template>
  <div class="iswiper">
    <ul :style="{marginLeft: marginLeft + 'px', transitionDuration}">
      <li v-for="(item, index) in data" :key="index">
        <nuxt-link to>
          <img :src="item.image" />
        </nuxt-link>
        <div class="info">
          <div class="title">电视影音女装专场</div>
          <div class="stitle">全场最高直播200元</div>
          <nuxt-link to>大牌闪购</nuxt-link>
        </div>
      </li>
    </ul>
    <div class="dot">
      <!-- 类绑定用数组可以绑定多个 -->
      <span :class="{active: marginLeft!=-200}"></span>
      <span :class="{active: marginLeft==-200}"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inter: null, // 定时器
      marginLeft: 0, // 左位置
      transitionDuration: "0.5s", // 动画时间
      data: [
        {
          image:
            "http://img11.360buyimg.com/mobilecms/s260x260_jfs/t1/93402/30/15253/349511/5e6f471eE4d0c19f0/184d207e25b87476.jpg.webp"
        },
        {
          image:
            "//img13.360buyimg.com/mobilecms/s260x260_jfs/t1/71580/31/12761/835740/5da026f7E8e1a64b1/78afbf60db5095b6.png.webp"
        },
        {
          image:
            "http://img11.360buyimg.com/mobilecms/s260x260_jfs/t1/93402/30/15253/349511/5e6f471eE4d0c19f0/184d207e25b87476.jpg.webp"
        }
      ]
    };
  },
  mounted() {
    this.inter = setInterval(() => {
      this.marginLeft -= 200;

      // 是否已经到最后一张图片
      if (this.marginLeft === -400) {
        // 0.5秒之后切换回第1张（把移动的动画做完）
        setTimeout(() => {
          // 关闭动画
          this.transitionDuration = "0s";
          // 切换回第1张
          this.marginLeft = 0;
          // 延迟一会再开启动画
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    }, 4000);
  },
  // 组件销毁之前执行
  beforeDestroy() {
    // 清除定时器
    clearInterval(this.inter);
  }
};
</script>

<style lang="scss">
$icellWidth: 200px;
.iswiper {
  position: relative;
  left: -3px;
  width: $icellWidth;
  overflow: hidden;
  background-color: #fff;
  padding-top: 25px;
  padding-bottom: 16px;
  ul {
    transition-property: all;
    width: $icellWidth * 3;
    li {
      text-align: center;
      width: $icellWidth;
      float: left;
    }
    img {
      width: 60%;
    }
  }
  .info {
    background-image: linear-gradient(#fff, #eee);
    margin-top: 10px;
    padding-bottom: 20px;
    .title {
      font-size: 14px;
    }
    .stitle {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    a {
      border: 1px solid red;
      color: red;
      padding: 5px;
      border-radius: 10px;
      &:after {
        content: ">";
        padding-left: 5px;
      }
    }
  }
  .dot {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: inline-block;
      background-color: #ccc;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      &.active {
        background-color: red;
      }
    }
  }
}
</style>
