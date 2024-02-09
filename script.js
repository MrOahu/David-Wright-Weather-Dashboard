var APIkey = "978c80bc59731a55915d21f7ea8bc0d1"

var searchBtn = document.querySelector("#search-button")

searchBtn.addEventListener("click", function(){
    var searchInput = document.querySelector("#search-value").value
    console.log(searchInput)

    // use searchInput to fulfill cityname parameter in geoCode
    geoCode(searchInput)
})

function geoCode(cityname){
fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=${APIkey}`)
.then(response => response.json())
.then(weatherData => {
    console.log(weatherData)

})
}