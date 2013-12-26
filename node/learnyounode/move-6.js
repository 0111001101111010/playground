  
var fs   = require('fs'),
	path = require('path');
  

  module.exports = function (dir, string,callback){


  	// read directory
  fs.readdir(dir, function (err, data) {
  if (err) 
  		return callback(err);
  	//match the end of items in data to process.argv[2]
  	data = data.filter(function(file){
  		return(path.extname(file) === '.'+ string)
  			//console.log(dir);
  		})
 	callback(null,data);
 	})
}