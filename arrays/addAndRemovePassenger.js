var passengerList = [];

passengerList = addPassenger("Gregg Pollack", passengerList);
passengerList = addPassenger("Ashley Smith", passengerList);
passengerList = addPassenger("Jon Friskics", passengerList);
console.log(passengerList);

passengerList = deletePassenger("Ashley Smith", passengerList);
console.log(passengerList);

function addPassenger(name, list) {
    if (list.length == 0) {
        list.push(name);
        return list;
    } else {
        for (var i = 0; i < list.length; i++) {
            if (list[i] == undefined) {
                list[i] = name;
                return list;
            } else if (i == list.length - 1) {
                list.push(name);
                return list;
            }
        }
    }
}

function deletePassenger(name, list) {
    if (list.length == 0) {
        console.log("List ist empty");
    } else {
        for (var i = 0; i < list.length; i++) {
            if (list[i] == name) {
                list[i] = undefined;
                return list;
            } else if (i == list.length - 1) {
                console.log("Passenger not found!");
            }
        }
    }
    return list;
}