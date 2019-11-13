<template>
  <div class="cart">
    <van-nav-bar title="购物车" />

    <!-- 循环所有的商品 -->
    <van-checkbox
      :label-disabled="true"
      v-model="cart[item.id].ischk"
      v-for="(item, index) in goods"
      :key="index"
    >
      <van-card :title="item.goods_name" :price="item.price" :thumb="item.image">
        <!-- 自定义数量部分 -->
        <van-stepper slot="num" v-model="cart[item.id].count" />
        <!-- 删除商品 -->
        <van-button slot="tag" size="mini" type="danger">危险按钮</van-button>
        <!-- 自定义右下角部分 -->
        <van-tag slot="footer" type="warning">小计：￥{{(cart[item.id].count*item.price).toFixed(2)}}</van-tag>
      </van-card>
    </van-checkbox>

    <van-submit-bar :price="totalPrice" button-text="提交订单">
      <van-checkbox v-model="allChk">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  // （计算属性）：如果一个数据是需要计算之后得到的
  /*
    计算属性中：
    get：读取数据（默认）
    set：设置数据
  */
  computed: {
    // 总价格
    totalPrice: function () {
      let sum = 0
      // 循环所有的商品
      this.goods.forEach(v => {
        // 如果勾选了就把价格加到总价上
        if (this.cart[v.id].ischk) {
          sum += v.price * this.cart[v.id].count
        }
      })
      // 返回结果（因为使用分为单元，所以我们需要转成元）
      return sum * 100
    },
    // 是否全选
    // 即可读取，又可设置
    allChk: {
      get: function () {
        for (let i = 0; i < this.cart.length; i++) {
          if (this.cart[i] === null) continue
          // 只要有一个没有勾选就返回 false
          if (this.cart[i].ischk === false) {
            return false
          } // 返回并退出函数
        }
        // 如果能走到这就说明全都不是 false 那么就直接返回 true 代表全选
        return true
      },
      // 每当点击全选按钮时这个函数就被调用了，有一个参数：勾选之后的值
      set: function (newValue) {
        // 修改所有商品的状态为 newValue 这个新的值
        this.cart.forEach(v => {
          // 判断商品不为 null 时修改勾选状态的值
          if (v !== null) {
            v.ischk = newValue
          }
        })
      }
    }
  },
  // （监听器）：监听一个变量，当这个变量的值发生改变时触发！
  //           注意：监听对象时要深度监听
  watch: {
    cart: {
      deep: true, // 深度监听
      handler: function () {
        // 把 cart 写回浏览器
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    }
  },
  data () {
    return {
      id: JSON.parse(localStorage.getItem('id')) || [], // 所有商品的ID
      cart: JSON.parse(localStorage.getItem('cart')) || [], // 所有商品的数量和是否勾选
      goods: [] // 保存所有的商品详细信息
    }
  },
  created () {
    // 如果购物车中有商品ID就调用接口查询详细信息
    if (this.id.length > 0) {
      this.$http.get('/goods?id=' + this.id.join(',')).then(res => {
        this.goods = res.data.data
      })
    }
  }
}
</script>

<style>
.cart {
  padding-bottom: 30px;
}
.cart .van-submit-bar {
  margin-bottom: 50px;
}
.cart .van-checkbox__label {
  width: 100%;
}

</style>
