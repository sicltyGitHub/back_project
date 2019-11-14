<template>
  <div>
    <!-- 商品导航 -->
    <!-- 复选框组 start -->
    <van-checkbox-group v-model="checkedGoods" class="card-goods">
      <!-- 多选框 end -->
      <van-checkbox
        class="card-goods__item"
        checked-color="#07c160"
        v-for="(item, index) in cartImage"
        :key="item.id"
        :name="item.id"
      >
        <!-- 商品项 start -->
        <van-card
          :num="value[index]"
          :price="item.price"
          :desc="item.goods_desc"
          :title="item.goods_name"
          :thumb="item.image"
        >
          <template v-slot:footer>
            <span class="count">小计：￥{{ value[index] * item.price }}</span>
            <van-stepper style="margin-top: 20px;" v-model="value[index]" />
          </template>
          <!-- 商品项  end -->
        </van-card>
        <!-- 多选框 start -->
      </van-checkbox>
      <!-- 多选框组 end -->
    </van-checkbox-group>

    <!-- 商品结算条 -->
    <van-submit-bar
      :price="totalPrice * 100"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 存放数据
      cartImage: [],
      value: [],
      // 选择的商品
      checkedGoods: []
    };
  },
  created() {
    // 调用购物车图片
    this.cart();
  },
  methods: {
    // 渲染轮播图数据
    cart() {
      this.$http.get("/index_cart").then(res => {
        this.cartImage = res.data.data;
        // console.log(this.cartImage);
      });
    },
    onSubmit() {
      this.toast.success("ss");
    }
  },
  computed: {
    // 按钮的文本
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    // 总价
    totalPrice() {
      return this.cartImage.reduce((total, item, index) => {
        return (
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * this.value[index]
            : 0)
        );
      }, 0);
    }
  }
};
</script>

<style lang="less">
.count {
  color: red;
  font-weight: bold;
  font-size: 14px;
}
.van-submit-bar {
  bottom: 50px;
}
.card-goods {
  padding: 10px 0 50px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>
