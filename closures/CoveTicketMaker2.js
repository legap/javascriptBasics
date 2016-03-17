function buildCoveTicketMaker(transport) {
    // We'll start every ticket maker's tracker at 0 passengers.
    var passengerNumber = 0;
    return function (name) {
        passengerNumber++;
        alert("Here is your transportation ticket via the " + transport + ".\n" +
            "Welcome to the Cold Closures Cove, " + name + "!" +
            "You are passenger #" + passengerNumber + ".");
    }
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");


getSubmarineTicket("Mario");
getBattleshipTicket("Luigi");
getGiantSeagullTicket("Bowser");
getGiantSeagullTicket("Hauser");

function alert(msg) {
    console.log(msg);
}