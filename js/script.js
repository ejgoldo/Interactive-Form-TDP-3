// focus on name input when page loads
const nameFocus = document.getElementById("name");
nameFocus.focus();

// job role section ************************************************************************
// other-title entered into HTML and hidden unless Other is selected
$('#title option[value="other-title"]').remove();

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
        $('input[name="express"]').parent().addClass('disable').css('background-color', 'grey') 
    } else {
        $('input[name="express"]').removeAttr('disabled')
        $('input[name="express"]').parent().removeClass('disable').css('background-color', 'initial') 
    }
    // Express Workshop selected, JS Frameworks Workshop disabled
    if ($('input[name="express"]').prop('checked')) {
        $('input[name="js-frameworks"]').attr('disabled', true)
        $('input[name="js-frameworks"]').parent().addClass('disable').css('background-color', 'grey')  
    } else {
        $('input[name="js-frameworks"]').removeAttr('disabled')
        $('input[name="js-frameworks"]').parent().removeClass('disable').css('background-color', 'initial')  
    }

    // Javascript Libraries Workshop selected, Node.js Workshop disabled
    if ($('input[name="js-libs"]').prop('checked')) {
        $('input[name="node"]').attr('disabled', true)
        $('input[name="node"]').parent().addClass('disable').css('background-color', 'grey')  
    } else {
        $('input[name="node"]').removeAttr('disabled')
        $('input[name="node"]').parent().removeClass('disable').css('background-color', 'initial')  
    }
    // Node.js Workshop selected, Javascript Libraries Workshop disabled
    if ($('input[name="node"]').prop('checked')) {
        $('input[name="js-libs"]').attr('disabled', true)
        $('input[name="js-libs"]').parent().addClass('disable').css('background-color', 'grey')  
    } else {
        $('input[name="js-libs"]').removeAttr('disabled')
        $('input[name="js-libs"]').parent().removeClass('disable').css('background-color', 'initial')  
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
    let nameVal = /[a-z]+/i.test($('#name').val()); 
    if (nameVal) {
        $('#name').css('border', '2px solid green');
        $('#name').prev().text("Name:").show();
        $('#name').prev().css('color', 'black');
        return true;
    } else {
        $('#name').css('border', '2px solid red');
        $('#name').attr('placeholder', "Please enter your name.");
        $('#name').prev().text("Name: \(Name must be entered\)").show();
        $('#name').prev().css('color', 'red');
        return false;
    }
}
$('#name').on('input', name);

function email() {
	let emailVal = /^[^@]+@[^@.]+\.[a-z]+$/i.test($('#mail').val());
	if (emailVal) {
        $('#mail').css('border', '2px solid green');
        $('#mail').prev().text("Email:").show();
        $('#mail').prev().css('color', 'black');
        return true;
    } else {
        $('#mail').css('border', '2px solid red');
        $('#mail').attr('placeholder', "Please enter a valid email address.")
        $('#mail').prev().text("Email: \(Email must be entered in the correct format\)").show();
        $('#mail').prev().css('color', 'red');
        return false;
    }
}
$('#mail').on('input', email);


// require at least one checkbox to be checked
function oneCheck () {
    if ($('input:checkbox:checked').length > 0) {
        $('.activities legend').css('color', 'black');
        $('.activities legend').text('Register for Activities');
        return true;
    } else {
        $('.activities legend').css('color', 'red');
        $('.activities legend').text('Register for Activities - please select at least 1 activity from the list');
        return false;
    }
}
$('.activities').change(oneCheck);


// Credit card: make sure each option in credit card is entered or selected

// cc number
function ccNumber () {
    if ($('#payment option:selected').val() === 'credit card') {
        let ccVal = /^\d{13,16}$/.test($('#cc-num').val());
        if (ccVal === false) {
            $('#cc-num').prev().css('color', 'red').css('font-size', '.8em');
            $('#cc-num').prev().text("Card Number: - Please enter a credit card number that is between 13 and 16 digits long").show();
            if ($('#cc-num').val() === '') {
                $('#cc-num').prev().text("Card Number: - Please enter your card number").show();
            }
            return false;
        } else {
            $('#cc-num').prev().text('Card Number:');
            $('#cc-num').prev().css('color', 'black').css('font-size', 'initial');
            return true;
        }
    }
}
$('#cc-num').on('input', ccNumber);

// zip code
function zipCode () {
    let needZip = /^\d{5}$/.test($('#zip').val());
    if (needZip === false) {
        $('#zip').prev().css('color', 'red').css('font-size', '.8em');
        $('#zip').prev().text("Zip Code: - Your zip code must be 5 digits long.").show();
        if ($('#zip').val() === '') {
            $('#zip').prev().text("Zip Code: - Please enter your zip code").show();
        } 
        return false;
    } else {
        $('#zip').prev().text('Zip Code:');
        $('#zip').prev().css('color', 'black').css('font-size', 'initial');
        return true;
    }
}
$('#zip').on('input', zipCode);

// cvv code 
function cvvCode () {
    let needCVV = /^\d{3}$/.test($('#cvv').val());
    if (needCVV === false) {
        $('#cvv').prev().css('color', 'red').css('font-size', '.8em');
        $('#cvv').prev().text("CVV: - Your CVV should be 3 digits long.").show();
        if ($('#cvv').val() === '') {
            $('#cvv').prev().text("CVV: - Please enter your credit card security code.").show();
        } 
        return false;
    } else {
        $('#cvv').prev().text('CVV:');
        $('#cvv').prev().css('color', 'black').css('font-size', 'initial');
        return true;
    }
}
$('#cvv').on('input', cvvCode);


// form validation at submission ************************************************************************

$('form').on('submit', function(event) {
    let result = true;
    result = result && name();
    result = result && email();
    result = result && oneCheck();
    if($('#payment option:selected').val() === 'credit card') {
        result = result && ccNumber();
        result = result && zipCode();
        result = result && cvvCode();
    }

    // if there are errors, page reloads to top of the page and displays which field is wrong
    if (!result) {
        event.preventDefault(); 
        $('#name').focus();
    }
});
