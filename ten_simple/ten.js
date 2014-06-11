/*jslint node: true */
(function () {
  'use strict';

  var A = function(){
    return 10;
  };
  module.exports.A = A;
  module.exports.B = 11;

  return exports;
}());
