<template>
  <!-- 商品分类树组件 -->
  <div class="col-2">
    <ul class="cat-menu">
      <li v-for="(item,index) in 17" :key="index">
        <div class="cat-menu-title">
          <nuxt-link to>加用电器---{{index}}</nuxt-link>
        </div>
        <div class="cat-menu-content">
          <div class="row gutter">
            <div class="col-9">
              <ul class="cat-menu-stubmenu">
                <li v-for="(item,index) in 5" :key="item">
                  <nuxt-link to>玩3C{{index}}</nuxt-link>
                </li>
              </ul>
              <div class="row cat-menu-bstubmenu" v-for="(item,index) in 10" :key="index">
                <div class="col-2">
                  <nuxt-link to>香水彩妆</nuxt-link>
                </div>
                <div class="col-10">
                  <nuxt-link to v-for="(item,index) in 20" :key="index">隔离</nuxt-link>
                </div>
              </div>
            </div>
            <div class="col-3 cat-menu-adimage">
              <img
                src="https://img30.360buyimg.com/vclist/s83x35_jfs/t1/96502/26/11337/4295/5e36ddddEa28ea827/a9cf64cacd04fb32.jpg.webp"
                alt
                v-for="(item,index) in 8"
                :key="index"
              />
              <img
                src="https://img11.360buyimg.com/vclist/s168x134_jfs/t1/27045/7/14093/24496/5ca45fbfE014f1c9a/eff456170211ac25.jpg.webp"
                alt
                v-for="(item,index) in 2"
                :key="index"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.cat-menu {
    position: relative;
    padding: 6px 0;
    font-size: 14px;
    background-color: #fff;
  li {
    padding: 3px 15px;
    &:hover {
      background-color: #ddd;
      .cat-menu-content {
        display: block;
      }
    }
  }
  &-content {
    position: absolute;
    top: 0;
    left: 190px;
    width: 990px;
    z-index: 666;
    padding: 20px;
    display: none;
    font-size: 12px;
    min-height: 500px;
    border: 1px solid #ccc;
    background-color: #fff;
    box-shadow: 0px 0px 4px #ccc;
  }
  &-stubmenu {
    li {
      display: inline-block;
      background-color: #333;
      margin-right: 10px;
      &:hover {
        background-color: rgb(200, 22, 35);
      }
      a {
        color: #fff;
        &::after {
          content: ">";
          padding-left: 8px;
        }
      }
    }
  }
  &-bstubmenu {
    margin-top: 10px;
    a {
      margin-right: 10px;
    }
    .col-2 {
      font-weight: bold;
      a {
        &::after {
          content: ">";
          padding-left: 8px;
        }
      }
    }
  }
  &-adimage {
    img {
      width: 50%;
      box-sizing: border-box;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
    // 选择器选中最后两个
    :nth-last-of-type(-n + 2) {
      width: 100%;
    }
  }
}
</style>