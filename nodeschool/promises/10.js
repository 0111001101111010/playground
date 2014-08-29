var q = require("q");
var defer = q.defer();
var io = require("q-io/http");
var r = require("request");

io.read("http://localhost:1337")
  .then(function (result){
      return JSON.parse(result);
       })
  .then(console.log)
  .catch(console.err)
  .done();
