//Display current time and day
function formatMinutes() {
  let now = new Date();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return minutes;
}
function getTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = formatMinutes();
  let time = `${hours}:${minutes}`;
  return time;
}
function getDay() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let day = days[now.getDay()];
  return day;
}
let timeDayDisplayed = document.querySelector("#current-time-day");
timeDayDisplayed.innerHTML = `${getTime()} ${getDay()}`;

//Change current city name and temp to match city submitted in search form
function updateCityName(event) {
  event.preventDefault();
  let city = document.querySelector("#another-city");
  let currentCity = document.querySelector("#current-city-name");
  currentCity.innerHTML = city.value;
}
function updateTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let currentDegrees = document.querySelector("#current-degrees");
  currentDegrees.innerHTML = temp;
}

function getTempByCity() {
  let apiKey = "68c9ee99b56155d1827a40287a70216c";
  let currentCity = document.querySelector("#current-city-name");
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.innerHTML}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(updateTemperature);
}
function changeNameToGPS(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let gPSCoords = `Latitude ${latitude}, Longitude ${longitude}`;
  let location = document.querySelector("#current-city-name");
  location.innerHTML = gPSCoords;
}
function getTempByGPS(position) {
  let apiKey = "68c9ee99b56155d1827a40287a70216c";
  let units = "imperial";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(updateTemperature);
}

function getGPS() {
  navigator.geolocation.getCurrentPosition(getTempByGPS);
  navigator.geolocation.getCurrentPosition(changeNameToGPS);
}

getTempByCity();
let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", updateCityName);
citySearch.addEventListener("submit", getTempByCity);

//Adding a listener for the "Weather where you are now" button
let gpsButton = document.querySelector("#gps-button");
gpsButton.addEventListener("click", getGPS);
