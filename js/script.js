$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToScroll: 1,
        slideToShow: 3,
        autoplay: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
  
});