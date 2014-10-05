var _ = require("lodash");

module.exports = hamming;


var hamming = {
  compute: function (a,b) {
    var val;
      if(a.length>b.length) {
        val = _.difference(a,b);
      }
      else {
        val = _.difference(b,a);
      }
      return val.length;
    }
};
