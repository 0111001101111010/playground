var stdin = process.openStdin();
var test;
stdin.on('data', function(chunk) {
      	console.log("Got chunk: " + chunk);
	test = chunk;
	console.log(test*3); 
});
