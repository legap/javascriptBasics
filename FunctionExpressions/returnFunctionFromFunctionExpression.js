var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55], ["Cedar Coaster", 20], ["Ferris Wheel of Firs", 90]];
var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

var wantsRide = "Cedar Coaster";

var ticket = buildTicket(parkRides, fastPassQueue, wantsRide);
ticket();

// immediately invoked function
buildTicket(parkRides, fastPassQueue, wantsRide)();

function buildTicket(allRides, passRides, pick) {
    if (passRides[0] == pick) {
        var pass = passRides.shift();
        return function () {
            console.log("Quick! You've got a Fast Pass to " + pass + "!");
        };
    } else {
        for (var i = 0; i < allRides.length; i++) {
            if (allRides[i][0] == pick) {
                return function () {
                    console.log("A ticket is printing for " + pick + "!\n" +
                        "Your wait time is about " + allRides[i][1] + " minutes.")
                };
            }
        }
    }
}

