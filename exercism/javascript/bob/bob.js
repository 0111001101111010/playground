/*jslint node: true */
"use strict";

var _ = require('lodash');

module.exports = Bob;

function Bob() {
  this.hey = function (phrase) {
    var string = phrase.split('');
    if ((string[phrase.length-1]) === '?') {
      return "Sure.";
    }
    else{
      return "Whatever.";
    }
  };
}

// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
//
// Bob answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him.
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
