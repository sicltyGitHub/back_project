<template>
  <div class="index">
    <!-- // 布局 -->
    <el-container>
      <!-- 导航栏 -->
      <el-header>
        <div class="header-wrap clearfix">
          <!-- 导航login -->
          <div class="head-logo">
            <a class="mfw-logo" href="#JavaScript:;"></a>
          </div>
          <!-- 导航文字 -->
          <ul class="head-nav">
            <li class="IndexColor_li">
              <a href="#JavaScript:;" class="IndexColor">首页</a>
            </li>
            <li>
              <a href="#JavaScript:;">目的地</a>
            </li>
            <li>
              <a href="#JavaScript:;">旅游攻略</a>
            </li>
            <li>
              <a
                href="#JavaScript:;"
                class="head-nav-dropdown"
                style="cursor: pointer;display: block;border-bottom:0 none;"
              >
                <span>
                  去旅行
                  <i class="icon-caret-down"></i>
                </span>
              </a>
            </li>
            <li class="head-nav-flight _j_head_nav_flight">
              <a href="#JavaScript:;">机票</a>
            </li>
            <li>
              <a href="#JavaScript:;">订酒店</a>
            </li>
            <li>
              <a
                href="#JavaScript:;"
                class="drop-toggle"
                style="cursor: pointer;display: block;border-bottom:0 none;"
              >
                <span>
                  社区
                  <i class="icon-caret-down"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="#JavaScript:;">APP</a>
            </li>
            <li>
              <a href="#JavaScript:;">
                <div class="mfwzx-logo"></div>
              </a>
            </li>
          </ul>

          <!-- 右边登录图标  -->
          <div class="nav-right clearfix">
            <ul class="nav-right_UL">
              <li></li>
              <li></li>
              <li></li>
              <li>
                <a href="#JaveScript:;">登录</a>
              </li>|
              <li>
                <a href="#JaveScript:;">注册</a>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <!-- 正文 -->
      <el-main>
        <!-- 图片 -->
        <div class="mainIndex">
          <div class="imgSrc">
            <img src="../assets/CoUBGV2_-iGAbjJOAB4EqZlOs1o827.png" alt />
          </div>
          <!-- 图片上方文字 -->
          <div class="ImgText">
            <span class="day">5</span>/Nov.2019
            <h3>写信告诉你，今天海是什么颜色-摩旅环岛，胶片海南</h3>
          </div>
          <!-- 左边小图片 -->
          <ul class="show-nav">
            <li class="active">
              <a href="javascript:">
                <img src="../assets/CoUBGV3FWNOAdkueAATYhV3XR0w514.png" height="62" width="110" />
                <span></span>
              </a>
            </li>
            <li class>
              <a href="javascript:">
                <img src="../assets/CoUBGV3EF6KAUGbVAAc0dRCdJOA069.png" height="62" width="110" />
                <span></span>
              </a>
            </li>
            <li class>
              <a href="javascript:">
                <img src="../assets/CoUBGV3CyCeAM8aTAAb8xdjRfvE182.png" height="62" width="110" />
                <span></span>
              </a>
            </li>
            <li class>
              <a href="javascript:">
                <img src="../assets/CoUBGV3BdKmAE2V7AAXQYgjdEuA798.png" height="62" width="110" />
                <span></span>
              </a>
            </li>
            <li class>
              <a href="javascript:">
                <img src="../assets/CoUBGV2_-haADCxZAAVQysyY_Kc312.png" height="62" width="110" />
                <span></span>
              </a>
            </li>
          </ul>
          <a class="show-more" href="/app/calendar.php">历历在目</a>
          <!-- 搜索 -->
          <div class="search-container">
            <div class="search-group">
              <!-- 全部、酒店、目的地...-->
              <div class="searchtab">
                <ul class="searchUL clearfix">
                  <li class="tab-selected">
                    <i></i>全部
                  </li>
                  <li>
                    <i></i>酒店
                  </li>
                  <li>
                    <i></i>目的地
                  </li>
                  <li>
                    <i></i>去旅行
                  </li>
                  <li>
                    <i></i>机票
                  </li>
                </ul>
              </div>
              <!-- 搜索框 -->
              <div class="searchbar">
                <div class="search-wrapper">
                  <div class="search-input">
                    <input type="text" placeholder="搜目的地/攻略/酒店/旅行特价" autocomplete="off" />
                  </div>
                </div>
                <div class="search-button">
                  <a role="button" href="javascript:">
                    <i class="icon-search"></i>
                  </a>
                </div>
              </div>
            </div>
            <!-- 搜索下面文字提示 -->
            <p class="show-info">
              图片来自于
              <font>
                <a href="#JavaScript:;">青海</a>
              </font>，此目的地共收藏了
              <font>
                <a href="#JavaScript">1557487</a>
              </font>张
              <a href="#JavaScript">青海</a>图片。本片由
              <font>
                <a href="#JavaScript">印章</a>
              </font>荣誉出品！
            </p>
          </div>
        </div>

        <!-- 自由行、跟团游 -->
        <div class="mfw-container clearfix">
          <!-- 顶部介绍 -->
          <div class="sales-entrys-container-innerimg clearfix">
            <!-- 第一个 -->
            <a class="sales-entrys-item entrys-bg-sales" href="#JavaScript:;">
              <div class="sales-entrys-title">自由行</div>
              <div class="sales-entrys-subtitle">旅行就要更自在</div>
            </a>
            <a class="sales-entrys-item entrys-bg-group" href="#JavaScript:;">
              <div class="sales-entrys-title">跟团游</div>
              <div class="sales-entrys-subtitle">行程透明省心游</div>
            </a>
            <a class="sales-entrys-item entrys-bg-localdeals" href="#JavaScript:;">
              <div class="sales-entrys-title">当地游</div>
              <div class="sales-entrys-subtitle">最地道的玩法体验</div>
            </a>
            <a class="sales-entrys-item entrys-bg-flight" href="#JavaScript:;">
              <div class="sales-entrys-title">机票</div>
              <div class="sales-entrys-subtitle">特惠一折起</div>
            </a>
            <a class="sales-entrys-item entrys-bg-hotel" href="#JavaScript:;">
              <div class="sales-entrys-title">订酒店</div>
              <div class="sales-entrys-subtitle">一键全网比价</div>
            </a>
            <a class="sales-entrys-item entrys-bg-visa" href="#JavaScript:;">
              <div class="sales-entrys-title">签证</div>
              <div class="sales-entrys-subtitle">出签率高服务佳</div>
            </a>
            <a class="sales-entrys-item entrys-bg-ship" href="#JavaScript:;">
              <div class="sales-entrys-title">邮轮</div>
              <div class="sales-entrys-subtitle">移动的海上城堡</div>
            </a>
          </div>
          <!-- 右边板块 -->
          <div class="mfw-wrapper">
            <!-- 顶部图片条 -->
            <div class="da-banner">
              <img
                style="display:block;"
                class="ads-output-block-w-m"
                src="../assets/CoUBGV3E0JCAXhGWAAAzJ6EupjA419.png"
                alt
              />
            </div>
            <!-- 热门游记 -->
            <div class="mfw-travelnotes">
              <!-- 左边文字 -->
              <div class="navbar clearfix">
                <ul class="tn-nav">
                  <li class="active _j_gs_tab tn-nav-hot">
                    <a href="#JavaScript:;">热门游记</a>
                    <span class="tn-menu _j_open_search">
                      <i class="tn-menu-icon"></i>筛选
                    </span>
                  </li>
                  <li class="_j_gs_tab tn-nav-new">
                    <a href="javascript:void(0);">最新发表</a>
                  </li>
                </ul>
                <!-- 右边写日记 -->
                <div class="tn-write">
                  <a class="btn-add" href="#JavaScript:;">
                    <i></i>写游记
                  </a>
                </div>
              </div>
              <!-- 下边文字图片盒子-->
              <div class="pagelet-block">
                <!-- 图片文字 -->
                <div class="tn-list">
                  <!-- 第一个 -->
                  <div class="tn-item clearfix">
                    <div class="tn-image">
                      <a href="#JavaScript:;">
                        <img
                          class
                          src="../assets/CoUBGV2hZYOAFl5sAAdz8tryMZ0755.jpg"
                          style="display: inline;"
                        />
                      </a>
                    </div>
                    <!-- 第一个 -->
                    <div class="tn-wrapper">
                      <!-- 标题 -->
                      <dl>
                        <dt>
                          <a href="#JavaScript:;">上天下海十一日，换个角度看世界</a>
                        </dt>
                        <dd>
                          <a
                            href="#JavaScript:;"
                          >从澳洲回来，一直持续激动中，虽然身体上还没有从多日的疲劳中完全恢复，但抑制不住的兴奋劲儿还在不停的往上冒，我把这种症状，称之为“旅行后综合征”，通常发生在完成了极其紧凑、印象深...</a>
                        </dd>
                      </dl>
                      <div class="tn-extra">
                        <span class="tn-ding">
                          <a class="btn-ding" href="javascript:;"></a>
                          <em>51</em>
                        </span>
                        <span class="tn-place">
                          <i></i>
                          <a href="#JavaScript:;" class="_j_gs_item">澳大利亚</a>，by
                        </span>
                        <span class="tn-user">
                          <a href="#JavaScript:;">
                            <img src="../assets/wKgBpVhrnvOAGI5gAAdYYX0zFwg54.jpeg" />
                            克莱尔小熊
                          </a>
                        </span>
                        <span class="tn-nums">
                          <i></i>2089/6
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- 第二个 -->
                  <div class="tn-item clearfix">
                    <div class="tn-image">
                      <a href="#JavaScript:;">
                        <img
                          class
                          src="../assets/CoUBGV24RjeAZxPVABQaZJeojLM562.jpg"
                          style="display: inline;"
                        />
                      </a>
                    </div>
                    <div class="tn-wrapper">
                      <dl>
                        <dt>
                          <a href="#JavaScript:;">手绘塞尔维亚 | 在向日葵盛开的地方，哼一首巴尔干民谣（自驾...</a>
                        </dt>
                        <dd>
                          <a
                            href="#JavaScript:;"
                          >旅行手账林林总总 来人间一趟，你要看看太阳。 活在一个珍贵的世界，每一天都是独一无二。 眼前闪耀的风景等待被欣赏，人和物一样的幸福。向日葵在风中盛开摇曳，空气里弥漫着光的香味。 田...</a>
                        </dd>
                      </dl>
                      <div class="tn-extra">
                        <span class="tn-ding">
                          <a class="btn-ding" href="javascript:;"></a>
                          <em>168</em>
                        </span>
                        <span class="tn-place">
                          <i></i>
                          <a href="#JavaScript:;" class="_j_gs_item">塞尔维亚</a>，by
                        </span>
                        <span class="tn-user">
                          <a href="#JavaScript:;">
                            <img src="../assets/wKgEaVzB3zmAR15sAAGqoFOQ49M25.jpeg" />
                            Rinko咩咩
                          </a>
                        </span>
                        <span class="tn-nums">
                          <i></i>2672/41
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 第三个 -->
                <div class="tn-item clearfix">
                  <div class="tn-image">
                    <a href="#JavaScript;;">
                      <img
                        class
                        src="../assets/CoUBGV29Cl2AWtDJAAvZiR3mISo895.jpg"
                        style="display: inline;"
                      />
                    </a>
                  </div>
                  <div class="tn-wrapper">
                    <dl>
                      <dt>
                        <a href="#JavaScript;;">不负年少不负卿，陪你看遍最美景--Kuramathi，马尔代夫</a>
                      </dt>
                      <dd>
                        <a
                          href="#JavaScript;;"
                        >此生愿陪你看遍最美的风景--To My Love 我说：陪伴是最长情的告白，相守是最温暖的承诺。 你说：我们一起构筑幸福美满的家庭，一起看遍人生最美的风景，一起变成更好的自己。 ❤ ----2018年...</a>
                      </dd>
                    </dl>
                    <div class="tn-extra">
                      <span class="tn-ding">
                        <a class="btn-ding" href="javascript:;"></a>
                        <em>57</em>
                      </span>
                      <span class="tn-place">
                        <i></i>
                        <a href="#JavaScript;;" class="_j_gs_item">马尔代夫</a>，by
                      </span>
                      <span class="tn-user">
                        <a href="#JavaScript;;">
                          <img src="../assets/wKgBEFtyrN2AX8lHAABve8fGCWs93.jpeg" />
                          亮锅
                        </a>
                      </span>
                      <span class="tn-nums">
                        <i></i>1002/4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 第四个 -->
              <div class="tn-item clearfix">
                <div class="tn-image">
                  <a href="#JavaScript:;">
                    <img
                      class
                      src="../assets/CoUBGV25SjuAcGTUAA5KaXtuBvU539.jpg"
                      style="display: inline;"
                    />
                  </a>
                </div>
                <div class="tn-wrapper">
                  <dl>
                    <dt>
                      <a href="#JavaScript:;">十月的尾巴，我们在拉普兰。</a>
                    </dt>
                    <dd>
                      <a
                        href="#JavaScript:;"
                      >出门右转，拉普兰。 古时 丹麦 为了农忙时学校的孩子可以回家帮助家里人收购庄稼而设立的土豆节，延续到了现在，仍然发挥着余热，给本就不勤劳的 丹麦 孩子无故的又多了假期。 既然娃都名正...</a>
                    </dd>
                  </dl>
                  <div class="tn-extra">
                    <span class="tn-ding">
                      <a class="btn-ding" href="#JavaScript:;"></a>
                      <em>59</em>
                    </span>
                    <span class="tn-place">
                      <i></i>
                      <a href="#JavaScript:;" class="_j_gs_item">拉普兰</a>，by
                    </span>
                    <span class="tn-user">
                      <a href="#JavaScript:;">
                        <img src="../assets/wKgBZ1l4eVGACIiPAAHFELr-r8s72.jpeg" />
                        Ranbo牛
                      </a>
                    </span>
                    <span class="tn-nums">
                      <i></i>992/11
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第五个 -->
            <div class="tn-item clearfix">
              <div class="tn-image">
                <a href="#javaScript:;">
                  <img
                    class
                    src="https://b4-q.mafengwo.net/s15/M00/90/0E/CoUBGV2u9T2AMKVpAAdquCVNYIc136.JPG"
                    style="display: inline;"
                  />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#javaScript:;">【冰岛】在世界的尽头，赴一场未知的“超硬核”旅行 | 附冰岛...</a>
                  </dt>
                  <dd>
                    <a
                      href="#javaScript:;"
                    >冰岛 ， 世界尽头的一个奇幻国度， 地球上的一个外星世界。 我的第一次 北欧 之旅🇮🇸 这是一场不完全完美的旅行， 却有很多完美的高光时刻。 碰到各种不可控， 却又一切都那么刚刚好。 有...</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#javaScript:;"></a>
                    <em>67</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#javaScript:;" class="_j_gs_item">冰岛</a>，by
                  </span>
                  <span class="tn-user">
                    <a href="#javaScript:;">
                      <img src="../assets/wKgBZ1nk7o2AK7AtAAB8bIMr2po28.jpeg" />
                      小草莓爱旅行
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>861/26
                  </span>
                </div>
              </div>
            </div>
            <!-- 第六个 -->
            <div class="tn-item clearfix">
              <div class="tn-image">
                <a href="#JavaScript:;" target="../assets">
                  <img
                    class
                    src="../assets/CoUBGV2xJjSAdtuIAAjiHcwKL3E576.jpg"
                    style="display: inline;"
                  />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#JavaScript:;">八小姐捷克，奥地利，匈牙利三国游，海量图～</a>
                  </dt>
                  <dd>
                    <a
                      href="#JavaScript:;"
                    >奥地利航空~~起飞了~~ 在马蜂窝网站上订了捷奥匈的11日游，价格大概在2w左右，包括沿路交通大巴，酒店，和来回机票，食宿，还有 奥地利 签证的费用。有兴趣可以自己去查看一下。 首先还是先...</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#JavaScript:;"></a>
                    <em>102</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#JavaScript:;" class="_j_gs_item">奥地利</a>，by
                  </span>
                  <span class="tn-user">
                    <a href="#JavaScript:;">
                      <img src="../assets/wKgB4l2KoNKADNAdAAB5bFEYHAg35.jpeg" />
                      八小姐
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>3298/56
                  </span>
                </div>
              </div>
            </div>
            <!-- 第七个 -->
            <div class="tn-item clearfix">
              <div class="tn-image">
                <a href="#JavaScript:;">
                  <img
                    class
                    src="../assets/CoUBGV2-tASAeYJkABF9tDQ8gnw194.jpg"
                    style="display: inline;"
                  />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#JavaScript:;">人在囧途之新西兰北岛不自驾之旅（奥克兰网红打卡/霍比特屯/...</a>
                  </dt>
                  <dd>
                    <a
                      href="#JavaScript:;"
                    >2019年09月27日，我向自己预约了这篇游记，当时我说： 仓促之下准备的行程，不知道南半球的中土大陆会带来怎样的体验。 预告 未曾想过何谓 长白 云的故乡，直到看到湛蓝天空飘过延绵不绝的白...</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#JavaScript:;"></a>
                    <em>53</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#JavaScript:;" class="_j_gs_item">新西兰</a>，by
                  </span>
                  <span class="tn-user">
                    <a href="#JavaScript:;">
                      <img src="../assets/wKgED1wTuDuAJkpAAACxlTX40cg68.jpeg" />
                      萌小刀
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>1150/17
                  </span>
                </div>
              </div>
            </div>
            <!-- 第八个 -->
            <div class="tn-item clearfix">
              <div class="tn-image">
                <a href="#JavaScript:;" target="../assets">
                  <img
                    class
                    src="../assets/CoUBGV3AF6KAKYF6AAzqbiuKTO0689.jpg"
                    style="display: inline;"
                  />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#JavaScript:;">【时光停留在最美的地方】奥地利·捷克·匈牙利·天鹅堡自驾游</a>
                  </dt>
                  <dd>
                    <a
                      href="#JavaScript:;"
                    >ღ中欧的时光印记 行走在 欧洲 的古城里 高大的建筑气派精美 阳光洒满的石板路 英俊的马儿踏着清脆有力的脚步哒哒而来 教堂敲响的钟声 回荡在繁华的城市和宁静的小镇 时光在恍惚间模糊了模...</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#JavaScript:;"></a>
                    <em>57</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#JavaScript:;" class="_j_gs_item">中欧</a>，by
                  </span>
                  <span class="tn-user">
                    <a href="#JavaScript:;">
                      <img src="../assets/CoUBGV21V3eAPzxNAADJ9HDIKcc29.jpeg" />
                      小红豆单挑宇宙
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>767/19
                  </span>
                </div>
              </div>
            </div>
            <!-- 第九个 -->
            <div class="tn-item clearfix">
              <div class="tn-image">
                <a href="#JavaScript:;">
                  <img
                    class
                    src="../assets/CoUBGV25mQyAHLX0ADHT5QlYkJg099.jpg"
                    style="display: inline;"
                  />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#JavaScript:;">英伦环岛15天，牛百科带你走遍英格兰、苏格兰、威尔士</a>
                  </dt>
                  <dd>
                    <a
                      href="#JavaScript:;"
                    >精彩先呈 一直以来对 英国 充满念想，查过各种经典坐标，发现还是租车逛起来最方便。本来想约朋友一起自驾的，结果临时被拒，只剩我一个人继续行程。 万里独行，也不一定旅途寂寞，总会遇见...</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="#JavaScript:;"></a>
                    <em>8951</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#JavaScript:;" class="_j_gs_item">英国</a>，by
                  </span>
                  <span class="tn-user">
                    <a href="#JavaScript:;">
                      <img src="../assets/wKgBEFp1T6yAaacwAAwYpsc4aac62.jpeg" />
                      牛奔走天下
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>110827/313
                  </span>
                </div>
              </div>
            </div>
            <!-- 第十个 -->
            <div class="tn-item clearfix">
              <div class="tn-image">
                <a href="#JavaScript:;">
                  <img
                    class
                    src="../assets/wKgED1v73c2AcbjLAAfVoCm9NGE93.jpeg"
                    style="display: inline;"
                  />
                </a>
              </div>
              <div class="tn-wrapper">
                <dl>
                  <dt>
                    <a href="#JavaScript:;">冬日情书，记忆印画</a>
                  </dt>
                  <dd>
                    <a
                      href="#JavaScript:;"
                    >所爱 有人为了朝圣，选择了江东 镰仓 ； 有人为了萤火之森，探寻 九州 ； 有人为了樱花，追逐 京都 ； 这里有 宫崎 骏，很多人向往的天空之城； 这里有藤子不二雄，很多人渴望的的任意门； ...</a>
                  </dd>
                </dl>
                <div class="tn-extra">
                  <span class="tn-ding">
                    <a class="btn-ding" href="javascript:;"></a>
                    <em>85</em>
                  </span>
                  <span class="tn-place">
                    <i></i>
                    <a href="#JavaScript:;" class="_j_gs_item">日本</a>，by
                  </span>
                  <span class="tn-user">
                    <a href="#JavaScript:;">
                      <img src="../assets/wKgE2l1tLPyALycpAADC9LIjdo018.jpeg" />
                      芷。游悦
                    </a>
                  </span>
                  <span class="tn-nums">
                    <i></i>1622/17
                  </span>
                </div>
              </div>
            </div>
            <!-- 分页 -->
            <div align="right" class="m-pagination">
              <span class="count">共55页 / 657条</span>

              <span class="pg-current">1</span>
              <a class="pi _j_pageitem" href="javascript:;">2</a>
              <a class="pi _j_pageitem" href="javascript:;">3</a>
              <a class="pi _j_pageitem" href="javascript:;">4</a>
              <a class="pi _j_pageitem" href="javascript:;">5</a>
              <a class="pi _j_pageitem" href="javascript:;">6</a>
              <a class="pi _j_pageitem" href="javascript:;">7</a>
              <a class="pi _j_pageitem" href="javascript:;">8</a>
              <a class="pi _j_pageitem" href="javascript:;">9</a>
              <a class="pg-next _j_pageitem" href="javascript:;">下一页 &gt;&gt;</a>
            </div>
          </div>
          <!-- 左边安全提示图、轮播图 -->
          <div class="mfw-aside">
            <!-- 第一个安全图 -->
            <div class="asidebox safety-prevention">
              <a style="display:block;margin-top:5px;" href="#javaScript:;">
                <img src="../assets/index-link.png" width="218" height="31" />
              </a>
            </div>
            <!-- 第二个轮播图 -->
            <div class="asidebox box-traveller">
              <div class="asidebox-hd">
                <h2 class="hd-title">
                  <a href="#JavaScript:;">旅行家专栏</a>
                </h2>
                <a class="hd-right" href="#JavaScript:;">专栏首页</a>
              </div>
              <div class="asidebox-bd">
                <ul class="slide-ul">
                  <li>
                    <div class="image">
                      <a href="#JavaScript:;">
                        <img
                          src="../assets/wKgEaVyd7i6AFjCjAADni5x-vvY89.jpeg"
                          height="140"
                          width="260"
                        />
                      </a>
                    </div>
                    <h3>
                      <a href="#JavaScript:;">夏木尼，小王子的玫瑰城市</a>
                    </h3>
                    <p>夏木尼（Chamounix）是法国勃朗峰脚下最著名的小城，《小王子》里的玫瑰城市，世界登山运动的发源地。</p>
                  </li>
                </ul>
                <ol class="slide-ol">
                  <li class="active" data-id="0"></li>
                  <li class data-id="1"></li>
                  <li class data-id="2"></li>
                  <li class data-id="3"></li>
                  <li class data-id="4"></li>
                </ol>
              </div>
            </div>
            <!-- 第三个旅游攻略推荐 -->
            <div class="asidebox box-gonglve">
              <div class="asidebox-hd">
                <h2 class="hd-title" style="color:blackx">旅游攻略推荐</h2>
                <a class="hd-right" href="#JavaScript:;">更多</a>
              </div>
              <div class="asidebox-bd">
                <div class="gonglve-item">
                  <div class="img">
                    <a href="#JavaScript:;">
                      <img src="../assets/wKgBpVWRg4CAVFMPABu4i2HIU8083 (1).jpeg" />
                      <span class="mark">自由行攻略</span>
                    </a>
                  </div>
                  <h3>
                    <a href="#JavaScript:;">曼谷九大必游景点</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- 第四个最新活动轮播图 -->
            <div class="asidebox box-traveller box-activity">
              <div class="asidebox-hd">
                <h2 class="hd-title">
                  <a href="#JavaScript:;">最新活动</a>
                </h2>
                <a class="hd-right" href="#JavaScript:;">查看全部></a>
              </div>
              <div class="asidebox-bd">
                <ul class="slide-ul">
                  <li>
                    <div class="image">
                      <a href="#JavaScript:;">
                        <img
                          src="../assets/CoUBGV20KEWAO7F_AAEuHXBaUnA304.jpg"
                          height="178"
                          width="260"
                        />
                      </a>
                    </div>
                    <h3 class="cup">
                      <a href="#JavaScript:;" class="_js_h5_url">摔杯就走，是那个声音给我的勇气</a>
                    </h3>
                    <p>循声而行，开启一段未知的旅程！</p>
                  </li>
                </ul>
                <ol class="slide-ol">
                  <li class="active" data-id="0"></li>
                  <li class data-id="1"></li>
                  <li class data-id="2"></li>
                  <li class data-id="3"></li>
                  <li class data-id="4"></li>
                </ol>
              </div>
            </div>
            <!-- 第五个未知实验室 -->
            <div class="asidebox box-gonglve">
              <div class="asidebox-hd">
                <h2 class="hd-title" style="color:blackx">未知旅行实验室</h2>
                <a class="hd-right" href="#JavaScript:;">查看更多></a>
              </div>
              <div class="asidebox-bd">
                <div class="gonglve-item">
                  <div class="img">
                    <a href="#JavaScript:;">
                      <img src="../assets/unknownTravel181120.png" width="260" height="170" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第六个加入马蜂窝 -->
            <div class="asidebox box-gonglve joinMfw">
              <div class="asidebox-hd">
                <h2 class="hd-title" style="color:blackx">加入马蜂窝</h2>
                <a class="hd-right" href="#JavaScript:;">查看更多></a>
              </div>
              <div class="asidebox-bd">
                <div class="gonglve-item">
                  <div class="img">
                    <a href="#JavaScript:;">
                      <img width="260" src="../assets/wKgE2l1t1WqAOUvnAACxwvHwMhM32.jpeg" alt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 第七个最新资讯 -->
            <div class="asidebox box-news">
              <div class="asidebox-hd">
                <div class="hd-title">
                  马蜂窝
                  <h2>
                    <a href="javascript:">旅游网</a>
                  </h2>最新资讯
                </div>
              </div>
              <ul class="asidebox-bd">
                <li>
                  09月28日
                  <a href="#JavaScript:;">马蜂窝国庆白领出游偏好调查：超7成在旅途中工作</a>
                </li>
                <li>
                  09月25日
                  <a href="#JavaScript:;">九寨沟部分景区试开放引关注，马蜂窝提醒游客文明出行</a>
                </li>
                <li>
                  09月25日
                  <a href="#JavaScript:;">马蜂窝：发起“点亮全球计划” 将挑战吉尼斯纪录</a>
                </li>
                <li>
                  09月21日
                  <a href="#JavaScript:;">中国掀起“南极热”：有人一年去5次，有人一次花费100万</a>
                </li>
                <li>
                  09月18日
                  <a href="#JavaScript:;">马蜂窝：“十一”自驾游走俏 贵州皖南线成新热点</a>
                </li>
                <li>
                  09月11日
                  <a href="#JavaScript:;">马蜂窝发布“十大森林旅游目的地”，体育、养生等复合型体验成热点</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-main>
      <!-- 底部板块 -->
      <el-footer class="footer" style="height: 100%">
        <!-- 上部分 -->
        <div class="ft-content" style="width: 1105px">
          <div class="ft-info clearfix">
            <!-- 1. 马蜂窝旅游网 -->
            <dl class="ft-info-col ft-info-intro">
              <dt>马蜂窝旅游网</dt>
              <dd>中国年轻一代用得更多的旅游网站</dd>
              <dd>
                上亿旅行者共同打造的
                <strong>"旅行神器"</strong>
              </dd>
              <dd>
                <strong>60,000</strong> 多个全球旅游目的地
              </dd>
              <dd>
                <strong>600,000</strong> 个细分目的地新玩法
              </dd>
              <dd>
                <strong>760,000,000</strong> 次攻略下载
              </dd>
              <dd>
                <strong>38,000</strong> 家旅游产品供应商
              </dd>
            </dl>
            <!-- 2. 关于我们 -->
            <dl class="ft-info-col ft-info-about">
              <dt>关于我们</dt>
              <dd>
                <a rel="nofollow">关于马蜂窝</a>
                <a rel="nofollow" class="m_l_10">联系我们</a>
              </dd>
              <dd>
                <a rel="nofollow">隐私政策</a>
                <a rel="nofollow" class="m_l_10">商标声明</a>
              </dd>
              <dd>
                <a rel="nofollow">服务协议</a>
              </dd>
              <dd>
                <a rel="nofollow">商城平台服务协议</a>
              </dd>
              <dd>
                <a rel="nofollow">网络信息侵权通知指引</a>
              </dd>
              <dd style="white-space: nowrap;">
                <a rel="nofollow">马蜂窝旅游网服务监督员</a>
              </dd>
              <dd>
                <a rel="nofollow">网站地图</a>
                <a class="joinus highlight m_l_10" title="马蜂窝团队招聘" rel="nofollow">加入马蜂窝</a>
              </dd>
            </dl>
            <!-- 3. 旅行服务 -->
            <dl class="ft-info-col ft-info-service">
              <dt>旅行服务</dt>
              <dd>
                <ul class="clearfix">
                  <li>
                    <a href="http://www.mafengwo.cn/gonglve/">旅游攻略</a>
                  </li>
                  <li>
                    <a href="http://www.mafengwo.cn/hotel/">酒店预订</a>
                  </li>
                  <li>
                    <a href="http://www.mafengwo.cn/sales/">旅游特价</a>
                  </li>
                  <li>
                    <a href="http://zuche.mafengwo.cn/">国际租车</a>
                  </li>
                  <li>
                    <a href="http://www.mafengwo.cn/wenda/">旅游问答</a>
                  </li>
                  <li>
                    <a href="http://www.mafengwo.cn/insure/">旅游保险</a>
                  </li>
                  <li>
                    <a href="http://z.mafengwo.cn">旅游指南</a>
                  </li>
                  <li>
                    <a href="http://huoche.mafengwo.cn">订火车票</a>
                  </li>
                  <li>
                    <a href="http://www.mafengwo.cn/travel-news/">旅游资讯</a>
                  </li>
                  <li>
                    <a href="http://www.mafengwo.cn/app/intro/gonglve.php">APP下载</a>
                  </li>
                  <li style="width: 120px;">
                    <a href="http://www.mafengwo.cn/sales/alliance.php" class="highlight">旅行商城全球商家入驻</a>
                  </li>
                </ul>
              </dd>
            </dl>
            <!-- 4. 二维码 -->
            <dl class="ft-info-col ft-info-qrcode">
              <dd>
                <span class="ft-qrcode-tejia"></span>
                <p>
                  马蜂窝良品
                  <br />官方服务号
                </p>
              </dd>
              <dd>
                <span class="ft-qrcode-weixin"></span>
                <p>
                  马蜂窝旅游
                  <br />订阅号
                </p>
              </dd>
              <dd>
                <span
                  class="ft-qrcode-weixin"
                  style="background-image: url('https://p3-q.mafengwo.net/s10/M00/48/A9/wKgBZ1t_4sSAVJ6uAAAlzJ0PZgU881.png?imageMogr2%2Fthumbnail%2F%2194x90r%2Fgravity%2FCenter%2Fcrop%2F%2194x90%2Fquality%2F90')"
                ></span>
                <p>
                  马蜂窝APP
                  <br />扫描立即下载
                </p>
              </dd>
            </dl>
            <!-- 5. 旅游之前 先上马蜂窝 -->
            <dl class="ft-info-social">
              <dt>旅游之前，先上马蜂窝！</dt>
              <dd>
                <a class="ft-social-weibo" href="http://weibo.com/mafengwovip">
                  <i class="ft-social-icon"></i>
                </a>
                <a class="ft-social-qqt" href="http://t.qq.com/mafengwovip">
                  <i class="ft-social-icon"></i>
                </a>
                <a class="ft-social-qzone" href="http://1213600479.qzone.qq.com/">
                  <i class="ft-social-icon"></i>
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <!-- 中间部分  链接网页 -->
        <div class="ft-links" style="width: 1105px;height: 65px;margin: 0px auto;">
          <a href="#JavaScript:;">马可波罗</a>
          <a href="#JavaScript:;">Onlylady女人志</a>
          <a href="#JavaScript:;">艺龙旅游指南</a>
          <a href="#JavaScript:;">欣欣旅游网</a>
          <a href="#JavaScript:;">户外运动</a>
          <a href="#JavaScript:;">365音乐网</a>
          <a href="#JavaScript:;">爱问共享资料</a>
          <a href="#JavaScript:;">旅游网</a>
          <a href="#JavaScript:;">小说网</a>
          <a href="#JavaScript:;">学习啦</a>
          <a href="#JavaScript:;">游多多自助游</a>
          <a href="#JavaScript:;">问答</a>
          <a href="#JavaScript:;">火车时刻表</a>
          <a href="#JavaScript:;">驴妈妈旅游网</a>
          <a href="#JavaScript:;">好豆美食网</a>
          <a href="#JavaScript:;">二手车</a>
          <a href="#JavaScript:;">绿野户外</a>
          <a href="#JavaScript:;">途牛旅游网</a>
          <a href="#JavaScript:;">图吧</a>
          <a href="#JavaScript:;">SUV联合越野</a>
          <a href="#JavaScript:;">手机浏览器</a>
          <a href="#JavaScript:;">上海地图</a>
          <a href="#JavaScript:;">天气预报查询</a>
          <a href="#JavaScript:;">同程旅游</a>
          <a href="#JavaScript:;">火车票</a>
          <a href="#JavaScript:;">马蜂窝大学</a>
          <a href="#JavaScript:;">马尔代夫旅游</a>
          <a href="#JavaScript:;">YunOS</a>
          <a href="#JavaScript:;">携程旅游</a>
          <a href="#JavaScript:;">锦江旅游</a>
          <a href="#JavaScript:;">火车时刻表</a>
          <a href="#JavaScript:;">TripAdvisor</a>
          <a href="#JavaScript:;">天巡网</a>
          <a href="#JavaScript:;">短租房</a>
          <a href="#JavaScript:;">租租车</a>
          <a href="#JavaScript:;">五分旅游网</a>
          <a href="#JavaScript:;">酒店预订</a>
          <a href="#JavaScript:;">爱旅行网</a>
          <a href="#JavaScript:;">旅游</a>
          <a href="#JavaScript:;">旅游网</a>
          <a href="#JavaScript:;">wed114结婚网</a>
          <a href="#JavaScript:;">车讯网</a>
          <a href="#JavaScript:;">遨游旅游网</a>
          <a href="#JavaScript:;">手机</a>
          <a href="#JavaScript:;">更多友情链接&gt;&gt;</a>
        </div>
        <!-- 中间部分 众多许可证 -->
        <div class="ft-copyright" style="width: 1105px;height: 43px;margin: 0px auto;">
          <a href="#JavaScript:;">
            <i class="ft-mfw-logo"></i>
          </a>
          <p>
            © 2019 Mafengwo.cn
            <a href="#JavaScript:;">京ICP备11015476号</a>
            <a href="#JavaScript:;">
              <img src="../assets/police_record.png" width="12" style="margin: 0px 3px 0px 3px;" />京公网安备11010502013401号
            </a>
            <a href="#JavaScript:;">京ICP证110318号</a>
            <span class="m_l_10">违法和不良信息举报电话: 010-83416877 举报邮箱: mfwjubao@mafengwo.com</span>
          </p>
          <p>
            <a href="#JavaScript:;" class="m_l_10">网络出版服务许可证</a>
            <a href="#JavaScript:;" class="m_l_10">增值电信业务经营许可证</a>
            <a href="#JavaScript:;" class="m_l_10">营业执照</a>
            <a href="#JavaScript:;" class="m_l_10">广播电视节目制作经营许可证</a>
            <a href="#JavaScript:;" class="m_l_10">帮助中心</a>
            <span class="m_l_10">马蜂窝客服：国内</span>
            <span class="highlight">4006-345-678</span>
            <span class="m_l_10">海外</span>
            <span class="highlight">+86-10-8341-6888</span>
          </p>
        </div>
        <!-- 底部 证人网站 -->
        <div class="ft-safety">
          <a class="s-a" href="#JavaScript:;"></a>
          <a class="s-b" href="#JavaScript:;"></a>
          <a class="s-c" href="#JavaScript:;"></a>
          <a class="s-d" href="#JavaScript:;"></a>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
