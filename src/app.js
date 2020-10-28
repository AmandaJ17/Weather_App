function formatDate(timestamp) {
  let date = new Date(timestamp);
  let currentDate = date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  let year = date.getFullYear();
  let todaysDate = date.getDate();

  return `${day}, ${todaysDate} ${month}, ${year}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityName = document.querySelector("#city");
  let description = document.querySelector("#weatherDescription");
  let feelsLike = document.querySelector("#feelsLike");
  let dateElement = document.querySelector("#currentDate");

  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°C`;
  cityName.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
  feelsLike.innerHTML = `Feels like ${Math.round(
    response.data.main.feels_like
  )}°C`;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "653b806439282a7bd7eba7fc4fe797a3";
let city = "Auckland";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
