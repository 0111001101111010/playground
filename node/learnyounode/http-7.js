/*

sanity


var http = require('http')

http.get(process.argv[2],function(response){
	response.setEncoding('utf8');
	response.on("data", console.log());
	response.on("error", console.error());
})
*/
var http = require('http')
//var url = process.argv[2]
var url = "http://www.google.com"

http.get(url, function (response) {
  response.setEncoding('utf8')
  //response.on('connection',console.log)
  response.on('data',console.log)
  response.on('error', console.error)
})