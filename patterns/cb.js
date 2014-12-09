

var foo = function (cb) {
  console.log("did foo");
  return cb;
};


var bar = function (cb){
  console.log("did bar");
  return cb;
};


foo(bar(foo(bar)))();
