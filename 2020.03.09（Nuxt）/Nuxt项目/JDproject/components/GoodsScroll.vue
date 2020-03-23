<template>
  <div class="gswiper">
    <ul :style="{marginLeft: marginLeft+'px', transitionDuration}">
      <li v-for="(item, index) in goods" :key="index">
        <img :src="item.image" alt />
        <div class="title">{{item.goods_name}}</div>
        <div class="price">
          <span class="price-sp">￥{{item.seckill_price}}</span>
          <span class="price-p">￥{{item.price}}</span>
        </div>
      </li>
    </ul>
    <div @click="left" class="leftbtn"><</div>
    <div @click="right" class="rightbtn">></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionDuration: "0.5s",
      marginLeft: -198 * 4, // 向左滚动的位置
      goods: [
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/103810/19/15816/183426/5e75821cE51a6231f/8b4dd7af5b05c0f6.jpg.webp",
          goods_name:
            "【二手9成新】苹果7手机 Apple iPhone 7 4.7英寸 磨砂黑色 128G 全网通",
          price: "1357.00",
          seckill_price: "1699.00"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/100068/8/15448/158517/5e72d870E4c65079e/edc49eca07b9a529.png.webp",
          goods_name:
            "TCL指纹锁智能锁指纹锁防盗门智能门锁密码锁 指纹锁家用防盗门锁 K1A全镜面+免费安装+三年换新②",
          price: "789.00",
          seckill_price: "1699.00"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t21658/141/2213585511/103769/56408669/5b4b06cbNfe2ff7f7.jpg.webp",
          goods_name:
            "阿玛尼（ARMANI）臻致丝绒哑光唇釉 口红 405 红管哑光 番茄红色 6.5ml",
          price: "269.00",
          seckill_price: "329.00"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/95142/12/14529/109180/5e65a149E0a19543a/88a96c4a339c6847.jpg.webp",
          goods_name:
            "意大利袋鼠（L'ALPINA）女包单肩包女手提包女士包包时尚欧美百搭牛皮包斜挎包黑色662011013",
          price: "329.00",
          seckill_price: "369.00"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/86584/8/15229/78186/5e6edc21E16b914c3/0a01543cd7f2d72b.jpg.webp",
          goods_name:
            "胖挪挪 高腰牛仔裤女老爹裤阔腿宽松直筒女式女装九分裤哈伦裤 nzk6635 复古蓝 S",
          price: "118.00",
          seckill_price: "69.00"
        },
        {
          image:
            "https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/86051/23/15480/64338/5e6ed7e8E5c80777c/ed7061eb1be99f09.jpg.webp",
          goods_name:
            "胖挪挪 高腰牛仔裤女老爹裤阔腿宽松直筒女式女装九分裤哈伦裤 nzk6635 复古蓝 S",
          price: "24.80",
          seckill_price: "14.80"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/86374/6/14693/40058/5e674ff9Ebe466014/81300c35f7ab4f2d.jpg.webp",
          goods_name:
            "护目镜防抗疲劳防蓝光眼镜男女防辐射明星同款电脑游戏通用办公学习眼镜 3016亮黑银圈",
          price: "39.00",
          seckill_price: "101.00"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/96677/16/15315/78693/5e710aa8Ef1edb41d/2d4ffc58456bd3e7.jpg.webp",
          goods_name:
            "【春装爆款 品质保证】2020春装新款针织衫女套头长袖蕾丝打底衫ins网红宽松上衣女潮 浅咖 L",
          price: "158.00",
          seckill_price: "58.00"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/101850/22/15393/85403/5e71dad8Ecd490fd4/f8bcfb873819c1a1.jpg.webp",
          goods_name:
            "MYQAMRA 18k金四叶草手链女彩金生日七夕情人节礼物送老婆 18K玫瑰金＊赠检测证书",
          price: "1799.00",
          seckill_price: "949.00"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/86945/9/15627/149005/5e733abbE4a2c0ca4/21212b4820fa9d3b.jpg.webp",
          goods_name:
            "【二手99新】Apple iPhonex XSmax苹果x XSmax 双卡双待国行全网通 二手手机 XS max金色 256G 全网通『赠全新苹果充电器』",
          price: "9999.00",
          seckill_price: "5255.00"
        },
        {
          image:
            "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/34568/39/5892/74753/5cc150feE541f6b36/fe55ceb438016af0.jpg.webp",
          goods_name: "芝华士（Chivas）洋酒 12年 苏格兰 威士忌 1000ml",
          price: "268.00",
          seckill_price: "191.00"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/109665/19/9402/47678/5e730b30Efb7acfc1/30ca4c5893cc6675.jpg.webp",
          goods_name:
            "小乔跑步机 家用可折叠智能运动健身器材多功能超静音减震小型迷你走步机室内减肥器材 XQIAO-A1 基础款A1C",
          price: "1999.00",
          seckill_price: "1459.00"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/102256/18/15492/198138/5e71c8b1Ecdb8983a/6fbc246779361131.jpg.webp",
          goods_name:
            "得力（deli）4900 人体工程靠背办公椅/电脑椅/职员椅/椅子 家用网布可升降转椅",
          price: "299.00",
          seckill_price: "205.00"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/94170/14/15679/194849/5e72c466E5156aed3/81a68748beebb244.jpg.webp",
          goods_name:
            "炊大皇锅具套装不粘炒锅煎锅汤锅三件套装锅送木铲电磁炉燃气煤气灶明火通用WG46628",
          price: "199.00",
          seckill_price: "179.00"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/104128/36/15232/113422/5e709ff1E8e969e78/96a4dc180f559283.jpg.webp",
          goods_name:
            "芬腾 睡衣女纯棉春秋季新品长袖开衫舒适翻领睡衣英文印花全棉家居服套装 虾色 L",
          price: "219.00",
          seckill_price: "￥98.90"
        },
        {
          image:
            "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/100045/23/15343/143381/5e71cfefEec6c2979/374e54f6e70cde4f.png.webp",
          goods_name:
            "【闪电发货】完美日记（PERFECT DIARY） 光影星河九色眼影盘（04 金沙）10g（易上色不飞粉）",
          price: "99.00",
          seckill_price: "89.80"
        },
        {
          image:
            "https://img10.360buyimg.com/mobilecms/s140x140_jfs/t1/106897/25/14784/128078/5e69b290E15849ef4/8279717748ef713f.jpg.webp",
          goods_name:
            "奔腾 POVOS CBJ-BT01A茶吧机 家用多功能智能温热型立式饮水机",
          price: "199.00",
          seckill_price: "399.00"
        },
        {
          image:
            "https://img11.360buyimg.com/mobilecms/s140x140_jfs/t1/87575/3/15429/161857/5e71f84eEba069738/7367fde1c414a67f.jpg.webp",
          goods_name:
            "CHEERS芝华仕按摩椅家用型太空舱电动智能迷你全身芝华士M2020 白金色（京东仓）",
          price: "59999.00",
          seckill_price: "3319.00"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/102163/18/15585/200157/5e730f96E61fa8f5e/5cf7712b63a9ec00.jpg.webp",
          goods_name:
            "维意定制榻榻米床定制 整体现代简约衣柜订制  抢立减大礼包 预付金:拍前请咨询客服",
          price: "799.00",
          seckill_price: "1299.00"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/107226/28/9403/199778/5e7305dbEceb7d1a6/c1e28ee220f9b589.jpg.webp",
          goods_name:
            "顶瓜瓜睡衣女纯棉夏季短袖可爱甜美少女家居服女套装情侣睡衣可外穿ZY430022 橡皮红女 165",
          price: "59.00",
          seckill_price: "139.00"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/103810/19/15816/183426/5e75821cE51a6231f/8b4dd7af5b05c0f6.jpg.webp",
          goods_name:
            "【二手9成新】苹果7手机 Apple iPhone 7 4.7英寸 磨砂黑色 128G 全网通",
          price: "1357.00",
          seckill_price: "1699.00"
        },
        {
          image:
            "https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/100068/8/15448/158517/5e72d870E4c65079e/edc49eca07b9a529.png.webp",
          goods_name:
            "TCL指纹锁智能锁指纹锁防盗门智能门锁密码锁 指纹锁家用防盗门锁 K1A全镜面+免费安装+三年换新②",
          price: "789.00",
          seckill_price: "1699.00"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t21658/141/2213585511/103769/56408669/5b4b06cbNfe2ff7f7.jpg.webp",
          goods_name:
            "阿玛尼（ARMANI）臻致丝绒哑光唇釉 口红 405 红管哑光 番茄红色 6.5ml",
          price: "269.00",
          seckill_price: "329.00"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/95142/12/14529/109180/5e65a149E0a19543a/88a96c4a339c6847.jpg.webp",
          goods_name:
            "意大利袋鼠（L'ALPINA）女包单肩包女手提包女士包包时尚欧美百搭牛皮包斜挎包黑色662011013",
          price: "329.00",
          seckill_price: "369.00"
        },
        {
          image:
            "https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/86584/8/15229/78186/5e6edc21E16b914c3/0a01543cd7f2d72b.jpg.webp",
          goods_name:
            "胖挪挪 高腰牛仔裤女老爹裤阔腿宽松直筒女式女装九分裤哈伦裤 nzk6635 复古蓝 S",
          price: "118.00",
          seckill_price: "69.00"
        },
        {
          image:
            "https://img30.360buyimg.com/mobilecms/s140x140_jfs/t1/86051/23/15480/64338/5e6ed7e8E5c80777c/ed7061eb1be99f09.jpg.webp",
          goods_name:
            "胖挪挪 高腰牛仔裤女老爹裤阔腿宽松直筒女式女装九分裤哈伦裤 nzk6635 复古蓝 S",
          price: "24.80",
          seckill_price: "14.80"
        },
        {
          image:
            "https://img14.360buyimg.com/mobilecms/s140x140_jfs/t1/86374/6/14693/40058/5e674ff9Ebe466014/81300c35f7ab4f2d.jpg.webp",
          goods_name:
            "护目镜防抗疲劳防蓝光眼镜男女防辐射明星同款电脑游戏通用办公学习眼镜 3016亮黑银圈",
          price: "39.00",
          seckill_price: "101.00"
        },
        {
          image:
            "https://img13.360buyimg.com/mobilecms/s140x140_jfs/t1/96677/16/15315/78693/5e710aa8Ef1edb41d/2d4ffc58456bd3e7.jpg.webp",
          goods_name:
            "【春装爆款 品质保证】2020春装新款针织衫女套头长袖蕾丝打底衫ins网红宽松上衣女潮 浅咖 L",
          price: "158.00",
          seckill_price: "58.00"
        }
      ]
    };
  },
  methods: {
    left() {
      this.marginLeft = this.marginLeft - 198 * 4;
      // 移动完之后判断，如果已经移动到了最后面，就切换到最前4个
      if (this.marginLeft === -4752) {
        setTimeout(() => {
          this.transitionDuration = "0s";
          this.marginLeft = -198 * 4;
          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    },
    right() {
      this.marginLeft = this.marginLeft + 198 * 4;
      // 移动完之后判断，如果已经移动到了最前面，就切换到最后4个
      if (this.marginLeft === 0) {
        setTimeout(() => {
          this.transitionDuration = "0s";

          this.marginLeft = -198 * 20;

          setTimeout(() => {
            this.transitionDuration = "0.5s";
          }, 100);
        }, 500);
      }
    }
  }
};
</script>

<style lang="scss">
$cellWidth: 198px;
.gswiper {
  left: -7px;
  width: $cellWidth * 4;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  .leftbtn,
  .rightbtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #000;
    opacity: 0.2;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
  .leftbtn {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .rightbtn {
    right: 0;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  img {
    width: 90%;
  }
  ul {
    width: $cellWidth * 28;
    transition-property: all;
  }
  li {
    text-align: center;
    padding: 7px 12px;
    float: left;
    overflow: hidden;
    width: $cellWidth;
    position: relative;
    // 每个 LI 后面添加一个渐变的竖线
    &:after {
      content: "";
      display: block;
      top: 0;
      right: 0;
      position: absolute;
      height: 100%;
      width: 1px;
      background-image: linear-gradient(#fff, #eee, #fff);
    }
  }
  .title {
    width: 100%;
    height: 1.6em;
    overflow: hidden;
    margin: 9px 0;
    // 字体超出使用点点点（配合）
    white-space: nowrap;
    // 字体超出使用点点点（配合）
    text-overflow: ellipsis;
  }
  .price {
    span {
      border: 1px solid red;
      vertical-align: middle;
      float: left;
    }
    &-sp {
      background-color: red;
      color: #fff;
      font-size: 16px;
      width: 82px;
      position: relative;
      &::before {
        content: " ";
        width: 0;
        height: 0;
        border-color: transparent white transparent transparent;
        border-style: solid;
        border-width: 24px 8px 0 0;
        position: absolute;
        top: 0;
        left: 76px;
      }
    }
    &-p {
      color: #ccc;
      text-decoration: line-through;
      padding: 3px 15px;
    }
  }
}
</style>
