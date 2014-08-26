"use strict"; /*jslint ignore: line*/
/* global require:true */
/*jslint node: true */
var _ = require("lodash");

var foo = {a:1, b:2, c:3};
//var bar = [d:1, e:2, f:3];

function PrintItemKey (obj) {
	_.each(obj, function (key, item) {
		console.log(item, key);
	});
}
function PrintKey (obj) {
	_.each(obj, function (key) {
		console.log(key);
	});
}

PrintItemKey(foo);
PrintKey(foo);

//Print(bar);

var Person  = function (name, age) {
	return {
		name: name,
		age: age
	};
};


var greet = function () {
	console.log("Hello this is " + this.name + " and I am: " + this.age);
};

var stanley = new Person('Stanley', 22);

greet.call(stanley);
greet.bind(stanley)();
