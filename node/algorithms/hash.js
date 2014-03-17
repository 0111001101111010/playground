var _ = require("lodash");
var fs = require('fs');

var hash = {};

fs.readFile('macbeth.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.split(/\s+/);
  _.each(data,function(info){
     if (hash[info] === undefined)
         hash[info] = 1;
     else
        hash[info]++;
  });
  //var sort = _.functions(hash);
  console.log(hash);
  //console.log(hash);
  //console.log(data);
});
