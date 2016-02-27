function countE(phrase) {

    if (typeof(phrase) != "string") {
        alert("That's not a valid entry!");
        return false;
    } else {
        var eCount = 0;

        for (var index = 0; index < phrase.length; index++) {
            if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') {
                eCount++;
            }
        }
        console.log("There are " + eCount + " E's in \"" + phrase + "\".");
        //alert("There are " + eCount + " E's in \"" + phrase + "\".");
        return true;
    }

}

// var phrase = prompt("Which phrase would you like to examine?");
countE("Excellent elephants!");
