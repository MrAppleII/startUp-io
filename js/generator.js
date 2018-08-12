function generateName(){
    var markets       = ["retail", "marketing", "Dating", "video", "coffee", "travel",  "aerospace",  "engineering",  "tech",  "manufacuturing"];
    var technologies  = ["AI", "Blockchain", "Machine Learning", "Mobile", "Travel", "Ride Sharing",  "Programming",  "Making",  "Hacking",  "Banking"];
    var olderStartups = ["Uber", "Airbnb", "Netflix", "Napster", "Salesforce", "Wall Street", "Apple"];

    var number = Math.floor(Math.random() * 2); // returns a random integer from 0 to 2


    var marketGenNumber = Math.floor(Math.random() * (markets.length)); // returns a random integer from 0 to length of array
    console.log (marketGenNumber);
    var marketToPlug    = markets[marketGenNumber];                         //set the string to the one from the array using the random number

    var techGenNumber = Math.floor(Math.random() * (technologies.length)); // returns a random integer from 0 to length of array
    var techToPlug    = technologies[techGenNumber];                           //set the string to the one from the array using the random number

    var existingStartupGenNumber = Math.floor(Math.random() * (olderStartups.length)); // returns a random integer from 0 to length of array
    var existingStartupToPlug    = technologies[existingStartupGenNumber];                 //set the string to the one from the array using the random number

    var startupIdea = "";

    if(number == 0){
        startupIdea = "It is " + marketToPlug + " with the power of " + techToPlug + ".";
    }

    if(number == 1){
        startupIdea = "It is " + techToPlug + " for " + marketToPlug + " space.";
    }


if(number == 2){
    startupIdea  = "The " + existingStartupToPlug + " of " + marketToPlug + ".";
}

return startupIdea;
}
