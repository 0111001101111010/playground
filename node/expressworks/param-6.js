  var path = require('path')
  var express = require('express')
  var app = express()




  //app.use(require('stylus').middleware(process.argv[3]));
app.put('/message/:id', function(req, res) {

var id = req.params.id;

var date = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString().toString() + id)
    .digest('hex')

res.send(date);

})
app.listen(process.argv[2])