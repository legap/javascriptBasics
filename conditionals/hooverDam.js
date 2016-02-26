var totalGen = 19;
var totalMW = 0;
var generatorOutput;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
    if (currentGen % 2 == 0) {
        if (currentGen <= 4) {
            generatorOutput = 62;
        } else {
            generatorOutput = 124;
        }
        totalMW += generatorOutput;
        console.log("Generator #" + currentGen + " is on, adding " + generatorOutput + " MW, for a total of " + totalMW + " MW!");
    } else {
        console.log("Generator #" + currentGen + " is off.");
    }
}
