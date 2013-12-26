  var fs = require('fs');
  
var output = fs.readFileSync(process.argv[2],"utf-8");
 
console.log(output.split('\n').length-1);

/*
official

      var fs = require('fs')

      var contents = fs.readFileSync(process.argv[2])
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)

*/
