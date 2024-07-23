// Task 2 : Create a promise that reject with an error message after 2-second timeout and handle the error using catch.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Somthing Went Wrong Please Try Again Later");
    }, 2000);

})

promise.catch((error) => {
    console.error("Error:", error)
});

