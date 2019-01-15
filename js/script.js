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
const allColors = document.getElementById('colors-js-puns');
const jsPuns = document.querySelectorAll('#color option:nth-child(-n+3)');
const heartJs = document.querySelectorAll('#color option:nth-child(n+4)');

// hide shirt colors and Color: label if no theme is selected
allColors.style.display = 'none';

// show only appropriate colors if one of the two theme options is selected. if not keep in display: none
shirtDesign.addEventListener('change', (event) => {
    if (shirtDesign.value === 'js puns') {
        allColors.style.display = '';
        allColors.removeChild(heartJs[i]);
    } else if (shirtDesign.value === 'heart js') {
        allColors.style.display = '';
        allColors.removeChild(jsPuns[i]);
    } else {
        allColors.style.display = 'none';
    }
});

// so far, can hide the colors completely and when neither of the two themes are selected, its hidden again.
// TO FIX: only displaying the colors necessary when one theme is selected and hiding the rest