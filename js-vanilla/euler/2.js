var _ = require('underscore');
//var assert = require('chai').assert;
var assert = require("chai").assert;
//var describe = require('mocha');
//var assert = require("assert");

var fibonacci = _.memoize(function(n) {
  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});


var sum = 0;
_.each(
		 _.range(0,10),function(num){
	var check = fibonacci(num)
	if (check%2==0){
			sum=sum+check;
		}
});
console.log(sum);

/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

assert('Array', function(){
  assert('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(sum, 233168);
    })
  })
})