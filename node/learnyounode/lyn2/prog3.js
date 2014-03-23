//prog3.js
var _ = require('lodash');
var fs = require('fs');

console.log(
  fs.readFileSync(process.argv[2]).toString().split("\n").length-1
);
