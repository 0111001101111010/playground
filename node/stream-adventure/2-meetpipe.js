var fs = require('fs')

fs.createReadStream(process.argv[2]).pipe(process.stdout)


/*
solution

    var fs = require('fs');
    var file = process.argv[2];
    fs.createReadStream(file).pipe(process.stdout);

*/

