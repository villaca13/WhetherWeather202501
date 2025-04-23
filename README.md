
# Bouncing Ball Website

## Overview
Developed for the higher diploma in computer sciende at SETU. using only HTML and Css.
Project based on the boucing ball created for the programming assignment where can be foung here:[Bouncing Ball](https://github.com/villaca13/BouncingBall).
Html concepts: use of Divisions, Sections , IDs, Classes, naming of folder and files, Appropriate use of semantics.
Css concepts: Flexbox, Grid, Sizing, formatting elements, multiple stylesheets
Nunjucks concepts: templating, layouts, partials, DRY/WET . 
Site Generator: Eleventy. 
Deployment: Netlify.

---

## Features
- 7 html pages :  Home, About, instructions, settings, pricing and contact. 
- Responsive design for desktop.
- website to present and show intructions on how to play the Bouncing ball game and to use its features. 
- Flexbox for navigation 
-NEWWWW
- 7 days forecast 
- start at dashboar , click on the city you want and see city focus, 
- on city focus, click on day you want and get more details about the date you want 
- preferences are save and loaded when the wwbsite is loaded. 
last seen city is loaded as well. 
Nav bar and Nav burger is implemented
layouts, partials and templates are implemented

---

## Technologies Used

- **Frontend**: HTML, CSS, eleventy, Node 
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
├── css/
│   ├── aboutMe.css
│   ├── contact.css
│   ├── index.css
│   ├── instructions.css
│   ├── mainLayout.css
│   ├── navbar.css
│   ├── pricing.css
│   ├── ranking.css
│   └── settings.css
├── images/
├── node_modules/
├── videos/
├── .elenventy.js
├── aboutMe.njk
├── contact.njk
├── index.njk
├── instructions.njk
├── package-lock.json
├── package.json
├── pricing.njk
├── ranking.njk
├── README.md
├── reflection.pdf
├── settings.njk
└── template.docx
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
