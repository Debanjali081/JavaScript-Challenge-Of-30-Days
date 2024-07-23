// Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message .

async function tryCatch() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task Rejected");
        }, 2000)
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log('Erroe:', error);
    }

}

tryCatch();