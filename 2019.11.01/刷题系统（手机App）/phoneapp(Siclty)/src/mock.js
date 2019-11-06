// 引入假数据
import Mock from 'mockjs'

// 使用假数据
Mock.mock('http://localhost:9999/api/v1/users/access_token', 'post', {
  'ok': '@integer(0,1)',
  'error': '用户名或者密码错误',
  'data': {
    'token': 'fdlfdsafdsafsdaf'
  }
})

// 模拟分类接口
Mock.mock('http://localhost:9999/api/v1/categories', 'get', {
  'ok': 1,
  'data|1-10': [{
    'id|+1': 1,
    'cat_name': '@ctitle'
  }]
})

// 模拟学生做题信息
Mock.mock(/http:\/\/localhost:9999\/api\/v1\/categories\/\d+\/question_count_info/, {
  'ok': 1,
  'data': {
    'total': 100,
    'right': 95,
    'worry': 3,
    'undo': 2
  }
})

// 根据分类查询分类题目
Mock.mock(/http:\/\/localhost:9999\/api\/v1\/categories\/\d+\/questions\?type=(all|wrong|right|undo)/, 'get', {
  'ok': 1,
  'data|20-50': [
    {
      'id|+1': 1,
      'title': '@ctitle',
      // (5,10)5~10个字之间
      'options': '@ctitle(5,10), @ctitle(5,10), @ctitle(5,10), @ctitle(5,10)',
      // 对:1  错:2  未做:3
      'right': ' @integer(0, 3)',
      'category_id': 1
    }
  ]
})

// 回答时提交答案到服务器 [0123表示：0~3之间任意一个数 ]
Mock.mock(/http:\/\/localhost:9999\/api\/v1\/questions\/\d+\/[0123]/, 'post', {
  'ok': 1,
  'data': {
    'total': 100,
    'right': 95,
    'wrong': 3,
    'undo': 2
  }
})
