

function character(first,last){
 	this.first = first
 	this.last  = last
}

var arnold = new character("arnold","terminator")

character.prototype.getToDaChoppa =function(){
  // Write your do/while loop here!
  problem = true;
  while(problem){
      console.log("This will only happen once.");
   problem= false;
}
} 

arnold.getToDaChoppa()
var John = new character ('John','Connor')

//can he get to the chopper also? 
John.getToDaChoppa()
//"This will only happen once."
//yes! he can 

console.log(character.toString())