
var _ = require("lodash");

//based off of a property create a summary object
var worker = function(towns) {
    // do work; return stuff
    var result = {
    	hot: [],
    	warm: []
    };

    _.each(towns, function (value, key) {
    	if (_.every(value, function (temp) {
    		return temp > 19;
    	})){
    		result.hot.push(key);
    	}//should factor out the callback
    	else if (_.some(value, function (temp) {
        return temp > 19;
      })){
    		result.warm.push(key);
    	}
    });

	return result;
};
module.exports = worker;
// export the worker function
