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
    // JS Frameworks Workshop selected, Express Workshop disabled
    if ($('input[name="js-frameworks"]').prop('checked')) {
        $('input[name="express"]').attr('disabled', true)
        $('input[name="express"]').parent().addClass('disable') 
    } else {
        $('input[name="express"]').removeAttr('disabled')
        $('input[name="express"]').parent().removeClass('disable') 
    }
    // Express Workshop selected, JS Frameworks Workshop disabled
    if ($('input[name="express"]').prop('checked')) {
        $('input[name="js-frameworks"]').attr('disabled', true)
        $('input[name="js-frameworks"]').parent().addClass('disable') 
    } else {
        $('input[name="js-frameworks"]').removeAttr('disabled')
        $('input[name="js-frameworks"]').parent().removeClass('disable') 
    }

    // Javascript Libraries Workshop selected, Node.js Workshop disabled
    if ($('input[name="js-libs"]').prop('checked')) {
        $('input[name="node"]').attr('disabled', true)
        $('input[name="node"]').parent().addClass('disable') 
    } else {
        $('input[name="node"]').removeAttr('disabled')
        $('input[name="node"]').parent().removeClass('disable') 
    }
    // Node.js Workshop selected, Javascript Libraries Workshop disabled
    if ($('input[name="node"]').prop('checked')) {
        $('input[name="js-libs"]').attr('disabled', true)
        $('input[name="js-libs"]').parent().addClass('disable') 
    } else {
        $('input[name="js-libs"]').removeAttr('disabled')
        $('input[name="js-libs"]').parent().removeClass('disable') 
    }
}); 

// price total based on selections will appear right under the activities checkbox

$('.activities').append('<h3 class="total">Total price: $0</h3>');

$('.activities').on('click', function() {
    let price = 0
    if ($('input[name="all"]').prop('checked')) {
        price += 200;
    }

    if ($('input[name="js-frameworks"]').prop('checked')) {
        price += 100;
    }
    if ($('input[name="js-libs"]').prop('checked')) {
        price += 100;
    }
    if ($('input[name="express"]').prop('checked')) {
        price += 100;
    }
    if ($('input[name="node"]').prop('checked')) {
        price += 100;
    }
    if ($('input[name="build-tools"]').prop('checked')) {
        price += 100;
    }
    if ($('input[name="npm"]').prop('checked')) {
        price += 100;
    }

    $('.total').html("Total price: $" + price);
});


// payment info section ************************************************************************

// hide select payment method option from the dropdown since credit card is the default option
$('#payment option[value="select_method"]').hide();
$('#payment option[value="credit card"]').attr('selected', '');

// adding ID's paypal and bitcoin to respective divs
const paypal = $('#credit-card').next();
const bitcoin = $('#credit-card').next().next();

// also hide the Paypal and Bitcoin payment options since Credit card is the default selection.
// also create variable with function that will display the selected option and hide the rest
paypal.hide();
bitcoin.hide();

const newPayment = function(paymentSelected) {
    $('#credit-card').hide();
    $(paypal).hide();
    $(bitcoin).hide();
    $(paymentSelected).show();
  }

// function with switch statement to display the correct info based on user selection
  $('#payment').on('change', function() {
    switch ($('#payment').val()) {
      case 'credit card':
        newPayment($('#credit-card'));
        break;
      case 'paypal':
        newPayment(paypal);
        break;
      case 'bitcoin':
        newPayment(bitcoin);
        break;
    }
  });


// form validation ************************************************************************

// name and email validation
function name() {
    let nameInput = $(this);
    let nameVal = nameInput.val();
    if (nameVal) {
        nameInput.css('border', '2px solid green');
        $('#name').prev().text("Name:").show();
        $('#name').prev().css('color', 'black');
    } else {
        nameInput.css('border', '2px solid red');
        nameInput.attr('placeholder', "Please enter your name.");
        $('#name').prev().text("Name: \(Name must be entered\)").show();
        $('#name').prev().css('color', 'red');
    }
}
$('#name').on('input', name);

function email() {
    let emailInput=$(this);
	let corrEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let emailVal = corrEmail.test(emailInput.val());
	if (emailVal) {
        emailInput.css('border', '2px solid green');
        $('#mail').prev().text("Email:").show();
        $('#mail').prev().css('color', 'black');
    } else {
        emailInput.css('border', '2px solid red');
        emailInput.attr('placeholder', "Please enter a valid email address.")
        $('#mail').prev().text("Email: \(Email must be entered in the correct format\)").show();
        $('#mail').prev().css('color', 'red');
    }
}
$('#mail').on('input', email);


// require at least one checkbox to be checked
function oneCheck () {
    
}