console.log("PANDA")

var object = [1,2,3]
var sum  = 0 
object.forEach(function(item){

	sum += item;
})


console.log(sum)

var fs = require('fs')

fs.mkdxir('foo')