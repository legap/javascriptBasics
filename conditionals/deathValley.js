var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

    if (numSheep > 10000) {
        var sheepsToRemove = numSheep / 2;
        console.log("Removing " + sheepsToRemove + " sheep from the population.");
        numSheep -= sheepsToRemove;
    }

    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}