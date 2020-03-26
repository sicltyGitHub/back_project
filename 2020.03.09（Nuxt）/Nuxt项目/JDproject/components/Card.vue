<template>
  <div class="card">
    <div class="card-title">
      {{title}}
      <i />
      <!-- 右边四个按钮（精选 数码 家电 爱车） -->
      <div v-if="btns.length > 0" class="card-btns">
        <span
          @mouseover="onMouseover(index)"
          v-for="(item, index) in btns"
          :key="index"
          :class="{active:index === current}"
        >{{item}}</span>
      </div>
    </div>
    <div class="card-content">
      <!-- 插槽 -->
      <slot>占无内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  props: {
    title: {
      // 属性字符串
      type: String,
      // 必填
      required: true
    },
    btns: {
      // 属性字符串
      type: Array,
      // 当属性是一个对象或者数组时，必须使用一个函数来设置默认值 !!!
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      // 当前选中
      current: 0
    };
  },
  // 监听鼠标移入事件
  methods: {
    onMouseover(i) {
      // 把消息发给父组件
      // 鼠标当前选中的下表
      this.current = i;
      // 参数一：事件名称
      // 参数二：数据
      this.$emit("change", i);
    }
  }
};
</script>

<style lang="scss">
.card {
  background-color: #fff;
  &-title {
    font-weight: 700;
    font-size: 24px;
    color: black;
    padding: 13px;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-image: url("https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/tit_arrow/sprite.png");
      background-repeat: no-repeat;
      background-position-x: -16px;
    }
    &:hover {
      i {
        background-position-x: 0px;
      }
    }
  }
  &-btns {
    float: right;
    span {
      cursor: pointer;
      color: #ccc;
      font-size: 14px;
      margin-left: 25px;
      font-weight: normal;
      padding-bottom: 4px;
      &.active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
}
</style>