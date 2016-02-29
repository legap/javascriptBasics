var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];

// correct to list of numbers in order
list[3] = 4;
console.log(list);

// append next number to array
list.push(10);
console.log(list);

// create an array called values with the following content in order: 1. String, 2. Number, 3. Boolean
var values = ["String", 42, true];
console.log(values);

var bool = values.pop();
console.log(bool);


var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];

var infant = eightiesMovies[1][4];
console.log(infant);


console.log(eightiesMovies[0][0] + " " + eightiesMovies[0][1]);