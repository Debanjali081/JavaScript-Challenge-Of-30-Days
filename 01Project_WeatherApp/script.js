const apiKey = '1547d7b7e8a60a7214bd335ae97d79a0'; // Your actual API key
const tempr = document.getElementById("tempr");
const humidity = document.getElementById("humidity");
const cityNameDiv = document.getElementById("cityName");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get the city name entered by the user
  const cityName = form.querySelector("input").value.trim();

  // Construct the URL with the city name
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  // Fetch the weather data
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Return the JSON promise here
    })
    .then((data) => {
      // Handle the JSON data here
      const tempV = data.main.temp;
      const humidityV = data.main.humidity;
      const cityNameV = data.name;
      tempr.innerHTML = `<h3 style="color: orange; letter-spacing: 1px;">Temperature: ${tempV}°C </h3>`;
      humidity.innerHTML = `<h3 style="color: orange; letter-spacing: 1px;">Humidity: ${humidityV}%</h3>`;
      cityNameDiv.innerHTML = `<h3 style="color: orange; letter-spacing: 1px;">City Name: ${cityNameV}</h3>`;
      // tempr.style.letterSpacing = "1px";
      // humidity.style.letterSpacing = "1px";
      // cityName.style.letterSpacing = "1px";
      // tempr.style.color = "orange";
      // humidity.style.color = "orange";
      // cityNameDiv.style.color = "orange";
    })
    .catch((err) => {
      console.log("There is a problem with the fetch operation", err);
    });
});




