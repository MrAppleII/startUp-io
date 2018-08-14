function generateName(){
    var markets       = ["retail", "marketing", "dating", "video", "coffee", "travel",  "aerospace",  "engineering",  "tech",  "manufacuturing"];
    var technologies  = ["AI", "blockchain", "machine learning", "mobile", "travel", "ride sharing",  "programming",  "making",  "hacking",  "banking"];
    var olderStartups = ["Uber", "Airbnb", "Netflix", "Napster", "Salesforce", "Wall Street", "Apple"];

    var number = Math.floor(Math.random() * 3); // returns a random integer from 0 to 2

    var marketGenNumber = Math.floor(Math.random() * (markets.length)); // returns a random integer from 0 to length of array
    console.log (marketGenNumber);
    var marketToPlug    = markets[marketGenNumber]; // set the string to the one from the array using the random number
    
    var techGenNumber = Math.floor(Math.random() * (technologies.length));
    var techToPlug    = technologies[techGenNumber];

    var existingStartupGenNumber = Math.floor(Math.random() * (olderStartups.length));
    var existingStartupToPlug = olderStartups[Math.floor(Math.random() * olderStartups.length)];
    
    var startupIdea = "";
    
    if(number == 0){
        startupIdea = "It's " + marketToPlug + " with the power of " + techToPlug + ".";
    }

    if(number == 1){
        startupIdea = "It's " + techToPlug + " for the " + marketToPlug + " space.";
    }

    if(number == 2){
        startupIdea  = "The " + existingStartupToPlug + " of " + marketToPlug + ".";
    }

    return startupIdea;
}
