
/*
 * GET users listing.
 */

exports.list = function(req, res){
  //res.send("respond with a resource");
  var data = {
  "user": [
      {"email":"szhen002@gmail.com","password": "test"},
      {"email":"me@me.com","password": "test"},
      {"email":"me@lookmai.com","password": "test"}
    ]
  };
  res.send(data);
};
