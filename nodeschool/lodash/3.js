'use strict';

var _ = require("lodash");

var addsizetyp = function (item) {

    _.forEach(item, function (value, key) {

        if (value.population > 1) {
            item[key].size = "big";
        } else if (value.population > 0.5) {
            item[key].size = "med";
        } else {
            item[key].size = "small";
        }
    });

    return item;
};

module.exports = addsizetyp;
/*    // include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(cities) {
        _.forEach(cities, function (city, key){
        	var pop = city.population;
        	if (pop > 1){
        		city[key].size = 'big';
        	}
        	else if (pop >.5){
        		city[key].size = 'med';
        	}
        	else {
        		city[key].size = 'small';
        	}
        });
        return cities;
    };

    // export the worker function as a nodejs module
    module.exports = worker;*/