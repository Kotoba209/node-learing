var fs = require('fs')
var writeStream = fs.createWriteStream('./fileForRead.txt', 'utf-8')

writeStream.on('close', () => {
  console.log('写入已关闭')
})

writeStream.write('hello')
writeStream.write(' ')
writeStream.write('world')
writeStream.end()
