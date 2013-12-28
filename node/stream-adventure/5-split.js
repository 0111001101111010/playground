var through = require('through')
var split 	= require('split')

/*
var count = 0;
var tr = through(function (buf) {

    //var list = this.queue(buf.split('\n'))

    this.queue(
    console.log("fudge");
    	if(count%2 ===0)
    		buf.toString().toLowerCase()+'\n'
    	else 
    		buf.toString().toUpperCase()+'\n'
    	)
    count++;
});*/

var lineCount = 0;
var tr = through(function (buf) {
    var line = buf.toString();
    this.queue(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)

/*
diff solution
^
*/