var assert = require('chai').assert;
var ten = require('../ten');

describe('Exercise 1', function(){

  describe('A > B', function(){
        it('Given 6 & 5', function(){
          var val = ten.A(5,6);
          console.log(val);
          assert.equal(val,4,'6 is larger');
        });
  });
  describe('B > A', function(){
        it('Given 6 & 5', function(){
          assert.equal(ten.A(4,5),5,'5 is larger');
        });
  });
});
