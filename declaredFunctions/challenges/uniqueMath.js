function multiplyTrio(a, b, c) {
    return a * b * c;
}

function maxOf2(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

function mystery1(x, y) {
    var a = 4 * x * y;
    var b = 3 * y + 5;
    var c = a + b;
    return c;
}

function mystery2(x, y) {
    return (4 * x * y) + (3 * y + 5);
}


//console.log(multiplyTrio(2, 3, 4));
//console.log(maxOf2(2,3));
//console.log(maxOf2(3,3));
//console.log(maxOf2(4,3));

console.log(mystery1(2, 3));
console.log(mystery2(2, 3));