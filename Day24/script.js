// Constants
const weatherForm = document.querySelector(".weatherForm");
const formInput = document.querySelector(".formInput");
const card = document.querySelector(".card");
const apikey = "5da9837656495ccd1ba33545db0a560e";

// Event Listener for Form Submission
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = formInput.value;
    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
            const forecastData = await get5DayForecast(city);
            display5DayForecast(forecastData);
        } catch (err) {
            console.error(err);
            displayError(err.message);
        }
    } else {
        displayError("Please enter a valid city");
    }
});

// Fetch Current Weather Data
async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error("City not found");
    }
    return await response.json();
}

// Fetch 5-Day Forecast Data
async function get5DayForecast(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error("Forecast data not found");
    }
    return await response.json();
}

// Display Current Weather Information
function displayWeatherInfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather
    } = data;
    const { description, icon } = weather[0];

    card.textContent = "";
    card.style.display = "flex";
    card.style.marginBottom="0%";


    const cityDisplay = document.createElement("h1");
    const temperatureDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const weatherIcon = document.createElement("img");

    cityDisplay.textContent = city;
    temperatureDisplay.textContent = `${Math.round((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
    humidityDisplay.textContent = `${humidity}%`;
    descriptionDisplay.textContent = description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`; // Icon URL

    cityDisplay.classList.add("cityDisplay");
    temperatureDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descriptionDisplay.classList.add("descDisplay");
    weatherIcon.classList.add("weatherIcon");

    card.appendChild(cityDisplay);
    card.appendChild(temperatureDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descriptionDisplay);
    card.appendChild(weatherIcon);
    card.style.marginBottom="0%";

}

// Display 5-Day Forecast Information
function display5DayForecast(data) {
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecastContainer");

    data.list.forEach((item, index) => {
        if (index % 8 === 0) { // Data is in 3-hour intervals, so take one per day
            const {
                main: { temp },
                weather,
                dt_txt
            } = item;
            const { description, icon } = weather[0];

            const forecastCard = document.createElement("div");
            forecastCard.classList.add("forecastCard");

            const dateDisplay = document.createElement("p");
            const tempDisplay = document.createElement("p");
            const descriptionDisplay = document.createElement("p");
            const weatherIcon = document.createElement("img");

            dateDisplay.textContent = new Date(dt_txt).toLocaleDateString();
            tempDisplay.textContent = `${Math.round((temp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
            descriptionDisplay.textContent = description;
            weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`; // Icon URL

            dateDisplay.classList.add("dateDisplay");
            tempDisplay.classList.add("tempDisplay");
            descriptionDisplay.classList.add("descDisplay");
            weatherIcon.classList.add("weatherIcon");

            forecastCard.appendChild(dateDisplay);
            forecastCard.appendChild(tempDisplay);
            forecastCard.appendChild(descriptionDisplay);
            forecastCard.appendChild(weatherIcon);
            forecastContainer.appendChild(forecastCard);
        }
    });

    card.appendChild(forecastContainer);
    card.style.marginBottom="0%";

}

// Display Error Message
function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.innerHTML = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.style.marginBottom="40%";
    card.appendChild(errorDisplay);
}
