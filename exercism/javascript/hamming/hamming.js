var _ = require("lodash");

module.exports = hamming = {
  compute: function (a,b) {
    var val = 0;
      if (a===b){
        val = 0;
      }
      else {
        _.each(a, function (data, range) {
          console.log(data,range);
          if(data !== b[range] && typeof b[range] !== null){
            val++;
          }
        });
      }
      return val;
    }
};
