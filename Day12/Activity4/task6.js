// Task 6 : Create a promise that randomly resolves or rejects . Use .catch() to handle the rejection and log the appropriate message to the console .

function randomPromise() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation using setTimeout
        setTimeout(() => {
            // Generate a random number between 0 and 1
            const randomNumber = Math.random();

            if (randomNumber > 0.5) {
                resolve("The promise was resolved successfully!");
            } else {
                reject(new Error("The promise was rejected."));
            }
        }, 1000); // Delay of 1 second to simulate async operation
    });
}

// Call the function and handle the promise
randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });
