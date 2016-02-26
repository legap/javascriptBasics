var numSheep = 4;
var monthsToPrint = 12;
var sheepsToRemove;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

    if (monthNumber % 4 == 0) {
        sheepsToRemove = numSheep * 0.75;
        console.log("Removing " + sheepsToRemove + " sheep from the population.");
        numSheep -= sheepsToRemove;
    } else if (numSheep > 10000) {
        sheepsToRemove = numSheep / 2;
        console.log("Removing " + sheepsToRemove + " sheep from the population.");
        numSheep -= sheepsToRemove;
    }

    numSheep *= 4;
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
