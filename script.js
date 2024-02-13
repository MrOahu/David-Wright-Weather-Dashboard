var APIkey = "978c80bc59731a55915d21f7ea8bc0d1"

var searchBtn = document.querySelector("#search-button")

searchBtn.addEventListener("click", function(){
    var searchInput = document.querySelector("#search-value").value
    console.log(searchInput)

    // use searchInput to fulfill cityname parameter in geoCode
    geoCode(searchInput)
})

function geoCode(cityname){
fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=2&appid=${APIkey}`)
.then(response => response.json())
.then(weatherData => {
    console.log(weatherData)

currentWeather (weatherData[0].lat, weatherData[0].lon)
})
}


function currentWeather(lat, lon){
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`)
    .then(response => response.json())
    .then(currentData => {
        console.log(currentData)
  var city = document.createElement("h2")
  city.textContent = currentData.name
var temp = document.createElement("h3")
temp.textContent = "Temperature: " + currentData.main.temp + " F "




        document.querySelector("#today").append(city, temp)
    })
}