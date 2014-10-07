var anagram = require('./anagram');

var subject = anagram("diaper");
var matches = subject.matches([ "hello", "world", "zombies", "pants"]);
console.log(matches);
