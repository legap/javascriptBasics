var singleEntryArray = ["Entry 1", "Entry 2", "Entry 3", "Entry 4"];
logArray(singleEntryArray, "Inital single entry array");

singleEntryArray[2] = "Entry 3.1";
logArray(singleEntryArray, "after replacing the entry at position 2");

lastEntry = singleEntryArray.pop();
console.log("Got entry from array: " + lastEntry);
logArray(singleEntryArray, "after popping an entry");

newEntry = "New Entry";
singleEntryArray.push(newEntry);
logArray(singleEntryArray, "after pushing a new entry");


var multiEntryArray = [
    ["(1,1)", "(1,2)", "(1,3)"],
    ["(2,1)", "(2,2)", "(2,3)"],
    ["(3,1)", "(3,2)", "(3,3)"]
];

logArray(multiEntryArray, "Inital multi entry array");

function logArray(array, title) {
    if (title) {
        console.log("-- " + title + " --");
    }
    console.log(array);
    console.log("--------------------")
}