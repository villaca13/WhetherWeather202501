
# Wether Weather Website

## Overview
Developed for the higher diploma in computer sciende at SETU. using javascript, HTML and Bulma (css framework).
Website is deployed through Netlify and can be found here: [Wether Weather](whetherweathervillaca.netlify.app).
Javascript: Model–view–controller (MVC), Arrays, methods, events, Object-oriented programming (OOP), URL Parameters, APIs, Data handling.
Html concepts: use of Divisions, Sections , IDs, Classes, naming of folder and files, Appropriate use of semantics.
Bulma concepts: Columns, Navbar, color palette, form items, table, box, card.  
Nunjucks concepts: templating, layouts, partials, DRY/WET. 
Site Generator: Eleventy. 
Deployment: Netlify.

---

## Features
- 3 HTML pages:  Dashboard, City focus and Settings.
- Navigation bar/burger (Bulma framework)
1. ***Dashboard***
    -  9 Cities available and click on the city card to go to city focus and see details about the weather
2. ***City Focus***
    - Hourly forecast for the next 6 or 12 hours from the current hour of the current day
    - City location map embedded 
    - 7 Days forecast - Click on the day card to get more details about that specific day 
    - Day weather details - It changes according to the day card you click on. 
3. ***Settings***
    1. Cities checkboxes: enable/disable a city which is shown on the dashboard page 
    2. Preferences
        1. Show Map (Default: enabled): hide/show Embedded map on city focus
        2. Show 12 hours forecast ( Default: enabled ): if enabled, show hourly forecast for the next 12 hours, otherwise it shows only 6 hours
        3. Show Rain (Default: enabled) : Show the rain preciptation probability on both hourly forecast and day weather details 
       4. Show Feels Like (Default: enabled) : Show the max feels like temperature on both hourly forecast and day weather details 
       5. Dark Theme (Default: enabled) : Select dark theme for the website, otherwise it is a light theme. 

- **WEBSITE hidden functions below:** 
--- CITIES selected on the settings page are stored in the local storage and loaded on the next access.
--- PREFERENCES selected on the settings page are stored in the local storage and loaded on the next access.
--- LAST SEEN CITY is saved in the local storage and loaded on the next access.
--- DEFAULT CITY is the first one in the list. 

---

## Technologies Used

- **Frontend**: HTML, Javascript, BULMA (CSS Framework), eleventy, Node, Nunjucks 
- **Backend**: Netlify for hosting
- **Database**: Not Implemented
- **API**: Not Implemented

---

## Usage

1. Open command prompt and select the folder where you saved the files. Example: C:\Users\(USER)\BouncingBallWebsite
2. When inside the folder use the eleventy command below ( [Eleventy](https://www.11ty.dev/docs/) needs to be installed)
```
eleventy --serve
```
3. Open your browser and visit `http://localhost:8080`.
4. Home webpage will open and then use the navigation bar to go through the pages. 

---

## Project Structure

```
BouncingBallWebsite/
├── _includes/
│   ├── footer.njk
│   ├── header.njk
│   └── mainLayout.njk
├── _site/
├── images/
├── js/
│   ├── components/
|   |           └── weather-item.js
│   ├── data-definition.pdf
│   ├── generalFunctions.js
│   ├── navbar.js
│   ├── weather_data.js
│   └── weatherProject.js
├── node_modules/
├── .elenventy.js
├── cityFocus.njk
├── index.njk
├── package-lock.json
├── package.json
├── preferences.njk
├── README.md
└── reflection.pdf
```

---

## Contributors
- **Tiago Linhares Villaca** - HDIP in computer science Student with a passion for coding.

---

## Acknowledgments

- Navigation bar inspiration and code from [SkillThrive](https://www.youtube.com/watch?v=PwWHL3RyQgk&t=621s).
- "Contact" page inspiration and code from [CarPoolVenom](https://www.youtube.com/watch?v=nwEB3Wxh5N0).
- "About Me" page inspiration from [Nicepage](https://nicepage.com/ht/1362604/creative-designer-profile-html-template).
- "Pricing" page inspiration and code from [dcode](https://www.youtube.com/watch?v=jfh0ZJFhj2w).
- Nunjucks Conditional Statement Examples for Eleventy from [design2seo](https://design2seo.com/blog/web-development/11ty/nunjucks-if-statement-for-eleventy/).
- Readme template from [comp1800](https://github.com/comp1800/web_template).
- Creating table in HTML from [w3schools](https://www.w3schools.com/html/html_tables.asp).
- Profile avatar from [freepik](https://www.freepik.com/).
- Home icon from [Google icons](https://fonts.google.com/icons).

-------- New
"eleventy not found" error https://answers.netlify.com/t/eleventy-non-zero-exit-code-127-error/66900  answer  https://andrewborstein.com/blog/moving-my-blog-to-eleventy-part-2/

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 

https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/ 
---

## Limitations and Future Work
### Limitations

- Currently, the website is only designed for desktops. 
- Database, emails are not implemented yet. 
- The website design and layout can be further enhanced for improving user experience and usability.
- Currently, The website is based only on HTML, CSS. No java were allowed. 

### Future Work

- Implement the email service to allow people to contact us. 
- Improve the website design selecting a balanced colour palette and applying new website aesthetics trends.
- Create a Web app to allow people to play on the webpage. 
- Create a database to store data and create real rankings and statistics. 
- Improve the layout to make it responsive and nice for all types of devices/screen sizes. 

---

## License

Copyright (c) 2011-2024 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
