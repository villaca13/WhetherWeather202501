document.addEventListener("DOMContentLoaded", () => {
    const currentCity = "amsterdam";
    const currentCityData = weatherData[currentCity + "_daily"]
    const time = document.getElementById("time");
    const weatherCode = document.getElementById("weatherCode");

    time.innerHTML = currentCityData.daily.time[0];
    weatherCode.innerHTML = currentCityData.daily.weather_code[0];
});