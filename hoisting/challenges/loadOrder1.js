function theBridgeOfHoistingDoomOriginal() {
    function balrog() {
        return "fire";
    }

    var ring;

    function elf() {
        return "pointy ears";
    }

    ring = wizard;
    wizard = balrog;
    return wizard();
    function balrog() {
        return "whip";
    }

    function wizard() {
        return "white";
    }

    var power = ring();
    return elf();
    function elf() {
        return "immortal";
    }
}

function theBridgeOfHoistingDoomRewritten() {
    var ring = undefined;
    var power = undefined;

    function balrog() {
        return "whip";
    }

    function wizard() {
        return "white";
    }

    function elf() {
        return "immortal";
    }

    ring = wizard;
    wizard = balrog;
    return wizard();
}

function theBridgeOfHoistingDoomOptimized() {
    function balrog() {
        return "whip";
    }

    function wizard() {
        return "white";
    }

    wizard = balrog;
    return wizard();
}

function theBridgeOfHoistingDoomMinimized() {
    return function balrog() {
        return "whip";
    }();
}


console.log(theBridgeOfHoistingDoomOriginal());
console.log(theBridgeOfHoistingDoomRewritten());
console.log(theBridgeOfHoistingDoomOptimized());
console.log(theBridgeOfHoistingDoomMinimized());