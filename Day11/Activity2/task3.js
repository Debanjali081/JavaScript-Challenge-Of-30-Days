// Task 3 :  Create a sequence of promises that simulate fetching data from a server . Chain the promises to log messages in a specific order .

function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(message)
        }, delay);
    });
}

fetchData("Fetching data from server 1...", 1000)
    .then(() => fetchData("Fetching data from server 2...", 1000))
    .then(() => fetchData("Fetching data from server 3...", 1000))
    .then(() => fetchData("Fetching data from server 4...", 1000))
    .then(() => fetchData("Fetching data from server 5...", 1000))
    .catch((error) => {
        console.log(error)
    })