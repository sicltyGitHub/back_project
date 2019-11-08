const express = require('express')
const app = express()

// 解决跨域
app.use(require('cors')())

// 引入mysql
const mysql = require('mysql')
// 连接数据库
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'fullstack34shop'
})
// 连接数据库
db.connect()

// 连接首页轮播图接口
app.get('/api/v1/main_ad_images', (req, res) => {
  // 查询数据库
  const sql = 'select image,link from shop_swipe_images'
  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      res.json({
        'ok': 1,
        'data': data
      })
    }
  })
})

// 连接首页轮播图接口
app.get('/api/v1/main_ad_images', (req, res) => {
  // 查询数据库
  const sql = 'select image,link from shop_swipe_images'
  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      res.json({
        'ok': 1,
        'data': data
      })
    }
  })
})

// 连接推荐分类接口
app.get('/api/v1/index_categories', (req, res) => {
  // 执行sql语句查询数据库
  const sql = 'select * from shop_categories'
  // 连接数据库
  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      res.json({
        'ok': 1,
        'data': data
      })
    }
  })
})

// 连接商品列表接口
app.get('/api/v1/index_goods', (req, res) => {
  // 接收page 和 perPage(?后面参数都使用 req.query 接收)
  const page = req.query.page || 1
  const perPage = req.query.per_pag || 10

  // 计算开始的索引
  const offset = (page - 1) * perPage
  // 查询数据库
  const sql = `select * from goodslist limit ${offset},${perPage}`
  // 连接数据库
  db.query(sql, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      res.json({
        'ok': 1,
        'data': data
      })
    }
  })
})

// 启动服务器
app.listen(9999, () => {
  console.log('http://127.0.0.1正在努力奔跑中！')
})
