var totalTrains = 12;
var trainsOperational = 8;

for (var trainNumber = 1; trainNumber <= totalTrains; trainNumber++) {
    if (trainNumber <= trainsOperational) {
        console.log("Train # " + trainNumber + " is running.")
    } else if (trainNumber == 10) {
        console.log("Train # " + trainNumber + " begins running at noon.")
    } else {
        console.log("Train # " + trainNumber + " is not running.")
    }
}