// Task 2 : Create a closure that maintains a private counter . Implement functions to increment and get the current value of the counter.

function mainCounter() {
    let privateCounter = 0;
    return {
        increment: function () {
            privateCounter++;
        },
        getValue: function () {
            return privateCounter;
        }
    }
}

const counter = mainCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());