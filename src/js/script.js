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


  //Modal
  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__description').text($('.catalogue-item__title').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

    //Validate-forms
  function validateForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите не меньше {0} символов")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Ваш email адрес должен быть в формате name@domain.com"
        }
      }
    });
  };

  validateForm('#consultation-form');
  validateForm('#consultation form');
  validateForm('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //Sending mail
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      date: $(this).serialize()
    }).done(function() {
      $(this).find('input').val('');
      $('#consultwtion, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');
      $('form').trigger('reset');
    });
    return false;
  });
});