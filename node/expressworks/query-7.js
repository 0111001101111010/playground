  var path = require('path')
  var express = require('express')
  var app = express()




  //app.use(require('stylus').middleware(process.argv[3]));
app.get('/search', function(req, res) {

var search = req.query;

res.send(search);

})
app.listen(process.argv[2])