window.weatherProject.components.createWeatherItem = (cityWeather) => {
    return `
    <div class="column is-4">
      <section class="card has-text-centered">
        <header class="card-header">
          <p class="card-header-title is-size-4 is-centered">
            ${cityWeather.city} + ${cityWeather.daily.daily.time[0]}
          </p>
        </header>
        <div class="card-image">
          <figure class="image">
            <img src="#" alt="Image">
          </figure>
        </div>
        <article class="card-content">
          <p class="content is-size-4">
            ${cityWeather.sunrise}
          </p>
        </article>
        <footer class="card-footer">
          <button class="card-footer-item button has-background-grey-lighter">Play</button>
          <button class="card-footer-item button has-background-grey-lighter">Open</button>
          <button class="card-footer-item button has-background-grey-lighter">Remove</button>
        </footer>
      </section>
    </div>`
}