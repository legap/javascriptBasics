var gotName = false;
while (gotName == false) {
    var userName = prompt("Hey, what's your name?");

    if (confirm("Are you sure your name is " + userName + "?")) {
        alert("Sup " + userName + "!");
        gotName = true;
    }
}


