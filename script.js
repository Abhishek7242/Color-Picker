const slider = document.getElementById('colorRange');
const colorDisplay = document.querySelector('body');
const colorTextDisplay = document.getElementById('colorDisplay');


slider.addEventListener('input', () => {
    const value = slider.value;
    const color = `hsl(${value}, 100%, 50%)`;

    // Change the thumb color
    slider.style.setProperty('--thumb-color', color);

    // Change the color display background color
    colorDisplay.style.backgroundColor = color;
    colorTextDisplay.style.backgroundColor = color;
    colorTextDisplay.textContent = color;
});

// Initialize the color display
slider.dispatchEvent(new Event('input'));

