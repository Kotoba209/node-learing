var dns = require('dns')

dns.lookup('www.qq.com', (err, address, family) => {
  if (err) throw err
  console.log('例子A：' + address)
})

// 获取同一域名的多个ip

var options = { all: true }

dns.lookup('www.qq.com', options, (err, address, family) => {
  if (err) throw err
  console.log('例子B：' + address)
})
