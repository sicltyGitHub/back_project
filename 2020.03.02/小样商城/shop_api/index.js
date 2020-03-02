// 1.配置express（忘记查中文官方文档）
const express = require('express')
// 创建服务器
const app = express();
//设置静态目录
app.use(express.static('./public'))

// 引入md5
const md5 = require('md5')
// 加密密钥
const salt = 'jahbdihrbae%65w7623#$sdhijahbdihrbae%65w7623#$sdhi'
// 引入登录时生成的令牌
const jsonwebtoken = require('jsonwebtoken')

// 补充解决跨域问题
const cors = require('cors');
app.use(cors())
// 3.配置数据库(忘记查npm中的mysql)
const mysql = require('mysql');
// 接收post方法的参数
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// 4.创建连接对象
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Shop'
});
// 5.连接数据库
connection.connect();

// ------------------------首页-------------------------
// 连接轮播图
app.get('/api/v1/stape_images', function (req, res) {
  // 6.连接数据库
  let sql = "select * from shop_swipe_images"
  // 7.执行sql语句
  connection.query(sql, (err, data) => {
    // 判断是否正确返回
    if (err) {
      // 2.给前端返回JSON数据 
      res.json({
        ok: 0,
        data: err
      })
    } else {
      // 2.给前端返回JSON数据
      res.json({
        ok: 1,
        data: data
      })
    }
  })
})

// 渲染宫格(服务)
app.get('/api/v1/stape_classify', function (req, res) {
  // 6.连接数据库
  let sql = "select * from shop_classify"
  // 7.执行sql语句
  connection.query(sql, (err, data) => {
    // 判断是否正确返回
    if (err) {
      // 2.给前端返回JSON数据 
      res.json({
        ok: 0,
        data: err
      })
    } else {
      // 2.给前端返回JSON数据
      res.json({
        ok: 1,
        data: data
      })
    }
  })
})

// 秒杀
app.get('/api/v1/stape_seckill', function (req, res) {
  // 6.连接数据库
  let sql = "select * from shop_seckill"
  // 7.执行sql语句
  connection.query(sql, (err, data) => {
    // 判断是否正确返回
    if (err) {
      // 2.给前端返回JSON数据 
      res.json({
        ok: 0,
        data: err
      })
    } else {
      // 2.给前端返回JSON数据
      res.json({
        ok: 1,
        data: data
      })
    }
  })
})

// 每日购
app.get('/api/v1/stape_everyshop', function (req, res) {
  // 6.连接数据库
  let sql = "select * from shop_everyshop"
  // 7.执行sql语句
  connection.query(sql, (err, data) => {
    // 判断是否正确返回
    if (err) {
      // 2.给前端返回JSON数据 
      res.json({
        ok: 0,
        data: err
      })
    } else {
      // 2.给前端返回JSON数据
      res.json({
        ok: 1,
        data: data
      })
    }
  })
})

// 为你推荐商品（list）
app.get('/api/v1/stape_recommended', function (req, res) {
  // 6.连接数据库
  let page = req.query.page || 1
  let per_page = req.query.per_page || 6
  let page_1 = (page - 1) * per_page
  // console.log(page);
  let sql = `SELECT * FROM shop_recommended limit ${page_1},${per_page}`
  // console.log(page_1);

  // 7.执行sql语句
  connection.query(sql, (err, data) => {
    // 判断是否正确返回
    if (err) {
      // 2.给前端返回JSON数据 
      res.json({
        ok: 0,
        data: err
      })
    } else {
      // 2.给前端返回JSON数据
      res.json({
        ok: 1,
        data: data
      })
    }
  })
})

// -----------------------购物车---------------------------------
app.get('/api/v1/goods', (req, res) => {
  // 接收id
  let id = req.query.id
  // 先把id转数组
  id = id.split(',')
  // 循环数组获取 ?
  let wenhao = []
  id.forEach(v => {
    // 转成数组
    wenhao.push('?')
  })
  // 把问号的数组转成字符串
  wenhao = wenhao.join(',')
  let sql = `SELECT * FROM shop_recommended WHERE id in(${wenhao})`
  // console.log(sql);

  // 7.执行时把对应的参数加上
  connection.query(sql, id, (err, data) => {
    // 判断是否正确返回
    if (err) {
      // 2.给前端返回JSON数据 
      res.json({
        ok: 0,
        data: err
      })
    } else {
      // 2.给前端返回JSON数据
      res.json({
        ok: 1,
        data: data
      })
    }
  })
})


