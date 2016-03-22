function thisIsWeird() {
    function secret() {
        var unused3;
    }

    var result;

    function secret() {
        var unused1;
    }

    // The following line of code assigns a
    // secret function to the variable result.
    result = secret;
    function secret() {
        var unused2;
    }

    return result;
}

function thisIsWeird2() {
    function secret() {
        console.log('unused3');
    }

    var result;

    function secret() {
        console.log('unused1');
    }

    // The following line of code assigns a
    // secret function to the variable result.
    result = secret;
    function secret() {
        console.log('unused2');
    }

    return result;
}

function expectedHoistingOrder() {

    var result = undefined;

    function secret() {
        var unused3;
    }

    function secret() {
        var unused1;
    }

    function secret() {
        var unused2;
    }

    result = secret;
    return result;
}

console.log(thisIsWeird2()());
console.log(expectedHoistingOrder.toString());