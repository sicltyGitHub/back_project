<template>
  <div>
    <div class="nuxt-header">
      <!-- 顶部导航 start -->
      <div class="topnav">
        <div class="topnav_bd w1210 bc">
          <div class="topnav_left"></div>
          <div class="topnav_right fr">
            <ul>
              <!-- 登陆了 -->
              <li v-if="$store.state.auth.loggedIn">
                您好：{{$store.state.auth.user.username}}
                <img
                  :src="$store.state.auth.user.avatar"
                  style="width:19px; height:10px; border:5px solid skyblue; border-radius:50%"
                />
                <button @click="logout">退出</button>
              </li>
              <!-- 未登录 -->
              <li v-else>
                您好，欢迎来到京西！
                [
                <nuxt-link to="/login">登录</nuxt-link>]
                [
                <nuxt-link to="/regist">免费注册</nuxt-link>]
              </li>
              <li class="line">|</li>
              <li>
                <nuxt-link to="/order">我的订单</nuxt-link>
              </li>
              <li class="line">|</li>
              <li>客户服务</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 顶部导航 end -->

      <div style="clear:both;"></div>

      <!-- 头部 start -->
      <div class="header w1210 bc mt15">
        <!-- 头部上半部分 start 包括 logo、搜索、用户中心和购物车结算 -->
        <div class="logo w1210">
          <h1 class="fl">
            <nuxt-link to="/">
              <img src="/jdshop/images/logo.png" alt="京西商城" />
            </nuxt-link>
          </h1>
          <!-- 头部搜索 start -->
          <div class="search fl">
            <div class="search_form">
              <div class="form_left fl"></div>
              <form action name="serarch" method="get" class="fl">
                <input type="text" class="txt" value="请输入商品关键字" />
                <input type="submit" class="btn" value="搜索" />
              </form>
              <div class="form_right fl"></div>
            </div>

            <div style="clear:both;"></div>

            <div class="hot_search">
              <strong>热门搜索:</strong>
              <a href>D-Link无线路由</a>
              <a href>休闲男鞋</a>
              <a href>TCL空调</a>
              <a href>耐克篮球鞋</a>
            </div>
          </div>
          <!-- 头部搜索 end -->

          <!-- 用户中心 start-->
          <div class="user fl">
            <dl>
              <dt>
                <em></em>
                <a href>
                  <nuxt-link to="/user">用户中心</nuxt-link>
                </a>
                <b></b>
              </dt>
              <dd>
                <div class="prompt">
                  您好，请
                  <a href>登录</a>
                </div>
                <div class="uclist mt10">
                  <ul class="list1 fl">
                    <li>
                      <a href>用户信息></a>
                    </li>
                    <li>
                      <a href>我的订单></a>
                    </li>
                    <li>
                      <a href>收货地址></a>
                    </li>
                    <li>
                      <a href>我的收藏></a>
                    </li>
                  </ul>

                  <ul class="fl">
                    <li>
                      <a href>我的留言></a>
                    </li>
                    <li>
                      <a href>我的红包></a>
                    </li>
                    <li>
                      <a href>我的评论></a>
                    </li>
                    <li>
                      <a href>资金管理></a>
                    </li>
                  </ul>
                </div>
                <div style="clear:both;"></div>
                <div class="viewlist mt10">
                  <h3>最近浏览的商品：</h3>
                  <ul>
                    <li>
                      <a href>
                        <img src="/jdshop/images/view_list1.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href>
                        <img src="/jdshop/images/view_list2.jpg" alt />
                      </a>
                    </li>
                    <li>
                      <a href>
                        <img src="/jdshop/images/view_list3.jpg" alt />
                      </a>
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
          <!-- 用户中心 end-->

          <!-- 购物车 start -->
          <div class="cart fl">
            <dl>
              <dt>
                <nuxt-link to="/cart1">去购物车结算</nuxt-link>
                <b></b>
              </dt>
              <dd>
                <div class="prompt">购物车中还没有商品，赶紧选购吧！</div>
              </dd>
            </dl>
          </div>
          <!-- 购物车 end -->
        </div>
        <!-- 头部上半部分 end -->

        <div style="clear:both;"></div>

        <!-- 导航条部分 start -->
        <div class="nav w1210 bc mt10">
          <!--  商品分类部分 start-->
          <div :class="{category: true, fl: true, cat1: $route.path != '/'}">
            <!-- 非首页，需要添加cat1类 -->
            <div :class="{cat_hd: true, off: $route.path != '/'}">
              <!-- 注意，首页在此div上只需要添加cat_hd类，非首页，默认收缩分类时添加上off类，鼠标滑过时展开菜单则将off类换成on类 -->
              <h2>全部商品分类</h2>
              <em></em>
            </div>

            <div :class="{cat_bd: true, none: $route.path != '/'}">
              <div
                v-for="(item,index) in $store.state.category.categories"
                :key="index"
                :class="{cat:true, item1:index === 0}"
              >
                <h3>
                  <a href>{{item.cat_name}}</a>
                  <b></b>
                </h3>
                <div :class="{cat_detail: true, none: $route.path != '/'}">
                  <dl class="dl_1st">
                    <dt>
                      <a href>电子书</a>
                    </dt>
                    <dd>
                      <a href>免费</a>
                      <a href>小说</a>
                      <a href>励志与成功</a>
                      <a href>婚恋/两性</a>
                      <a href>文学</a>
                      <a href>经管</a>
                      <a href>畅读VIP</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>数字音乐</a>
                    </dt>
                    <dd>
                      <a href>通俗流行</a>
                      <a href>古典音乐</a>
                      <a href>摇滚说唱</a>
                      <a href>爵士蓝调</a>
                      <a href>乡村民谣</a>
                      <a href>有声读物</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>音像</a>
                    </dt>
                    <dd>
                      <a href>音乐</a>
                      <a href>影视</a>
                      <a href>教育音像</a>
                      <a href>游戏</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>文艺</a>
                    </dt>
                    <dd>
                      <a href>小说</a>
                      <a href>文学</a>
                      <a href>青春文学</a>
                      <a href>传纪</a>
                      <a href>艺术</a>
                      <a href>经管</a>
                      <a href>畅读VIP</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>人文社科</a>
                    </dt>
                    <dd>
                      <a href>历史</a>
                      <a href>心理学</a>
                      <a href>政治/军事</a>
                      <a href>国学/古籍</a>
                      <a href>哲学/宗教</a>
                      <a href>社会科学</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>经管励志</a>
                    </dt>
                    <dd>
                      <a href>经济</a>
                      <a href>金融与投资</a>
                      <a href>管理</a>
                      <a href>励志与成功</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>人文社科</a>
                    </dt>
                    <dd>
                      <a href>历史</a>
                      <a href>心理学</a>
                      <a href>政治/军事</a>
                      <a href>国学/古籍</a>
                      <a href>哲学/宗教</a>
                      <a href>社会科学</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>生活</a>
                    </dt>
                    <dd>
                      <a href>烹饪/美食</a>
                      <a href>时尚/美妆</a>
                      <a href>家居</a>
                      <a href>娱乐/休闲</a>
                      <a href>动漫/幽默</a>
                      <a href>体育/运动</a>
                    </dd>
                  </dl>

                  <dl>
                    <dt>
                      <a href>科技</a>
                    </dt>
                    <dd>
                      <a href>科普</a>
                      <a href>建筑</a>
                      <a href>IT</a>
                      <a href>医学</a>
                      <a href>工业技术</a>
                      <a href>电子/通信</a>
                      <a href>农林</a>
                      <a href>科学与自然</a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <!--  商品分类部分 end-->

          <div class="navitems fl">
            <ul class="fl">
              <li class="current">
                <a href>首页</a>
              </li>
              <li>
                <a href>电脑频道</a>
              </li>
              <li>
                <a href>家用电器</a>
              </li>
              <li>
                <a href>品牌大全</a>
              </li>
              <li>
                <a href>团购</a>
              </li>
              <li>
                <a href>积分商城</a>
              </li>
              <li>
                <a href>夺宝奇兵</a>
              </li>
            </ul>
            <div class="right_corner fl"></div>
          </div>
        </div>
        <!-- 导航条部分 end -->
      </div>
      <!-- 头部 end-->

      <div style="clear:both;"></div>
    </div>
    <div class="nuxt-main">
      <!-- 加载子页面 -->
      <nuxt />
    </div>
    <div class="nuxt-footer">
      <div style="clear:both;"></div>

      <!-- 底部导航 start -->
      <div class="bottomnav w1210 bc mt10">
        <div class="bnav1">
          <h3>
            <b></b>
            <em>购物指南</em>
          </h3>
          <ul>
            <li>
              <a href>购物流程</a>
            </li>
            <li>
              <a href>会员介绍</a>
            </li>
            <li>
              <a href>团购/机票/充值/点卡</a>
            </li>
            <li>
              <a href>常见问题</a>
            </li>
            <li>
              <a href>大家电</a>
            </li>
            <li>
              <a href>联系客服</a>
            </li>
          </ul>
        </div>

        <div class="bnav2">
          <h3>
            <b></b>
            <em>配送方式</em>
          </h3>
          <ul>
            <li>
              <a href>上门自提</a>
            </li>
            <li>
              <a href>快速运输</a>
            </li>
            <li>
              <a href>特快专递（EMS）</a>
            </li>
            <li>
              <a href>如何送礼</a>
            </li>
            <li>
              <a href>海外购物</a>
            </li>
          </ul>
        </div>

        <div class="bnav3">
          <h3>
            <b></b>
            <em>支付方式</em>
          </h3>
          <ul>
            <li>
              <a href>货到付款</a>
            </li>
            <li>
              <a href>在线支付</a>
            </li>
            <li>
              <a href>分期付款</a>
            </li>
            <li>
              <a href>邮局汇款</a>
            </li>
            <li>
              <a href>公司转账</a>
            </li>
          </ul>
        </div>

        <div class="bnav4">
          <h3>
            <b></b>
            <em>售后服务</em>
          </h3>
          <ul>
            <li>
              <a href>退换货政策</a>
            </li>
            <li>
              <a href>退换货流程</a>
            </li>
            <li>
              <a href>价格保护</a>
            </li>
            <li>
              <a href>退款说明</a>
            </li>
            <li>
              <a href>返修/退换货</a>
            </li>
            <li>
              <a href>退款申请</a>
            </li>
          </ul>
        </div>

        <div class="bnav5">
          <h3>
            <b></b>
            <em>特色服务</em>
          </h3>
          <ul>
            <li>
              <a href>夺宝岛</a>
            </li>
            <li>
              <a href>DIY装机</a>
            </li>
            <li>
              <a href>延保服务</a>
            </li>
            <li>
              <a href>家电下乡</a>
            </li>
            <li>
              <a href>京东礼品卡</a>
            </li>
            <li>
              <a href>能效补贴</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部导航 end -->

      <div style="clear:both;"></div>
      <!-- 底部版权 start -->
      <div class="footer w1210 bc mt10">
        <p class="links">
          <a href>关于我们</a> |
          <a href>联系我们</a> |
          <a href>人才招聘</a> |
          <a href>商家入驻</a> |
          <a href>千寻网</a> |
          <a href>奢侈品网</a> |
          <a href>广告服务</a> |
          <a href>移动终端</a> |
          <a href>友情链接</a> |
          <a href>销售联盟</a> |
          <a href>京西论坛</a>
        </p>
        <p class="copyright">© 2005-2013 京东网上商城 版权所有，并保留所有权利。 ICP备案证书号:京ICP证070359号</p>
        <p class="auth">
          <a href>
            <img src="/jdshop/images/xin.png" alt />
          </a>
          <a href>
            <img src="/jdshop/images/kexin.jpg" alt />
          </a>
          <a href>
            <img src="/jdshop/images/police.jpg" alt />
          </a>
          <a href>
            <img src="/jdshop/images/beian.gif" alt />
          </a>
        </p>
      </div>
      <!-- 底部版权 end -->
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: "stylesheet", href: "/jdshop/style/base.css" },
        { rel: "stylesheet", href: "/jdshop/style/global.css" },
        { rel: "stylesheet", href: "/jdshop/style/header.css" },
        { rel: "stylesheet", href: "/jdshop/style/bottomnav.css" },
        { rel: "stylesheet", href: "/jdshop/style/footer.css" }
      ],
      script: [
        { src: "/jdshop/js/jquery-1.8.3.min.js" },
        { src: "/jdshop/js/header.js" }
      ]
    };
  },
  methods: {
    // 退出按钮
    logout() {
      // 调用 auth 模块中的退出方法
      this.$auth.logout();
    }
  }
};
</script>
