function doubleAll(numbers) {
  // var result = []
  // for (var i = 0; i < numbers.length; i++) {
  //   result.push(numbers[i] * 2)
  // }
  // return result
  	return numbers.map(function(num){
	  	return num*2
	  	})
}

module.exports = doubleAll