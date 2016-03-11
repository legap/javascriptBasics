adventureSelector(3)();

// workaround to use with node.js
function alert(msg) {
    console.log(msg);
}

function adventureSelector(userChoice) {
    // return anonymous functions inside conditional blocks
    if (userChoice === 1) {
        return function () {
            alert('You selected the Vines of Doom!');
        };
    } else if (userChoice === 2) {
        return function () {
            alert('Looks like you want the Lake of Despair!');
        };
    } else if (userChoice === 3) {
        return function () {
            alert('The Caves of Catastrophe!');
        };
    }
}