/* 导航栏样式 */
.el-main {
  padding: 0px !important;
}
/* .el-main */
/* 导航图标 */
.clearfix:after {
  content: "";
  clear: both;
  height: 0;
  display: block;
  overflow: hidden;
}
.header-wrap {
  width: 1120px;
  height: 68px;
  margin: 0 auto;
  _overflow: hidden;
  position: relative;
  z-index: 2;
}
.head-logo {
  position: relative;
  float: left;
  padding: 16px 0 13px;
  width: 136px;
  height: 39px;
  margin-right: 22px;
}
.head-logo .mfw-logo {
  display: block;
  height: 39px;
  background: url("../assets/header-sprites15.png") no-repeat 0 0;
  position: relative;
}

/* 导航文字 */
.head-nav {
  position: relative;
  z-index: 5;
  display: inline;
  line-height: 60px;
  font-size: 16px;
  color: #333;
  text-align: center;
}
.head-nav li {
  float: left;
  position: relative;
  padding-right: 16px;
  padding-left: 17px;
}
.head-nav li:hover {
  color: #ff9d00;
  border-bottom: 3px solid #ff9d00;
}
.head-nav li > a:hover {
  color: #ff9d00;
}
.head-nav li a {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
}
.head-nav-dropdown .drop-toggle {
  padding: 0 11px 2px;
  margin-bottom: -1px;
  cursor: default;
  height: auto !important;
}
.head-nav-dropdown .icon-caret-down {
  border-top-color: #666;
  vertical-align: middle;
  transition: transform 0.5s ease-in-out 0s;
}
.icon-caret-down {
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 4px solid #666;
  border-left: 4px dashed transparent;
  border-right: 4px dashed transparent;
  overflow: hidden;
}
.head-nav-flight._j_head_nav_flight:after {
  content: "特价";
  display: block;
  position: absolute;
  top: 5px;
  right: -10px;
  z-index: 3;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  border-radius: 4px 0 4px 0;
  font-size: 11px;
  color: #fff;
  font-family: PingFangSC-Semibold;
  font-weight: bold;
  background: -webkit-linear-gradient(
    135deg,
    rgba(255, 74, 74, 1) 0,
    rgba(255, 115, 115, 1) 100%
  );
}
.IndexColor_li .IndexColor {
  color: #fff !important;
}
.head-nav li:nth-of-type(1) {
  background-color: #ff9d00;
}
.head-nav li:nth-of-type(5) {
  margin-left: -7px;
}
.mfwzx-logo {
  width: 75px;
  height: 60px;
  background: url("../assets/mfwzx.png") no-repeat center;
  background-size: 75px 30px;
}

