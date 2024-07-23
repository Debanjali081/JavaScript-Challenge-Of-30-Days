// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values.

// Simulate multiple promises
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1500);
});

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        // Log all the resolved values
        console.log(values); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    })
    .catch((error) => {
        // Handle any errors
        console.error('One of the promises rejected:', error);
    });
