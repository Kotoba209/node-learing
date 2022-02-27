var http = require('http')
var url = require('url')
var querystring = require('querystring')

// 服务端
// var server = http.createServer((req, res) => {
//   // console.log(req.headers)
//   // get 请求获取参数
//   var urlObj = url.parse(req.url)
//   var query = urlObj.query
//   var queryObj = querystring.parse(query)
//   console.log(JSON.stringify(queryObj), '<-JSON.stringify(queryObj)->')
//   // console.log('客户端请求的url：' + req.url)
//   // console.log('http版本:' + req.httpVersion, '<-->')
//   // console.log('http请求的方法:' + req.method, '<-->')
//   // console.log('http请求头部:' + JSON.stringify(req.headers), '<-->')
//   res.end('ok')
// })

var server = http.createServer((req, res) => {
  // post 请求获取参数
  var body = ''
  req.on('data', (chunk) => {
    body += chunk
  })
  req.on('end', () => {
    console.log('post body is :' + body)
    res.writeHead(200, {
      'content-type': 'text/plain',
    })
    res.end('ok')
  })
})

server.listen('3000', () => {
  console.log('app is running')
})

// 客户端
http.get('http://127.0.0.1:3000', (res) => {
  console.log(res, 'res')
})
