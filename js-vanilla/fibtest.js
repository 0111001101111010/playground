var _ = require('underscore');

console.time("Go")
var fibonacci = _.memoize(function(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
fibonacci(100);
console.timeEnd("Go")