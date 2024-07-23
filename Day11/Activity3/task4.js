// Task 4 : Write an async function that waits for a promise to resolve and  then logs the resolved value .

async function logResolvedValue() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Resolved")
        }, 1000);
    });

    const resolvedValue = await promise;
    console.log(resolvedValue);
}

logResolvedValue();