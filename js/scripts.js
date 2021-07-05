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
    "Saturday"
  ];
  let now = new Date();
  let day = days[now.getDay()];
  return day;
}
let timeDayDisplayed = document.querySelector("#current-time-day");
timeDayDisplayed.innerHTML = `${getTime()} ${getDay()}`;

//Change current city name to match city submitted in search form
function updateCityName(event) {
  event.preventDefault();
  let city = document.querySelector("#another-city");
  console.log(city.value);
  let currentCity = document.querySelector("#current-city-name");
  currentCity.innerHTML = city.value;
}
let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", updateCityName);

//Toggle current temperature to Celsius or Fahrenheit
function changeToC() {
  let degreesC = document.querySelector("#current-degrees");
  degreesC.innerHTML = "24";
}
function changeToF() {
  let degreesF = document.querySelector("#current-degrees");
  degreesF.innerHTML = "75";
}
let degreesC = document.querySelector("#degrees-c");
degreesC.addEventListener("click", changeToC);

let degreesF = document.querySelector("#degrees-f");
degreesF.addEventListener("click", changeToF);
