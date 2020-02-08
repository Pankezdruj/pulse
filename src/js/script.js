$(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<img class="carousel__arrow carousel__arrow_prev" src="../icon/prev-arrow.png" alt="prev-arrow"/>',
        nextArrow: '<img class="carousel__arrow carousel__arrow_next" src="../icon/next-arrow.png" alt="next-arrow"/>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ],
        dotsClass: 'carousel__dots'
    });

    $('ul.catalog__menu').on('click', 'li:not(.catalog__menu-button_chosen)', function() {
        $(this)
          .addClass('catalog__menu-button_chosen').siblings().removeClass('catalog__menu-button_chosen')
          .closest('div.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active').eq($(this).index()).addClass('catalog__wrapper_active');
      });
    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog__element-upper').eq(i).toggleClass('catalog__element-upper_active');
                $('.catalog__long-description').eq(i).toggleClass('catalog__long-description_active');
            })
        })
    };
    toggleSlide('.catalog__link-back');
    toggleSlide('.catalog__link-learn-more');

    $('button.intro__order-button').on('click', function() {
        $('.overlay__element-request, .overlay__blackout').fadeIn('medium');
    });
    $('button.intro__order-call').on('click', function() {
        $('.overlay__element-request, .overlay__blackout').fadeIn('medium');
    });
    $('button.catalog__button').each(function(i) {
        $(this).on('click', function() {
            $('.overlay__element-order .overlay__subheader').text($('.catalog__pulse-name').eq(i).text());
            $('.overlay__element-order, .overlay__blackout').fadeIn('medium');
        })
    });
    $('.overlay__close').on('click', function(){
        $('.overlay__blackout').fadeOut('medium');
        $('.overlay__element').fadeOut('medium');
    });
    
    function validateForms(form){
        $(form).validate({
            errorClass: "overlay__error",
            rules: {
                name: {
                    required: true,
                    minlength: 2 
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, напишите свое имя",
                    minlength: jQuery.validator.format("Нужно указать не менее {0} букв")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Нам нужен Ваш мейл, чтобы связаться с Вами",
                    email: "Ваш мейл должен быть в правильном формате"
                }
            }
        });
    };
    validateForms('#consultation-form');
    validateForms('.overlay__element-request form');
    validateForms('.overlay__element-order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99")

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('.overlay__element').fadeOut('medium');
            $('.overlay__blackout, .overlay__element-thanks').fadeIn('medium');
            $('form').trigger('reset');
        });
        return false;
    });

    //smooth scroll

    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#'").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top+"px"
        });
        return false;
    });

    new WOW().init();
  });