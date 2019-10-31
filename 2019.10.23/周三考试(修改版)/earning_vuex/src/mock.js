// 引入mock
import Mock from 'mockjs'

// 登录
Mock.mock('http://127.0.0.1:9999/api/v1/access_token', 'post', {
  'ok': '@integer(0,1)',
  'error': '用户名或密码错误',
  'data': {
    'token': 'dhfigwrfbjhshbjihsfvbi@1231234443213'
  }
})

// 班级
Mock.mock('http://127.0.0.1:9999/api/v1/classes', 'get', {
  'ok': '1',
  'data|1-15': [{
    'id|+1': 1,
    'class_name': '@ctitle'
  }]
})

// 学生接口
Mock.mock(/http:\/\/127.0.0.1:9999\/api\/v1\/classes\/\d\/students/, 'get', {
  'ok': '1',
  'data|1-15': [{
    'id|+1': 1,
    'name': '@ctitle',
    'age': '@integer(20,40)',
    'face': '@dataImage("150x90", "离岸")',
    'time': '@datetime'
  }]
})
