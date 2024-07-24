// Task 7 : Use try-catch within async function to handle errors from a promise that randomly resolves or rejects , and log the error message.

// Function that returns a promise that randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve("The promise was resolved successfully!");
            } else {
                reject(new Error("The promise was rejected."));
            }
        }, 1000);
    });
}

// Async function to handle the promise
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error("Error caught:", error.message);
    }
}

// Call the async function
handleRandomPromise();
