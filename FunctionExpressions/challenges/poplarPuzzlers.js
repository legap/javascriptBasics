var puzzlers = [];

puzzlers.push(function (input) {
    return 3 * input - 8;
});
puzzlers.push(function (input) {
    return Math.pow((input + 2), 3);
});
puzzlers.push(function (input) {
    return Math.pow(input, 2) - 9;
});
puzzlers.push(function (input) {
    return input % 4;
});

// check it with some numbers
var numbers = [5, 17, 21];

for (var i = 0; i < puzzlers.length; i++) {
    var result = numbers.map(puzzlers[i]);
    console.log(result);
}
