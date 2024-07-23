// Task 1 : Create a promise that resolves with a message after 2-second timeout and log the message to the console .

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Execution After 2-Seonds ");
    }, 2000);
})