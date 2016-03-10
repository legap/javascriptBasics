var numbers = [12, 4, 3, 9, 8, 6, 10, 1];

/**
 * Demonstrates the function for the built in map function on an array.
 *
 * @param funct
 * @param arr
 *
 */
var mapper = function (funct, arr) {
    var results = [];
    for (var i = 0; i < arr.length; i++) {
        results[i] = funct(arr[i]);
    }
    return results;
};


// show how to call the map function on an array
console.log(numbers);
var results = numbers.map(function (arrayCell) {
    return arrayCell * 2;
});
console.log(results);

// should be the same as
var results2 = mapper(function (arrayCell) {
    return arrayCell * 2;
}, numbers);
console.log(results2);

