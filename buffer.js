// var Buffer = require('buffer');

// const buf = Buffer.alloc(256);

// const len = buf.write('www.runoob.com');

// console.log('写入字节数:' + len);

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value
});

console.log(copy);