import Mock from 'mockjs'

// 首页购物车
Mock.mock('http://127.0.0.1:9999/api/v1/index_cart', 'get', {
  'ok': 1,
  'data|3': [{
    'id|+1': 1,
    'goods_name': '@ctitle',
    'goods_desc': '@cparagraph',
    'price': '@integer(10,500)',
    'image': '@dataImage(80x90)',
    'checked|1-2': true
  }]
})
