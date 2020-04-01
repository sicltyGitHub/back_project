<template>
  <div class="sangou">
    <Card title="品牌闪购">
      <div class="shangou-content">
        <div class="row">
          <div class="col-6 shangou-left">
            <img
              class="shangou-logo"
              src="https://img30.360buyimg.com/deepvisual/s70x35_jfs/t1/90802/2/16538/8634/5e79b136E78f68fd0/8ea1d9e37217389d.png!cc_70x35.webp"
              alt
            />
            <div class="title">爆款电脑数码</div>
            <div class="stitle">全场最高直降1610元 | 仅剩2天</div>
            <img
              class="shangou-glogo"
              src="https://img14.360buyimg.com/deepvisual/s390x390_jfs/t14596/63/1294562880/271777/338be31f/5a4b6685Nc35ed86e.jpg!cc_130x130.webp"
              alt
            />
          </div>
          <div class="col-6 shangou-right">
            <ul>
              <li v-for="(item, index) in 6" :key="index">
                <img
                  src="https://img13.360buyimg.com/deepvisual/s300x150_jfs/t1/68354/36/11382/15892/5d8c5b7bEc91c07d3/373d191f1d43eb4b.png!cc_300x150.webp"
                  alt
                />
                <p>美味生鲜盛宴</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
  }
};
</script>

<style lang="scss">
.shangou {
  &-content {
    padding: 0 10px 20px 15px;
  }
  &-left {
    text-align: center;
    background-color: #f8faf7;
    .title {
      font-size: 16px;
      margin: 5px 0;
    }
    .shangou-logo {
      width: 100px;
    }
    .shangou-glogo {
      width: 62%;
      &:hover{
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
  &-right {
    li {
      position: relative;
      float: left;
      width: 50%;
      text-align: center;
      img {
        width: 70%;
        margin-bottom: 10px;
        &:hover{
        cursor: pointer;
        opacity: 0.7;
      }
      }
      p {
        margin-bottom: 10px;
      }
      // 奇数选择器
      &:nth-child(odd)::after {
        position: absolute; 
        top: 0;
        right: 0;
        content: "";
        height: 50px;
        width: 1px;
        display: block;
        background-image: radial-gradient(#eee, #f5f5f5);
      }
    }
  }
  img {
    width: 80%;
  }
}
</style>