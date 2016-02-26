var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
var generatorOutput;

generatorOutput = 62;
while (currentGen <= 4) {
    totalMW += generatorOutput;
    console.log("Generator #" + currentGen + " is on, adding " + generatorOutput + " MW, for a total of " + totalMW + " MW!");
    currentGen++;
}

generatorOutput = 124;
for (currentGen = 5; currentGen <= totalGen; currentGen++) {
    totalMW += generatorOutput;
    console.log("Generator #" + currentGen + " is on, adding " + generatorOutput + " MW, for a total of " + totalMW + " MW!");
}