/* 右边导航登录小图标 */
.nav-right {
  float: right;
  padding: 21px 0;
  height: 26px;
  line-height: 26px;
  color: #ff9d00;
  text-align: right;
  cursor: pointer;
}
.nav-right ul li {
  display: inline-block;
  width: 26px;
  height: 26px;
  overflow: hidden;
  margin-right: 6px;
  vertical-align: -7px;
}
.nav-right ul li a {
  color: #ff9d00;
}
.nav-right ul li a:hover {
  color: #ff9d00;
  text-decoration: underline;
}
.nav-right_UL li:nth-of-type(1) {
  background-image: url("../assets/header-sprites15.png");
  background-position: 0 -50px !important;
}
.nav-right_UL li:nth-of-type(1):hover {
  background-image: url("../assets/header-sprites15.png");
  background-position: 0 -80px !important;
}
.nav-right_UL li:nth-of-type(2) {
  background-image: url("../assets/header-sprites15.png");
  background-position: -30px -50px !important;
}
.nav-right_UL li:nth-of-type(2):hover {
  background-image: url("../assets/header-sprites15.png");
  background-position: -30px -80px !important;
}
.nav-right_UL li:nth-of-type(3) {
  display: inline-block;
  background-image: url("../assets/header-sprites15.png");
  background-position: 0 35px !important;
}
.nav-right_UL li:nth-of-type(3):hover {
  background-image: url("../assets/header-sprites15.png");
  background-position: -30px -165px !important;
}

