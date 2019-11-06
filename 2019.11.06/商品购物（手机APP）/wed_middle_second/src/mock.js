// 引入假数据
import Mock from 'mockjs'

// 轮播图
Mock.mock('http://localhost:9999/api/v1/main_ad_images', 'get', {
  'ok': 1,
  'data|6': [
    {
      'image': "@image( '375x200', @color )",
      'link': 'http://www.baidu.com'
    }
  ]
})

// 分类
Mock.mock('http://localhost:9999/api/v1/index_categories', 'get', {
  'ok': 1,
  'data|12': [
    {
      'id|+1': 1,
      'cat_name': '@ctitle'
    }
  ]
})

// 图片懒加载
Mock.mock(/http:\/\/localhost:9999\/api\/v1\/index_goods\?page=\d+&per_page=\d+/, 'get', {
  'ok': 1,
  'data|10': [
    {
      'id|+1': 1,
      'goods_name': '@Ctitle',
      'price': '@integer(1500,5000)',
      'image': "@image( '130x130', @color )"
    }
  ]
})
