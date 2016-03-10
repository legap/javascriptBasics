var people = 12;
var rain = 10;
var sharks = 6;

var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    return sharkFear + rainFear;
};

var fear = fearGenerated(people, rain, sharks);

// check if the result is between 100 and 400
console.log(fear);

// log the function itself
console.log(fearGenerated.toString());


