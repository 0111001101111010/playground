    var concat = require('concat-stream');
    var http = require('http');


    process.stdin.pipe(concat(function reverse(data){
        var info = data.toString().split('').reverse().join('')
        console.log(info)
    }))


    /* example
        var concat = require('concat-stream');
    var http = require('http');

    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(concat(function (body) {
                var obj = JSON.parse(body);
                res.end(Object.keys(obj).join('\n'));
            }));
        }
        else res.end();
    });
    server.listen(5000);
    */
    /*solution
process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));
    */