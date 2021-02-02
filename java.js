// 1. Create an array which contains a person object with properties 'username' and 'password' and name the array "database"
// Later, you can add more person objects to this array.
var members = [
	{
		username: "Gary",
		password: "password"
	}
];

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn (username, password) {
    if(username === members[0].username &&
        password === members[0].password) {
            alert("Welcome to PracticalCELTA");
        } else {
            alert("Sorry. Username and password don't match. ");
        }
}

signIn(userNamePrompt, passwordPrompt)
