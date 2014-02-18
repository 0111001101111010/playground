var assert = require('assert')

var multipler = function (num) {
	return num*2
}


describe("multipler", function(){
	it("The evaluation of 2*2 should be 4", function(){
		var val = multipler(2)
		assert.equal(val,4)
	})
})

describe("defined?", function(){
	it("Variable should be defined", function(){

		val = multipler(2)
		assert.equal(typeof val, 'number')
	})
})

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(0));
    })
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})