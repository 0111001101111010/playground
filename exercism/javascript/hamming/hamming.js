var _ = require("lodash");

module.exports = hamming = {
  compute: function (a,b) {
    var val;
      if (a===b){
        val = 0;
      }
      else if(a.length >= 0) {
        val = _.difference(a,b).length;
      }
      else {
        val = _.difference(b,a).length;
      }
      return val;
    }
};
