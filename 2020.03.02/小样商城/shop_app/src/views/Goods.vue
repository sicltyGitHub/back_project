<template>
  <div class="goods">
    <div>
      <div class="logo">
        <div class="logo_1">
          <div class="logo_2"></div>
          <div class="logo_3">
            <h1>
              <span>该网页无法正常运作</span>
            </h1>
            <p>如果问题仍然存在，请与网站所有者联系。</p>
            <p>HTTP ERROR 412</p>
          </div>
        </div>
      </div>
      <div class="cxjz">
        <van-button type="info" @click="$router.push('/goods/' + 1)">重新加载</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {}
  },
  created () {
    console.log(this.id)
  },
  methods: {}
}
</script>

<style lang="less" >
.goods .logo {
  width: 86%;
  margin: 44px 0 150px 0;
  padding: 0 7%;

  .logo_1 {
    width: 100%;
    height: 218px;
    padding-bottom: 40px;
  }

  .logo_2 {
    width: 72px;
    height: 72px;
    margin-bottom: 36px;
    background: url("../assets/logo.png") no-repeat;
    background-size: 100%;
  }

  .logo_3 {
    h1 {
      margin-bottom: 15px;
    }

    span {
      font-size: 22px;
      font-weight: 500;
    }

    p {
      font-size: 14px;
      color: #5f6368;
      margin-bottom: 10px;
      font-family: "Segoe UI", Arial, "Microsoft Yahei", sans-serif;
    }
  }
}

.goods .cxjz .van-button {
  display: block;
  width: 80%;
  height: 50px;
  line-height: 50px;
  margin: 250px auto;
  border-radius: 5px;
}
</style>
