<template>
  <!-- 顶部logo、搜索、广告图片 -->
  <div class="heads topfixed" :style="{top: topFixedTop+'px'}">
    <div class="container">
      <div class="row gutter">
        <!-- logo -->
        <div class="col-2">
          <Logo crosswise:false />
        </div>
        <!-- 搜索框 -->
        <div class="col-8">
          <!-- 搜索、购物车 -->
          <div class="head-middle-search">
            <div class="row gutter">
              <!-- 搜索大框 -->
              <div class="col-9">
                <!-- 搜索框 -->
                <div class="searchs">
                  <input type="text" />
                  <button>
                    <svg
                      t="1584413106535"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="1976"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M222.6944 222.7968A323.1488 323.1488 0 0 0 133.6832 512c19.2512-87.3728 64.512-172.7488 135.0144-243.3024C339.2512 198.1184 424.6272 152.8832 512 133.632c-101.632-19.1488-210.688 10.5216-289.3056 89.1648z"
                        fill="#ffffff"
                        p-id="1977"
                      />
                      <path
                        d="M989.44 822.1184l-121.7024-121.7024a118.016 118.016 0 0 0-92.8-34.1248c114.4576-165.5552 97.92-394.3936-49.4848-541.824-165.9392-165.9904-435.0464-165.9904-601.0368 0-165.9392 165.9904-165.9392 435.1232 0 601.1136 147.4048 147.4304 376.064 163.84 541.7216 49.3824-2.56 33.28 8.8576 67.5328 34.1248 92.8l121.7024 121.728c46.08 45.9776 121.3696 45.9776 167.3472 0 46.208-45.9776 46.208-121.2928 0.128-167.3728zM676.096 676.096c-138.6752 138.6752-363.392 138.6752-502.016 0-138.6752-138.6752-138.6752-363.4432 0-502.1184 138.624-138.6752 363.3408-138.6752 502.016 0 138.6496 138.5728 138.6496 363.4432 0 502.1184z"
                        fill="#ffffff"
                        p-id="1978"
                      />
                    </svg>
                  </button>
                </div>
                <!-- <ul class="head-keywords">
                  <li>
                    <nuxt-link to v-for="(item, index) in 8" :key="item">美妆护肤{{index}}</nuxt-link>
                  </li>
                </ul>-->
              </div>
              <!-- 我的购物车 -->
              <div class="col-3">
                <cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
import cart from "~/components/cart";
// 引入顶部导航滚动事件js
import { getScrollTop } from "~/assets/util";
export default {
  // 注册引入的组件
  components: { Logo, cart },
  data() {
    return {
      topFixedTop: -85
    };
  },
  // 监听滚动条
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  // 滚动条时间
  methods: {
    onScroll() {
      // 获取滚动的高度
      let top = getScrollTop();
      // 判断滚动的位置
      if (top >= 600) {
        this.topFixedTop = 0;
      } else {
        this.topFixedTop = -85;
      }
    }
  }
};
</script>

<style lang="scss">
.topfixed {
  // 飞行定位
  position: fixed;
  z-index: 999;
  width: 100%;
  transition: all 0.5s;
  border-bottom: 3px solid red;
  background-color: #fff;
}
.heads {
  padding-top: 20px;
  background-color: #fff;
  .searchs {
    input {
      float: left;
      width: 90%;
      border: 2px solid red;
      padding: 7px 10px;
    }
    button {
      float: left;
      border: 0;
      padding: 8px 15px;
      background-color: red;
    }
    button:hover {
      cursor: pointer;
      background-color: rgb(200, 22, 35);
    }
  }
}
</style>