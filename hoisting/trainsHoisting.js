function capacityStatus(numPassengers, capacity) {

    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }

    var noSeats = function () {
        alert("No seats left!");
        return false;
    };
    var seatsAvail = function () {
        alert("There are ") + (capacity - numPassengers) + " seats left!";
        return true;
    };
}


capacityStatus(60, 60);

function alert(msg) {
    console.log(msg);
}
