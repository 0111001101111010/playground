var fs   = require('fs'),
	path = require('path');
  
//var output = fs.readFile(process.argv[2]);
 
//console.log(output);

var regexp = /[.txt]/gi;
var list = [];
fs.readdir(process.argv[2], function (err, data) {
  if (err) throw err;
  	//match the end of items in data to process.argv[2]
  	//console.log(data);	
  	//console.log(data[1]);
  	data.forEach(function(dir){
  		if(path.extname(dir) === '.'+process.argv[3])
  			console.log(dir);

  	})

});

//console.log(list);

/*

solution

      var fs = require('fs')
      var path = require('path')

      fs.readdir(process.argv[2], function (err, list) {
        list.forEach(function (file) {
          if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
        })
      })


*/