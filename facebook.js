
var database = [
	{
		username: "lickma",
		password: "secret"
	},
	{
		username: "Bams",
		password: "123"
	},
	{
		username: "esion",
		password: "777"
	}
];

var newsFeed = [
   {
   	username: "Bams",
   	timeline:"J'ai envie de dormir"
   },
   {
   	username:"Muki",
   	timeline:"la playstation agogo yafoy"
   },
   {
   	username: "Chato",
   	timeline: "la monorepolarisation"
   }
];

var usernamePrompt = prompt("What's your name ?");
var passwordPrompt = prompt("what's your password ?")

function isUserValid(username,password){
	for(var i = 0 ; i < database.length; i++){
		if( username === database[i].username &&  password === database[i].password){
			return true;
		}
	}

	return false;
}

function signIn(username,password){
	if(isUserValid(username,password)){
		console.log(newsFeed);
	}else{
		alert("sorry, you usename and password are wrong! Please Repeat Again");
	}
}

signIn(usernamePrompt,passwordPrompt);