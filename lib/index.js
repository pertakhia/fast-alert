function showAlert(message, color = 'red', position = 'top', duration = 3000) {
    const alertDiv = document.createElement('div');
    alertDiv.style.backgroundColor = color;
    alertDiv.style.position = 'fixed';
    alertDiv.style.color = 'white';
    alertDiv.style.width = '100%';
    alertDiv.style.padding = '1rem';
    alertDiv.style.textAlign = 'center';


    if(position === 'top') {
        alertDiv.style.top = 0;
        alertDiv.style.left = '50%';
        alertDiv.style.transform = 'translateX(-50%)';
    }  else if(position === 'bottom') {
        alertDiv.style.bottom = 0;
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

    // Remove the alert after 3 seconds depending on the duration
    setTimeout(() => {
        alertDiv.remove();
    }, duration);
}

export default showAlert;