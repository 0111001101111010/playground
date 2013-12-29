    var http = require('http');
    var fs = require('fs');
    var request = require ('request')
    var through = require('through')

    var req = request.post('http://localhost:8000/')
    process.stdin.pipe(req).pipe(process.stdout)
/*
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(fs.createWriteStream(process.stdin));
        }
        res.end('beep boop\n');
    });
    server.listen(process.argv[2]);
    */
/*
solution
    var request = require('request');
    var r = request.post('http://localhost:8000');
    process.stdin.pipe(r).pipe(process.stdout);

tip check if package is installed next time ... 
*/