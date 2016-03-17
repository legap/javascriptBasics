function testClosure() {
    // variable is only visible inside the function
    var x = 4;
    return x;
}

console.log(testClosure()); // returns 4
// console.log(x); // x is not defined outside the function and cannot be accessed

/**
 * The inner function can access the outer function's variables because they "feel like global variables.
 *
 * @returns {closeX}
 */
function testClosure2() {
    // variable is only visible inside the function
    var x = 4;

    function closeX() {
        return x;
    }

    return closeX;
}

var checkLocalX = testClosure2();
console.log(checkLocalX()); // returns 4