/* 图片 */
.mainIndex {
  position: relative;
  width: 100%;
  height: 100%;
}
.imgSrcimg {
  width: 1120px;
  margin: 0 !important;
}
.imgSrc
 img {
  width: 100%;
  height: 100%;
}
.ImgText {
  position: absolute;
  top: 25px;
  left: 50%;
  margin-left: -500px;
  color: #fff;
  font-size: 26px;
  text-align: left;
  min-width: 1000px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
}
.day {
  font-size: 38px;
}
.ImgText h3 {
  margin-top: 5px;
}

/* 左边小图片 */
.show-nav {
  position: absolute;
  right: 40px;
  top: 45%;
  margin-top: -166px;
  width: 110px;
  z-index: 2;
}
.show-nav li {
  height: 62px;
  margin-bottom: 6px;
  position: relative;
  overflow: hidden;
}
.show-nav .active span {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #ff9d00;
  width: 106px;
  height: 58px;
  overflow: hidden;
}
/* 历历在目 */
.show-more {
  position: absolute;
  z-index: 2;
  right: 40px;
  top: 50%;
  margin-top: 160px;
  width: 110px;
  height: 35px;
  background-image: url(../assets/index-sprites9.png);
  background-position: -60px -50px !important;
  line-height: 200px;
  overflow: hidden;
}

