//创建请求
var http = require('http');
var url = require('url');
// var router = require('./router');

function start(route) {
  function onRequest(request, responese) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for' + pathname + 'recevied.');

    route(pathname);
    responese.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    responese.write('Hello World');
    responese.end();
  }
  http.createServer(onRequest).listen(8888)
  console.log('Server has started.');
}

exports.start = start;

// http.createServer(function (request, responese) {
//   responese.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });

//   responese.end('Hello World\n');
// }).listen(8888);

// console.log('Server running at http:127.0.0.1:8888');