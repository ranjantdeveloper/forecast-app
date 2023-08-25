// Handle APP UI
export default class App {
  static currentLocation(location) {
    const currentLocation = document.querySelector(".current-location");
    currentLocation.innerHTML = "";
    currentLocation.innerHTML = `
            <img src="./src/assets/location_map_pin.png" alt="current location">
            <h2 id="location">${location}</h2>
        `;
  }

  static weatherIcon(icon) {
    const img = document.createElement("img");
    img.src = icon;
    img.alt = "cloudy";
    const weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.innerHTML = "";
    weatherIcon.appendChild(img);
  }

  static weatherDescription(desc) {
    const h3 = document.createElement("h3");
    h3.textContent = desc;
    const weatherDescription = document.querySelector(".weather-description");
    weatherDescription.innerHTML = "";
    weatherDescription.appendChild(h3);
  }

  static setTemperature(temp) {
    const temperature = document.querySelector(".temperature");
    const h1 = document.createElement("h1");
    h1.textContent = temp;
    const img = document.createElement("img");
    img.src = "./src/assets/celsius_degree.png";
    img.alt = "celsius";
    temperature.innerHTML = "";
    temperature.appendChild(h1);
    temperature.appendChild(img);
  }

  static setHumidity(humid) {
    const h3 = document.createElement("h3");
    h3.textContent = humid;
    const img = document.createElement("img");
    img.src = "./src/assets/drop_icon.png";
    img.alt = "humid";
    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = "";
    humidity.appendChild(h3);
    humidity.appendChild(img);
  }
}
