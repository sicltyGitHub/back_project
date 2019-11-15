const express = require('express')
const app = express()
const md5 = require('md5')
const jsonwebtoken = require('jsonwebtoken')

// 解决跨域
app.use(require('cors')())
// 加密的密钥
const salt = 'dfdfvszdefgrvszraefgsvgvbgh'
// 引入包，解析 POST 中 body 的数据
const bodyParser = require('body-parser')
// 注册为全局中间件
app.use(bodyParser.urlencoded({ extended: true }))
// 允许接收 json
app.use(bodyParser.json())

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

// 连接购物车cart
app.get('/api/v1/goods', (req, res) => {
  //  接收id
  let id = req.query.id
  // 先把id 转成数组
  id = id.split(',')
  // 循环数组获取，保存的是：?
  let arrfor = []
  id.forEach(v => {
    arrfor.push('?')
  })
  // 把问号的数组转成字符串
  arrfor = arrfor.join(',')
  let sql = `select * from goodslist where id in(${arrfor})`
  // 连接数据库
  db.query(sql, id, (err, data) => {
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

// 注册接口
app.post('/api/v1/regist', (req, res) => {
  // 接收表单中的数据
  let mobile = req.body.mobile
  let password = req.body.password

  // 国内手机号正则表达式验证数据
  let mobileRe = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
  if (!mobileRe.test(mobile)) {
    res.json({
      'ok': 0,
      'error': '手机号码格式不正确！'
    })
    // 退出程序
    return
  }

  // 验证密码
  let passwordRe = /^[0-9a-zA-Z_]{6,18}$/
  if (!passwordRe.test(password)) {
    res.json({
      'ok': 0,
      'error': '密码必须是6~18位的数字、字母、下划线！'
    })
    return
  }

  // 判断这个手机号码是否已经存在
  let sql = 'select count(*) c from shop_users where mobile = ?'
  db.query(sql, mobile, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      // 判断数据库中是否已经存在手机号
      if (data[0].c > 0) {
        res.json({
          'ok': 0,
          'error': '手机号码已经存在！'
        })
      } else {
        sql = 'INSERT INTO shop_users SET ?'
        // 要插入到数据库表中的数据
        let data = {
          mobile,
          // 把密码和密钥连起来再加密
          password: md5(password + salt),
          // 10位以秒为单位的时间戳（默认是以毫秒）
          regtime: new Date().getTime().toString().substring(0, 10)
        }
        // 执行
        db.query(sql, data, (err, data) => {
          if (err) {
            res.json({
              'ok': 0,
              'error': err
            })
          } else {
            res.json({
              'ok': 1
            })
          }
        })
      }
    }
  })
})

// 登录接口
app.post('/api/v1/login', (req, res) => {
  // 接收表单中的数据
  let mobile = req.body.mobile
  let password = req.body.password

  console.log(mobile, password)

  // 国内手机号正则表达式验证数据
  let mobileRe = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
  if (!mobileRe.test(mobile)) {
    res.json({
      'ok': 0,
      'error': '手机号码格式不正确！'
    })
    // 退出程序，后面不再执行了
    return
  }
  // 验证密码
  let passwordRe = /^[0-9a-zA-Z_]{6,18}$/
  if (!passwordRe.test(password)) {
    res.json({
      'ok': 0,
      'error': '密码必须是6~18位的数字、字母、下划线！'
    })
    return
  }
  // 根据手机号码到用户表中查询是否有这个账号
  let sql = 'select id,password from shop_users where mobile = ?'
  db.query(sql, mobile, (err, data) => {
    console.log(data)

    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      if (data.length > 0) {
        // 判断密码
        console.log(data[0].password, md5(password + salt))

        if (data[0].password === md5(password + salt)) {
          let jwt = jsonwebtoken.sign({
            id: data[0].id
            // 过期时间半年
          }, salt, { expiresIn: 60 * 60 * 24 * 30 * 6 })
          res.json({
            'ok': 1,
            'data': {
              'token': jwt
            }
          })
        } else {
          res.json({
            'ok': 0,
            'error': '密码错误！'
          })
        }
      } else {
        // 返回错误提示：账号不存在
        res.json({
          'ok': 0,
          'error': '手机号码不存在！'
        })
      }
    }
  })
})

// 下订单
app.post('/api/v1/orders', (req, res) => {

})

// 启动服务器
app.listen(9999, () => {
  console.log('http://127.0.0.1:9999正在努力奔跑中！')
})
