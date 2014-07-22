var Factory = require('./lib.js');


//calling my magic function with parameters

new Factory (function(client){
  client.make({
  "foo":1,
  "bar":2,
  callback: function (err,data){
    if (err) {
      console.log("Error!");
    }
    console.log(data);
    console.log("here");
  }
  });
});
