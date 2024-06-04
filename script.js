$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.slider').on('afterChange', function(event, slick, currentSlide){
        $('.slick-slide').removeClass('slick-current');
        $('.slick-center').addClass('slick-current');
    });
    
    // Trigger the afterChange event to initialize the first slide
    $('.slider').slick('slickGoTo', 0);
});