// Task 2 : Create a function that divides two numbers and throws an error if the denominator is zero . Use a try-catch block to handle this error .

function Division(a, b) {
    try {
        if (b === 0) {
            throw new Error(`Erroe has been occured b=${0}`)
        }
        else {
            console.log(a / b);
        }
    } catch (error) {
        console.log(error.message);
    }
}

Division(8, 0);