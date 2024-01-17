# fast-alert

A lightweight JavaScript library for displaying customizable alerts in the browser.

## Installation

Install the package using npm: 

```bash
npm install fast-alert


### usage 


import showAlert from "fast-alert";

// Example with default values default width depends content
showAlert('This is a red alert at the top');

// Example with custom values
showAlert('This is a red alert at the top', '100%', 'white', 'red', 'top', 1000 )


/**
 * Displays an alert with the specified message, color, position, and duration.
 *
 * @param {string} message - The message to be displayed in the alert.
 * @param {string} width - alert div width default is auto
 * @param {string} textColor - The color of the alert text.
 * @param {string} backgroundColor - The background  of the alert box.
 * @param {string} position - The position of the alert. Can be one of 'top', 'bottom', 'center';
 * @param {number} duration - The duration of the alert in milliseconds.
 */
showAlert(message, width, textColor, backgroundColor, position, duration)



