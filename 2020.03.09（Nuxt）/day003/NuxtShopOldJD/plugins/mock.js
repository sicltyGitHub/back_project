// console.log('学习注册插件');


import Mock from 'mockjs'

Mock.mock('/abcd','get',{
  'data|4-8':[{
    'id|+1':1,
    'goods_name':'@ctitle',
    'price':'@float',
    'logo':'@dataImage(150X120)'
  }]
})