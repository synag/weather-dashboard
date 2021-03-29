$(document).ready(function(){

  
  function getCurrentWeather(){
   
  var apiKey = "92082348e1fdf20edfb9752ebc60f8bc"

  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=boston&appid='+ apiKey;
    
    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
     $(".todaysDate").text(data.name);
     $(".weatherIconCurrent").text(data.weather.icon); 
     $(".temperatureCurrent").text(data.main.temp);
     $(".humidityCurrent").text(data.main.humidity);
     $(".uvIndexCurrent").text(data.name);
     $(".windSpeedCurrent").text(data.wind.speed);



  });
    
}
    getCurrentWeather()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // jQuery methods go here...
  
  });