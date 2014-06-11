var assert = require('chai').assert;
var ten = require('../ten');

beforeEach(function(){
  console.log('Cool!');
});

describe('State', function(){
  describe('Start', function(){
        it('should return 10, weird test case ', function(){
          assert(ten.ten(),10,'is not value ten');
          console.log(ten);
    });
  });
});

describe('Exercise 1', function(){
  describe('Start', function(){
        it('Given 6,5', function(){
          assert(ten.A(),15,'is not value ten');
          console.log(ten);
    });
  });
});
