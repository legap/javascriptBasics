var numPeeps = 12;
var rainInInches = 10;
var numSharks = 5;

var fearGenerated = function (numPeeps, rainInInches, numSharks) {
    var rainFear = numPeeps * rainInInches;
    var sharkFear = numSharks * numSharks * numSharks;
    return sharkFear + rainFear;
};

var fear = fearGenerated(numPeeps, rainInInches, numSharks);
console.log(fear);

var fearMessage = function () {
    if (fear < 200) {
        return 'Fear Level: LOW\nStill wanna ride?';
    } else if (fear >= 200 && fear <= 300) {
        return 'Fear Level: MEDIUM\nThink you\'ll make it?';
    }
};

function confirmRide(confirmToGo) {
    return confirmToGo();
}

// Call confirmRide here
var startRide = confirmRide(fearMessage);

console.log(startRide);

