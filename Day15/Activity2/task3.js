// Task 3 : Write a function that generates unique IDs . Use a closure to keep track of the last generated ID and increment it with each call.

function generateUniqueId() {
    let lastID = 0

    return function () {
        lastID++;
        let prefix = "NIT";
        let uniqueID = prefix + lastID.toString();
        return uniqueID;
    }

}
let getUniqueID = generateUniqueId();
console.log(getUniqueID());
console.log(getUniqueID());
console.log(getUniqueID());