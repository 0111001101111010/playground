var factory = module.exports = exports = function (callback){
  this.add = function (){
    console.log("adding stuff");
  };
  this.delete = function () {
    console.log("deleting stuff");
  };
  this.value = "foo";
  callback(factory);
};

factory.make = function (options){

  console.log(options);
  return options;
};
