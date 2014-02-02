/* echo.js*/

var http = require('http');
var fs 	 = require('fs');
var EventEmitter = require ('events').EventEmitter;


http.createServer(function(request, response) {
	response.writeHead('200');
	request.pipe(response);
//	request.on('data', function(chunk) {//
//	});
	//response.end();
}).listen(8080)
