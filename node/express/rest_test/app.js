
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


app.on('get',function(err,data){

console.log('a get!');

});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
