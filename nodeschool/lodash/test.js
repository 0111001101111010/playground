"use strict";

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
