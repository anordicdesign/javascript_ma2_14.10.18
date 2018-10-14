// JavaScript Document

// MODULE ASSIGNMENT 2 - LEVEL 1

//1. Create a function that displays prototypal inheritance.

var sing = function(wind){
	console.log(wind);
}

var Color = function() {
	var season, spirit;
}

Color.prototype.sing = sing;

firstColor = new Color;
firstColor.season = "Fall/Autumn";
firstColor.spirit = "Moon";
firstColor.sing('secrets');


//2. Create an array of numbers from 1 – 10; slice the 5th number in the array.

var numberArray = [1,2,3,4,5,6,7,8,9,10];
numberArray.slice(4,5);


//3. Delete the last number in the array that you created above.

delete numberArray[10];


//4. Given the following paragraph, create a JavaScript function that changes all mentions: “Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.”

function fruit(season) {
	if (typeof season !== 'string') return "What the fruit?";
	
	season = season.replace (/strawberry/g, 'banana');
	season = season.replace (/Strawberry/g, 'Banana');
	season = season.replace(/Strawberries/g, 'Bananas');
	season = season.replace (/strawberries/g, 'bananas');
	return season;
	
} //checked it, it worked. 


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


<button onclick="myFunction()">Click it</button>

<p id="group"></p>

function myFunction() {
    var teams = ["Red Rooster", "Falcons", "The Eagles", "The Dolphins"];
    var league = teams.slice(0, 4);
    document.getElementById("group").innerHTML = league;
}

//This is how it looked in console.log

function myFunction() {
    var teams = ["Red Rooster", "Falcons", "The Eagles", "The Dolphins"];
    var league = teams.slice(0, 4);
    document.getElementById("group").innerHTML = league;
}
undefined
console.log(teams);
VM529:1 (4) ["Red Rooster", "Falcons", "The Eagles", "The Dolphins"]
undefined
teams[0] = "Volvo";
teams[1] = "BMW";
teams[2] = "Saab";
teams[3] = "Mercedes";
"Mercedes"
console.log(teams);
VM684:1 (4) ["Volvo", "BMW", "Saab", "Mercedes"]
undefined


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name. 

var frontend = [ {
	name: 'Laura',
	age: '24',
	hobbies: 'Dancing'
}, {
	name: 'Tom',
	age: '55',
	hobbies: 'Cooking'
}, {
	name: 'Garder',
	age: '18',
	hobbies: 'Science'
} ];


//Didn't understand the questiion. if it was intended for filtering out just by A NAME or mapping out the NAMES. so did both here;


var names = frontend.filter(function(people) {
return people.name === 'Laura'})

var names = frontend.map(function(people) {
return people.name })


//Console.log names by map

console.log(names)

VM1293:4 (3) ["Laura", "Tom", "Garder"]

//7. Create a simple function that logs the date.
 
