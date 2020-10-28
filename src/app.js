function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityName = document.querySelector("#city");
  let description = document.querySelector("#weatherDescription");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  cityName.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
}
let apiKey = "653b806439282a7bd7eba7fc4fe797a3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=auckland&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
