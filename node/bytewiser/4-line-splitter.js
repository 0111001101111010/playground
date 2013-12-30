var fs = require('fs')


var offset = 0;
// how do you do it without file sync fs.readFileSync.
var data = fs.readFileSync(process.argv[2])

for (var i = 0 ; i < data.length; i++) {
if (data[i] === 10){
	 console.log(data.slice(offset, i))
    i++
	offset = i
	}
}
//last one ?
console.log(data.slice(offset, i))

//Solution
// var file = fs.readFileSync(process.argv[2])
// var offset = 0
// for (var i = 0; i < file.length; i++) {
//   if (file[i] === 10) {
//     console.log(file.slice(offset, i))
//     i++
//     offset = i
//   }
// }
// console.log(file.slice(offset, i))

