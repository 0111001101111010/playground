  var path = require('path');
  var express = require('express');
  var app = express();
  var fs = require('fs');


/*app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.send(500)
    }
    res.json(books)
  })
})
*/


  //app.use(require('stylus').middleware(process.argv[3]));
app.get('/books', function(req, res) {

  fs.readFile(process.argv[3], function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } 
    catch (e) {
      res.send(500)
    }
    res.json(books)
	
	})
})
//var search = req.query;
app.listen(process.argv[2])