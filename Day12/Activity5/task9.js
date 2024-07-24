// Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch . Log an appropriate error message .


// Async function to fetch data from an invalid URL
async function fetchData() {
    const invalidUrl = "https://invalid-url.example.com/data";

    try {
        const response = await fetch(invalidUrl);

        if (!response.ok) {
            // If the response is not OK, throw an error
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json(); // Parse JSON data
        console.log("Data fetched successfully:", data);
    } catch (error) {
        // Handle any errors that occurred during fetch
        console.error("Fetch error:", error.message);
    }
}

// Call the function to initiate the fetch request
fetchData();
