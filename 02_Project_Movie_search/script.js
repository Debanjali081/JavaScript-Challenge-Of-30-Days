const SearchBtn = document.querySelector("#search-btn");
const SearchBar = document.querySelector("#search-bar");

SearchBtn.addEventListener('click', () => {
  const movieName = SearchBar.value.trim(); // Get user input and trim whitespace
  if (movieName) {
    const URL = `https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=e26a4e6f`;

    fetch(URL)
      .then(res => {
        // Check for response status and throw an error if not successful
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        // Check if the data has a Search property and if it is an array
        if (data.Search && Array.isArray(data.Search)) {
          // Use map to generate HTML for each movie in the Search array
          const movieCards = data.Search.map(movie => {
            return `
              <div class="card">
                <img src="${movie.Poster}" alt="Movie Poster">
                <div class="dtls">
                  <h3>Title: ${movie.Title}</h3>
                  <h3>Year: ${movie.Year}</h3>
                  <h3>Rating:${movie.rating}</h3>
          
                </div>
              </div>
            `;
          }).join('');  // Join the array into a single string

          // Append the generated HTML to the container
          document.getElementById('movie-container').innerHTML = movieCards;
        } else {
          // Handle the case when no movies are found
          document.getElementById('movie-container').innerHTML = '<p>No movies found.</p>';
        }
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        document.getElementById('movie-container').innerHTML = '<p>Error fetching data. Please try again later.</p>';
      });
  } else {
    alert("Please enter a movie name.");
  }
});








