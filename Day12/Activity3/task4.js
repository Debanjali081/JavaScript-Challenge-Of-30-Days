// Task 4 : Create a custom error class that extends the built-in Error class . Throw an instance of this custom error in a function and handle it using try catch block .

// Define a custom error class
class CustomError extends Error {
    constructor(message) {
        super(message); // Call the parent Error class constructor with the message
        this.name = "CustomError"; // Set the name property to the name of the custom error class
    }
}

// Function that throws an instance of the custom error
function riskyFunction() {
    try {
        // Simulate a condition that causes an error
        let condition = true; // Set this to true to trigger the error

        if (condition) {
            throw new CustomError("Something went wrong in the risky function!");
        }

        console.log("Function executed without errors.");
    } catch (error) {
        if (error instanceof CustomError) {
            console.log(`Caught a CustomError: ${error.message}`);
        } else {
            console.log(`An unexpected error occurred: ${error.message}`);
        }
    }
}

riskyFunction();
