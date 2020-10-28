function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "653b806439282a7bd7eba7fc4fe797a3";
let cityName = "Auckland";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
