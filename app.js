$(document).ready(function() {

    $('#textSubmit').keyup(function() {
        if($('#textSubmit').text().length !== 0) {
            $('#btnSubmit').removeAttr('disabled');
        } else {
            $('#btnSubmit').attr('disabled');
        }
    });

    $('#btnSubmit').click(function(){
        alert('You pushed the button!');
        alert($('input').val());
    });
});