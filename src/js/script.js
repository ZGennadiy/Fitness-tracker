$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="Next"></button>',
        dotsClass: 'slick-dots',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
                dots: true
              }
            }
        ]
      })
  });