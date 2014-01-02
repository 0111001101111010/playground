module.exports = function checkUsersValid(keyUsers) {
//boiler plate
"use strict";
return function(submittedUsers) {
	return submittedUsers.every(function (submittedUser){
		return keyUsers.some(function (user){
			return submittedUser.id === user.id;
		});
	});
  };
};

/*```js

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

testAllValid([
  { id: 2 },
  { id: 1 }
])
// => true

testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
])
// => false

```*/