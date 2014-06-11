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
  module.exports.B = function(a,b,c){
    if(a>b && a>c){
      return a;
    }
    else if(b>a && b>c){
      return b;
    }
    else{
      return c;
    }
  };
  return exports;
}());
