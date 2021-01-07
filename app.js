$(document).ready(function() {

    //checks if box is empty and enables or disables depending on contents
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

    $('body').append('<ul></ul>');
    
    //all code to be executed on button click needs to go in here
    $('#btnSubmit').click(function(event){
        event.preventDefault();
        let boxText = $('input').val();
        $('ul').append($('<li></li>').text(boxText));
        $('li').click(function(event) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            $(event.target).css('color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
        });
        $('li').dblclick(function(event) {
            $(event.target).remove();
        })
        alert('You pushed the button!');
        alert($('input').val());
        
        
        //commented out code for creating h2
        /*$('div').append($('<h2></h2>').text(boxText));
        $('h2').mouseover(function() {
            $(this).css({
                'background-color': 'red',
                'border-radius': '10%'
            });
        });*/
    });
    
});