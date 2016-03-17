function assingTorpedo1(name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name) {
            torpedoAssignment = function () {
                alert("Ahoy, " + name + "!\n" +
                    "Man your post a torpedo #" + (i + 1) + "!");
            };
        }
    }
    return torpedoAssignment;
}

function assingTorpedo2(name, passengerArray) {
    for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name) {
            return function () {
                alert("Ahoy, " + name + "!\n" +
                    "Man your post a torpedo #" + (i + 1) + "!");
            };
        }
    }
}

function makeTorpedoAssigner(passengerArray) {

    return function (name) {
        for (var i = 0; i < passengerArray.length; i++) {
            if (passengerArray[i] == name) {
                alert("Ahoy, " + name + "!\n" +
                    "Man your post a torpedo #" + (i + 1) + "!");
            }
        }
    };
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];

var giveAssignment1 = assingTorpedo1("Chewie", subPassengers);
giveAssignment1(); // returns "Man your post a torpedo #9!"

var giveAssignment2 = assingTorpedo2("Chewie", subPassengers);
giveAssignment2(); // returns "Man your post a torpedo #4!"

var getTorpedoFor = makeTorpedoAssigner(subPassengers);
getTorpedoFor("Chewie");
getTorpedoFor("R2-D2");

function alert(msg) {
    console.log(msg);
}