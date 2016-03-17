function assignLaser(shark, sharkList) {
    for (var i = 0; i < sharkList.length; i++) {
        if (shark == sharkList[i]) {
            return function () {
                alert("Yo, " + shark + "!\n" +
                    "Visit underwater strapping station " +
                    (i + 1) + " for your sweet laser.");
            };
        }
    }
}

var sharkList = ["Sea Pain", "Great Wheezy", "DJ Chewie",
    "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
    "Ice Teeth", "The Notorious J.A.W."];

var assignedLaser = assignLaser("Lil' Bitey", sharkList);
assignedLaser();

function alert(msg) {
    console.log(msg);
}