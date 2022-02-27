// 异步写入
// var fs = require('fs')

// fs.writeFile('./fileForRead.txt', '异步写入的信息', 'utf-8', (err) => {
//   if (err) throw err
//   console.log('文件异步写入成功')
// })

// 同步写入
var fs = require('fs')

try {
  fs.writeFileSync('./fileForRead.txt', '同步写入的信息122', 'utf-8')
  console.log('文件同步写入成功', '<-->')
} catch (err) {
  throw err
}
