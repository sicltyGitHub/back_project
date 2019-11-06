import Mock from 'mockjs'

// 注册
Mock.mock('http://127.0.0.1:3434/api/v1/users/register', 'post', {
  'ok': '@integer(0,1)',
  'error': '该用户已存在,请重新输入!',
  'msg': '注册成功!'
})

// 登录
Mock.mock('http://127.0.0.1:3434/api/v1/access_token', 'post', {
  'ok': '@integer(0,1)',
  'error': '用户名错误!',
  'data': {
    'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcyMzk4OTY4fQ.FBHf76xCkZlQe7iVGOWxcbWW3FsUgrRlBQr2P-ecF7c',
    'face': 'https://b-ssl.duitang.com/uploads/item/201706/13/20170613114349_tsVrk.thumb.700_0.jpeg'
  }
})

// 获取分类
Mock.mock('http://127.0.0.1:3434/api/v1/categories', 'get',
  {
    'ok': 1,
    'data': [
      {
        'id': 1,
        'cat_name': 'HTML'
      },
      {
        'id': 2,
        'cat_name': 'CSS'
      },
      {
        'id': 3,
        'cat_name': 'JavaScript'
      },
      {
        'id': 4,
        'cat_name': 'Vue'
      },
      {
        'id': 5,
        'cat_name': 'Node'
      },
      {
        'id': 6,
        'cat_name': 'ES6'
      }
    ]
  })

// 题目
Mock.mock(/http:\/\/127.0.0.1:3434\/api\/v1\/categories\/\d+\/questions\/[a-zA-z]+/, 'get', {
  'ok': 1,
  'data|5-9': [
    {
      'id|+1': 1,
      'title': '@ctitle(6,10)',
      'options': '@ctitle(2,4),@ctitle(2,4),@ctitle(2,4),@ctitle(2,4)',
      'right': '@integer(0,3)'
    }
  ]
})

// 排行榜
Mock.mock('http://127.0.0.1:3434/api/v1/questions/topn', 'get', {
  'ok': 1,
  'data|20-30': [
    {
      'username': '@cname',
      'integral': '@integer(100,500 )'
    }
  ]
})
