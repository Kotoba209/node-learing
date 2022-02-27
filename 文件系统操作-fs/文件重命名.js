var fs = require('fs')
// fs.rename('./hello1', './world', (err) => {
//   if (err) throw err
//   console.log('重命名成功')
// })

// 同步
// fs.renameSync(oldPath, newPath)

fs.renameSync('./world', './world2')
