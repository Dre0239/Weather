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
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
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
        "";

      fetch(queryUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          newCity.textContent = data.city.name;
          for (var i = 0; i < 6; i++) {
            document.getElementById("temp-" + i + "").textContent =
              "Temp: " + Number(data.list[i].main.temp);
          }
        });
    });
}
