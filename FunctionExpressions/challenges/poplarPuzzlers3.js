var puzzlers = [
    function (a) {
        return 8 * a - 10;
    },
    function (a) {
        return (a - 3) * (a - 3) * (a - 3);
    },
    function (a) {
        return a * a + 4;
    },
    function (a) {
        return a % 5;
    }
];

var arrayIndex = puzzlers[1](3);
var firstResult = puzzlers[3](9);
var secondResult = puzzlers[arrayIndex](firstResult);

alert(secondResult);

// put it in one line:
alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));

function alert(msg) {
    console.log(msg);
}