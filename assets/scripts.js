var key = "052c877c89e1f9ec31d06f6147e53963";
var lat;
var lon;
var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;
var coorUrl =
  "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
var search = document.getElementById("search");
var submitBtn = document.getElementById("btn-submit");
var newCity = document.getElementById("city");

submitBtn.addEventListener("click", getInfo);

function getInfo(coorUrl) {
  var coorUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    search.value +
    "&limit=1&appid=" +
    key +
    "";
  fetch(coorUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data[0].lat;
      var lon = data[0].lon;
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        key +
        "&units=imperial";

      fetch(queryUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          newCity.textContent = data.city.name;
          for (var i = 0; i < 6; i++) {
            document.getElementById("temp-" + i + "").textContent =
              "Temp: " + Number(data.list[i].main.temp).toFixed(0) + "°";
          }
          for (var i = 0; i < 6; i++) {
            document.getElementById("wind-" + i + "").textContent =
              "Wind: " + Number(data.list[i].wind.speed).toFixed(0) + "mph";
          }
          for (var i = 0; i < 6; i++) {
            document.getElementById("humidity-" + i + "").textContent =
              "Humidity: " +
              Number(data.list[i].main.humidity).toFixed(0) +
              "%";
          }
          for (var i = 0; i < 6; i++) {
            document.getElementById("icon-" + i + "").src =
              "https://openweathermap.org/img/wn/" +
              data.list[i].weather[0].icon +
              ".png";
          }
        });
    });
}

var weekday = [
  moment().format("dddd"),
  moment().add(1, "d").format("dddd"),
  moment().add(2, "d").format("dddd"),
  moment().add(3, "d").format("dddd"),
  moment().add(4, "d").format("dddd"),
  moment().add(5, "d").format("dddd"),
  moment().add(6, "d").format("dddd"),
];
for (i = 0; i < 6; i++) {
  document.getElementById("day-" + i + "").textContent = weekday[i];
}