/* 搜索大盒子 */
.search-container {
  position: absolute;
  bottom: 45px;
  left: 50%;
  margin-left: -320px;
  width: 632px;
  z-index: 5;
}
.search-group {
  padding: 15px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}

/* 搜索文字 */
.searchtab {
  margin-bottom: 7px;
  color: #fff;
  line-height: 26px;
  font-size: 14px;
}
.searchtab li {
  float: left;
  display: inline;
  margin-right: 30px;
  cursor: pointer;
}
.searchtab i {
  float: left;
  margin: 5px 5px 0 0;
  width: 16px;
  height: 16px;
  background-image: url(../assets/header-sprites15.png);
  background-position: -60px -110px;
}
.searchtab .searchUL .tab-selected > i:nth-of-type(1) {
  background-image: url(../assets/header-sprites15.png);
  background-position: -60px -140px;
}
/* 搜索框 */
.searchbar {
  height: 46px;
  overflow: hidden;
}
.search-wrapper {
  float: left;
  width: 546px;
}
.search-group .search-input {
  height: 46px;
  overflow: hidden;
}
.search-group .search-input input {
  width: 504px;
  height: 46px;
  border: 0 none;
  padding: 0 21px;
  margin: 0;
  line-height: 46px;
  font-size: 16px;
  color: #666;
  border-radius: 4px;
}
.search-group .icon-search {
  display: inline-block;
  margin-top: 11px;
  width: 24px;
  height: 24px;
  background-image: url(../assets/header-sprites15.png);
  background-position: 0 -110px !important;
  overflow: hidden;
  vertical-align: top;
}
/* 搜索按钮 */
.search-group .search-button {
  float: left;
  margin-left: 6px;
  width: 50px;
  height: 46px;
}
.search-group .search-button a {
  display: block;
  height: 46px;
  background-color: #ff9d00;
  border-radius: 4px;
  text-align: center;
}

