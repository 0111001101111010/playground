/*
    [ { name: "mike",  income: 2563 },
      { name: "kim",   income: 1587 },
      { name: "liz",   income: 3541 },
      { name: "tom",   income: 2475 },
      { name: "bello", income: 987  },
      { name: "frank", income: 2975 } ]
*/

// include the Lo-Dash library
var _ = require("lodash");

var worker = function(freelancers) {
    var summary = {}, average = 0;
    // do work; return stuff
     _.each(freelancers, function (item,key) {
        average = _.reduce(item, function (sum,item){
          return sum + item.income;
        });
    },0);

    _.filter(freelancers, function (income) {
      if (income>average){


      }
    });
    return summary;
};

// export the worker function as a nodejs module
module.exports = worker;
