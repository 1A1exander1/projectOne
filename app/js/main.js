$(document).ready(function(){
    $('.features-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll:1,
        prevArrow:"<div class='arrowl'><img src='../img/arrowLeft.png' class='prev'> </img></div>",
        nextArrow:"<div class='arrowr'><img src='../img/arrowRight.png' class='next'></div>"
});
});