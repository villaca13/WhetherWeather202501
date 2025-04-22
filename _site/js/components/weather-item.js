window.weatherProject.components.createWeatherItem = (city, cityDaily, i) => {
    return `
    <div class="column is-4">
      <section class="card has-text-centered" >
        <header class="card-header">
         <a href="/cityFocus/?city=${city}" class="card-header-title is-size-4 is-centered">
            ${city.replace(/_/g, " ")}          
          </a>
        </header>

        <div class="card-image ">
          <figure class="image is-128x128 is-inline-block">	
            <img src="/images/${cityDaily.daily.weather_code[i]}.png" alt="Image">
          </figure>
        </div>

        <footer class="card-footer">
          <p class="card-footer-item"> ${cityDaily.daily.temperature_2m_min[i]} ${cityDaily.daily_units.temperature_2m_min} </p>
          <p class="card-footer-item"> ${cityDaily.daily.temperature_2m_max[i]} ${cityDaily.daily_units.temperature_2m_max} </p>
        </footer>
      </section>
    </div>`
}

window.weatherProject.components.createWeatherItemDaily = (day, cityDaily, i) => {
  return `
  <div class="column is-2">
    <section class="card has-text-centered" >
      <header class="card-header">
        <p class="card-footer-item">  ${day} </p>
      </header>

      <div class="card-image ">
        <figure class="image is-128x128 is-inline-block">	
          <img src="/images/${cityDaily.daily.weather_code[i]}.png" alt="Image">
        </figure>
      </div>

      <footer class="card-footer">
        <p class="card-footer-item"> ${cityDaily.daily.temperature_2m_min[i]} ${cityDaily.daily_units.temperature_2m_min} </p>
        <p class="card-footer-item"> ${cityDaily.daily.temperature_2m_max[i]} ${cityDaily.daily_units.temperature_2m_max} </p>
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

window.weatherProject.components.getMap = (city) => {
  switch(city) {
    case "Amsterdam":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.66565661412!2d4.8215604995263925!3d52.354741843979895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x"100%fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sie!4v1745319589723!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "Berlin":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603789133!2d13.259927200970798!3d52.50693861616704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sie!4v1745319426785!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "Copenhagen":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000.48505326213!2d12.511424169811423!3d55.67133656524535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen%2C%20Denmark!5e0!3m2!1sen!2sie!4v1745319851950!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "Cork":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78781.650"100%5408!2d-8.578891873262496!3d51.8988039062273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900891beb961%3A0xa00c7a99731c5d0!2sCork!5e0!3m2!1sen!2sie!4v1745319873826!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "New_York":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.13833254192!2d-74.29132015378873!3d40.69698239850413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sie!4v1745319892865!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "Paris":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77816185035!2d2.264634028831008!3d48.85893848"100%856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sie!4v1745319913579!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "San_Francisco":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.029826107435!2d-122.47879950209816!3d37.75776068869343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sie!4v1745319946625!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    case "Tromso":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44367.263078440694!2d18.907034163108587!3d69.66528869750917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c4526c3b71fd%3A0x23dca858e6ebed3!2zVHJvbXPDuCwgTm9yd2F5!5e0!3m2!1sen!2sie!4v1745319963338!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `    
    case "Waterford":
      return `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39084.3295454167!2d-7.154229294786516!3d52.24755033022008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842c69c63d9e44d%3A0xc5bb81888b67b9fb!2sWaterford!5e0!3m2!1sen!2sie!4v1745319510156!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
  }  

}

window.weatherProject.components.createWeatherHourlyList = (cityHourly , currentHour) => {
  let list = `
  <div class="column ">
      <table class="table is-fullwidth">
          <thead>
              <tr>
                  <th>Hour</th>
                  <th>Temp</th>
                  <th>Wind</th>
                  <th>Rain(%)</th>
                  <th>Weather</th>
              </tr>
          </thead>
          <tbody>
`
for(let i = currentHour; i < currentHour+6; i++) {
    if(i>23){
      list += `
      <tr>
          <td>${i-24+":00"}</td>
          <td>${cityHourly.hourly.temperature_2m[i]} ${cityHourly.hourly_units.temperature_2m}</td>
          <td>${cityHourly.hourly.wind_speed_10m[i]} ${cityHourly.hourly_units.wind_speed_10m}</td>
          <td>${cityHourly.hourly.precipitation_probability[i]} ${cityHourly.hourly_units.precipitation_probability}</td>
          <td><img class="image is-48x48" src="/images/${cityHourly.hourly.weather_code[i]}.png" alt="Image"></td>
      </tr>
    `
    }else{
    list += `
      <tr>
          <td>${i+":00"}</td>
          <td>${cityHourly.hourly.temperature_2m[i]} ${cityHourly.hourly_units.temperature_2m}</td>
          <td>${cityHourly.hourly.wind_speed_10m[i]} ${cityHourly.hourly_units.wind_speed_10m}</td>
          <td>${cityHourly.hourly.precipitation_probability[i]} ${cityHourly.hourly_units.precipitation_probability}</td>
          <td><img class="image is-48x48" src="/images/${cityHourly.hourly.weather_code[i]}.png" alt="Image"></td>
      </tr>
    `
    }
}

  return list += `
          </tbody>
      </table>
  </div>
  `
}