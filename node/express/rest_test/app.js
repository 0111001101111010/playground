
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs   = require('fs');
var _ = require('lodash');

var app = express();
app.locals._ = require("lodash");
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/ajax', function(err,data){

  if(err)
    console.log("oops");
    console.log(data);

  return;
});
app.get('/third', function(req,res){
  res.render('submitted', { title: 'test' },function(err, html) {
    console.log(html);
    res.send('done');
  });
});
app.get('/second', function(req,res){
  res.render('submitted', { title: 'test',"user": [
      {"email":"szhen002@gmail.com","password": "test"},
      {"email":"me@me.com","password": "test"},
      {"email":"me@lookmai.com","password": "test"}
    ]
  });
});
/// Post files
app.post('/upload', function(req, res) {

	fs.readFile(req.files.image.path, function (err, data) {

		var imageName = req.files.image.name;

		/// If there's an error
		if(!imageName){

			console.log("There was an error");
			res.redirect("/");
			res.end();

		} else {
      var newPath = __dirname + "/uploads/fullsize/" + imageName;
   /// write file to uploads/fullsize folder
      fs.writeFile(newPath, data, function (err) {
   /// let's see it
      res.redirect("/uploads/fullsize/" + imageName);
    });
   }
	});
});

app.post('/file-upload',function(req,res){
    console.log('FIRST TEST: ' + JSON.stringify(req.files));
    console.log('second TEST: ' +req.files.theFile.name);
    fs.readFile(req.files.theFile.path, function (err, data) {
        var newPath = "./uploads"+req.files.theFile.name;
        console.log(newPath);
        fs.writeFile(newPath, data, function (err) {
          res.send("hi");
        });
    });
});


app.on('get',function(err,data){

console.log('a get!');

});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
