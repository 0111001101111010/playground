// var upcase = require("./1-helloworld.js")

// console.log(upcase("hello world"))

//  var misc = [
//          'string', 98.6, true, false, null, undefined,
//          ['nested', 'array'], {object: true}, NaN,
//          Infinity
//      ];	
//      console.log(misc.length)    // 10
//  misc[12] = "dick"
//      console.log(misc.length)    // 13
// console.log(misc[10])
// //console.log(misc)


// //Matrix
// Array.matrix = function (m, n, initial) {
//  var a, i, j, mat = [];
//  for (i = 0; i < m; i += 1) {
//      a = [];
//      for (j = 0; j < n; j += 1) {
//          a[j] = initial;
//      }
// mat[i] = a; }
//  return mat;
// };
//  var myMatrix = Array.matrix(4, 4, 0);
//  console.log(myMatrix)

// var url = "http://www.ora.com:80/goodparts?q#fragment";
// var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

//  var result = parse_url.exec(url);
//     var names = ['url', 'scheme', 'slash', 'host', 'port',
//         'path', 'query', 'hash'];

//     var blanks = '       ';
//     var i;
//     for (i = 0; i < names.length; i += 1) {
//         console.log(names[i] + ':' +
//             blanks.substring(names[i].length), result[i]);
// }
// //produces
// url:     http://www.ora.com:80/goodparts?q#fragment
// scheme:  http
// slash:   //
// host:    www.ora.com
// port:    80
// path:    goodparts
// query:   q
// hash:    fragment

// var a = ['a', 'b', 'c'];
// var b = ['x', 'y', 'z'];
// var c = a.concat(b, true);
// // c is ['a', 'b', 'c', 'x', 'y', 'z', true]
// b.push('d')
// console.log(c)
// var c = a.concat(b, true);
// console.log(c)

var list = [24,21,33,4]
console.log(list.sort(function(a,b){
	return a-b;=
}))

