var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
    console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
    numSheep *= 4;
}