/* 搜索下面提示文字 */
.show-info {
  position: absolute;
  left: 50%;
  bottom: -25px;
  margin-left: -320px;
  min-width: 630px;
  font-size: 14px;
  color: #fff;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
  text-align: left;
  white-space: nowrap;
}
.show-info a {
  color: #ff9900;
}

/* 自由行、跟团游 */
.mfw-container {
  width: 1000px;
  margin: 0 auto;
}
.sales-entrys-container-innerimg {
  width: 100%;
  margin-bottom: 19px;
  font-size: 0;
  white-space: nowrap;
}
.sales-entrys-container-innerimg .sales-entrys-title {
  color: #333;
}
.sales-entrys-item .sales-entrys-title {
  display: inline-block;
  height: 22px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  font-family: PingFangSC-Semibold;
  color: #333;
}
.sales-entrys-container-innerimg .sales-entrys-subtitle {
  color: #9d9d9d;
}
.sales-entrys-item .sales-entrys-subtitle {
  height: 16px;
  padding-top: 1px;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  font-family: PingFangSC-Regular;
  color: #9d9d9d;
}
.sales-entrys-container-innerimg .entrys-bg-sales {
  background-position-y: -651px;
}
.sales-entrys-container-innerimg .entrys-bg-group {
  background-position-y: -24px;
}
.sales-entrys-container-innerimg .entrys-bg-localdeals {
  background-position-y: -129px;
}
.sales-entrys-container-innerimg .entrys-bg-flight {
  background-position-y: -441px;
}
.sales-entrys-container-innerimg .entrys-bg-hotel {
  background-position-y: -546px;
}
.sales-entrys-container-innerimg .entrys-bg-visa {
  background-position-y: -335px;
}
.sales-entrys-container-innerimg .entrys-bg-ship {
  background-position-y: -233px;
}

