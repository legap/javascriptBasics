var greeting;
var newCustomer = true;

if (newCustomer) {
    greeting = function () {
        console.log("Thanks for visiting the Badlands!\n" +
            "We hope your stay is...better than most.");
    };
} else {
    greeting = function () {
        console.log("Welcome back to the Badlands!\n" +
            "Guess they aren't so bad huh?");
    };
}

closeTerminal(greeting);

function closeTerminal(message) {
    message();
}