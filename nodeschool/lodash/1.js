// include the Lo-Dash library
var _ = require("lodash");

//finds where where property key is true;
var worker = function(users) {
  // do work; return stuff
  return _.where(users,{active:true});
};

// export the worker function as a nodejs module
module.exports = worker;
