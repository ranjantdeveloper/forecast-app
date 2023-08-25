import App from "./app.js";

// API Key
const apiKey = "b1c46eebbe67b5fecefeef46068ae564";

export default class FetchingData {
  static byGeoLocation() {
    let long, lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log(lat, long);

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

        // Fetch Data
        fetchData(api);
      });
    }
  }

  static byCityName(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetch Data
    fetchData(api);
  }
}

// set the weather
const setWeather = (data) => {
  document.querySelector(".loader").style.visibility = "hidden";
  const location = data.name,
    temperature = Math.floor(data.main.temp - 273),
    description = data.weather[0].description,
    displayIcon = iconFind(data.weather),
    icon = `./src/assets/${displayIcon}.png`,
    humidity = data.main.humidity;
  console.log("this is icon field: ", displayIcon);

  // Set the Current Location
  App.currentLocation(location);

  // Set Icon Weather
  App.weatherIcon(icon);

  // Set the Weather Info
  App.weatherDescription(description);

  // Set the temperature
  App.setTemperature(temperature);

  // Set Humidity
  App.setHumidity(humidity);
};

// fetch the data
const fetchData = (api) => {
  document.querySelector(".loader").style.visibility = "visible";
  // Fetch Data
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setWeather(data);
    })
    .catch(() => {
      alert("Something went wrong!!.. [please enter city name correctly.]");
    });
};

// Find thr matched Icon
function iconFind(we) {
  // console.log(we[0].id)
  const main = we[0].main;
  if (main === "Thunderstrom") {
    return "thunderstrom";
  } else if (main === "Drizzle") {
    return "drizzle";
  } else if (main === "Rain") {
    return "rain";
  } else if (main === "Snow") {
    return "snow";
  } else if (
    main === "Mist" ||
    main === "Smoke" ||
    main === "Haze" ||
    main === "Dust" ||
    main === "Fog" ||
    main === "Sand" ||
    main === "Ash" ||
    main === "Squall" ||
    main === "tornado"
  ) {
    return "cloudy_sunny";
  } else if (main === "Clear") {
    return "clear";
  } else if (main === "Clouds") {
    return "clouds";
  }
}
