function warningMaker(obstacle) {
    // create a count
    var count = 0;
    return function (number, location) {
        count++;
        alert("Beware! There have been " + obstacle +
            " sightings in the Cove today!\n" +
            number + " have been spotted at the " + location + "!\n" +
            "This is alert #" + count + " today for " + obstacle + " danger."
        );
    };
}

var icebergWarning = warningMaker("iceberg");
icebergWarning(1, "top");
icebergWarning(2, "bottom");

function alert(msg) {
    console.log(msg);
}