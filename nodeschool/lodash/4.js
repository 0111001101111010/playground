
var _ = require("lodash");

var worker = function(towns) {
    // do work; return stuff
    var result = {
    	hot: [],
    	warm: []
    };

    _.forEach(towns, function (key, value) {
    	if (_.every(key, function (temp) {
    		return temp > 19;
    	})){
    		result.hot.push(value);

    	}//should factor out the callback
    	else if (_.some(key, function (temp) {
        return temp > 19;
      })){
    		result.warm.push(value);
    	}
    });

	return result;
};
module.exports = worker;
// export the worker function
