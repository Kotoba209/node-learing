var fs = require('fs');
var buf = new Buffer.alloc(1024);

//异步
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('异步读取:' + data.toString());
// });


//同步
// var data = fs.readFileSync('input.txt');
// console.log('同步读取:' + data.toString());

// console.log('执行完毕');









//打开文件
//fs.open(path, flags[, mode], callback)
// path - 文件的路径。
// flags - 文件打开的行为。 具体值详见下文。
// mode - 设置文件模式(权限)， 文件创建默认权限为 0666(可读， 可写)。



// console.log('准备打开文件!');
// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('打开文件成功');
// });









//获取文件信息
// fs.stat(path, callback)
// path-文件路径



// fs.stat('input.txt', function (err, stats) {
//   console.log(stats.isFile());
// })


// console.log('准备打开文件')

// fs.stat('input.txt', function (err, stats) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(stats);
//   console.log('读取文件信息成功');

//   console.log('是否为文件i(sFile)?' + stats.isFile());
//   console.log('是否为目录(isDirectory)?' + stats.isDirectory());
// })








//写入文件
// fs.writeFile(file, data[, options], callback)
// file - 文件名或文件描述符。
// data - 要写入文件的数据， 可以是 String(字符串) 或 Buffer(缓冲) 对象。
// options - 该参数是一个对象， 包含 {
//   encoding,
//   mode,
//   flag
// }。
// 默认编码为 utf8, 模式为 0666， flag 为 'w'



// console.log('准备写入文件');
// fs.writeFile('test.txt', '我是通过fs.writeFile写入文件的内容', function (err) {
//   if (err) {
//     console.log(err)
//   };
//   console.log('数据写入成功');
//   console.log('----我是分割线----');
//   console.log('读取写入的数据');
//   fs.readFile('test.txt', function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('异步读取文件的数据：' + data.toString());
//   })
// })








//读取文件
// fs.read(fd, buffer, offset, length, position, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// buffer - 数据写入的缓冲区。
// offset - 缓冲区写入的写入偏移量。
// length - 要从文件中读取的字节数。
// position - 文件读取的起始位置， 如果 position 的值为 null， 则会从当前文件指针的位置读取。




// console.log('准备打开已存在的文件');
// fs.open('test.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('打开文件成功');
//   console.log('准备读取文件');
//   fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(bytes + '字节被读取');

//     if (bytes > 0) {
//       console.log(buf.slice(0, bytes).toString());
//     }
//   })
// })







//关闭文件
// fs.close(fd, callback);









//截取文件
// fs.ftruncate(fd, len, callback)
// fd - 通过 fs.open() 方法返回的文件描述符。
// len - 文件内容截取的长度。



// console.log('准备打开文件');
// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('打开文件成功');
//   console.log('截取10字节内的文件内容，超出部分将被去除');

//   fs.ftruncate(fd, 10, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('文件截取成功')
//     console.log('读取相同的文件')
//     fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//       if (err) {
//         return console.log(err);
//       }

//       //输出读取的字节
//       if (bytes > 0) {
//         console.log(buf.slice(0, bytes).toString());
//       }

//       //关闭文件
//       fs.close(fd, function (err) {
//         if (err) {
//           return console.log(err);
//         }
//         console.log('关闭文件成功');
//       });
//     });
//   });
// });









//删除文件
// fs.unlink(path, callback)

// console.log('准备删除文件');
// fs.unlink('input.txt', function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('删除文件成功');
// });








//创建目录
// fs.mkdir(path[, options], callback)
// path - 文件路径。

// options 参数可以是：

// recursive - 是否以递归的方式创建目录， 默认为 false。
// mode - 设置目录权限， 默认为 0777。

// console.log('创建目录test');
// fs.mkdir('test', function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('目录创建成功');
// });









//读取目录
// fs.readdir(path, callback)

// console.log('查看test目录');

// fs.readdir('test', function (err, files) {
//   if (err) {
//     return console.log(err);
//   }
//   files.forEach(function (file) {
//     console.log(file);
//   });
// });








//删除目录(目录含有子文件时删除失败)
// fs.rmdir(path, callback)

// console.log('准备删除目录test');
// fs.rmdir('test', function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log('读取test目录');
//   fs.readdir('test', function (err, files) {
//     if (err) {
//       return console.log(err);
//     }
//     files.forEach(file => {
//       console.log(file);
//     });
//   });
// });