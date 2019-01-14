// focus on name input when page loads
const nameFocus = document.getElementById("name");
nameFocus.focus();

// job role section ************************************************************************
// other-title entered into HTML and hidden unless Other is selected
const otherTitle = document.getElementById('other-title');
otherTitle.style.display = 'none';

const jobRoles = document.getElementById('title');
jobRoles.addEventListener('change', (event) => {
    if (jobRoles.value === 'other') {
        otherTitle.style.display = '';
    } else {
        otherTitle.style.display = 'none';
    }
});

//t-shirt section ************************************************************************
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');

//theme - JS Puns
shirtDesign.addEventListener('change', (event) => {
    if (shirtDesign.value === 'js puns') {
        
    } else {

    }
});

// theme - I love JS
shirtDesign.addEventListener('change', (event) => {
    if (shirtDesign.value === 'heart js') {
        
    } else {
        
    }
});
