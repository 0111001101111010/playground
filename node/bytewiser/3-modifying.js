var through = require('through')


process.stdin.on('data', function(buf){

	for (var i = buf.length - 1; i >= 0; i--) {
		if (buf[i] === 46)
		 	buf.write('!',i)
	};
	console.log(buf)
})

/*
Sol
process.stdin.on('data', function(buff) {
  for (var i = 0; i < buff.length; i++) {
    if (buff[i] === 46) buff.write('!', i)
  }
  console.log(buff)
})
*/
