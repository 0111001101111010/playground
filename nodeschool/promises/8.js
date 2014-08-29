var q = require('q');
var defer = q.defer();

//docs
// doStuff()
// .then(doMoreStuff)
// .then(null, complainAboutJavascript)
// .done();

var throwMyGod = function () {
  return new Error("OH NOES");
};

var iterate = function (num) {
  console.log(num);
  return num +1;
};

q.fcall(iterate,1)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(iterate)
 .then(throwMyGod)
 .done(sconsole.log);
