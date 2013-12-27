var	 moment = require('moment'),
	 fs 	 = require('fs'),
	 http = require('http')
	  //form the date format "2013-12-25 09:20"


var time = moment().format('YYYY-MM-DD hh:mm')

console.log(time)
/*
var move = require('./move-6.js')

var dir = "./../..", ext = "js"

move(dir,ext,function(err, data){

	if (err) throw err;

	data.forEach(function(file){
		console.log(file);
	})
})

//exp("../",".js")

*/ 


  var server = http.createServer(function (req, res) {
    // request handling logic...
    fs.createReadStream().pipe(res)
  })
  server.listen(8080)