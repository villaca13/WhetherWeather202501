window.weatherProject.components.createWeatherItem = (city, cityDaily) => {
    return `
    <div class="column is-4">
      <section class="card has-text-centered is-ce " >
        <header class="card-header">
         <a href="/cityFocus/?city=${city}" class="card-header-title is-size-4 is-centered">
            ${city.replace(/_/g, " ")}          
          </a>
        </header>

        <div class="card-image ">
          <figure class="image is-128x128 is-inline-block">	
            <img src="images/${cityDaily.daily.weather_code[0]}.png" alt="Image">
          </figure>
        </div>

        <footer class="card-footer">
          <p class="card-footer-item"> ${cityDaily.daily.temperature_2m_min[0]} ${cityDaily.daily_units.temperature_2m_min} </p>
          <p class="card-footer-item"> ${cityDaily.daily.temperature_2m_max[0]} ${cityDaily.daily_units.temperature_2m_max} </p>
        </footer>
      </section>
    </div>`
}

window.weatherProject.components.createCitiesCheckbox = (city) => {
        return `
        <label class="checkbox column">            
            <input type="checkbox" id="${city}" class="cityCheckbox"  />
            ${city.replace(/_/g, " ")}
        </label>`
}