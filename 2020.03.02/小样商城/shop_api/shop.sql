-- 创建数据库
CREATE database Shop DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
use Shop;

-- 首页轮播图
create table shop_swipe_images(
    id int unsigned auto_increment primary key not null comment '商品 id',
    images varchar(255) comment '商品图片 密码'
);
insert into shop_swipe_images(id, images) values(1,'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/53804/28/13930/348770/5dac9a3aE5c691a19/210a68ae894ee386.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(2, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/104158/24/10941/159212/5e23f8d0E0eb26d6b/e733f2da242934cf.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(3, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/103598/3/6264/151955/5df1d1f6E523034a1/9659576a7ab293a0.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(4, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/58629/16/2942/97103/5d0ca00aE8e3b3317/d102c6c7097ff9ea.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(5, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/86573/39/11492/83329/5e3565f5Ee95c0363/915f8b7a4825053c.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(6, 'http://imgcps.jd.com/ling4/100006729752/56yU6K6w5pys57K-6YCJ5aSn54mM/5aW956S85LiN5pat/p-5c11d16482acdd181dbc1fc5/d19694bc/cr_1125x445_0_171/s1125x690/q70.jpg');
insert into shop_swipe_images(id, images) values(7, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/44822/18/14851/88452/5dbc044aE674b4eb0/733c1543c7ffd78c.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(8, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/73390/18/15141/90753/5dc82b51E46f2cc05/e297e057b886498a.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(9, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/105419/30/5906/144830/5df05d01E60e52d37/721a16cb7f73bc5d.jpg!cr_1125x445_0_171!q70.jpg');
insert into shop_swipe_images(id, images) values(10, 'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/86950/2/5468/48781/5dedad6aEc6c5fa46/be26a8e10b8017e5.jpg!cr_1125x445_0_171!q70.jpg');


-- 首页宫格
create table shop_classify(
    id int unsigned auto_increment primary key not null comment '商品分类 id',
    classify_name varchar(255) not null comment '商品分类 名称',
    classify_image varchar(255) not null comment '商品分类 图片'
);
insert into shop_classify(id, classify_name,classify_image) values(null,'小样超市','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'数码电器','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'小样服饰','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'小样生鲜','http://m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'小样到家','http://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'充值缴费','http://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'9.9元拼','http://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'领卷','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'赚钱','http://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'PLUS会员','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'小样国际','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/89640/36/2804/8167/5dd6aca9E4b04fedd/fbc6adc345138b30.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'小样拍卖','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/32245/22/2820/6521/5c6df9b3E1466dcd3/9f4cd68276f4e971.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'唯品会','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/25651/12/1391/4836/5c120c34Eb93a70fa/3a1735f6a79d0721.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'玩3C','http://m.360buyimg.com/mobilecms/s120x120_jfs/t28723/45/1332082024/6421/ead422d3/5cdd0be3Nfce1ba98.jpg');
insert into shop_classify(id, classify_name,classify_image) values(null,'沃尔玛','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19699/10/1440/6755/5c120ca6Eaa521f62/f9d57f39e55c7321.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'美妆馆','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/19745/21/1415/4886/5c120cbbEe58af0bf/4d19bf58d42fc9c4.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'小样旅行','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27748/22/1419/4913/5c120d0eEa52ea62f/3c2b78a40edc97b2.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'拍拍二手','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/14996/29/2195/11094/5c1afdb7Ee54cf069/d6ab6a0f64fee068.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'货物查询','http://m.360buyimg.com/mobilecms/s120x120_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png');
insert into shop_classify(id, classify_name,classify_image) values(null,'全部','http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/28873/5/1455/6885/5c120bb9Eb6610bee/29d349f92aeb6eaf.png');


-- 首页秒杀
create table shop_seckill(
    id int unsigned auto_increment primary key not null comment '商品秒杀 id',
    seckill_name varchar(255) not null comment '商品秒杀 名称',
    seckill_sprice_yuanjia decimal(11, 2) not null comment '商品秒杀 原价',
    seckill_sprice_del decimal(11, 2) not null comment '商品秒杀 活动价',
    seckill_image varchar(255) not null comment '商品秒杀 图片'
);
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'苹果7','2200','1266','http://img14.360buyimg.com/n1/s150x150_jfs/t1/90890/26/10849/49885/5e2408f5E2b8269b9/1e80073d566dde1f.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'女生外套','128','50','http://img10.360buyimg.com/mobilecms/s220x220_jfs/t1/86376/9/10805/145136/5e2524baE9a1bf415/588d62e19a73dc34.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'一鹿有你纯银项链','138','49','http://img14.360buyimg.com/n1/s150x150_jfs/t1/104268/38/10828/72876/5e23bb12E0aa8df79/0215c5f452b1c1d7.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'华硕VivoBook14.0英寸轻薄笔记本','5199','4469','http://img14.360buyimg.com/n1/s150x150_jfs/t1/107263/3/4847/190204/5e2696a5Eec431e32/0948d30b42239cfa.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'蒙牛 纯甄 常温风味酸牛奶 200g*24 礼盒装','132','85','http://img14.360buyimg.com/n1/s150x150_jfs/t1/39909/4/7522/119655/5cecebeaE3d26edca/e2936d5e3a934ebc.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'青岛亮动原浆啤酒精酿小麦白啤酒2L*2桶装','98','76','http://img14.360buyimg.com/n1/s150x150_jfs/t1/85533/17/10943/173014/5e23fc36E4fd0e965/5a280587881c4c08.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'迪奥口红','320','197','https://img14.360buyimg.com/n1/s150x150_jfs/t1/94420/25/10705/100465/5e2046f4E7e6a4d56/3a2e687156b020c8.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'席梦思床具','1799','1399','https://img14.360buyimg.com/n1/s150x150_jfs/t1/97836/16/10980/169943/5e26b298Ebe8a36e8/7bfcb8eb331452be.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'伊利高钙纯牛奶','39','29','http://img14.360buyimg.com/n1/s150x150_jfs/t1/51489/31/5355/100087/5d2eb0aeEc9db9592/9f99f4a0955ed931.jpg');
insert into shop_seckill(id, seckill_name,seckill_sprice_yuanjia,seckill_sprice_del,seckill_image) values(null,'苹果XS二手手机','6599','4769','http://img14.360buyimg.com/n1/s150x150_jfs/t1/109264/17/5288/188852/5e364160E29ec2a72/871169cff38d3ce5.jpg');


-- 首页每日逛
create table shop_everyshop(
    id int unsigned auto_increment primary key not null comment '商品每日逛 id',
    everyshop_image varchar(255) not null comment '商品每日逛 图片',
    everyshop_mx_star varchar(255) not null comment '商品每日逛 免息星球',
    everyshop_mx_go varchar(255) not null comment '商品每日逛 白条免息购'
);
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg','免息星球','白条免息购');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/89676/29/5758/20628/5def37a2Eff165a1c/b41fe7c9ac32f16f.jpg!q70.jpg','每日特价','9块9疯抢');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/100430/19/5671/35161/5def3b36Eda0d4e24/cae78ce556a995c7.png!q70.jpg','品牌闪购','汇大牌好价');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/79087/9/714/26464/5cef9636Ea4fe2ba8/90f1c44b1b1f6e2e.png!q70.jpg','小样直播','好货即刻买');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg','排行榜','销量排行榜推荐');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/76945/35/760/26244/5cef9705E501242ee/c56b89c0946438ef.jpg!q70.jpg','拍拍好物','二手优品');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/n1/s150x150_jfs/t11128/25/2817168750/9187/72b53c/5cdaa568N8f652eb8.jpg!q70.jpg','新品首发','小样小魔方');
insert into shop_everyshop(id, everyshop_image,everyshop_mx_star,everyshop_mx_go) values(null,'http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/50174/30/1230/9784/5cef98bfE318f8d24/4720dc4079dd568b.jpg!q70.jpg','发现好货','发现品质生活');


-- 首页为你推荐
create table shop_recommended(
    id int unsigned auto_increment primary key not null comment '商品推荐 id',
    recommended_name varchar(255) not null comment '商品推荐 名称',
    recommended_price decimal(10, 2) not null comment '商品推荐 价格',
    recommended_desc varchar(255) not null comment '商品推荐 描述',
    recommended_image varchar(255) not null comment '商品推荐 图片'
);
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'尚言坊 茶具套装功夫茶具*2桶装','39.8','尚言坊 茶具套装功夫茶具家用简约茶杯泡茶器茶洗复古全半自动石磨茶壶茶叶罐茶道配件六君子日式懒人 【热卖款】紫砂-新节节高升8入自动','http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/86820/40/8129/158201/5e018694E066b185c/a4e307a62f64ec0f.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'华为(HUAWEI) 全面屏轻薄性能笔记本电脑','4099','华为(HUAWEI)MateBook 13 2020款 锐龙版 全面屏轻薄笔记本电脑 (AMD R5 16+512GB 集显 Office 2K )银','http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/101384/10/10897/106776/5e36a739Eb4947cad/23aea74d6ef1b6c5.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'DR DarryRing 结婚戒指 钻石 钻戒 情侣对戒','2499','DR DarryRing 结婚戒指 钻石 钻戒 情侣对戒TOGETHER系列 一生一世正品定制 男女对戒','http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/108273/39/873/61116/5df89da5Ed834178f/fbc624b4d73531ec.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'法洛芳项链女跳动的心白金锁骨链镶施华洛','1314','法洛芳项链女跳动的心白金锁骨链镶施华洛','http://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/107663/38/6157/258595/5e48cae8Eb6f55099/d59d005420142808.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'荣耀20S 李现同款 像超级夜景 蝶羽白','1499','荣耀20S 李现同款 3200万人像超级夜景 4800万超广角AI三摄 麒麟810 全网通版6GB+128GB 蝶羽蓝','http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/39682/23/15588/215775/5d672c3cE3097fa6f/4e94336da719e538.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'Dior迪奥香水女士小样套装五件套','158','迪奥（Dior）女士香水小样套装礼盒礼物五件套 5件套真我花漾甜心永恒的爱茉莉花女孩粉女士香水礼盒装 迪奥Q版真我香水五件套 5ml*2+7.5ml*3','http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/57779/30/11576/82593/5d886fc8E22e7dfb3/3fb9edf9eb6fe2ea.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'玫瑰花仿真花假花客厅摆设装饰','315','高品质手感保湿玫瑰假花仿真花束客厅桌花艺摆设件装饰茶几插花 组合A款','http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/44669/40/14672/261954/5dc37ae0Ef0491a25/9f75f6ca7f8c1e63.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'宝拉布菲纯银手链女镶嵌施华洛水晶 流星手链(蓝色)','1314','宝拉布菲纯银手链女镶嵌施华洛世奇元素水晶韩版简约时尚小众设计送女友纪念日新年情人节生日礼物 流星手链(蓝色)','http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/103484/19/136/151919/5da7ef3fE937e3623/5a2c878dd5259617.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'练字帖成人行楷字帖凹槽练字','29.9','练字帖成人握笔器楷书字帖初中高中大学生初学者男生女生行楷字帖凹槽练字帖硬笔练字本','http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/78622/6/13222/176021/5da6ab66E4bc8bad6/efeab9f393a10858.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'阔腿裤时尚套装新款女装洋气减龄气质显瘦两件套 咖啡色','298','恒源祥授权店铺秋冬新款初秋阔腿裤时尚套装2019秋装新款女装洋气减龄气质显瘦早秋两件套 咖色 M','http://img11.360buyimg.com/n2/s370x474_jfs/t1/83504/6/8337/231981/5d635237Ed868e218/0a004d2a18a0ef4f.jpg!cc_370x474!q70.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'索尔诺 花架花盆架子多层 深灰闪银H916','48','索尔诺花架子多层室内家用阳台装饰置物架铁艺客厅简约花盆架北欧挂架绿萝架落地层架置物架H916 白色  ','http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/47989/10/1000/140488/5ceb7dd5Eb2ba2c19/0a6b8ccdd03b4be4.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'COCOBELLA撞色chic毛呢外套女时尚 白色 ','689','COCOBELLA撞色chic毛呢外套女时尚毛绒绒加厚连帽夹克CT863B 白色 L','http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/66063/34/13129/79742/5da54f6dE09c1a361/0af150e6a4d68279.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'中国风敬酒服新娘 酒红色V领喇叭袖','369','中国风敬酒服新娘2019秋冬季酒红色结婚晚礼服女中长款答谢宴长袖 酒红色V领喇叭袖 量身定制不退换','http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/90855/29/10379/139985/5e1c8358E6688c08d/352c9e31f0c7ed57.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'蓝晨语依 短靴女尖头细跟高跟裸靴流苏绒面黑色（绒面）','199','蓝晨语依 短靴女尖头细跟高跟裸靴流苏绒面女鞋及踝靴子2019新款 黑色（绒面） 36','http://img10.360buyimg.com/mobilecms/s372x372_jfs/t7783/167/985891577/406474/c73e4e43/5999865bN0ed94e08.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'好好说话：别输在不会表达上','30.6','别输在不会表达上 励志与成功 书籍','http://img10.360buyimg.com/mobilecms/s372x372_jfs/t16144/260/1613609298/874183/5f39ae27/5a5d5ab3N5ae1e439.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'女装品牌针织衫半身裙套装女慵懒风不规则两件 白色','409','【品牌直营】秋新款时尚慵懒风毛衣套装裙子超仙女过膝半身裙针织两件套潮 单件裙子 S','http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/66500/25/6741/225854/5d4bc553E6eafbb0d/6823f670dfdea40f.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'子牧棉麻夏季新款 女民族风绣花可调节抹胸吊带 蓝色','69','子牧棉麻2019夏季新款 女民族风绣花可调节抹胸吊带6767 蓝色 均码','http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/60390/18/288/134669/5ce7931cE04506311/6664197c90d6df89.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'北极绒 床垫家纺床褥双人榻榻米折叠防滑床垫子 灰色','109','北极绒 床垫家纺 立体羽丝绒床褥子 双人榻榻米折叠防滑床垫子 灰色 1.5米床 150*200cm','http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/60225/15/10018/215198/5d79b68cEef94d68a/55c80fe61b76267a.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'媛奕宸 打底衫2019秋冬新款丝绒减龄吊带背心女打底 黑色 S ','108','媛奕宸 打底衫2019秋冬新款丝绒减龄吊带背心女打底 黑色 S','http://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/84459/10/16394/136201/5dd83736E81910ce1/8df4a9f1205f203c.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'范米粒 圆球耳环韩版时尚耳饰满钻球耳坠','29','范米粒 圆球耳环韩版时尚耳饰满钻球耳坠925银耳针个性甜美气质网红耳钉潮人精美饰品送女友礼物耳圈配饰 玫瑰金白钻','http://img12.360buyimg.com/mobilecms/s372x372_jfs/t25588/78/1357089175/119285/55f40a90/5badf8ddN5f707d9b.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'时尚优雅减龄长袖半高领打底衫','158','打底衫女秋冬蕾丝加绒长袖2020秋冬装时尚优雅减龄长袖半高领打底衫女金丝绒加绒加厚内搭上衣 黑色加厚雷丝打底衫女性感 S(建议95斤以内)雷丝打底衫女性感 ','http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/96631/32/3129/144066/5ddcc00cEfa91968e/84143aba200cc230.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) values(null,'鱼尾改良旗袍新娘结婚敬酒服 白色 L 腰围2尺1','248','晚礼服裙女2019新款宴会高贵优雅名媛聚会长款年会主持人鱼尾改良旗袍新娘结婚敬酒服年会宴会 白色 XL 腰围2尺2','http://img13.360buyimg.com/mobilecms/s519x668_jfs/t1/22919/11/900/399036/5c0db9a4Efce5222a/968964b803662e13.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) 
values(null,'印花圆领宽松纯棉短袖半袖打底情侣装 XL','78','追了2020春夏 情侣装T恤 白雪公主联名纯棉短袖卡通手绘印花半袖打底衣服 白色 L','http://img14.360buyimg.com/mobilecms/s519x668_jfs/t1/87700/31/7316/301180/5dfadb89E16386565/7173fe80da78124a.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) 
values(null,'项链女士款四叶草银吊坠','139','唯一项链女士款四叶草银吊坠情侣锁骨链999足银时尚首饰品项圈颈链子简约日韩配证书送女友生日礼物','http://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/108424/17/6156/173536/5e475a81E7cd987df/2a4b03d0fc9ef675.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) 
values(null,'陕西特产速食红油面皮','25.9','秦圣凉皮 宝鸡岐山擀面皮 陕西特产西安美食 方便速食红油面皮  酸辣味300g*5袋','http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/47424/3/14155/322885/5db004a8E7c76c972/c7c8d11f250177a7.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) 
values(null,'粉色少女旗袍甜美修身','138','唐装上衣棉日常粉色少女旗袍2019新款春夏季甜美修身女短款女装外套 9139粉色 XXL ','http://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/23109/25/13537/238812/5ca18e47Ee9df0186/726b0c98ec4dab37.jpg');
insert into shop_recommended(id, recommended_name,recommended_price,recommended_desc,recommended_image) 
values(null,'南极人导轨蚊帐伸缩落地式公主风','232','南极人导轨蚊帐1.8米三开门不锈钢伸缩落地式公主风宫廷落地u型支架2.2单人双人家用1.5米床家用 花珏-玫瑰金款灰色 1.8m6英尺床','http://img20.360buyimg.com/mobilecms/s372x372_jfs/t1/20312/30/181/183601/5c079debEb2d16da3/2fa239be1b4e920c.jpg');


-- 分类页面
create table shop_categories(
    id int unsigned auto_increment primary key not null comment '一级分类 id',
    cname varchar(255) not null comment '一级分类 名称',
    link varchar(255) comment '一级分类 路由的相对url地址',
    img varchar(255) comment '分类图片',
    imgs varchar(255) comment '小图片',
    imgss varchar(255) comment '大图片'
);
insert into shop_categories(cname, link,img,imgs,imgss) values('女装', '/female','/images/15742579712344.jpg','/images/15736975656612.png','https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/49/mst_0b2187d749ae89aa85395583f3c74516_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('男装', '/female','/images/15730373733738.png', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/57/mst_60619dfd3831f650e498a9f7d5ad3a37_750x250_90.png');
insert into shop_categories(cname, link,img,imgs,imgss) values('男女内衣', '/female','/images/15742992959746.jpg','/images/15692897279188_200x375_80.png','https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/31/91/mst_f4a28fd861b7dcf8822f33a574fd5c76_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('女鞋', '/female','/images/15717999492996_200x375_80.jpg', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/169/mst_3376de9737466ac0905f4a2a39172c6e_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('男鞋', '/female','/images/15130431666521_200x375_80.jpg', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/25/mst_4665d6a7500c751bec3bf267a7207b23_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('箱包皮具', '/female','/images/15677358863738_200x375_80.jpg', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/169/mst_3376de9737466ac0905f4a2a39172c6e_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('手表配饰', '/female','/images/15446655715420_200x375_80.jpg','https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/31/5/mst_d70d5796109b6d84fe6a4dd4176feffc_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('护肤彩妆', '/female','/images/15577352125717_200x375_80.jpg', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/05/97/mst_c3d7347a9d8d96497c68ef07a40cf289_750x250_90.png');
insert into shop_categories(cname, link,imgs,imgss) values('个人护理', '/female','/images/d63c6efa-6e6c-4fab-ab32-646d4c1901b5_200x375_80.png', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/05/97/mst_c3d7347a9d8d96497c68ef07a40cf289_750x250_90.png');
-- insert into categories(cname, link,img,imgs,imgss) values('母婴', '/female','/images/15742998263515.jpg','/images/98fb02cc-e5ae-4f2a-a560-a59880490ff8_200x375_80.jpg','https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/175/mst_c429cc06b13687a4491bab41fa77aaaa_750x250_90.png');
-- insert into categories(cname, link,imgs,imgss) values('运动户外', '/female','/images/15681922191111_200x375_80.png','https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/11/15/25/mst_4665d6a7500c751bec3bf267a7207b23_750x250_90.png');
-- insert into categories(cname, link,imgs,imgss) values('手机数码', '/female','/images/15717958841512_200x375_80.png','https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/31/184/mst_40acdfd72cb4228293467b46c9e78722_750x250_90.jpg');
-- insert into categories(cname, link,imgs,imgss) values('家用电器', '/female','/images/15741455347395_200x375_80.png', 'https://h2.appsimg.com/b.appsimg.com/upload/mst/2019/10/31/184/mst_40acdfd72cb4228293467b46c9e78722_750x250_90.jpg');
-- insert into categories(cname, link,imgs,imgss) values('家居家纺', '/female','/images/d458bd75-9fff-4af6-bfd6-5c320759d7e1_200x375_80.png',null);
-- insert into categories(cname, link,imgs,imgss) values('家居家装', '/female','/images/15534843228015_200x375_80.png',null);
-- insert into categories(cname, link,imgs,imgss) values('生活超市', '/female','/images/15707764319889_200x375_80.png',null);
-- insert into categories(cname, link,imgs,imgss) values('唯品国际', '/female','/images/c1027a5a-1ef6-4533-be94-9aa62d570f9b_200x375_80.jpg',null);
-- insert into categories(cname, link,imgs,imgss) values('唯品.奢', '/female','/images/87476b62-f55a-4a11-ab19-81dcfa846c6a_200x375_80.png',null);
-- insert into categories(cname, link,imgs,imgss) values('唯品金融', '/female','/images/982d4a42-aa06-4d51-bbcc-6119dd9769f5_200x375_80.png',null);
-- insert into categories(cname, link,img,imgs,imgss) values('医药健康', '/female','/images/15694110151454.jpg','/images/15589473527932_200x375_80.png',null);
-- insert into categories(cname, link,img,imgs,imgss) values('图书文娱', '/female','/images/15564230748491.jpg','/images/c4f1ba8a-4107-456f-9b19-4a32b1aa3382_200x375_80.png',null);


-- 用户表
create table shop_users(
    id int unsigned auto_increment primary key not null comment '用户 id',
    mobile char(11) not null comment '手机号11位',
    password char(32) not null comment 'md5加密之后得32位'
);