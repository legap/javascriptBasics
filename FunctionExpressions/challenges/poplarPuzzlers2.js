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
var start = 2;

var applyAndEmpty = function (input, queue) {
    var result = input;
    var nbrOfFunctions = queue.length;
    for (var i = 0; i < nbrOfFunctions; i++) {
        result = queue.shift()(result);
    }
    return result;
};

/**
 * Alternative implementation with a read ahead an da whlie loop.
 */
var applyAndEmptyWithWhile = function (input, queue) {
    var result = input;
    var nextFunction = queue.shift();
    while (nextFunction !== undefined) {
        result = nextFunction(result);
        nextFunction = queue.shift();
    }
    return result;
};


alert(applyAndEmpty(start, puzzlers));
alert(applyAndEmptyWithWhile(start, puzzlers));

function alert(msg) {
    console.log(msg);
}