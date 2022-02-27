//读取文件

//阻塞代码实例

// var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

// console.log('程序执行结束');
//运行结果： 先输出文件内容再输出console.log(同步执行);







//非阻塞代码实例

// var fs = require('fs');
// fs.readFile('input.txt', function (err, data) {
//   if (err) return console.log(err);
//   console.log(data.toString());
// });

// console.log('程序执行结束');

//运行结果：先输出console.log再输出文件内容(异步执行);



//事件1

// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// //创建事件处理程序
// var connectHandler = function connected() {
//   console.log('连接成功');

//   //触发data_receviced 事件
//   eventEmitter.emit('data_receviced');
// }

// //绑定connection 事件处理程序
// eventEmitter.on('connection', connectHandler);

// //使用匿名函数绑定data_receviced事件
// eventEmitter.on('data_receviced', function () {
//   console.log('数据接收成功')
// });

// //触发connection事件
// eventEmitter.emit('connection');

// console.log('执行完毕');

// 事件2
var events = require('events');
var event = new events.EventEmitter();

event.on('some_event', function () {
  console.log('some_event 事件触发');
});

setTimeout(function () {
  event.emit('some_event')
}, 1000);