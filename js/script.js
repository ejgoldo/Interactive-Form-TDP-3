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
$('#colors-js-puns').hide();

// show only appropriate colors if one of the two theme options is selected. if not keep in display: none
$('#design').change(function(event) {
    if (event.target.value === 'js puns') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').show()
        $('#color option[value="darkslategrey"]').show()
        $('#color option[value="gold"]').show()
        $('#color option[value="tomato"]').hide()
        $('#color option[value="steelblue"]').hide()
        $('#color option[value="dimgrey"]').hide()
    } else if (event.target.value === 'heart js') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').hide()
        $('#color option[value="darkslategrey"]').hide()
        $('#color option[value="gold"]').hide()
        $('#color option[value="tomato"]').show()
        $('#color option[value="steelblue"]').show()
        $('#color option[value="dimgrey"]').show()
    } else {
        $('#colors-js-puns').hide();
    }
});
