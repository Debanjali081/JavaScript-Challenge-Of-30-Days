// Task 1 : Write a function that intentionally throws an error and use a try-catch block to handle the error.
function generateError() {
    let a = 5;
    let b = 6;

    try {
        if (typeof a !== 'number') {
            throw new Error(`${a} is not a number. It is of type: ${typeof a}`);
        } else if (typeof b !== 'number') {
            throw new Error(`${b} is not a number. It is of type: ${typeof b}`);

        } else {
            // Perform the operation if both a and b are numbers
            console.log(a + b * x); // This will still throw an error because 'x' is not defined
        }
    } catch (error) {
        console.log("An Error Occured:", error.message);
    }
}
generateError();
