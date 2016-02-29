var numberList = [2, 5, 8, 4, 7, 12, 6, 9, 3, 11];
var evenCount = 0;

console.log("Array before processing: " + numberList);
console.log("Array size before processing: " + numberList.length);

for (var i = 0; i < numberList.length; i++) {
    console.log("The value in cell " + i + " is " + numberList[i]);
    if (numberList[i] % 2 == 0) {
        evenCount++;
    } else {
        numberList[i] = undefined;
    }

}

console.log("Array after processing: " + numberList);
console.log("Array size after processing: " + numberList.length);
console.log("even numbers: " + evenCount);

