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
      });

      $('ul.catalogue__tabs').on('click', 'li:not(.catalogue__tab_active)', function() {
        $(this)
          .addClass('catalogue__tab_active').siblings().removeClass('catalogue__tab_active')
          .closest('div.container').find('div.catalogue__content').removeClass('catalogue__content_active').eq($(this).index()).addClass('catalogue__content_active');
      });

      

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalogue-item__product').eq(i).toggleClass('catalogue-item__product_active');
            $('.catalogue-item__product-details').eq(i).toggleClass('catalogue-item__product-details_active');
          })
        });
      };

      toggleSlide('.catalogue-item__link-more');
      toggleSlide('.catalogue-item__link-back');
  });