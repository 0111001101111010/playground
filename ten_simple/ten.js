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

  module.exports.D = function(phrase){
    var vowels = ['a','e','i','o','u'];
    var processedPhrase = '';
    _.each(phrase, function(letter){

      if ( !(_.contains(vowels,letter)) ){
        processedPhrase+=letter+'o'+letter;
      }
      else {
        processedPhrase+=letter;
      }
    });
    return processedPhrase;
  };
  // module.exports.E = {
  //   add: function(array){
  //     return _.reduce(array,function (a,b) {
  //       return (a+b);
  //     });
  //   },
  //   multiple: function(array){
  //     return _.reduce(array,function (a,b) {
  //       return (a*b);
  //     });
  //   }
  // };
  module.exports.E = function(array){
      return _.reduce(array,function (a,b) {
        return (a+b);
      });
    };
  module.exports.F = function(array){
      return _.reduce(array,function (a,b) {
        return (a*b);
      });
    };
    //reverse word function
  module.exports.G = function (phrase) {
    var reverse = "";
    _.each(phrase, function (letter) {
      reverse = letter+reverse;
    });
    return reverse;
  };
  module.exports.longestWord = function (list) {
    var largest = "";
    _.each(list,function(word){
        if(word.length>largest.length){
          largest=word;
        }
    });
    return largest;
  };

  return exports;
}());
