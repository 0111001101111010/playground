var _ = require('underscore');
//var assert = require('chai').assert;
var assert = require("assert");
var sum = 0;
_.each(
		 _.range(0,1000),function(num){
	if (num%3==0 || num%5==0)
				sum=sum+num;
});
console.log(sum);

/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(sum, 233168);
    })
  })
})

