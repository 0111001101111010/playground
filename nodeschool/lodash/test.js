"use strict"; /*jslint ignore: line*/
/* global require:true */

var _ = require("lodash");

var worker = function(freelancers) {
		var underperform, overperform, average = 0;
		// do work; return stuff
		average = _.reduce(freelancers, function (sum,value){
			return sum + value.income;
		},0);
		average = average/freelancers.length;

		overperform =_.filter(freelancers, function (income) { return income > average;
		});
		underperform =_.filter(freelancers, function (income) { return income <= average;
		});
		return {
			average: average,
			overperform: overperform,
			underperform: underperform
		};
};

var Person  = function (name, age) {
	return {
		name: name,
		age: age
	};
};


var greet = function () {
	console.log("Hello this is " + this.name + " and I am: " + this.age);
}

var stanley = new Person('Stanley', 22);

greet.call(stanley);
greet.bind(stanley)();
greet.call(this);
