var _ = require("lodash");

module.exports = anagram;

function anagram(word) {
  this.word = word;
  return {
    matches: function (list) {
      return _.filter(list, function (candidate) {
          check(word,candidate);
      });
    }
  };
}

function check(word,candidate) {
  //check if it is the size
  console.log(word, candidate);
  if ((word.split('').size === word.length)){
    return true;
  }

  return false;
}
