var http = require('http')

var server = http.createServer((req, res) => {
  var url = req.url
  res.end('您访问的地址是:' + url)
})

server.listen('3000', () => {
  console.log('app is running')
})

// http client
var client = http.get('http://127.0.0.1:3000', (client) => {
  client.pipe(process.stdout, 'stdout')
})
