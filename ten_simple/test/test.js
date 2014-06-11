var assert = require('chai').assert;
var ten = require('../ten');

describe('Exercise 1', function(){

  describe('A > B', function(){
        it('Given 6 & 5', function(){
          var val = ten.A(5,6);
          assert.equal(val,6,'6 is larger');
        });
  });
  describe('B > A', function(){
        it('Given 4 & 5', function(){
          assert.equal(ten.A(4,5),5,'5 is larger');
        });
  });
  describe('A == B', function(){
        it('Given 5 & 5', function(){
          assert.equal(ten.A(5,5),5,'5 is larger');
        });
  });
  describe('Handles Integers?', function(){
        it('Given 5 & 5.5', function(){
          assert.equal(ten.A(5,5.5),5.5,'4 is larger');
        });
  });
});
