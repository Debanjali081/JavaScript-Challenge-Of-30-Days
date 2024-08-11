const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const weatherCardsDiv = document.querySelector(".weather-cards");
const currentWeatherDiv = document.querySelector(".current-weather");
const locationButton = document.querySelector(".location-btn");
const API_KEY = `00916207b3bdd183b80cc656a811170d`;

const createWeatherCard = (cityName, weatherItem, index) => {
    const iconUrl = `http://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`;
    let weatherPrompt = "";

    // Generate prompt based on weather condition
    switch (weatherItem.weather[0].main) {
        case "Clear":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'> Suggestion: It's a bright and sunny day! Perfect for outdoor activities.</strong>";
            break;
        case "Clouds":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'>Suggestion: A bit cloudy today. A good day for a cozy indoor activity.</strong>";
            break;
        case "Rain":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'>Suggestion: Don't forget your umbrella! It's raining outside.</strong>";
            break;
        case "Thunderstorm":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'>Suggestion: Stormy weather ahead. Stay safe and indoors.</strong>";
            break;
        case "Snow":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'>Suggestion: It's snowing! Time to build a snowman or enjoy a hot cup of cocoa.</strong>";
            break;
        case "Mist":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'> Suggestion: A misty morning. Drive carefully if you're heading out.</strong>";
            break;
        case "Drizzle":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'> Suggestion: Light rain drizzling down. You might want to carry a raincoat.</strong>";
            break;
        case "Haze":
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'> Suggestion: Hazy conditions today. Keep hydrated and avoid strenuous outdoor activities.</strong>";
            break;
        default:
            weatherPrompt = "<strong style='color: white; font-family: Poppins;'> Suggestion: Weather condition is unknown. Stay prepared for anything!</strong>";
    }

    if (index === 0) {
        return `<div class="details">
                    <h2 style="font-family: Poppins;">${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h4 style="font-family: Poppins;">Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}ºC</h4>
                    <h4 style="font-family: Poppins;">Wind: ${weatherItem.wind.speed} M/S</h4>
                    <h4 style="font-family: Poppins;">Humidity: ${weatherItem.main.humidity}%</h4>
                    <p>${weatherPrompt}</p>
                </div>
                <div class="icon">
                    <img src="${iconUrl}" width="130">
                    <h4 style="font-family: Poppins;">${weatherItem.weather[0].description}</h4>
                </div>`;
    } else {
        return `<li class="card">
            <h3 style="font-family: Poppins;">${weatherItem.dt_txt.split(" ")[0]}</h3>
            <img src="${iconUrl}" alt="weather-icon" width="130">
            <h4 style="font-family: Poppins;">Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}ºC</h4>
            <h4 style="font-family: Poppins;">Wind: ${weatherItem.wind.speed} M/S</h4>
            <h4 style="font-family: Poppins;">Humidity: ${weatherItem.main.humidity}%</h4>
            <p>${weatherPrompt}</p>
        </li>`;
    }
}




const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(WEATHER_API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const uniqueForecastDays = [];
            const fiveDaysForecast = data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if (!uniqueForecastDays.includes(forecastDate)) {
                    uniqueForecastDays.push(forecastDate);
                    return true;
                }
                return false;
            });

            cityInput.value = "";
            weatherCardsDiv.innerHTML = "";
            currentWeatherDiv.innerHTML = "";

            console.log(fiveDaysForecast);
            fiveDaysForecast.forEach((weatherItem, index) => {
                const weatherCardHtml = createWeatherCard(cityName, weatherItem, index);
                if (index === 0) {
                    currentWeatherDiv.innerHTML = weatherCardHtml; // First card goes to currentWeatherDiv
                } else {
                    weatherCardsDiv.insertAdjacentHTML("beforeend", weatherCardHtml); // Others go to weatherCardsDiv
                }
            });
        })
        .catch(err => {
            alert("An error occurred while fetching the forecast data!");
        });
}

const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if (!cityName) return;

    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`;

    fetch(GEOCODING_API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (!data.length) return alert(`No coordinates found for ${cityName}`);
            const { name, lat, lon } = data[0]; // Corrected cityName to name
            getWeatherDetails(name, lat, lon); // Pass name here
        })
        .catch(err => {
            alert("An error occurred while fetching the coordinates!");
        });
}

const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords; // Corrected longitude typo
            const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`; // Added limit=1

            fetch(REVERSE_GEOCODING_URL).then(res => res.json()).then(data => {
                const { name } = data[0]; // Corrected cityName to name
                getWeatherDetails(name, latitude, longitude);

            }).catch(() => { alert("An error occured while fetching the city") })
        },
        error => {
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation permission denied. Please reset the location.");
            }
        }
    );
}


searchButton.addEventListener('click', getCityCoordinates);
locationButton.addEventListener('click', getUserCoordinates);
cityInput.addEventListener('keyup', e => e.key === "Enter" && getCityCoordinates());









