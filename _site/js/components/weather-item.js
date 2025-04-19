window.weatherProject.components.createWeatherItem = (city) => {
    return `
    <div class="column is-4">
      <section class="card has-text-centered" >
        <header class="card-header">
         <a href="/cityFocus/?name=${city}" class="card-header-title is-size-4 is-centered">
            ${city.replace(/_/g, " ")} 
          
          </a>
        </header>

        <div class="card-image">
          <figure class="image">
            <img src="#" alt="Image">
          </figure>
        </div>

        <footer class="columns card-footer">
          <p class="column is-6"> 12C </p>
          <p class="column is-6"> 12C </p>
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