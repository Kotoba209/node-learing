// process.on('exit', function (code) {
//   setTimeout(function () {
//     console.log('当前代码不会执行');
//   }, 0);
//   console.log('退出码为', code);
// });

// console.log('程序结束');



//输出到终端
process.stdout.write('Hello World' + '\n');

//通过参数读取
process.argv.forEach(function (val, index, array) {
  console.log(index + ':' + val);
});
//获取执行路径
console.log(process.execPath);

//平台信息
console.log(process.platform);