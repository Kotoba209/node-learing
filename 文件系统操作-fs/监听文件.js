var fs = require('fs')

var options = {
  persistent: true, // 默认为true
  interval: 2000, // 检查间隔
}

// curr, prev 是被监听文件的状态, fs.Stat实例
// 可以通过 fs.unwatch() 移除监听
fs.watchFile('./fileForRead.txt', options, (curr, prev) => {
  console.log('修改时间' + curr.mtime)
})
