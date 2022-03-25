const express = require('express')
const cookieParser = require('cookie-parser')
const { getRandomString } = require('./db/utils')
const { router } = require('./router')

const app = express()



// 钩子函数，在执行接口函数之前执行
function csrfProtect(req, res, next) {
  if (req.method === 'GET') {
    const cke = getRandomString(48)
    res.cookie('csrf_token', cke)
  } else if (req.method === 'POST') {
    // 流程处理，不符合返回出去
  } else {
    // 流程处理，不符合返回出去
  }

  next()
}

app.use(cookieParser())
app.use(csrfProtect, router)

app.listen(3000, () => {
  console.log('app is running at port 3000')
})
