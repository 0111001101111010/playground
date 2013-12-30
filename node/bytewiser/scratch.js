// var through = require('through')

// process.stdin.pipe(through(function (data){
//  this.queue(data.toString().toUpperCase());

// })).pipe(process.stdout)


// var events = require('events');
// var eventEmitter = new events.EventEmitter();
 
// var ringBell = function ringBell()
// {
//   console.log('ring ring ring');
// }
// eventEmitter.on('doorOpen', ringBell);
 
// eventEmitter.emit('doorOpen');
// eventEmitter.emit('doorOpen');
// eventEmitter.emit('nothing')


// eventEmitter.on('siri', function phone(friend, number){
// 	console.log('now calling '+ friend + " at " + number)
// });
// eventEmitter.emit('siri',"Jane","757-773-9438");
// eventEmitter.emit('siri',"Jane","757-773-9438");

buf = new Buffer('\n','utf8');
//len = buf.write('bytewiser');
console.log(buf)
