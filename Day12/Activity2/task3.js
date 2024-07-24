// Task 3 : Write a script that includes a try-catch block and finally block . Log messages in the try,catch and finally blocks and observe the execution flow .

function allBlock() {
    let a = 29;
    let b = "29";
    try {
        if (typeof a !== 'number') {
            throw new Error(`${a} is not a number its type is ${typeof a}`)
        }
        else if (typeof b !== 'number') {
            throw new Error(`${b} is not a number its type is ${typeof b}`)
        }
        else {
            console.log(`Sum of a and b = ${a + b}`);
        }
    } catch (error) {
        console.log(error.message);
    }
    finally {
        console.log("All Work Done");
    }
}

allBlock();