/**
 * First, memory is set aside for all neccessary variables and declared functions.
 *
 * Declared stuff that needs space in memory is first "hoisted" to the top of scope before any operational code is run.
 *
 * Hoisting order in a happycase path:
 *     function sumOfSquares(a, b) {
 * 1)  var x = undefined
 *
 * 2)  function add(c, d) {
 *       var e = c + d;
 *       return e;
 *     }
 *
 * 3)  x = add(a * a, b * b);
 *     return x;
 *
 */
function sumOfSquares(a, b) {
    var x = add(a * a, b * b);
    return x;

    function add(c, d) {
        var e = c + d;
        return e;
    }
}

/**
 * Hoisting happens as follows:
 *
 *  function chooseMystery() {
 *    return 12;
 *  }
 *
 *  function chooseMystery() {
 *    return 7;
 *  }
 *
 *  return chooseMystery();
 *
 *
 * -> will return 7
 */
function getMysteryNumber() {

    function chooseMystery() {
        return 12;
    }

    return chooseMystery();

    function chooseMystery() {
        return 7;
    }
}


/**
 * Function expressions are never hoisted. They are treated as assignment.
 *
 * Hoisting happens as follows:
 *
 *  function getMysteryNumber() {
 *    var chooseMystey = undefined;
 *    var chooseMystey = undefined;
 *
 *    chooseMystery = function () {
 *      return 12;
 *    }
 *
 *    return chooseMystery();
 *
 *    // unreachable code (return is executed before)
 *    var chooseMystery = function () {
 *      return 7;
 *    }
 *
 *  }
 *
 */
function getMysteryNumber() {
    var chooseMystery = function () {
        return 12;
    }

    return chooseMystery();

    var chooseMystery = function () {
        return 7;
    }
}


/**
 * Hoisting happens as follows:
 *
 *  function getMysteryNumber() {
 *    var chooseMystey = undefined;
 *    var chooseMystey = undefined;
 *
 *    return chooseMystery();
 *
 *    // unreachable code (return is executed before)
 *    // chooseMystery is undefined and can' be called -> ERROR
 *
 *    chooseMystery = function () {
 *      return 12;
 *    }
 *
 *    var chooseMystery = function () {
 *      return 7;
 *    }
 *
 *  }
 *
 */
function getMysteryNumber() {
    return chooseMystery();

    var chooseMystery = function () {
        return 12;
    }


    var chooseMystery = function () {
        return 7;
    }
}