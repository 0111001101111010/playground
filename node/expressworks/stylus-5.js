  var express = require('express')

  var app = express()
//  app.use(express.static(path.join(__dirname, 'public')));
 app.use(require('stylus').middleware(__dirname + '/public'));
 app.use(express.static(process.argv[3]||path.join(__dirname, '/public'))
 	).listen(process.argv[2]);

 /*
  var path = require('path')
  var express = require('express')
  var app = express()

  app.use(require('stylus').middleware(process.argv[3]));
  app.use(express.static(process.argv[3]));


  app.listen(process.argv[2])


 */
