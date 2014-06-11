/*jslint node: true */
(function () {
  'use strict';

  module.exports.A = function(a,b){
    if(a>b){
      return a;
    }
    else{
      return b;
    }
  };

  //
  module.exports.B = function(){
    return 10;
  };
  return exports;
}());
