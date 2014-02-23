var _= require('underscore')._;

var test =[1,2,3,4];
var test2 = 0;
//each
console.log("###print the list###");
_.each(test,function(num){
   console.log(num);
});

//map
console.log("map");
test = _.map(test,function(num){
	return num = num*2;
})

console.log("####double the list###");
_.each(test,function(num){
   console.log(num);
});

//reduce //reduceRight
console.log("reduce");
test2 = _.reduce(test,function(num,memo){
	return num+memo;
},0)

console.log("####reduce the list###");
console.log(test2);

//find something that matches a condition
console.log("find");
test2 = _.find(test,function(num){
	var product = num*3;
	return product==24;
})

console.log("####find###");
console.log(test2);

//find something that matches a condition
console.log("filter");
test2 = _.filter(test,function(num){
	var product = num^2;
	return product/2==0;
})

console.log("####filter###");
console.log(test2);

//generate random array
var test3 = []
while(test3.length < 15){
  var randomnumber=Math.ceil(Math.random()*100)
  var found=false;
  for(var i=0;i<test3.length;i++){
    if(test3[i]==randomnumber){found=true;break}
  }
  if(!found)test3[test3.length]=randomnumber;
}

//find all instance, find unique first instance
console.log("####where & findwhere###");
console.log(test3)

//reject
console.log("####reject###");
test3 = _.reject(test3,function(num){

	return num%2==0;
})
//rejects all even
console.log(test3)
