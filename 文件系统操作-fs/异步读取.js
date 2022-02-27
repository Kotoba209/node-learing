var fs = require('fs')

fs.readFile('./fileForRead.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.log('读取文件出错' + err.message)
  }
  console.log('文件内容' + data)
})
