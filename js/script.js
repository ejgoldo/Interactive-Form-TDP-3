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

// hide shirt colors and Color: label if no theme is selected
$('#colors-js-puns').hide();

// show only appropriate colors if one of the two theme options is selected. if not keep in display: none
$('#design').change(function(event) {
    if (event.target.value === 'js puns') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').attr('selected', true).attr('hidden', false)
        $('#color option[value="darkslategrey"]').attr('hidden', false)
        $('#color option[value="gold"]').attr('hidden', false)
        $('#color option[value="tomato"]').attr('selected', false).attr('hidden', true)
        $('#color option[value="steelblue"]').attr('hidden', true)
        $('#color option[value="dimgrey"]').attr('hidden', true)
    } else if (event.target.value === 'heart js') {
        $('#colors-js-puns').show();
        $('#color option[value="cornflowerblue"]').attr('selected', false).attr('hidden', true)
        $('#color option[value="darkslategrey"]').attr('hidden', true)
        $('#color option[value="gold"]').attr('hidden', true)
        $('#color option[value="tomato"]').attr('selected', true).attr('hidden', false)
        $('#color option[value="steelblue"]').attr('hidden', false)
        $('#color option[value="dimgrey"]').attr('hidden', false)
    } else {
        $('#colors-js-puns').hide();
    }
});

// register for activities section ************************************************************************

// if an option is checked by user, other conflicting objects with same time are disabled. if unclicked, option becomes available once more
$('.activities').change(function() {
    // JS Frameworks Worksho selected, Express Workshop disabled
    if ($('input[name="js-frameworks"]').prop('checked')) {
        $('input[name="express"]').attr('disabled', true)
        $('input[name="express"]').parent().addClass('disable') 
    } else {
        $('input[name="express"]').removeAttr('disabled')
        $('input[name="express"]').parent().removeClass('disable') 
    }
}); 
