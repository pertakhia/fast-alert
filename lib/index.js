function showAlert(message, width = 'auto', textColor = 'white', backgroundColor = 'red', position = 'center', duration = 3000) {
    const alertDiv = document.createElement('div');
    alertDiv.style.backgroundColor = backgroundColor;
    alertDiv.style.position = 'fixed';
    alertDiv.style.color = textColor;
    alertDiv.style.width = width;
    alertDiv.style.padding = '1rem';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.borderBottom = `5px solid ${textColor}`;

    // Add the CSS rules for the animation

    const cssRules = `
        @keyframes fadeout {
            to {
                border-bottom: 5px solid transparent;
            }
        }
    `;

    // Create a style element

    const styleElement = document.createElement('style');
    styleElement.innerHTML = cssRules;
    document.head.appendChild(styleElement);


    if(position === 'top') {
        alertDiv.style.top = '10px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
    }  else if(position === 'bottom') {
        alertDiv.style.bottom = '10px';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
    } else if(position === 'center') {
        alertDiv.style.top = '50%';
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translate(-50%, -50%)';
    }

    alertDiv.innerHTML = message;

    // Append the alert to the body
    document.body.appendChild(alertDiv);

    // Apply the duration animation
    durationAnimation(duration, alertDiv);

    // Remove the alert after 3 seconds depending on the duration
    setTimeout(() => {
        alertDiv.remove();
    }, duration);
}


function durationAnimation(duration, element) {
    // Set up CSS animation for the border-bottom property
    element.style.animation = `fadeout ${duration / 1000}s linear`;

    // Remove the animation after it completes
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}







export default showAlert;