var http = require('http')
var zlib = require('zlib')

var resText = 'hello world'

var server = http.createServer((req, res) => {
  var acceptEncoding = req.headers['accept-encoding']
  if (acceptEncoding.indexOf('gzip') !== -1) {
    res.writeHead(200, {
      'content-encoding': 'gzip',
    })
    res.end(zlib.gzipSync(resText))
  } else {
    res.end(resText)
  }
})

server.listen('3000', () => {
  console.log('app is running', '<-->')
})
