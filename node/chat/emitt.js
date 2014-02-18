var http = require('http');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer();
  server.on('request',function(request,response){
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
  })

server.listen(8050)
