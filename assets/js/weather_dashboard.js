$(document).ready(function () {
  var apiKey = "92082348e1fdf20edfb9752ebc60f8bc";
  var lat = 0;
  var long = 0;
  var city = "";

  function getCurrentWeather() {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial" +
      "&appid=" +
      apiKey;

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        $(".state-results").text(data.name);
        $(".weatherIconCurrent").text(data.weather.icon);
        $(".temperatureCurrent").text("Temperature: " + data.main.temp + " ");
        $(".temperatureCurrent").append(
          '<span class="current-degrees">&#8457;</span>'
        );
        $(".humidityCurrent").text("Humidity: " + data.main.humidity + "%");
        $(".windSpeedCurrent").text("Wind Speed: " + data.wind.speed + " MPH");
        lat = data.coord.lat;
        long = data.coord.lon;
        var iconcodeToday = data.weather[0].icon;
        var iconurlToday =
          "http://openweathermap.org/img/w/" + iconcodeToday + ".png";
        $(".currentWeatherIcon").attr("src", iconurlToday);
        $(".todaysdate").text("(" + moment().format("l") + ")");
      });
  }

  function uvData() {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      long +
      "&exclude=daily,minutely&appid=" +
      apiKey;

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var uvi = data.current.uvi;
        $(".uvIndexCurrent").text("UV Index: ");
        $("#uvData").text(uvi);
        if (uvi <= 2.9) {
          $("#uvData").attr("class", "greenUVI");
        } else if (uvi >= 3 && uvi <= 5.9) {
          $("#uvData").attr("class", "yellowUVI");
        } else if (uvi >= 6 && uvi <= 7.9) {
          $("#uvData").attr("class", "orangeUVI");
        } else if (uvi >= 8 && uvi <= 10) {
          $("#uvData").attr("class", "redUVI");
        } else {
          $("#uvData").attr("class", "purpleUVI");
        }
      });
  }

  //five day forecast function for
  function fiveDayForecast() {
    var requestUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial" +
      "&appid=" +
      apiKey;

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var reformatDate1 = data.list[5].dt_txt;
        var reformatDate2 = data.list[13].dt_txt;
        var reformatDate3 = data.list[21].dt_txt;
        var reformatDate4 = data.list[29].dt_txt;
        var reformatDate5 = data.list[37].dt_txt;
        var iconcode1 = data.list[5].weather[0].icon;
        var iconcode2 = data.list[13].weather[0].icon;
        var iconcode3 = data.list[21].weather[0].icon;
        var iconcode4 = data.list[29].weather[0].icon;
        var iconcode5 = data.list[37].weather[0].icon;
        var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
        var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
        var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
        var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
        var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";

        $(".1-day-time").text(moment(reformatDate1).format("l"));
        $(".1-day-temp").text("Temperature: " + data.list[5].main.temp + " ");
        $(".1-day-temp").append(
          '<span class="five-days-degrees">&#8457;</span>'
        );
        $(".1-day-humidity").text(
          "Humidity: " + data.list[5].main.humidity + "%"
        );
        $(".icon1").attr("src", iconurl1);

        $(".2-day-time").text(moment(reformatDate2).format("l"));
        $(".2-day-temp").text("Temperature: " + data.list[13].main.temp + " ");
        $(".2-day-temp").append(
          '<span class="five-days-degrees">&#8457;</span>'
        );
        $(".2-day-humidity").text(
          "Humidity: " + data.list[13].main.humidity + "%"
        );
        $(".icon2").attr("src", iconurl2);

        $(".3-day-time").text(moment(reformatDate3).format("l"));
        $(".3-day-temp").text("Temperature: " + data.list[21].main.temp + " ");
        $(".3-day-temp").append(
          '<span class="five-days-degrees">&#8457;</span>'
        );
        $(".3-day-humidity").text(
          "Humidity: " + data.list[21].main.humidity + "%"
        );
        $(".icon3").attr("src", iconurl3);

        $(".4-day-time").text(moment(reformatDate4).format("l"));
        $(".4-day-temp").text("Temperature: " + data.list[29].main.temp + " ");
        $(".4-day-temp").append(
          '<span class="five-days-degrees">&#8457;</span>'
        );
        $(".4-day-humidity").text(
          "Humidity: " + data.list[29].main.humidity + "%"
        );
        $(".icon4").attr("src", iconurl4);

        $(".5-day-time").text(moment(reformatDate5).format("l"));
        $(".5-day-temp").text("Temperature: " + data.list[37].main.temp + " ");
        $(".5-day-temp").append(
          '<span class="five-days-degrees">&#8457;</span>'
        );
        $(".5-day-humidity").text(
          "Humidity: " + data.list[37].main.humidity + "%"
        );
        $(".icon5").attr("src", iconurl5);
      });
  }

  function setItem() {
    localStorage.setItem("search-result-" + (localStorage.length + 1), city);
  }

  function getItem() {
    for (var i = 1; i <= localStorage.length-3; i++) {
      var text = localStorage.getItem("search-result-" + [i]);
      $("#selectable").append("<h2 class=storageList>" + text + " </h2>");
    }
  }

  $(".searchBtn").click(function (event) {
    event.preventDefault();
    city = $(".form-control").val();
    getCurrentWeather();
    uvData();
    fiveDayForecast();
    setItem();
  });

  getItem();

  $(".storageList").click(function (event) {
    event.preventDefault();
    city = event.target.textContent;
    getCurrentWeather();
    fiveDayForecast();
    uvData();
  });

  
});
