// var fs = require('fs');
// var data = '';

// //创建可读流
// var readerStream = fs.createReadStream('input.txt');

// //设置编码为utf8
// readerStream.setEncoding('UTF8');
// //处理流事件 --> data, end, and error
// readerStream.on('data', function (chunk) {
//   data += chunk;
// });

// readerStream.on('end', function () {
//   console.log(data);
// })

// readerStream.on('error', function (err) {
//   console.log(err.stack);
// });


// console.log('执行完毕');





//写入流

// var fs = require('fs')
// var data = '我是被写入的一条数据';

// var writeStream = fs.createWriteStream('output.txt');

// //使用utf8编码写入数据
// writeStream.write(data, 'utf8');

// //标记文件末尾
// writeStream.end();

// writeStream.on('finish', function () {
//   console.log('写入完成');
// })

// writeStream.on('error', function (err) {
//   console.log(err.stack);
// })

// console.log('执行完毕');





//管道流操作

var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

console.log('程序执行完毕');