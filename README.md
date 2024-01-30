
# Tabbed Content Display

This is a simple project demonstrating how to create tabbed content display using HTML, CSS, and JavaScript.

## Overview

This project consists of a single HTML file (`index.html`), a CSS file (`style.css`), and a JavaScript file (`script.js`). The HTML file contains buttons representing different cities, and clicking on each button displays the corresponding information about the city.

## Features

- Clicking on a button displays information about the corresponding city.
- Only one city's information is displayed at a time, hiding the content of other cities.


## JavaScript Project Code Functions


### Functions

#### 1. `deleting()`

- **Description**: This function is triggered when a button with the class `"tablink"` is clicked. It hides all elements with the class `"tabcontent"` and then displays the content associated with the clicked city.
  
- **Steps**:
  1. Retrieve the text content of the clicked button, which represents the city name.
  2. Hide all elements with the class `"tabcontent"`.
  3. Retrieve the element with the `id` matching the city name.
  4. If the element exists, display it by setting its `display` style property to `"block"`.
  
#### 2. `openDefaultTab()`

- **Description**: This function is responsible for opening the default tab when the page loads. It triggers a click event on the button with the `id` `"defaultOpen"`, which typically represents the default city tab.
  
- **Steps**:
  1. Retrieve the element with the `id` `"defaultOpen"`.
  2. Trigger a click event on the element.

#### 3. Attaching Event Listeners

- **Description**: This section attaches event listeners to all elements with the class `"tablink"`, ensuring that the `deleting()` function is called when any of these elements are clicked.


### Key Learnings

- **HTML Structure**: Understanding how to structure HTML for tabbed content display using buttons and content sections.
- **CSS Styling**: Styling buttons and content sections to achieve desired visual layout.
- **Event Handling**: Understanding how to handle click events and trigger functions accordingly.
- **DOM Manipulation**: Manipulating the Document Object Model (DOM) to dynamically show/hide content based on user interactions.



## Project Structure

- `index.html`: Contains the structure of the webpage, including buttons for different cities and their corresponding content.
- `style.css`: Defines the styles for the webpage, including button styling and tab content layout.
- `script.js`: Implements the JavaScript functionality for displaying/hiding city content based on button clicks.

## Usage

To view the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/gkvgk2001/Tabbed-Content-Display.git
    ```

2. Open `index.html` in your web browser.
