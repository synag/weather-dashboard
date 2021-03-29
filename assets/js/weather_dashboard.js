$(document).ready(function(){

  // $(".searchBtn").val

  
  // var apiKey = "92082348e1fdf20edfb9752ebc60f8bc"

  // var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=boston&appid='+ apiKey;

  // var responseText = $('.state-results');
  
  // function getApi(requestUrl) {
  //   fetch(requestUrl)
  //     .then(function (data) {
  //       console.log(data);
  //       // if (response.status === 200) {
  //       //   // responseText.textContent = 
  //       // }
  //       return response.json();
  //   });
  // }
  
  // getApi(requestUrl);
  
    
   
  var apiKey = "92082348e1fdf20edfb9752ebc60f8bc"

  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=boston&appid='+ apiKey;
    
    fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
    
    //API Current weather api call 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // jQuery methods go here...
  
  });