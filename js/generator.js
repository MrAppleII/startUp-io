var markets = ["retail","marketing","Dating","video","coffee","travel"];
var technologies = ["AI","Blockchain","Machine Learning","Mobile"];
var olderStartups =["Uber","Airbnb","Netflix"];

var number = Math.floor(Math.random() * 2);      // returns a random integer from 0 to 2

var marketGenNumber = Math.floor(Math.random() * (markets.length()-1)); // returns a random integer from 0 to length of array
var marketToPlug = markets[marketGenNumber]; //set the string to the one from the array using the random number

var techGenNumber = Math.floor(Math.random() * (technologies.length()-1)); // returns a random integer from 0 to length of array
var techToPlug = technologies[techGenNumber]; //set the string to the one from the array using the random number

var existingStartupGenNumber = Math.floor(Math.random() * (olderStartups.length()-1)); // returns a random integer from 0 to length of array
var existingStartupToPlug = technologies[existingStartupGenNumber]; //set the string to the one from the array using the random number

var startupIdea = "";

if(number == 0){
    startupIdea = "It is " + marketToPlug + " with the power of " + techToPlug + ".";
}

if(number == 1){
    startupIdea = "Its " + techToPlug + " for the " + marketToPlug + ".";
}

if(number == 2){
    startupIdea  = "The " + existingStartupToPlug + " for " + marketToPlug + ".";
}
