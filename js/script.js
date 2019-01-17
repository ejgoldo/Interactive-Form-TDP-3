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
        $('#color option[value="cornflowerblue"]').attr('selected', true).show()
        $('#color option[value="darkslategrey"]').attr('selected', true).show()
        $('#color option[value="gold"]').attr('selected', true).show()
        $('#color option[value="tomato"]').attr('hidden', true).hide()
        $('#color option[value="steelblue"]').attr('hidden', true).hide()
        $('#color option[value="dimgrey"]').attr('hidden', true).hide()
    } else if (event.target.value === 'heart js') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').attr('hidden', true).hide()
        $('#color option[value="darkslategrey"]').attr('hidden', true).hide()
        $('#color option[value="gold"]').attr('hidden', true).hide()
        $('#color option[value="tomato"]').attr('selected', true).show()
        $('#color option[value="steelblue"]').attr('selected', true).show()
        $('#color option[value="dimgrey"]').attr('selected', true).show()
    } else {
        $('#colors-js-puns').hide();
    }
});
