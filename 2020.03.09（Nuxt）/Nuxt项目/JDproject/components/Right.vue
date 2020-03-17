<template>
  <!-- 地址折叠框 -->
  <div class="zdk1">
    <!-- 标题 -->
    <div class="zdk1-title1">
      <!-- 地址图标 -->
      <svg
        t="1584324081102"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="36492"
        width="16"
        height="16"
        v-if="loaction"
      >
        <path
          d="M817.152 410.112c0-168.448-136.704-305.152-305.152-305.152-168.448 0-305.152 136.704-305.152 305.152 0 137.728 91.136 253.952 216.576 291.84l88.576 88.576 88.576-88.576c125.44-37.888 216.576-154.112 216.576-291.84zM512 306.688c57.344 0 103.424 46.08 103.424 103.424s-46.08 103.424-103.424 103.424-103.424-46.08-103.424-103.424 46.08-103.424 103.424-103.424z m0 0M184.32 869.376c0 17.408 62.464 33.792 163.84 42.496 101.376 8.704 226.304 8.704 327.68 0 101.376-8.704 163.84-25.088 163.84-42.496 0-27.136-146.432-49.152-327.68-49.152-180.736 0-327.68 22.016-327.68 49.152z m0 0"
          fill="#d81e06"
          p-id="36493"
        />
      </svg>
      {{title}}
      <svg
        t="1584354067039"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="41766"
        width="16"
        height="16"
        v-if="arrow"
      >
        <path
          d="M512.10273933 599.27590561l-225.6866455-225.68278313c-9.47828293-9.48600769-24.86291885-9.48600769-34.34197427 1e-8-9.48678016 9.47828293-9.48678017 24.86291885 0 34.34197425l242.85724641 242.8572464c9.47828293 9.48600769 24.86291885 9.48600769 34.34197425 0l242.85647393-242.8572464c4.74300385-4.73991394 7.11527825-10.95602989 7.11527824-17.17060089s-2.37227439-12.43068695-7.11527825-17.1706009c-9.47828293-9.48600769-24.86291885-9.48600769-34.34197425 0l-225.68587304 225.68278313z"
          p-id="41767"
        />
      </svg>
    </div>
    <!-- 内容 -->
    <div class="zdk1-content1">
      <!-- 向组件中传入复杂的html结构：插槽（多个:具名插槽；一个:匿名插槽） -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  props: {
    // 是否显示位置图标
    loaction: {
      type: Boolean,
      default: false
    },
    // 是否显示下箭头图标
    arrow: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      // 属性值必填
      required: true
    },
  }
};
</script>

<style lang="scss">
.zdk1 {
  position: relative;
  // div变为行内块元素
  display: inline-block;
  // 鼠标移入
  &:hover {
    .zdk1-title1 {
      position: relative;
      border-right: 1px solid #ccc;
      border-left: 1px solid #ccc;
      background-color: #fff;
      // 覆盖多余的边框线（创建一根线盖上）
      &::after {
        position: absolute;
        content: "";
        left: 0;
        width: 100%;
        height: 2px;
        display: block;
        z-index: 9999;
        background-color: #fff;
      }
    }
    .zdk1-content1 {
      display: block;
    }
  }
  &-title1 {
    height: 35px;
    padding: 0 5px;
    line-height: 35px;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
  }
  &-content1 {
    // 脱离文档流，不会对上面地址造成影响
    position: absolute;
    right: 0;
    padding: 0 10px ;
    display: none;
    z-index: 999;
    background-color: #fff;
    border: 1px solid #ccc;
  }
}
</style>