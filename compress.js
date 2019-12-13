//文件压缩

// var fs = require('fs');
// var zlib = require('zlib');

// //压缩 input.txt 文件为 input.txt.gz

// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('压缩完成');




//文件解压

var fs = require('fs');

var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log('文件解压完成');