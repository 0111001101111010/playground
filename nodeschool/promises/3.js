var q = require('q');
var defer = q.defer();

defer.promise.then(null, console.log, console.log);
