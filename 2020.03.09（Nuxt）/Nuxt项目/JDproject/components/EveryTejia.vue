<template>
<!-- 每日特价 -->
  <div class="tejia">
    <Card @change="onChange" title="每日特价" :btns="['精选','数码','美食','百货','预告']">
      <!-- 插槽 -->
      <template>
        <div class="tejia-content">
          <div class="first">
            <img :src="tj[tj_i][0].image" alt />
            <div class="title">{{tj[tj_i][0].goods_name}}</div>
            <div class="price">
              ￥{{tj[tj_i][0].tprice}}
              <del>￥{{tj[tj_i][0].price}}</del>
            </div>
            <p>热卖中</p>
            <div class="tag">{{tj[tj_i][0].tag}}</div>
          </div>
          <!-- 渲染时候截取后四个 -->
          <div v-for="(item, index) in tj[tj_i].slice(1,5)" :key="index">
            <img :src="item.image" alt />
            <div class="title">{{item.goods_name}}</div>
            <div class="price">￥{{item.tprice}}</div>
            <del>￥{{item.price}}</del>
            <span class="hot">{{item.hot}}</span>
            <div class="span_price">{{item.tag}}</div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
// 卡片
import Card from "~/components/Card";
export default {
  // 注册引入的组件
  components: {
    Card
  },
  data() {
    return {
      // 当前显示第几组
      tj_i: 0,
      // 每日特价
      tj: [
        [
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/107036/17/13582/191322/5e5be78aE8df743d5/17cf04504e9f7426.jpg!q70.jpg.webp",
            goods_name: "女神专属手表套装",
            // 特价
            tprice: 168,
            // 原价
            price: 258,
            // 标签
            tag: "39天最低价"
          },
          {
            image:
              "https://img20.360buyimg.com/mobilecms/s144x144_jfs/t1/92068/21/14676/178912/5e6690b6E8ecf9575/c05d7cb42a002bb2.jpg!q70.jpg.webp",
            goods_name: "连帽卫衣",
            // 特价
            tprice: 48.9,
            // 原价
            price: 129,
            // 标签
            tag: "34天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/107935/6/8490/169215/5e69d6a6E12fe10a7/9bc9e911be004a42.png!q70.jpg.webp",
            goods_name: "春套头时尚短款针织衫",
            // 特价
            tprice: 49.9,
            // 原价
            price: 138,
            // 标签
            tag: "一年最低价", // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t19090/129/958824874/98944/c86f1a6d/5ab395a1N10f79b0d.jpg!q70.jpg.webp",
            goods_name: "氨基酸锁水按摩洁面乳120ml",
            // 特价
            tprice: 9.9,
            // 原价
            price: 29,
            // 标签
            tag: "一年最低价", // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img13.360buyimg.com/mobilecms/s144x144_jfs/t1/106138/5/11977/77420/5e40e8aeE6a992dec/51b36e6efa0b9519.jpg!q70.jpg.webp",
            goods_name: "男士中长款连帽夹克外套",
            // 特价
            tprice: 87,
            // 原价
            price: 168,
            // 标签
            tag: "42天最低价", // 热卖
            hot: "热卖中"
          }
        ],
        [
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/89000/16/15289/64449/5e6f15cbEade06ad0/ec2b47b17bd7078a.jpg!q70.jpg.webp",
            goods_name: "速钛手机电脑游系吃鸡",
            // 特价
            tprice: 59,
            // 原价
            price: 128,
            // 标签
            tag: "344天最低价"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/99879/18/15227/48937/5e730a86E659f446d/812d1b9ae368109d.jpg!q70.jpg.webp",
            goods_name: "光米S3手机同屏家用高清",
            // 特价
            tprice: 298,
            // 原价
            price: 699,
            // 标签
            tag: "39天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/102315/8/15702/198896/5e72eda0E85529035/cea2423fa59bb67e.png!q70.jpg.webp",
            goods_name: "realme X手机省450赠碎屏",
            // 特价
            tprice: 999,
            // 原价
            price: 1199,
            // 标签
            tag: "133天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t1/102690/34/14539/57234/5e6616e4E6f7f1e25/7e0f50ac24cf60ae.jpg!q70.jpg.webp",
            goods_name: "京东定制款双人游戏机",
            // 特价
            tprice: 59,
            // 原价
            price: 108,
            // 标签
            tag: "188天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/108276/13/9129/97250/5e6f50e5Ef6aba730/9a88bf9c67d72d1b.jpg!q70.jpg.webp",
            goods_name: "帆睿 华为type-c数据线",
            // 特价
            tprice: 9.8,
            // 原价
            price: 19.8,
            // 标签
            tag: "183天最低价",
            // 热卖
            hot: "热卖中"
          }
        ],
        [
          {
            image:
              "https://img20.360buyimg.com/mobilecms/s144x144_jfs/t1/85402/19/15343/98129/5e6f41f0E7996a1d9/7d85a3c3cb22e98f.jpg!q70.jpg.webp",
            goods_name: "海欣 虾滑火锅丸料 生鲜",
            // 特价
            tprice: 15.8,
            // 原价
            price: 23.8,
            // 标签
            tag: "52天最低价"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/100874/32/14188/203526/5e63a91cE444ce9df/b9384aa2be358ea4.png!q70.jpg.webp",
            goods_name: "买3发4 乌龙茶油切黑乌龙",
            // 特价
            tprice: 12.9,
            // 原价
            price: 30,
            // 标签
            tag: "114天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img14.360buyimg.com/mobilecms/s144x144_jfs/t1/102751/9/14451/194073/5e6361baE5675f9c7/5889bae49856ce2b.jpg!q70.jpg.webp",
            goods_name: "精选奉节脐橙5斤",
            // 特价
            tprice: 18.79,
            // 原价
            price: 29.9,
            // 标签
            tag: "1年最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img14.360buyimg.com/mobilecms/s144x144_jfs/t1/106034/30/15107/169856/5e6f4b88E7d01faa0/6a5466dcb2de828f.jpg!q70.jpg.webp",
            goods_name: "糖心红薯地瓜精选5斤装",
            // 特价
            tprice: 18.9,
            // 原价
            price: 29.9,
            // 标签
            tag: "71天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/103538/38/15515/127286/5e71c1bfE8952aa01/484e0c4666a91dfe.jpg!q70.jpg.webp",
            goods_name: "蔬农联不知火丑橘 5斤",
            // 特价
            tprice: 24.9,
            // 原价
            price: 35.9,
            // 标签
            tag: "115天最低价",
            // 热卖
            hot: "热卖中"
          }
        ],
        [
          {
            image:
              "https://img13.360buyimg.com/mobilecms/s144x144_jfs/t1/103002/12/15549/136650/5e70c753Ef8aaecce/4a000d956d6a4355.jpg!q70.jpg.webp",
            goods_name: "出口日本娇韵胶囊改善皮肤水份",
            // 特价
            tprice: 48.8,
            // 原价
            price: 89,
            // 标签
            tag: "262天最低价"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/101073/30/15598/158845/5e717b1cE06b47d04/8bb1af66a57a15ef.jpg!q70.jpg.webp",
            goods_name: "修正 壳聚糖牡蛎片 30粒/瓶",
            // 特价
            tprice: 88,
            // 原价
            price: 269,
            // 标签
            tag: "114天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img20.360buyimg.com/mobilecms/s144x144_jfs/t1/110426/24/9382/104622/5e71c7efEbb8bf712/916d51f29d6520df.jpg!q70.jpg.webp",
            goods_name: "紫一维生素E软胶囊VE 100粒",
            // 特价
            tprice: 18,
            // 原价
            price: 39.9,
            // 标签
            tag: "1年最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img13.360buyimg.com/mobilecms/s144x144_jfs/t1/101367/26/9811/47292/5e131cd7E70170ddd/fa3f6929f9f1d0f7.jpg!q70.jpg.webp",
            goods_name:
              "京东京造十元店 正版宝可梦授权皮卡丘清新系列小挂件 皮卡丘款",
            // 特价
            tprice: 12.5,
            // 原价
            price: 15,
            // 标签
            tag: "71天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img13.360buyimg.com/mobilecms/s144x144_jfs/t1/82540/24/6428/72875/5d47e0a0E157f2bc9/61858ed5e9e4c9bf.jpg!q70.jpg.webp",
            goods_name:
              "京东京造十元店 AMOO星人系列零钱包女士可爱多功能轻便硬币包 红色",
            // 特价
            tprice: 12.5,
            // 原价
            price: 15,
            // 标签
            tag: "30天最低价",
            // 热卖
            hot: "热卖中"
          }
        ],
        [
          {
            image:
              "https://img11.360buyimg.com/mobilecms/s144x144_jfs/t1/101926/34/15066/55781/5e6dc709Eaf56554b/64a04633a5975f17.jpg!q70.jpg.webp",
            goods_name: "鸿星尔克2020秋季新款",
            // 特价
            tprice: 98.99,
            // 原价
            price: 259,
            // 标签
            tag: "216天最低价"
          },
          {
            image:
              "https://img12.360buyimg.com/mobilecms/s144x144_jfs/t1/104039/6/9715/205597/5e11c0adE480574e4/7bf4a54f439601c3.jpg!q70.jpg.webp",
            goods_name: "吉普盾外套男春夏柔软透气速干",
            // 特价
            tprice: 59,
            // 原价
            price: 169,
            // 标签
            tag: "155天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img30.360buyimg.com/mobilecms/s144x144_jfs/t1/94858/39/6606/84375/5df4b8c4E652749ef/fa237ea46dddab04.jpg!q70.jpg.webp",
            goods_name: "男士休闲夹克衫棒球服",
            // 特价
            tprice: 57,
            // 原价
            price: 128,
            // 标签
            tag: "100天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img13.360buyimg.com/mobilecms/s144x144_jfs/t1/96149/11/14504/190412/5e68746dE3049870a/0c0cf30ae8980c33.jpg!q70.jpg.webp",
            goods_name: "【法国名品】轻奢定制舒适跑鞋",
            // 特价
            tprice: 86.9,
            // 原价
            price: 289.33,
            // 标签
            tag: "195天最低价",
            // 热卖
            hot: "热卖中"
          },
          {
            image:
              "https://img10.360buyimg.com/mobilecms/s144x144_jfs/t1/110089/38/9275/149929/5e71c388Eb0f1cb2c/e0ca271c1ff16e5d.jpg!q70.jpg.webp",
            goods_name: "【必抢好货】春款拼接男鞋",
            // 特价
            tprice: 88,
            // 原价
            price: 289,
            // 标签
            tag: "151天最低价",
            // 热卖
            hot: "热卖中"
          }
        ]
      ]
    };
  },
  methods: {
    // 接收子组件传来的消息
    onChange(i) {
      // 选中时切换商品
      this.tj_i = i;
    }
  }
};
</script>

