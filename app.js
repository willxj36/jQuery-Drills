$(document).ready(function() {

    $('#textSubmit').keyup(function() {
        let boxEmpty = false;
        if($('#textSubmit').val() === '') {
            boxEmpty = true;
        };
        
        if(boxEmpty) {
            $('#btnSubmit').attr('disabled', 'disabled');
        } else {
            $('#btnSubmit').removeAttr('disabled');
        };
    });

    $('form').after('<div></div>');
    $('div').css('z-index', '-10');
    
    $('#btnSubmit').click(function(event){
        event.preventDefault();
        let boxText = $('input').val();
        //$('div').append($('<h2></h2>').text(boxText));
        alert('You pushed the button!');
        alert($('input').val());
        /*$('h2').mouseover(function() {
            $(this).css({
                'background-color': 'red',
                'border-radius': '10%'
            });
        });*/       //left off here, task 11
    });
    
});