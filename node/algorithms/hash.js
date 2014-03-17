var _ = require("lodash");
var fs = require('fs');

var hash = {};

fs.readFile('macbeth.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.split(/\s+/);
  _.each(data,function(info){
     console.log(info+"\n");
     //if hash[info]
  });
  //console.log(data);
});
