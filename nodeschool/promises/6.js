var q = require('q');
var defer = q.defer();

// var parsedPromised = function parsedPromised (aPromise) {
// 	return JSON.parse(aPromise);
// }

// defer.promise.then(parsedPromised).then(null, console.log());

// defer.resolve("[1,2,3]");

var parsedPromised = function (json){
	var def = q.defer();
	var result;

	try {
	  result = JSON.parse(json);
	  } catch (e) {
	  def.reject(e);
	 }

	 def.resolve(result);
	return def.promise;
};
//json = "{\"a\":5}";

//#ERROR theres no way this is correct, outputs

/*
ACTUAL                             EXPECTED
------                             --------
"[SyntaxError: Unexpected token o]"    "[SyntaxError: Unexpected token o]"
""                                 ""
# PASS

*/
parsedPromised(process.argv[2]).then(null,console.log);
