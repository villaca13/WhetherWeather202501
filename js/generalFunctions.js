// Function to get the list of cities from the keys of the weather data object
// This function takes an object as an argument and returns an array of city names
function getListOfCities (citiesKeyNames) {
   
    const citiesNames = []

    // Loop through the keys and create a new array with the city names
    // Replace "_daily" and "_hourly" with an empty string and replace "_" with " "
    for ( let i = 0; i < citiesKeyNames.length; i++) {
      const cityName = citiesKeyNames[i].replace("_daily", "").replace("_hourly", "").replace("_", " ")

      // Check if the city name contains whitespace and capitalize the first letter of each word
      if (hasWhiteSpace(cityName)) {
        citiesNames[i] = cityName.charAt(0).toUpperCase() + cityName.slice(1,cityName.indexOf(' ')+1) + cityName.charAt(cityName.indexOf(' ')+1).toUpperCase() + cityName.slice(cityName.indexOf(' ') + 2)
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
function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }