var q = require('q');

var d1 = q.defer;
var d2 = q.defer;



var all = function (p1,p2){
  var defer = q.defer;
  var counter = 0;
  var increment = function (result) {
    ++counter;
  };

};

all(p1,p2);
