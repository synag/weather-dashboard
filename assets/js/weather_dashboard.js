$(document).ready(function(){

  
  var apiKey = "92082348e1fdf20edfb9752ebc60f8bc"
  var lat = 0
  var long = 0 
  var city = ""

  function getCurrentWeather(){
   
  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q='+city+ "&units=imperial"
  +'&appid='+ apiKey;
    
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

  var requestUrl ='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial'+'&appid=' +apiKey;
    
  fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
  var reformatDate1 = (data.list[5].dt_txt);
  var reformatDate2 = (data.list[13].dt_txt);
  var reformatDate3 = (data.list[21].dt_txt);
  var reformatDate4 = (data.list[29].dt_txt);
  var reformatDate5 = (data.list[37].dt_txt);
  
  $(".1-day-time").text(moment(reformatDate1).format("l"))
  $(".1-day-temp").text("Temperature: " +data.list[1].main.temp); 
  $(".1-day-humidity").text("Humidity: "+data.list[1].main.humidity+"%");

  $(".2-day-time").text(moment(reformatDate2).format("l"))
  $(".2-day-temp").text("Temperature: " +data.list[2].main.temp); 
  $(".2-day-humidity").text("Humidity: "+data.list[2].main.humidity+"%"); 
  
  $(".3-day-time").text(moment(reformatDate3).format("l"))
  $(".3-day-temp").text("Temperature: " +data.list[3].main.temp); 
  $(".3-day-humidity").text("Humidity: "+data.list[3].main.humidity+"%"); 

  $(".4-day-time").text(moment(reformatDate4).format("l"))
  $(".4-day-temp").text("Temperature: " +data.list[4].main.temp); 
  $(".4-day-humidity").text("Humidity: "+data.list[4].main.humidity+"%"); 
 
  $(".5-day-time").text(moment(reformatDate5).format("l"))
  $(".5-day-temp").text("Temperature: " +data.list[5].main.temp); 
  $(".5-day-humidity").text("Humidity: "+data.list[5].main.humidity+"%"); 
  
})
}



$(".searchBtn").click(function(event){
  event.preventDefault();
  // action goes here!!
  city = $(".form-control").val()
  
getCurrentWeather()
fiveDayForecast()
});

// event.preventDefault();
// // city = event.target.parentElement.parentElement.children[0].value
//   city = $(".form-control").val()
// getCurrentWeather()
// fiveDayForecast()



// getCurrentWeather()
// fiveDayForecast()
//  uvData()

   

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // jQuery methods go here...
  
  });