var _ = require("lodash");

module.exports = anagram;

function anagram(word) {
  return {
    matches: function (list) {
      var letters = word.split('');
      var remainder = _.filter(list, function (word) {
        return check(letters, word);
      });
      return remainder;
    }
  };
}

function check(letters, word) {

  return letters.size === word.length? true:false;
}
