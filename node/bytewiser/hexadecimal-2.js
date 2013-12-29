//var buffer=require('buffer')


//serial string 
buf = new Buffer([0, 15, 24, 3, 250, 83],'hex');
//len = buf.write('bytewiser');
console.log(buf.toString('hex'))

//answer =   console.log(new Buffer('bytewiser'))

/* actual solution
  var bytes = [0, 15, 24, 3, 250, 83]
  var buff = new Buffer(bytes)
  console.log(buff.toString('hex'))
  */