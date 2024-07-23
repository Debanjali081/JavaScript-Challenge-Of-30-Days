// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using asyn and await.

// URL of a public API
const apiUrl = 'https://api.github.com/users/debanjali081';
async function fetchData() {
    try {
        // Use the Fetch API to get data
        const response = await fetch(apiUrl);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Log the response data to the console
        console.log(data);
    } catch (error) {
        // Log any errors to the console
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the async function
fetchData();
