  var express = require('express')

  var app = express()
//  app.use(express.static(path.join(__dirname, 'public')));

 app.use(express.static(process.argv[3]||path.join(__dirname, 'public'))
 	).listen(process.argv[2]);

/*  app.get('/home', function(req, res) {
    res.end('Hello World!')
  })*/
 // app.listen(process.argv[2])