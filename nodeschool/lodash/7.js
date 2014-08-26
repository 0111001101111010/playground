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

   freelancers = _.sortBy(freelancers, "income");
    var underperform, overperform, average = 0;
    // do work; return stuff
    average = _.reduce(freelancers, function (sum,value){
      return sum + value.income;
    },0);
    average = average/freelancers.length;

    overperform = _.filter(freelancers, function (agent) { return agent.income > average;
    });
    underperform = _.filter(freelancers, function (agent) { return agent.income <= average;
    });
    return {
      average: average,
      underperform: underperform,
      overperform: overperform
    };
};

// export the worker function as a nodejs module
module.exports = worker;
