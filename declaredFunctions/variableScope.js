// global scope
var x = 6;
var y = 4;

function add(a, b) {
    // local scope
    var x = a + b;
    return x;
}

function subtract(a, b) {
    y = a - b;
    return y;
}