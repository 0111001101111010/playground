// include the Lo-Dash library
var _ = require("lodash");

var worker = function(orders) {
  orders = _.groupBy(orders, "article");
  _.reduce(orders, function(result, value, key){

  });
};

// export the worker function as a nodejs module
module.exports = worker;
