
// * operation: A Function, takes no arguments, returns no useful value.
// * num: the number of times to call `operation`

// function repeat(operation, num) {
//   // SOLUTION GOES HERE
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// module.exports = repeat

function repeat(operation, num){

	while(num >=0){
		operation()
		return repeat(operation, --num)
	}
}