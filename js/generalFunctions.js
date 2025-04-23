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


