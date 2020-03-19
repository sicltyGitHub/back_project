<template>
  <div class="Hswiper">
    <img
      v-for="(item, index) in data[current]"
      :key="index"
      :src="item.image"
      :style="{opacity}"
      alt
    />
    <div @click="prve" class="Hswiper-left-btn">
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
    <div @click="next" class="Hswiper-right-btn">
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
      // 当前显示
      current: 0,
      // 透明度
      opacity: 1,
      // 是否启动定时器
      inter: null,
      data: [
        [
          {
            image:
              "https://img14.360buyimg.com/da/s380x300_jfs/t1/67597/3/15810/72910/5dd54763Eec1c0f8b/d1b2474507f4c1f8.png.webp",
            link: "www.baidu.com"
          },
          {
            image:
              "https://img30.360buyimg.com/babel/s380x300_jfs/t1/89311/17/14891/65540/5e6b0bbdEc5b5fbf9/fa21f3f00ae59b9c.jpg.webp",
            link: "www.taobao.com"
          },
          {
            image:
              "https://img30.360buyimg.com/da/s380x300_jfs/t1/70194/26/7493/39651/5d578602Eefedb212/1229e46941f209f3.png.webp",
            link: "www.jd.com"
          }
        ],
        [
          {
            image:
              "//img12.360buyimg.com/babel/s380x300_jfs/t1/100297/22/15533/84931/5e718379E6bc73047/9401f2f81b22a80d.jpg.webp",
            link: "www.jd.com"
          },
          {
            image:
              "//img12.360buyimg.com/babel/s380x300_jfs/t1/89171/29/14822/87152/5e6b4482E36cfaa08/3c198ca4bf959217.png.webp",
            link: "www.jd.com"
          },
          {
            image:
              "//img30.360buyimg.com/babel/s380x300_jfs/t1/101979/25/14577/63781/5e65e3c0Efaf4fd5d/4db30c07cd07ab0f.jpg.webp",
            link: "www.jd.com"
          }
        ],
        [
          {
            image:
              "//img11.360buyimg.com/babel/s380x300_jfs/t1/96677/38/14079/85806/5e61ee1dEe26ba3fc/05091f37a1942dfe.jpg.webp",
            link: "www.jd.com"
          },
          {
            image:
              "//img13.360buyimg.com/da/s380x300_jfs/t1/95068/26/688/81187/5db2eb73Ec539d5e9/12be0b3d69a2e701.png.webp",
            link: "www.jd.com"
          },
          {
            image:
              "//img12.360buyimg.com/babel/s380x300_jfs/t1/92082/11/15298/83763/5e71dae9E29c7cd7c/4220bbf654fcfb0e.jpg.webp",
            link: "www.jd.com"
          }
        ]
      ]
    };
  },
  // 生命周期函数（页面调用成功加载定时器）
  mounted() {
    // 调用定时器
    this.inter = setInterval(this.start, 5000);
  },
  // 组件销毁之前销毁定时器
  beforeDestroy() {
    clearInterval(this.inter);
  },
  methods: {
    // 动画函数
    cartoon() {
      // 淡出
      this.opacity = 0.5;
      // 设置时间动画
      setTimeout(() => {
        // 淡入
        this.opacity = 1;
      }, 200);
    },
    // 启动定时器
    start() {
      // 加载前调用动画函数
      this.cartoon();
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
      }, 200);
    },
    // 左边点击事件
    prve() {
      // 加载前调用动画函数
      this.cartoon();
      // 如果现在是第一张(循环滚动)
      if (this.current == 0) {
        // 切换城组后一个
        this.current = this.data.length - 1;
      } else {
        this.current--;
      }
    },
    // 右边点击事件
    next() {
      // 加载前调用动画函数
      this.cartoon();
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
.Hswiper {
  position: relative;
  cursor: pointer;
  margin-top: -9px;
  overflow: hidden;
  img {
    width: 100%;
    margin-top: 10px;
    // 过度效果
    transition: all 0.2s;
  }
  &-left-btn,
  &-right-btn {
    display: none;
    top: 50%;
    // 配合 top 使用，居中
    transform: translateY(-40%);
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
  // 鼠标移入显示左右按钮
  &:hover {
    .Hswiper-left-btn,
    .Hswiper-right-btn {
      display: block;
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