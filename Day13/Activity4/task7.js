const axios = require('axios'); // Import axios for HTTP requests

// Example of making a GET request
axios.get('https://api.github.com/users/debanjali081')
    .then(response => {
        console.log(response.data); // Handle the response data
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });


