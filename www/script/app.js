"use strict";
/*
es5:true
*/
var Geocodio = require('geocodio');
var _ = require ('lodash');

var config = {
    api_key: ''
}

var geocodio = new Geocodio(config);

var addresses = [
  'One Embarcadero Center, 9th Floor, San Francisco, CA 94111',
  '880 Broadway, New York, NY, 10003'
];
var foo;
geocodio.geocode(addresses, function(err, response){
    if (err) throw err;
    console.log(response);
    for (var elem in response) {
      console.log(elem);
      if (elem.results.hasOwnProperty("response")) {
          console.log(elem.response.results);
      }
    }
    console.log(response);
});
