<template>
  <div class="cart">
    <div class="cart-title">
      <div class="cart-count">4</div>
      <svg
        t="1584416381299"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="13772"
        width="16"
        height="16"
      >
        <path
          d="M981.333333 170.666667H213.333333l-12.8-128H35.413333C15.914667 42.666667 0 65.962667 0 85.333333c0 19.498667 15.872 42.666667 35.413333 42.666667h92.458667l63.189333 550.229333c0 25.941333 21.162667 47.104 47.36 47.104h686.336c26.197333 0 56.576-21.034667 56.576-47.104l42.666667-474.666666C1024 177.621333 1007.402667 170.666667 981.333333 170.666667z m-83.925333 469.333333H275.797333L234.666667 258.048 938.666667 256l-41.258667 384z m-514.986667 128C312.533333 768 256 825.344 256 896.085333 256 966.784 312.576 1024 382.378667 1024c69.802667 0 126.378667-57.344 126.378666-127.914667 0-70.741333-56.576-128.085333-126.378666-128.085333z m384 0C696.533333 768 640 825.344 640 896.085333 640 966.784 696.576 1024 766.378667 1024c69.802667 0 126.378667-57.344 126.378666-127.914667 0-70.741333-56.576-128.085333-126.378666-128.085333z m-382.464 170.666667a42.709333 42.709333 0 0 1 0-85.333334c23.594667 0 42.709333 19.2 42.709334 42.666667s-19.114667 42.666667-42.709334 42.666667z m384 0a42.709333 42.709333 0 0 1 0-85.333334c23.594667 0 42.709333 19.2 42.709334 42.666667s-19.114667 42.666667-42.709334 42.666667z"
          p-id="13773"
          fill="#d81e06"
        />
      </svg>
      我的购物车
    </div>
    <div class="cart-content">
      <img
        src="https://img11.360buyimg.com/uba/jfs/t3571/299/131233948/1117/a1196554/58004d6dN2927f0f7.png"
        alt
      />
      购物车中还没有商品，赶紧选购吧！
    </div>
  </div>
</template>

<style lang="scss">
.cart {
  position: relative;
  &:hover {
    .cart-title {
      position: relative;
      border-color: rgb(200, 22, 35);
      &:after {
        position: absolute;
        left: 0;
        width: 100%;
        content: "";
        height: 10px;
        display: block;
        z-index: 9999;
        background-color: rgb(255, 255, 255) !important;
      }
    }
    .cart-content {
      display: block;
    }
  }
  &-title {
    padding: 6px 10px;
    color: rgb(200, 22, 35);
    border: 1px solid rgb(238, 238, 238);
    :hover {
      border-color: rgb(200, 22, 35);
    }
  }
  &-content {
    position: absolute;
    right: 0;
    width: 340px;
        padding: 10px 10px 10px 30px;
    display: none;
    background-color: #fff;
    border: 1px solid rgb(200, 22, 35);
  }
  svg {
    margin: 0 10px 0 5px;
  }
  &-count {
    position: absolute;
    background-color: red;
    border-radius: 50%;
    color: #fff;
    padding: 0 7px;
    transform: translate(10px, -10px);
  }
}
</style>