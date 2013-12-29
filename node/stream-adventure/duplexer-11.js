/* Write a program that exports a function that spawns a process from a `cmd`
string and an `args` array and returns a single duplex stream joining together
the stdin and stdout of the spawned process:
*/
var spawn = require('child_process').spawn;
var duplexer = require('duplexer')
var trumpet = require('trumpet');


module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    var process = spawn(cmd,args)

    // joining together the stdin and stdout here
	return duplexer(process.stdin,process.stdout)
};