<style lang="scss">
.tejia {
  &-content {
    // 解决外层收缩
    overflow: hidden;
    background-color: #fff;
    padding: 25px;
    & > div {
      position: relative;
      width: 30%;
      float: left;
      padding: 20px 0;
      // 右边四个商品（原价）
      .price {
        color: #e1251b;
      }
      // 右边四个商品（特价）
      del {
        font-size: 12px;
        color: #999999;
      }
      // 右边四个商品（商品名）
      .title {
        height: 3em;
        color: black;
        overflow: hidden;
      }
      //热卖中
      .hot {
        position: absolute;
        bottom: -7px;
        left: 75px;
        color: #999999;
        font-size: 12px;
      }
      // 一年最低价
      .span_price {
        position: absolute;
        color: white;
        font-size: 6px;
        padding: 1px 4px;
        // 透明度
        opacity: 0.5;
        background-color: #666666;
      }
    }
    // 左边第一个大图商品
    .first {
      position: relative;
      text-align: center;
      height: 240px;
      margin-right: 20px;
      padding: 50px 0 10px 0;
      background-color: #f8f8f9;
      .title {
        color: black;
        padding: 5px 0;
        font-size: 14px;
        font-weight: normal;
      }
      .price {
        color: red;
        font-size: 18px;
        del {
          font-size: 12px;
          color: #999999;
        }
      }
      img {
        width: 100px;
        height: 100px;
        // 第一个图片不浮动
        float: none;
      }
      // 39天最低价
      .tag {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 15px;
        color: white;
        font-weight: bold;
        background-color: #fba62e;
      }
      //热卖中
      p {
        color: #999999;
        font-size: 12px;
      }
    }
    // 所有img设置
    img {
      width: 74px;
      height: 74px;
      float: left;
    }
  }
}
</style>