var fs = require('fs')

fs.access('./fileForRead.txt', (err) => {
  if (err) throw err
  console.log('文件已存在')
})

// fs.access('./fileForRead2.txt', (err) => {
//   if (err) console.error(err)
//   console.log('2已存在')
// })

// fs.access()除了判断文件是否存在（默认模式），还可以用来判断文件的权限。