.sales-entrys-item {
  width: 154px;
  height: 47px;
  margin-left: 8px;
  padding-top: 8px;
  padding-left: 7px;
  display: inline-block;
  border-radius: 3px;
  font-family: PingFangSC-Semibold;
  cursor: pointer;
}
.sales-entrys-container-innerimg .sales-entrys-item {
  width: 127px;
  border: 1px solid #e5e5e5;
  background-image: url(../assets/wKgE2l0HSGuAOI1tAAChEE0vNA4603.png);
  background-repeat: no-repeat;
  background-size: 104px auto;
  background-position-x: 59px;
}

/* 右边板块 */
.mfw-wrapper {
  float: right;
  width: 700px;
}
/* 顶部图片条 */
.mfw-wrapper .da-banner {
  margin-bottom: 0;
}
.da-banner {
  margin-bottom: 30px;
  position: relative;
}
.mfw-wrapper .da-banner > * {
  margin-bottom: 30px;
}
/* 左边文字 */
.mfw-travelnotes .navbar {
  margin-bottom: 20px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e4e4;
}
.tn-nav {
  float: left;
}
.tn-nav .tn-nav-hot {
  width: 170px;
}
.tn-nav .active {
  padding-bottom: 6px;
  border-bottom: 3px solid #ff9d00;
  position: relative;
  z-index: 11;
}
.tn-nav li {
  float: left;
  width: 150px;
  display: inline;
  text-align: center;
}
.tn-nav .active a {
  color: #ff9d00;
}
.tn-menu {
  display: inline-block;
  margin-left: 7px;
  line-height: 20px;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 12px;
  padding: 0 10px 0 8px;
  cursor: pointer;
  vertical-align: 2px;
}
.tn-nav .active i {
  display: inline-block;
}
.tn-menu-icon {
  display: inline-block;
  float: left;
  margin: 6px 5px 0 0;
  width: 11px;
  height: 8px;
  background: url(../assets/index-sprites9.png) no-repeat 0 -130px;
}
.tn-nav .tn-nav-new {
  width: 120px;
}
.tn-nav li a {
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
.tn-menu:hover {
  border-color: #ff9d00;
  background-color: #ff9d00;
  color: #fff;
}
.tn-menu:hover .tn-menu-icon {
  background-position: 0 -140px;
}
.sales-entrys-container-innerimg .sales-entrys-item:hover .sales-entrys-title {
  background-image: url(../assets/wKgEaVzROqWAPJp3AAAECYd-dCM112.png);
  background-repeat: no-repeat;
  background-size: 100% 7px;
  background-position: bottom;
}
.sales-entrys-container-innerimg .sales-entrys-item:hover {
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);
}

