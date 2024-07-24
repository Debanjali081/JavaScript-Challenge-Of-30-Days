// Task 8 : Use the fetch API to request data from an invalid URL and handle the error using .catch() to handle rejection and log an appropriate message to the console .

// Function to fetch data from an invalid URL
function fetchData() {
    const invalidUrl = "https://invalid-url.example.com/data";

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                // If the response is not OK, throw an error
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
        })
        .catch(error => {
            // Handle any errors that occurred during fetch
            console.error("Fetch error:", error.message);
        });
}

// Call the function to initiate the fetch request
fetchData();
