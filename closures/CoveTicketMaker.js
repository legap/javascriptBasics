function buildCoveTicketMaker(transport) {
    return function (name) {
        alert("Here is your transportation ticket via the " + transport + ".\n" +
            "Welcome to the Cold Closures Cove, " + name + "!");
    }
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");


getSubmarineTicket("Mario");
getBattleshipTicket("Luigi");
getGiantSeagullTicket("Bowser");

function alert(msg) {
    console.log(msg);
}