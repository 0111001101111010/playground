var assert = require('chai').assert;
var ten = require('../ten.js');

describe('State', function(){
  describe('Start', function(){
        it('should return 10 ', function(){
          // assert('foo' !== 'bar', 'foo is not bar');
          // assert(Array.isArray([]), 'empty arrays are arrays');
          // assert.equal(-1, [1,2,3].indexOf(5));
          // assert.equal(-1, [1,2,3].indexOf(0));
          assert(ten,10,'is not value ten');
          console.log(ten);
    });
  });
});
