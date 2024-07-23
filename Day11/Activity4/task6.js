// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises .

// URL of a public API
const apiUrl = 'https://api.github.com/users/debanjali081';

// Use the Fetch API to get data
fetch(apiUrl)
    .then(response => {
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(data => {
        // Log the response data to the console
        console.log(data);
    })
    .catch(error => {
        // Log any errors to the console
        console.error('There was a problem with the fetch operation:', error);
    });
