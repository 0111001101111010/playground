module.exports = words;

var _ = require('lodash');

function words(string) {
  var count = {};
  var split = string.split(' ');
  _.each(split, function (word) {
    if (count.hasOwnProperty(word)){
      count[word]++;
    }
    else {
      count[word] = 1;
    }

  });
  return count;
}
