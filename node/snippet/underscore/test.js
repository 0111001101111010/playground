var _= require('underscore')._;

var test =[1,2,3,4];

_.each(test,function(num){
	num = num*6;
   console.log(num);
});
