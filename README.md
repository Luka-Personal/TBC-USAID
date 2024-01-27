<h1 align="center">Welcome to TBC-USAID-Academy 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> TBC-USAID Academy is a web application designed to showcase courses and information related to the TBC IT and TBC x USAID programs. The platform provides an interactive interface for users to explore courses, view program details, and stay informed about the latest updates.

# 🚀 Web Technologies Overview

## 💻 HTML, CSS, and JS

These three foundational web technologies collaboratively shape the front-end user interface.

## ⚡ ES6 Features

Embracing ECMAScript 2015 (ES6) features, such as arrow functions, template literals, and destructuring, enhances code readability and promotes concise, expressive JavaScript code.

## 🌐 Intersection Observer API

Employing the Intersection Observer API not only boosts performance but also enables scroll-based interactions, enhancing the overall user experience.

## 🏗️ Model-View-Controller (MVC) Architecture

Adopting the MVC architecture enhances code organization and maintainability, promoting a structured approach to development.

## ⚙️ Build Tool Consideration

The decision not to use Parcel(NPM) was deliberate. Anticipating challenges in importing mock data, especially images, within Parcel's configuration, opting for a custom build approach allows greater flexibility in handling and dynamically updating mock data without the constraints imposed by certain build tools.

## 🌐 No Libraries Used

Demonstrating a commitment to foundational skills, every feature in this project – from accordion to carousel – has been meticulously crafted without the use of any external libraries. This hands-on approach showcases a deep understanding of core HTML, CSS, and JavaScript, highlighting the ability to build robust and custom solutions from scratch. The absence of third-party dependencies underscores the dedication to showcasing a comprehensive knowledge of web development fundamentals.

## 📱 Universal Responsive Design

This meticulous design ensures a seamless user experience across screens and devices, adapting flawlessly to different sizes and orientations. Tested for cross-browser compatibility on Safari, Firefox, Chrome, and Edge, it guarantees a consistent, reliable experience.

## 🎬 Animation Frames and Throttlers

Leveraging animation frames in conjunction with throttlers optimizes function execution, providing smoother performance and enhancing overall responsiveness.

## 🚀 Lazy Loading

The integration of lazy loading improves page load speeds and optimizes image loading, contributing to an enhanced overall website performance.

## 🎧 Passive True on Listeners

By setting the 'passive' option to true on event listeners, we optimize the handling of user interactions, improving scrolling performance and responsiveness.

## 🔄 Dynamic Page Elements

Allowing every element on the page to be dynamic ensures that changes in mock data are reflected automatically, providing a seamless and up-to-date user experience. This dynamic nature enhances the agility of the web application, making it adaptable to evolving data and user requirements.

## 📁 Configuration File

Include a configuration file to centralize settings and parameters, improving maintainability and scalability.

## 📚 JDoc Comments

In this project, the utilization of JDoc comments serves as a noteworthy feature. JDoc comments enhance code documentation, making it more accessible and understandable. This feature aids developers in maintaining a clear understanding of the codebase and facilitates seamless collaboration within the team.

## 🎨 CSS Prefixes

Utilizing CSS prefixes is an integral part of this project's styling approach. By incorporating prefixes, we ensure compatibility across various browsers, mitigating potential styling inconsistencies. This practice enhances the cross-browser performance and consistency of the web application.

## 🔄 Clone the Repository

To acquire a local copy of this project, follow these steps to clone the repository:

1. **Clone the Repository:**

   - If you have Git installed, open a terminal or command prompt.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command to clone the repository:

     ```bash
     git clone https://github.com/your-username/TBC-USAID.git
     ```

     Replace "your-username" with your GitHub username and "your-repository" with the name of the repository.

   - If you don't have Git installed, you can install it from [Git](https://git-scm.com/).
   - Once installed, repeat the steps above.

## 🚀 Project Launch Instructions

To effortlessly launch and preview this project, follow the simple steps below:

1. **Install Visual Studio Code:**

   - If you don't have Visual Studio Code installed, download and install it from [Visual Studio Code](https://code.visualstudio.com/).

2. **Open the Project in Visual Studio Code:**

   - Clone or download this repository and open it using Visual Studio Code.

3. **Install Live Server Extension:**

   - Go to the Extensions view in Visual Studio Code by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
   - Search for "Live Server" and install the extension provided by Ritwick Dey.

4. **Launch Live Server:**
   - After installing the Live Server extension, locate the HTML file you want to preview in the explorer.
   - Right-click on the HTML file and select "Open with Live Server" from the context menu.
   - This will launch a development server, and your default web browser will open with the live preview of the project.

# Project Structure

```project-root
├───src
│   ├───css
│   │   ├───styles.css
│   │   └───queries.css
│   ├───img
│   │   ├───course-images
│   │   ├───footer-images
│   │   ├───header-images
│   │   ├───partners-images
│   │   └───svg-images
│   └───js
│       ├───controller.js
│       ├───model.js
│       ├───config.js
│       └───views
│           ├───accordionView.js
│           ├───carouselView.js
│           ├───coursesView.js
│           ├───headerView.js
│           ├───programView.js
│           └───View.js
│
├───index.html
└───readme.md
```

The project follows a structured organization to maintain clarity and modularity:

- **img/:/:** Contains images, icons, SVGs
- **views/:** Contains respective JavaScript view files for each part of the website, representing the primary code responsible for directly displaying content on the screen. This includes modular components such as cards, sliders, and accordions.
- **model.js** JavaScript file that stores essential mock data for carousel, accordion, and other components within the main application. This centralized location simplifies data management, aiding in testing and development for these specific features.
- **controller.js** JavaScript file that, following the MVC architecture, serves as the intermediary that connects the "model.js" to the respective view files. In this structure, the controller facilitates communication between the data and the presentation layer, ensuring a seamless interaction between the application's logic and its visual representation.
- **config.js** The "config.js" file holds key configurations for the application, centralizing crucial settings for easy reference and maintenance.
- **css/:** CSS files for styling.
- **index.html:** The main HTML file.

# Demo site

### ✨(https://tbc-usaid-react.netlify.app)

# Author

👤 **Luka Tsinaridze**

- Github: [@Luka-Personal](https://github.com/Luka-Personal)
