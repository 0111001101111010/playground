function test(){
function scopeTest() {

/* consider this simple for loop
    to be the "block" that we were
    talking about earlier
*/
for (var i = 0; i <= 5; i++)
{
  var inFor = i; 
}

console.log(inFor);  // what happens here?

}
scopeTest();

}

// call the function defined above
test();
bob = "test"