var http = require('http'),
    bl   = require('bl');


var url = process.argv[2]
//var url = "http://www.google.com"

http.get(url, function (response) {
  
  response.pipe(bl(function(err,data){
  if(err)
    return console.error(data)

    data = data.toString()
    console.log(data.length)
    console.log(data)
    }
  ))
})

/*
Solution

      var http = require('http')
      var bl = require('bl')

      http.get(process.argv[2], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(data)
          data = data.toString()
          console.log(data.length)
          console.log(data)
        }))
      })


*/