var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
  console.log('监听器 listener1 执行');
}

var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

//绑定connection事件， 处理函数为listener1
eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

//查询connection事件的监听器数量
var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听连接事件');

//执行connection事件
eventEmitter.emit('connection');

//移除绑定的listener1函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听');

eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');

console.log(eventListeners + '个监听器监听连接事件');

console.log('执行完毕');