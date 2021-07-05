let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let cityEntered = prompt("Enter a city");
let city = cityEntered.trim().toLowerCase();
if (city.length > 0 && city in weather) {
  let fahrenheit = weather[city].temp * 1.8 + 32.0;
  fahrenheit = Number.parseFloat(fahrenheit).toFixed(1);
  let message = `It is currently ${
    weather[city].temp
  }°C(${fahrenheit}°F) in ${cityEntered.trim()} with a humidity of ${
    weather[city].humidity
  }%`;
  alert(message);
} else if (city.length > 0 && city in weather === false) {
  let errorMessage = `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city.replace(
    " ",
    "+"
  )}`;
  alert(errorMessage);
} else {
  let blankMessage = `Sorry, you need to enter a city name to get the weather.`;
  alert(blankMessage);
}
