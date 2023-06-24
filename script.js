// Llamar a la función getWeather() al cargar la página
window.addEventListener('load', getWeather);

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("La geolocalización no es compatible con este navegador.");
  }
}

function success(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var apiKey = "274345cccdcb1a7bddbf61a51ab7551f"; // Reemplaza "tu_api_key" con tu clave de API real

  var url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&lang=es&appid=" +
    apiKey;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML =
        "CLIMA" + "<br>" + "<br>" +
        data.name + "<br>" +
        Math.round(data.main.temp) + "°C<br>" +
        data.weather[0].description;

      var weatherIcon = document.createElement("img");
      weatherIcon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      weatherIcon.alt = "Icono del clima";
      weatherInfo.appendChild(weatherIcon);
    })
    .catch(error => {
      console.log("Error al obtener los datos del clima:", error);
    });
}

function error() {
  console.log("No se pudo obtener la ubicación.");
}

window.addEventListener('load', getWeather);

  
