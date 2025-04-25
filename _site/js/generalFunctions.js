//constants for the weather project
const weatherData = weatherProject.dataStore.list()
const dataKeyNames = Object.keys(weatherData)
const cities = getListOfCities(dataKeyNames)
const currentDay = "currentDay"
const currentCity = "currentCity"

//preferences constants
const showMap = "Show_Map"
const show12HoursForecast = "Show_12_hours_forecast"
const showRain = "Show_Rain"
const showFeelsLikeTemp = "Show_Feels_Like_Temp"
const darkTheme = "Dark_Theme"
const preferences = [showMap, show12HoursForecast, showRain, showFeelsLikeTemp, darkTheme]

// get weather data for the current city
const cityDaily = weatherData[localStorage.getItem(currentCity).toLowerCase() + "_daily"]
const cityHourly = weatherData[localStorage.getItem(currentCity).toLowerCase() + "_hourly"]

// Function to get the list of cities from the keys of the weather data object
// This function takes an object as an argument and returns an array of city names
function getListOfCities (citiesKeyNames) {
   
    const citiesNames = []

    // Loop through the keys and create a new array with the city names
    // Replace "_daily" and "_hourly" with an empty string and replace "_" with " "
    for ( let i = 0; i < citiesKeyNames.length; i++) {
      //const cityName = citiesKeyNames[i].replace("_daily", "").replace("_hourly", "").replace("_", " ")
      const cityName = citiesKeyNames[i].replace("_daily", "").replace("_hourly", "")

      // Check if the city name contains whitespace and capitalize the first letter of each word
      if (hasUnderscore(cityName)) {
        citiesNames[i] = cityName.charAt(0).toUpperCase() + cityName.slice(1,cityName.indexOf('_')+1) + cityName.charAt(cityName.indexOf('_')+1).toUpperCase() + cityName.slice(cityName.indexOf('_') + 2)
      }else {
        citiesNames[i] = cityName.charAt(0).toUpperCase() + cityName.slice(1)
      }
    }

    // Remove duplicates from the array using Set  
    let citiesSet = new Set(citiesNames);

    // Convert back the set to array
    const uniqueCitiesNames = Array.from(citiesSet) ;
    
    return uniqueCitiesNames
}

// Function to check if a string contains whitespace    
function hasUnderscore(s) {
    return s.indexOf('_') >= 0;
}

// Function to create a list of checkboxes 
function createCheckboxes (items, tagID) {
  const checkboxPlace = document.querySelector("#"+tagID)
  // Populate Checkboxes with items at preferences page
  items.forEach((item) => {
    checkboxPlace.innerHTML =
      checkboxPlace.innerHTML + weatherProject.components.createCheckboxItem(item)
  })
}

// Funtion to read the value of a checkbox
function readCheckbox (idCheckbox) {
  return localStorage.getItem(idCheckbox) === "true" ? true : false
}

// Function to read the value of a checkbox and update the value of the checkbox
function updateCheckbox (idCheckbox, value) {
  document.querySelector("#"+idCheckbox).checked = value
}

// Function to read the value of a checkbox and update the value of the checkbox
function setDarkTheme (darkTheme) {
  // Changing the theme of the page
  document.querySelector("html").setAttribute("data-theme", darkTheme === true ? "dark" : "light")
}
