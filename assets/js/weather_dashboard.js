$(document).ready(function(){

  
  var apiKey = "92082348e1fdf20edfb9752ebc60f8bc"
  var lat = 0
  var long = 0 
  var city = "boston"

  function getCurrentWeather(){
   
  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+ apiKey;
    
    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
     $(".state-results").text(data.name);
     $(".weatherIconCurrent").text(data.weather.icon); 
     $(".temperatureCurrent").text("Temperature: " +data.main.temp +"");
     $(".humidityCurrent").text("Humidity: "+data.main.humidity+"%");
     $(".uvIndexCurrent").text(data.name);
     $(".windSpeedCurrent").text("Wind Speed: "+data.wind.speed+" MPH");
     lat = data.coord.lat
     long = data.coord.lon
     
  });
    
}

//UV function to get the UV infomration
function uvData(){

  var requestUrl ='https://api.openweathermap.org/data/2.5/onecall?lat='+ lat+ 'lon='+long+'&exclude=hourly,daily,minutely&appid=' +apiKey;
    
  fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
 
  //  $(".uvIndexCurrent").text(data.name);
  //  $(".windSpeedCurrent").text("Wind Speed: "+data.wind.speed+" MPH");

})
}

//five day forecast function for
function fiveDayForecast(){

  var requestUrl ='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=' +apiKey;
    
  fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  $(".1-day-time").text(data.list[1].dt_txt);
  $(".1-day-temp").text("Temperature: " +data.list[1].main.temp); 
  $(".1-day-humidity").text("Humidity: "+data.list[1].main.humidity+"%"); 
  // $(".1 day-humidity").text(data."Temperature: " +data.main.temp +"");

})
}

getCurrentWeather()
fiveDayForecast()
 uvData()

   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // jQuery methods go here...
  
  });