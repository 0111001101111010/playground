    var http = require('http');
    var fs = require('fs');
    var through = require('through')

    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(fs.createWriteStream('post.txt'));
        }
        res.end('beep boop\n');
    });
    server.listen(process.argv[2]);

/* the official hint passes the test..

    var http = require('http');
    var through = require('through');

    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(through(function (buf) {
                this.queue(buf.toString().toUpperCase());
            })).pipe(res);
        }
        else res.end('send me a POST\n');
    });
    server.listen(parseInt(process.argv[2]));
  */