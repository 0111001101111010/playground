    var ws = require('websocket-stream');
    var stream = ws('ws://localhost:8000');
    stream.pipe('Hello\n')

    /*official solution
        var ws = require('websocket-stream');
    var stream = ws('ws://localhost:8000');
    stream.end('hello\n');
    */	