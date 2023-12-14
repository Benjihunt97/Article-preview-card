$(document).ready(() => {

    $('.show-share').click(() => {

        $('.share').animate({
            'width': '140px'
        }, 500);      

    });

    $('span i').click((e) => {
        $(e.target).parent().animate({
            'width': '0'
        },500);
    });


});
