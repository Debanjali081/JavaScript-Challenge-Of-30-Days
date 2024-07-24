// Task 5 : Write a function that validates user input(e.g.,checking if a string is not empty) and throws a custom error if the validation fails . Handle the custom error using a try-catch block .

// Define a custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function userValidation(userInput) {
    try {
        if (userInput === undefined || userInput.trim() === '') {
            throw new ValidationError("The input string is empty or undefined.");
        } else {
            console.log(`Validation completed. The given string is: "${userInput}"`);
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`Validation Error: ${error.message}`);
        } else {
            console.log(`An unexpected error occurred: ${error.message}`);
        }
    }
}

// Test cases
userValidation(' '); // Should throw validation error for empty or whitespace input
userValidation('Hello World'); // Should pass validation
userValidation(); // Should handle undefined input and throw validation error
