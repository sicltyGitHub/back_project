<template>
  <div class="arrowtitle">
    {{title}}
    <!-- 雪碧图 -->
    <i></i>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.arrowtitle {
  font-weight: 700;
  font-size: 24px;
  color: black;
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
</style>