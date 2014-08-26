// include the Lo-Dash library
var _ = require("lodash");

var worker = function(users) {
    // do work; return stuff
    var summary = [];

    _.each(users, function(user){
      if (_.contains(summary, user)){
        summary.comment_count++;
      }
      else(
        summary.push({
          username:user,
          comment_count:1
        })
      );
    });
    _.sortBy(users, function(user){
      return -user.comment_count;
    });
    return summary;
};

// export the worker function as a nodejs module
module.exports = worker;
