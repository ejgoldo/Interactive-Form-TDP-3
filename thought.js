// t-shirt color dropdown with jQuery
$('#color').empty();

$('#design').change(function(event) {
    if (event.target.value === 'js puns') {
        $('#color').empty();
        $('#color').append('<option>Cornflower Blue</option')
        $('#color').append('<option>Dark Slate Grey</option')
        $('#color').append('<option>Gold</option')
    } else if (event.target.value === 'heart js') {
        $('#color').empty();
        $('#color').append('<option>Tomato</option')
        $('#color').append('<option>Steel Blue</option')
        $('#color').append('<option>Dim Grey</option')
    } else {
        allColors.style.display = 'none';
    }
});