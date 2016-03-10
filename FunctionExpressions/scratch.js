/**
 * Declared function
 *
 * -> builds in memory immediately when the program loads.
 */
function diffOfSquares(a, b) {
    return a * a - b * b;
}

/**
 * Function expression
 *
 * This function only loads when this line of code is reached.
 * As it is an assignment statement the semicolon is necessary at the end.
 *
 */
var diff = function diffOfSquares(a, b) {
    return a * a - b * b;
};

/**
 * Anonymous Function expression (no function name)
 */
var diffWithAnonymousFunction = function (a, b) {
    return a * a - b * b;
};

// call the declared function
console.log(diffOfSquares(9, 5));

// call the first function expression
console.log(diff(9, 5));

// call the second function expression with the anonymous function
console.log(diffWithAnonymousFunction(4, 2));

// log the function expression
console.log(diffWithAnonymousFunction);