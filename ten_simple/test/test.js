 /*jshint expr:true */
var assert = require('chai').assert;
var should = require('chai').should();
var expect = require('chai').expect;

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

describe('Exercise 2', function(){

  describe('3A,2B,1C', function(){
        it('Given ABC', function(){
          assert.equal(ten.B(3,2,1),3,'A is largest');
        });
  });

  describe('2A,3B,1C', function(){
        it('Given ABC', function(){
          assert.equal(ten.B(4,6,2),6,'B is largest');
        });
  });
  describe('2A,1B,3C', function(){
        it('Given ABC', function(){
          assert.equal(ten.B(6,3,9),9,'C is largest');
        });
  });
});


describe('Exercise 3', function(){

  describe('Given a Vowel ', function(){
        it('A should be true', function(){
          var val =ten.C('a');
          expect(val).to.be.true;
        });
  });
  describe('Given a Vowel ', function(){
        it('B should be false', function(){
          var val =ten.C('b');
          expect(val).to.be.false;
        });
  });

});
 describe('Exercise 4', function() {
   describe('Given a word bar', function() {
     it('should return bobaror', function() {
       assert.equal(ten.D("bar"), "bobaror");
     });
   });
   describe('Given a word ooo', function() {
     assert.equal(ten.D('ooo'), 'ooo');
   });
   describe('Given two words ', function() {
     assert.equal("foo bar", "fofoo bobaror");
   });
 });
