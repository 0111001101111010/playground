/*
var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};
	

app.get('/quotes/:name', function (req,res){

  res.writehead('200');
  res.write(quotes[req.param.name])
  res.end();
});
app.listen(8080);
*/

  var express = require("express");
  var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
}

app.get('/quotes/:name', function(request, response) {
  var quote = quotes[request.params.name];

  response.write(quote);
  response.end();
});
app.get('/quotes', function(request, response) {

  response.writeHead(200);
 //var quote = quotes[request.params.name];
  for (var i in quotes){
    quote = quotes[i];
    response.write(quote)
  }
  //response.write(quotes);
  response.end();
});


app.listen(8080);