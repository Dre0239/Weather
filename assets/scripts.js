var key = "052c877c89e1f9ec31d06f6147e53963";
var lat;
var lon;
var queryUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;
var coorUrl =
  "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}";
var search = document.getElementById("search");
var submitBtn = document.getElementById("btn-submit");

submitBtn.addEventListener("click", getInfo);

function getInfo() {
  var coorUrl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    search.Value +
    "&limit=1&appid=" +
    key +
    "";
  fetch(coorUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
