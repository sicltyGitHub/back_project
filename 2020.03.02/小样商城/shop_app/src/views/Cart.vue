<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="购物车" left-arrow @click-left="$router.back()" />
    <div class="botttom">
      <!-- 滑动组件 -->
      <van-swipe-cell v-for="(item, index) in goods" :key="index">
        <van-checkbox label-disabled v-model="cart[item.id].ischk">
          <van-cell value="swipecell">
            <van-card
              :title="item.recommended_name"
              :price="item.recommended_price"
              :desc="item.recommended_desc"
              :thumb="item.recommended_image"
            >
              <!-- 计步器 -->
              <van-stepper slot="num" v-model="cart[item.id].count" />
              <!-- 小计 -->
              <van-tag
                slot="footer"
                type="warning"
              >小计：￥{{(cart[item.id].count*item.recommended_price).toFixed(2)}}</van-tag>
            </van-card>
          </van-cell>
        </van-checkbox>
        <!-- 删除按钮 -->
        <template slot="right">
          <van-button square type="danger" text="删除" @click="remove(item.id)">
            <img src="../assets/删除白色.png" alt />
          </van-button>
        </template>
      </van-swipe-cell>
    </div>

    <van-submit-bar :price="totalPrice* 100" button-text="提交订单">
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
  // 计算属性
  computed: {
    // 计算总价
    totalPrice: function () {
      let sum = 0
      // 循环所有的商品
      this.goods.forEach(v => {
        // 如果勾选了就把价格加到总价上
        if (this.cart[v.id].ischk) {
          sum += v.recommended_price * this.cart[v.id].count
        }
      })
      // 返回结果
      return sum
    },
    // 计算是否全选
    allChk: {
      // get：读取数据
      get: function () {
        // 循环所有的商品
        for (let i = 0; i < this.cart.length; i++) {
          // 循环所有的商品中没有点击加入购物车，就执行下一个
          if (this.cart[i] === null) continue
          // 只要有一个没有勾选就返回 false
          if (this.cart[i].ischk === false) {
            return false
          }
        }
        // 能够走到这一步，就说名全选了
        return true
      },
      // 设置数据：点击全选按钮时调用，有一个参数：勾选时候的值
      set: function (newValue) {
        // 循环购物车中所有的数组
        this.cart.forEach(v => {
          // 判断商品不为 null 时修改勾选值得状态
          if (v !== null) {
            v.ischk = newValue
          }
        })
      }
    }
  },
  // 监听器
  watch: {
    cart: {
      // 深度监听
      deep: true,
      handler: function () {
        // 把 cart 写回浏览器
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },
    id: {
      // 深度监听
      deep: true,
      handler: function () {
        // 把 id 写回浏览器
        localStorage.setItem('id', JSON.stringify(this.id))
      }
    }
  },
  data () {
    return {
      // 取出浏览器id并转成数组
      id: JSON.parse(localStorage.getItem('id')) || [],
      // 所有商品数量和是否勾选
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      // 保存所有商品的详细信息
      goods: []
    }
  },
  created () {
    // 购物车有商品id就调用接口
    if (this.id.length > 0) {
      // 调用接口
      this.$http.get('/goods?id=' + this.id.join(',')).then(res => {
        this.goods = res.data.data
      })
    }
  },
  methods: {
    // 删除
    remove (id) {
      // console.log(id)
      this.goods.forEach((v, index) => {
        if (v.id === id) {
          // 删除购物车的商品
          this.goods.splice(index, 1)
          // 刷新时删除页面中的数据
          this.id.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style lang="less">
.cart {
  padding-bottom: 30px;
}
.cart .van-checkbox__label {
  width: 100%;
}
.allchk_left {
  position: absolute;
  top: 15px;
  left: 0px;
}
.van-card__title {
  font-size: 14px;
}
.van-card__desc {
  font-size: 14px;
  display: block;
  // 超出宽度自动换行
  white-space: normal;
}
.van-card__price {
  display: inline-block;
  color: #ee0a24;
  font-weight: 500;
  font-size: 16px;
}
.van-card__title {
  max-height: 32px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 5px;
}
.van-card__bottom,
.van-card__desc {
  line-height: 21px;
}
.van-card__desc {
  max-height: 45px;
  color: #7d7e80;
}
// 小计
.van-card__footer {
  font-size: 30px;
  -webkit-flex: none;
  flex: none;
  text-align: -webkit-left;
}
// 删除按钮
.van-button--normal {
  padding: 0 15px;
  font-size: 14px;
  height: 100%;
}
.van-submit-bar__button {
  width: 110px;
  height: 55px;
}
.priceColor {
  margin-left: 5px;
  color: red !important;
  font-weight: bold;
  font-size: 17px;
}
.botttom {
  margin-bottom: 85px;
}
</style>
