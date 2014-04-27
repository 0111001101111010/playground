// module.exports = function getShortMessages(messages) {
//   // SOLUTION GOES HERE
//   //console.log(messages)
//  // forEach
//   return messages.filter(function (letter){
//     return letter.message.length<50
//     }).map(function (letter)){
// return letter.message 
//   })
// }
module.exports = function getShortMessages(messages) {
//Solutions
"use strict";
return messages.filter(function (letter){
	return letter.message.length<50;
}).map(function (letter){
	return letter.message;
	});
};
/*
Solution
module.exports = function getShortMessages(messages) {
  return messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
}*/