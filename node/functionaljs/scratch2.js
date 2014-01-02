// function test(){
// function scopeTest() {

// /* consider this simple for loop
//     to be the "block" that we were
//     talking about earlier
// */
// for (var i = 0; i <= 5; i++)
// {
//   var inFor = i; 
// }

// console.log(inFor);  // what happens here?

// }
// scopeTest();

// }

// // call the function defined above
// test();
// bob = "test"

////joins
// var breakfast = ["Fish", "Egg, Sausage and Cheese", "Egg Whites on Flatbread", "Egg and ➥Cheese"];

// var lunch = ["Turkey Club", "Grilled Cheese", "Peanut Butter and Jelly"];
// var dinner = ["Meatball", "Hamburger", "Oatmeal and banana on Rye"];
// console.log(breakfast[0])
// var joinBreakfast = breakfast.join(", plus ");
// console.log('join: ' + joinBreakfast);
// console.log(joinBreakfast[6])

//local storage variables
// for (var key in localStorage){
//    console.log(key)
// }

////call from method 
// var addressBookMethods = {
// sayHello: function(message){ return message;
// },
// startle: function(){
// console.log(addressBookMethods.sayHello("hey there, called from a method")); }
// }
// /* call the function */ addressBookMethods.startle();
// console.log(addressBookMethods.sayHello("poop"))



var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
eval("'use strict';x=20");
console.log(x === 17);
console.log(evalX === 42);
