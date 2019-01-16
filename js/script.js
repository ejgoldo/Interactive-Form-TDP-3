// focus on name input when page loads
const nameFocus = document.getElementById("name");
nameFocus.focus();

// job role section ************************************************************************
// other-title entered into HTML and hidden unless Other is selected
const otherTitle = document.getElementById('other-title');
otherTitle.style.display = 'none';

const jobRoles = document.getElementById('title');
jobRoles.addEventListener('change', (event) => {
    if (event.target.value === 'other') {
        otherTitle.style.display = '';
    } else {
        otherTitle.style.display = 'none';
    }
});

//t-shirt section ************************************************************************
const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');
const allColors = document.getElementById('colors-js-puns');

// hide shirt colors and Color: label if no theme is selected
allColors.style.display = 'none';

// show only appropriate colors if one of the two theme options is selected. if not keep in display: none
shirtDesign.addEventListener('change', (event) => {
    if (event.target.value === 'js puns') {
        allColors.style.display = '';
        for (let i=0; i<shirtColor.length; i++) {
            let chosenColors = shirtColor.options[i].value;
            if (chosenColors === 'tomato' || chosenColors === 'steelblue' || chosenColors === 'dimgrey') {
                shirtColor.options[i].remove();
                i--;
            }
        }
    } else if (event.target.value === 'heart js') {
        allColors.style.display = '';
        for (let i=0; i<shirtColor.length; i++) {
            let chosenColors = shirtColor.options[i].value;
            if (chosenColors === 'cornflowerblue' || chosenColors === 'darkslategrey' || chosenColors === 'gold') {
                shirtColor.options[i].remove();
                i--;
            }
        }
    } else {
        allColors.style.display = 'none';
    }
});

// so far, can hide the colors completely and when neither of the two themes are selected, its hidden again.
// also, able to display colors to each theme.

// TO FIX: currently when page loads, depending on which theme is selected, the respective colors show. however, after a theme is chosen, 
//         when you select another theme, no colors show. they are blank. 