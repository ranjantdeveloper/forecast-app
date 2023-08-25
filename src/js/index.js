import FetchingData from "../modules/fetch.js";

window.addEventListener("DOMContentLoaded", () => {
  // Fetch Weather By Geolocation
  FetchingData.byGeoLocation();

  // Change Location
  document.querySelector("#change-location").addEventListener("click", () => {
    const changedLocation = prompt("Enter the city");
    FetchingData.byCityName(changedLocation);
  });
});
