function changePowerTotal(totalPowerGenerated, generatorId, generatorStatus, currentGeneratorPower) {
    if (generatorStatus === 'on') {
        totalPowerGenerated += currentGeneratorPower;
        alert("Generator #" + generatorId + " is now on, adding " + currentGeneratorPower + " MW, for a total of " + totalPowerGenerated + " MW!");
    } else if (generatorStatus === 'off') {
        totalPowerGenerated -= currentGeneratorPower;
        alert("Generator #" + generatorId + " is now off, removing " + currentGeneratorPower + " MW, for a total of " + totalPowerGenerated + " MW!");
    }
    return totalPowerGenerated;
}