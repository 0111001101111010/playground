/*
n this example, you will be given a readable stream, `counter`, as the first
argument to your program:

    module.exports = function (counter) {
        // return a duplex stream to capture countries on the writable side
        // and pass through `counter` on the readable side
    };

Return a duplex stream with the `counter` as the readable side. You will be
written objects with a 2-character `country` field as input, such as these:

    {"short":"OH","name":"Ohio","country":"US"}
    {"name":"West Lothian","country":"GB","region":"Scotland"}
    {"short":"NSW","name":"New South Wales","country":"AU"}
*/
var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer(input, counter);
    
    function write (row) {
        counts[row.country] = (counts[row.country] || 0) + 1;
    }
    function end () { counter.setCounts(counts) }
};
/*
no solution
var spawn = require('child_process').spawn;
var duplexer = require('duplexer')
var through = require('through');


module.exports = function (counter) {
	
	var count = {}
	function write (buf){
		buf.
	}
	function end (buf) {
		// body...
	}

	var count = {}
	var input = through(write,end)
        // return a duplex stream to capture countries on the writable side
        return duplexer(counter)
        // and pass through `counter` on the readable side
};

*/