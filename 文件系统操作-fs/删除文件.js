var fs = require('fs')

fs.unlink('./fileForRead.txt', (err) => {
  if (err) throw err
  console.log('删除文件成功')
})

// fs.unlinkSync('./fileForRead.txt')
