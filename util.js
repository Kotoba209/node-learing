const util = require('util');

//callbackify 回调

// async function fn() {
//   return 'hello world';
// }

// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   if (err) {
//     throw err
//   }
//   console.log(ret);
// })


//inherits类的继承


// function Base() {
//   this.name = 'base';
//   this.base = 1900;
//   this.sayHello = function () {
//     console.log('Hello' + this.name);
//   };
// }

// Base.prototype.showName = function () {
//   console.log(this.name);
// };

// function Sub() {
//   this.name = 'sub';
// }

// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();

// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();
// console.log(objSub);


//inspect 将任意对象转换为字符串

// function Person() {
//   this.name = 'byvoid';
//   // this.name = name;
//   this.toString = function () {
//     return this.name;
//   };
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));


//其他方法
//util.isArray(object)、util.isRegExp(object)、util.isDate(object)