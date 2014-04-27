var _ = require('underscore');
//var assert = require('chai').assert;
var assert = require('chai').assert;
//var assert = require("assert");

var sum = 0;
_.each(
		 _.range(0,1000),function(num){
	if (num%3==0 || num%5==0)
				sum=sum+num;
});
console.log(sum);

describe('Test 1', function () {
      it('sanity', function () {
      assert.equal(sum, 233168);
      });
    });
