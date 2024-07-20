// Task 9 : Create an object with computed property names based on variables and log the object to the console .

let propertyName = "age";

let person = {
    name: "Debanjali",
    [propertyName]: 21
};

console.log(person);