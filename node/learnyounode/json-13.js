var http = require('http')
var map = require('through2-map')
var url = require('url')
var moment = require('moment')
/*
  {
    "hour": 14,
    "minute": 23,
    "second": 15
  }
*/

var server = http.createServer(function (request, response){

	if(request.method=='GET')
		return response.end("not post")
	var link = url.parse(request.pipe,true).path
	var query = url.parse(request.pipe,true).search
	var date = new Date().toISOString()
	var result; 
	//node -pe "require('url').parse('/test?q=1', true)"
	if (link ==  '/api/parsetime?'){
	result = {
		hour: date.getHours(), 
		minute: date.getMinutes(), 
		seconds: date.getSeconds()
		}
	}
	else{
	result = {unix.getTime()}
	}

 	if (result){
 	response.writeHead(200, { 'Content-Type': 'application/json' })
 	response.end(JSON.stringify(result))
 	}
	//request.pipe(map(function (input){
	//	return input.toString().toUpperCase()
	//})).pipe(response)
//end
})

server.listen(Number(process.argv[2]))