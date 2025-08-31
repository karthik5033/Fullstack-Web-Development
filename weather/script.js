document.addEventListener("DOMContentLoaded",()=>{
   let cityInput = document.getElementById("city-input");
   let getWeatherBtn = document.getElementById("get-weather-btn");
   let weatherInfo = document.getElementById("weather-info");
    let cityNameDisplay = document.getElementById("city-name");
    let temperatureDisplay = document.getElementById("temperature");
    let descriptionDisplay = document.getElementById("description");
     let errorMessage = document.getElementById("error-message");
 let API_KEY = "cf4da5c91db5fe100db3e2e606ceeae8";


getWeatherBtn.addEventListener("click",async()=>{
const city=cityInput.ariaValueMax.trim();
if(city==="")return;
// it may throw an error
// server/database is always in another continent

try{
  let weatherData= await fetchWeatherData(city)
} catch (error){
    showError()
}

})

function fetchWeatherData(city){
    // k
}

function displayWeatherData(weatherInfo){
    // display
}
})

function showError(){
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
}