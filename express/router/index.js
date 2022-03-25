const express = require('express')
// const cookieParser = require('cookie-parser')
const router = express.Router()
const db = require('../db/nodejs-orm')
const { handleDB, getRandomString } = require('../db/utils')


router.get('/get_data', (req, res) => {
  const Students = db.model('students')
  // 查询所有
  Students.find((err, data) => {
    if (err) return;
    res.send(data)
  })

  // 指定查询
  //  Students.find(['name', 'age'], (err, data) => {
  //   if (err) return;
  //   res.send(data)
  // })

  // 条件查询
  // Students.find('age > 18 and age < 34', (err, data) => {
  //   if (err) return;
  //   res.send(data)
  // })

  // 分页
  // Students.limit({ where: 'age < 18', number: 2, count: 2 }, (err, data) => {
  //   console.log('err', err)
  //   if (err) return
  //   res.send(data)
  // })
  
})

router.get('/set_data', (req, res) => {
  const Students = db.model('students')
  // 插入一条
  Students.insert({name: '张飞', age: 22, gender: 1, high: 183.00}, (err, data) => {
    if (err) throw(err)
    res.send(data)
  })
})

router.get('/set_datas', (req, res) => {
  const Students = db.model('students')
  // 插入多条
  Students.insert(
    [
      {name: '张飞', age: 22, gender: 1, high: 183.00},
      {name: '关于', age: 25, gender: 1, high: 184.00},
      {name: '刘备', age: 27, gender: 1, high: 185.00}
    ],
  
    (err, data) => {
    if (err) throw(err)
    res.send(data)
    }
  )
})

router.get('/del', (req, res) => {
  const Students = db.model('students')
  // 删除，不传参数会清空表
  Students.delete('id = 35', (err, data) => {
    if (err) throw err
    res.send(data)
  })
})

router.get('/updated', (req, res) => {
  const Students = db.model('students')
  // 删除，不传参数会清空表
  Students.update('id = 36', { name: '"曹操"' }, (err, data) => {
    if (err) throw err
    res.send(data)
  })
})

router.get('/custom', (req, res) => {
  const Students = db.model('students')
  Students.sql('select * from students limit 3', (err, data) => {
    res.send(data)
  })
})

router.get('/handle', (req, res) => {
  (async function() {
    const results = await handleDB(res, 'students', 'find', '查询报错')
    const cke = getRandomString(48)
    res.cookie('csrf_token', cke)
    // console.log('res.cookies', req.cookies)
    // console.log('req.heardes', req.headers)
    res.send(results)
  })()
})

exports.router = router
