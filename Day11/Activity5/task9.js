// Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises.

// Simulate multiple promises
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 3000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 2000);
});

// Use Promise.race to wait for the first promise to resolve
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        // Log the value of the first resolved promise
        console.log(value); // "Promise 2 resolved"
    })
    .catch((error) => {
        // Handle any errors
        console.error('An error occurred:', error);
    });

