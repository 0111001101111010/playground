var request = require('request');

var issueUrl = " http://www.nbc29.com/story/25232742/uva-students-participate-in-36-hour-hack-a-thon";
  //testing
  //var issueUrl = "http://localhost:3000/foo";
  var options = {
      url: issueUrl,
      method: "GET",
      //form: req.body,
      strictSSL:false,
      json:true
  };
var foo = true;
var count = 0;
while(count < 1000){
    request(options);
    console.log(count++);
}
request(options,function(err,data){
  console.log(data);
});
