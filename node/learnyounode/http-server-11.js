
var fs 	 = require('fs'),
	http = require('http')

  var server = http.createServer(function (req, res) {
    // request handling logic...
    fs.createReadStream(process.argv[3]).pipe(res)
  })
  server.listen(Number(process.argv[2]))

  //console.log(process.argv[2])

/*
Solution
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(Number(process.argv[2]))
*/