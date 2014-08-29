var q = require('q');
var defer = q.defer();

//docs instructions
/*
doSomeSetup()
.then(function () {
  return cache.fetchModel(id)
    ? cache.fetchModel(id)
    : promisedAjax("users/" + id);
})
.then(displayUser)
.then(null, handleError);
*/

var attachTitle = function attachTitle (name){
	return "DR. " + name;
};

defer.promise.then(attachTitle).then(console.log);

defer.resolve("MANHATTAN");