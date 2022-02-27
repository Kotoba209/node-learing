var fs = require('fs')
var readStream = fs.createReadStream('./fileForRead.txt', 'utf-8')

readStream
  .on('data', (chunk) => {
    console.log('读取数据' + chunk)
  })
  .on('error', (err) => {
    console.error('出错' + err.message)
  })
  .on('end', () => {
    console.log('没有数据了')
  })
  .on('close', () => {
    console.log('连接已经关闭')
  })
