/* chatserver.js*/

var http = require('http');
var fs 	 = require('fs');
var EventEmitter = require ('events').EventEmitter;


var file = fs.readFileSync('./emitt.js');

var server = http.createServer(function (req,res){
    res.writeHead(200);
//    res.write(file);
	res.write("I'm on");
	res.end();
});

server.listen('8000');