// -----------------------分类页面---------------------------------
app.get('/api/v1/shop_categories', (req, res) => {
  let sql = 'select * from shop_categories'
  connection.query(sql, (error, result) => {
    if (error) {
      res.json({
        "code": 400,
        "error": error
      })
    } else {
      result.forEach(v => {
        if (v.img) {
          v.img = 'http://127.0.0.1:3000' + v.img;
        }
        if (v.imgs) {
          v.imgs = 'http://127.0.0.1:3000' + v.imgs;
        }
      })
      res.json({
        "code": 200,
        "data": result
      })
    }
  })
})
app.get('/api/v1/shop_sn_categories', (req, res) => {
  let parent_id = req.query.parent_id || 1
  connection.query(`select * from shop_sub_Categories where parent_id = ${parent_id}`, (error, result) => {
    if (error) {
      res.json({
        "code": 400,
        "error": error
      })
    } else {
      let sub_catId = []
      for (let i = 0; i < result.length; i++) {
        sub_catId.push(JSON.stringify(result[i].id))
      }
      let sub_cat = result;
      connection.query(`select * from shop_sub_sub_Categories where parent_id in(${sub_catId}) `, (error, results) => {
        if (error) {
          res.json({
            "code": 400,
            "error": error
          })
        } else {
          let subCat = results
          sub_cat.forEach(v => {
            v.subCat = []
            subCat.forEach(f => {
              if (v.id === f.parent_id) {
                v.subCat.push(f)
              }
            })
          });
          sub_cat.forEach(item => {
            item.img = 'http://127.0.0.1:3000' + item.img;
            item.subCat.forEach(item2 => {
              item2.img = 'http://127.0.0.1:3000' + item2.img;
            })
          })
          res.json({
            "code": 200,
            "sub_cat": sub_cat
          })
        }
      })
    }

  })
})


// -----------------------注册页面---------------------------------
app.post('/api/v1/regist', function (req, res) {
  // 1.接收表单中得数剧
  let mobile = req.body.mobile
  let password = req.body.password
  // 2.验证手机数据
  let mobileRe = /^1(3|5|7|8|9)\d{9}$/
  if (!mobileRe.test(mobile)) {
    res.json({
      'ok': 0,
      'error': '账号或者密码错误'
    })
    return
  }
  // 验证密码
  let passwordRe = /^[0-9a-zA-Z_]{6,18}$/
  if (!passwordRe.test(password)) {
    res.json({
      'ok': 0,
      'error': '密码必须是6~18位数字、字母、下划线'
    })
    return
  }
  // 3.判断手机号码是否已经存在
  let sql = 'SELECT COUNT(*) c FROM shop_users WHERE mobile = ?'
  // 4.执行sql语句
  connection.query(sql, mobile, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
      return
    } else {
      // 手机号码存在
      if (data[0].c > 0) {
        res.json({
          'ok': 0,
          'error': '手机号码已经存在'
        })
        return
      } else {
        // 手机号码不存在
        sql = 'INSERT INTO shop_users SET ?'
        // 要插入到数据表中得数据
        let data = {
          mobile,
          // 把密码和密钥连接，防止被被破解
          password: md5(password + salt)
        }
        connection.query(sql, data, (err, data) => {
          // 判单是否出错
          if (err) {
            res.json({
              'ok': 0,
              'error': err
            })
            return
          } else {
            // 成功返回接口文档
            res.json({
              "ok": 1
            })
          }
        })
      }
    }
  })
})
// -----------------------登录页面---------------------------------
app.post('/api/v1/login', function (req, res) {
  // 1.接收表单中得数剧
  let mobile = req.body.mobile
  let password = req.body.password
  // 2.验证手机数据
  let mobileRe = /^1(3|5|7|8|9)\d{9}$/
  if (!mobileRe.test(mobile)) {
    res.json({
      'ok': 0,
      'error': '账号或者密码错误'
    })
    return
  }
  // 验证密码
  let passwordRe = /^[0-9a-zA-Z_]{6,18}$/
  if (!passwordRe.test(password)) {
    res.json({
      'ok': 0,
      'error': '密码必须是6~18位数字、字母、下划线'
    })
    return
  }
  // 3.判断手机号码是否已经存在
  let sql = 'SELECT id,password FROM shop_users WHERE mobile = ?'
  // 4根据手机号码到用户表中查是否有这个账号
  // 7.执行sql语句
  connection.query(sql, mobile, (err, data) => {
    if (err) {
      res.json({
        'ok': 0,
        'error': err
      })
      return
    } else {
      // 测试：账号存在
      // res.json({
      //   data
      // })
      if (data.length > 0) {
        // 判断密码
        if (data[0].password === md5(password + salt)) {
          // 登录生成令牌
          // 参数一：数据(一般 用户id 必放)
          // 参数二：密钥
          // 参数三：配置这个信息的过期时间，不配就是永不过期
          let jwt = jsonwebtoken.sign({
            id: data[0].id,
          }, salt, { expiresIn: 7200 }) //两小时,单位是秒
          res.json({
            'ok': 1,
            'data': {
              'token': jwt
            }
          })
          return
        } else {
          res.json({
            'ok': 0,
            'error': '密码错误'
          })
          return
        }
      } else {
        // 账号不存在
        res.json({
          'ok': 0,
          'error': '手机号不存在'
        })
        return
      }
    }
  })

})

// 启动监听
app.listen(3000, () => {
  console.log('正在努力奔跑中!')
})