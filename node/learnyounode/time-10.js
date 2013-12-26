  var net = require('net'),
  	  moment = require('moment')
 

  //form the date format "2013-12-25 09:20"
  function createDate(){
 	
 	var time = moment().format('YYYY-MM-DD hh:mm')
 	console.log(time)
 	return time
  }

  //create server
  var server = net.createServer(function (socket) {
    // socket handling logic

    socket.end(createDate()+'\n')
  })

  //listen port
  server.listen(Number(process.argv[2]))


  /*

Stupid Number(process.argv[2])


Here's what the official solution is if you want to compare notes:

-----------------------------------------------------------------


      var net = require('net')

      function zeroFill(i) {
        return (i < 10 ? '0' : '') + i
      }

      function now () {
        var d = new Date()
        return d.getFullYear() + '-'
          + zeroFill(d.getMonth() + 1) + '-'
          + zeroFill(d.getDate()) + ' '
          + zeroFill(d.getHours()) + ':'
          + zeroFill(d.getMinutes())
      }

      var server = net.createServer(function (socket) {
        socket.end(now() + '\n')
      })
      server.listen(Number(process.argv[2]))


-----------------------------------------------------------------
*/