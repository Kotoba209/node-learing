var fs = require('fs')
const path = require('path')

fs.readFile('./成绩.txt', 'utf-8', (err, data) => {
  if (err) throw err

  var arr = data.split(' ')
  arr.map((item) => {
    item.replace('=', ':')
  })

  const str = arr.join('\r\n')
  fs.writeFile(path.resolve(__dirname, '成绩-ok.txt'), str, (err) => {
    if (err) throw err
    console.log('文件写入成功')
  })
})