/* 右边写日记 */
.tn-write {
  float: right;
  width: 140px;
}
/* 写日记、下一页鼠标移上去改变背景颜色 */
.tn-write .btn-add,
.pg-next:hover {
  color: #e5e5e5;
  background-color: #ff8a00;
}
.tn-write .btn-add {
  display: block;
  height: 36px;
  background-color: #ff9d00;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}
.tn-write .btn-add i {
  display: inline-block;
  margin-right: 5px;
  width: 18px;
  height: 17px;
  background-position: 0 0;
  overflow: hidden;
  vertical-align: -3px;
}
.tn-write .btn-add i {
  background: url(../assets/index-sprites9.png) no-repeat;
}

/* 图片文字介绍大盒子 */
.tn-item {
  padding: 15px 0;
  height: 150px;
}
.tn-image {
  float: left;
  width: 220px;
  height: 150px;
  position: relative;
}
/* 图片文字介绍第一个 */
.tn-image img {
  width: 220px;
  height: 150px;
}
/* 右边文字介绍 */
.tn-wrapper {
  float: right;
  width: 455px;
  height: 150px;
}
.tn-item dl {
  height: 117px;
}
.tn-item dt {
  height: 26px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 26px;
}
.tn-item dt a {
  width: 420px;
  height: 26px;
  display: block;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tn-item dd {
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.tn-item dd a {
  color: #666;
}

/* 地点 */
.tn-extra {
  height: 33px;
  overflow: hidden;
  line-height: 33px;
}
.tn-extra .tn-ding {
  float: right;
  color: #ff9d00;
  font-size: 14px;
  text-align: right;
}
.tn-extra .tn-place {
  margin-right: 5px;
}
.tn-extra span {
  display: inline-block;
}
.tn-extra .tn-place i {
  float: left;
  margin: 8px 5px 0 0;
  width: 14px;
  height: 16px;
  background-position: 0 -50px !important;
  overflow: hidden;
}
.tn-extra .tn-user {
  margin-right: 10px;
}
.tn-extra .tn-nums {
  font-size: 14px;
  color: #999;
}
.tn-extra .btn-ding {
  display: inline-block;
  float: right;
  margin-left: 8px;
  width: 38px;
  height: 33px;
  background-position: -60px 0 !important;
  overflow: hidden;
}
.tn-extra .tn-nums i {
  float: left;
  margin: 10px 5px 0 0;
  width: 18px;
  height: 14px;
  background-position: -30px -50px !important;
}
.tn-extra .btn-ding,
.tn-extra .tn-place i,
.tn-extra .tn-nums i {
  background: url(../assets/index-sprites9.png) no-repeat;
}
.tn-extra .tn-ding em {
  font-style: normal;
}
.tn-extra .tn-place a {
  color: #666;
}
.tn-extra .tn-user img {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  overflow: hidden;
  border-radius: 50%;
  vertical-align: -3px;
  *vertical-align: middle;
}
.tn-extra .tn-nums {
  font-size: 14px;
  color: #999;
}
.tn-item:hover {
  background-color: #f8f8f8;
  padding: 15px;
  margin: 0 -15px;
}
.tn-item:hover dt a {
  color: #ff9d00;
  text-decoration: none;
}

/* 左边安全提示图、轮播图 */
/* 第一个安全图 */
.mfw-aside {
  float: left;
  width: 260px;
}
.asidebox {
  margin-bottom: 30px;
}
/* 第二个轮播图 */
.asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.asidebox-hd .hd-right {
  float: right;
  color: #999;
}
.asidebox-hd .hd-right:hover {
  text-decoration: underline;
}

/* 轮播图 */
.box-traveller .asidebox-bd {
  width: 260px;
  height: 246px;
  overflow: hidden;
  position: relative;
}
/* 图片 */
.box-traveller .slide-ul {
  position: absolute;
  left: 0;
  top: 0;
  width: 500%;
  height: 100%;
}
.box-traveller .slide-ul li {
  float: left;
  width: 20%;
}
.box-traveller .image {
  height: 140px;
  overflow: hidden;
}
.box-traveller h3 {
  margin: 10px 0 5px;
  width: 260px;
  height: 26px;
  font-size: 16px;
  color: #333;
  font-weight: normal;
  line-height: 26px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-traveller h3 a:hover {
  color: #ff9d00;
  text-decoration: underline;
}
.box-traveller .asidebox-bd p {
  height: 60px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}
.box-activity h3 a {
  color: #ff9d00;
}
.box-activity .asidebox-bd p {
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 小点 */
.box-traveller .slide-ol {
  position: absolute;
  right: 14px;
  top: 120px;
}
.box-traveller .slide-ol .active,
.box-traveller .slide-ol li:hover {
  background-color: #ff9d00;
}
.box-traveller .slide-ol li {
  float: left;
  display: inline;
  margin-left: 3px;
  width: 15px;
  height: 8px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
}

/* 旅游攻略推荐 */
.asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.asidebox-hd .hd-right {
  float: right;
  color: #999;
}
.gonglve-item {
  margin-bottom: 10px;
}
.gonglve-item .img {
  position: relative;
  height: 140px;
  margin-bottom: 10px;
}
.gonglve-item .mark {
  position: absolute;
  left: 0;
  top: 7px;
  padding: 0 6px;
  color: #fff;
  line-height: 24px;
  background-color: #ff6262;
  font-size: 12px;
}

.gonglve-item h3 {
  margin: 10px 0 5px;
  width: 260px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-gonglve h3 {
  line-height: 26px;
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: normal;
  color: #333;
}
.box-gonglve h3 a {
  color: #333;
  font-size: 16px;
}
.gonglve-item h3 a:hover {
  color: #ff9d00;
  text-decoration: underline;
}

/* 第四个最新活动 */
.box-activity .asidebox-bd {
  height: 205px;
}
.box-activity .asidebox-bd p {
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box-traveller .asidebox-bd p {
  height: 60px;
  line-height: 20px;
  font-size: 14px;
  overflow: hidden;
}

/* 加入马蜂窝 */
.joinMfw {
  margin-top: 60px;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}

/* 最新资讯 */
.box-news {
  margin-top: 35, px;
}
.asidebox-hd {
  height: 35px;
  line-height: 35px;
  margin-bottom: 12px;
}
.asidebox-hd .hd-title {
  float: left;
  font-size: 18px;
  color: #333;
  font-weight: normal;
}
.asidebox-hd .hd-title h2 {
  display: inline;
  font-size: inherit;
  font-weight: normal;
}
.box-news li {
  height: 30px;
  width: 260px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  color: #666;
}
.box-news li > a {
  color: #666;
}
.box-news li > a:hover {
  text-decoration: underline;
}

/* 分页 */
.m-pagination {
  padding-right: 0;
}
.m-pagination {
  padding-right: 0;
}
.m-pagination .count {
  padding-right: 12px;
}
.m-pagination {
  padding: 20px 5px;
  line-height: 24px;
  text-align: right;
  font-size: 12px;
  color: #999;
}
.m-pagination .pg-current {
  display: inline-block;
  margin-right: 5px;
  background-color: #ff9d00;
  padding: 0 5px;
  border-radius: 4px;
  color: #fff;
  vertical-align: middle;
}
.pg-next {
  display: inline-block;
  margin-right: 5px;
  background-color: #ff9d00;
  padding: 0 5px;
  border-radius: 4px;
  color: #fff;
  vertical-align: middle;
}
.m-pagination .pg-current {
  padding: 0 7px;
}
.m-pagination .pi {
  display: inline-block;
  margin-right: 1px;
  margin-left: 1px;
  padding: 0 7px;
  border: 0 none;
  background: 0;
  border-radius: 4px;
  color: #666;
  vertical-align: middle;
}

/* 底部板块 */
.el-footer {
  clear: both;
  background-color: #3c3c3c !important;
  color: #c2c2c2;
  line-height: 22px;
  padding-bottom: 20px;
  font-size: 12px;
}
.footer .ft-content {
  margin: 0 auto !important;
}
.footer .ft-info-col {
  float: left;
  display: inline;
}
/* 上部分 */
.footer .ft-info {
  padding: 30px 8px 40px 8px;
  border-bottom: 1px solid #575a5b;
}
/* 1. 马蜂窝旅游网 */
.footer .ft-info dt {
  height: 30px;
  font-size: 14px;
  overflow: hidden;
}
.footer .ft-info-intro {
  width: 200px;
  margin-right: 68px;
}
.footer .ft-info-intro strong {
  color: #ff9d00;
  font-weight: normal;
}
/* 2. 关于我们 */
footer .ft-info-about {
  width: 128px;
  margin-right: 85px;
}
.footer a {
  color: #c2c2c2;
}
.m_l_10 {
  margin-left: 10px;
}
/* 3. 旅行服务 */
.footer .ft-info-service {
  width: 135px;
  margin-right: 80px;
}
.footer .ft-info-service dt {
  text-align: center;
}
.footer .ft-info-service dd {
  width: 100%;
  overflow: hidden;
}
.footer .ft-info-service ul {
  margin-right: -35px;
}
footer .ft-info-service li {
  float: left;
  width: 85px;
}
.highlight {
  color: #ff9d00 !important;
}
/* 4.二维码 */
.footer .ft-info-qrcode {
  float: right;
  padding-top: 22px;
  line-height: 1.4em;
}
.footer .ft-info-qrcode dd {
  width: 100px;
  display: inline;
  margin-left: 30px;
  float: right;
  text-align: center;
}
.footer .ft-info-qrcode span {
  display: block;
  height: 90px;
  margin: 0 0 8px 6px;
}
/* 良品官网 */
.footer .ft-qrcode-tejia {
  background: url(../assets/qr_tejia4.png) no-repeat;
}
/* 旅游订阅号、下载app */
.ft-qrcode-weixin {
  background: url(../assets/qr_mfw4.gif) no-repeat;
}
/* 5. 旅游之前 线上马蜂窝 */
.footer .ft-info-social {
  clear: both;
  text-align: center;
  padding-top: 25px;
}
.footer .ft-info-social dt {
  font-size: 16px;
}
.footer .ft-info-social dd {
  padding: 5px 0;
}
.footer .ft-info-social dd a {
  display: inline-block;
  margin: 0 6px;
}
.footer .ft-social-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  background: url(../assets/mfw-footer-sprite7.png) no-repeat 0 0;
  overflow: hidden;
}
.footer .ft-social-qqt .ft-social-icon {
  background-position: -30px 0;
}
/* 中间部分  链接网页 */
.footer .ft-links {
  margin-top: -1px;
  border-top: 1px solid #575a5b;
  border-bottom: 1px solid #575a5b;
  padding: 17px 0 17px 8px;
}
.footer .ft-links a {
  display: inline-block;
  margin-right: 12px;
}
.footer a {
  color: #c2c2c2;
}
/* 中间部分 众多许可证 */
.footer .ft-copyright {
  padding: 12px 0 12px 7px;
  margin-top: -1px;
  border-top: 1px solid #575a5b;
}
.footer .ft-mfw-logo {
  float: left;
  margin: 2px 20px 0 0;
  width: 136px;
  height: 39px;
  background: url(../assets/mfw-footer-sprite7.png) no-repeat 0 -30px;
  overflow: hidden;
}
/* 底部认证网站 */
.footer .ft-safety {
  text-align: center;
}
.footer .ft-safety a {
  display: inline-block;
  margin-left: 10px;
  width: 90px;
  height: 30px;
  background: url(../assets/mfw-footer-sprite7.png) no-repeat 0 -70px;
  overflow: hidden;
}
.footer .ft-safety .s-b {
  background-position: 0 -110px;
}
.footer .ft-safety .s-c {
  background: url(../assets/wKgEaVzlS06AVwj0AAAa_HtuzSo207.png);
}
.footer .ft-safety .s-d {
  background: url(../assets/wKgEaVzlS8yAX2c6AAAblEJMLps615.png);
}
</style>
