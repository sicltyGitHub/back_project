<template>
  <!-- 顶部logo、搜索、广告图片 -->
  <div class="head">
    <div class="container">
      <div class="row gutter">
        <!-- logo -->
        <div class="col-2">
          <Logo crosswise />
        </div>
        <!-- 搜索框 -->
        <div class="col-8">
          <!-- 搜索、购物车 -->
          <div class="head-middle-search">
            <div class="row gutter">
              <!-- 搜索大框 -->
              <div class="col-9">
                <!-- 搜索框 -->
                <div class="search">
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
                <ul class="head-keywords">
                  <li>
                    <nuxt-link to v-for="(item, index) in 8" :key="item">美妆护肤{{index}}</nuxt-link>
                  </li>
                </ul>
              </div>
              <!-- 我的购物车 -->
              <div class="col-3">
                <cart />
              </div>
            </div>
          </div>
          <!-- 一排按钮 -->
          <ul class="head-menus">
            <li v-for="(item,index) in 9" :key="index">
              <nuxt-link to>秒杀{{item}}</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- 广告图片 -->
        <div class="col-2">
          <img
            src="https://img12.360buyimg.com/babel/jfs/t1/93950/18/14832/22444/5e6b4b6dE6fd1e1f2/7c7ddbab78e3be33.png"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo";
import cart from "~/components/cart";
export default {
  // 注册引入的组件
  components: { Logo, cart }
};
</script>

<style lang="scss">
.head {
  padding: 10px 0;
  background-color: #fff;
  &-menus {
    li {
      display: inline-block;
      font-size: 16px;
      margin: 0 10px;
    }
  }
  &-middle-search {
    padding-bottom: 30px;
  }
  &-keywords {
    li {
      display: inline-block;
      a {
        margin: 5px;
      }
    }
  }
  .search {
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