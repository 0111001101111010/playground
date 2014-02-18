var http = require('http'),
    bl   = require('bl');

var results = [];
var counter = 0; 
//console.log(process.argv)

function getHttp(index){

	http.get(process.argv[2+index], function (response) {
	  
	  response.pipe(bl(function(err,data){
	  if(err)
	    return console.error(data)

	    data = data.toString()
	   // console.log(data.length)
	    results[index] = data;
	    counter++;

	    //our specific number of requests 
	    if (counter == 3)
	    	results.forEach(function(entry){
	    		console.log(entry);
	    	})

	    }
	  ))
	})
}

// passing i = number of arguments 
for (var i =0; i < 3; i++)
	getHttp(i);


/*
Solution

      var http = require('http')
      var bl = require('bl')
      var results = []
      var count = 0

      function printResults () {
        for (var i = 0; i < 3; i++)
          console.log(results[i])
      }

      function httpGet (index) {
        http.get(process.argv[2 + index], function (response) {
          response.pipe(bl(function (err, data) {
            if (err)
              return console.error(data)

            results[index] = data.toString()
            count++

            if (count == 3) // yay! we are the last one!
              printResults()
          }))
        })
      }

      for (var i = 0; i < 3; i++)
        httpGet(i)

*/