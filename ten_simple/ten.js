/*jslint node: true */
(function () {
  'use strict';
  var _ = require('lodash');

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
  module.exports.C = function(letter){
    var vowels = ['a','e','i','o','u'];
    var state = false;
    _.each(vowels, function(compare){
      if (compare === letter){
        state = true;
        return;
      }
    });
    return state;
  };
  return exports;
}());
