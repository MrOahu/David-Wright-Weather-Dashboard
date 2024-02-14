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

    document.querySelector("#today").innerHTML = ""  

  var currentCard = document.createElement("div")
  currentCard.setAttribute("class", "currentCard")
  
  var city = document.createElement("h2")
  city.textContent = currentData.name

  var icon = document.createElement("img")
  icon.setAttribute("src", `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`)

  var temp = document.createElement("h3")
  temp.textContent = "Temperature: " + currentData.main.temp + " F"

  var humid = document.createElement("h3")
  humid.textContent = "Humidity: " + currentData.main.humidity + "%"

  var wind = document.createElement("h3")
  wind.textContent = "Wind Speed: " + currentData.wind.speed + " mph"


currentCard.append(city, icon, temp, humid, wind)
document.querySelector("#today").append(currentCard)
    })
}