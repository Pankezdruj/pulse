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
                $('.catalog__element-upper').eq(i).toggleClass('catalog_visible');
                $('.catalog__long-description').eq(i).toggleClass('catalog_visible');
            })
        })
    };
    toggleSlide('.catalog__link-back');
    toggleSlide('.catalog__link-learn-more');

    $('button.intro__order-button').on('click', function() {
        $('.overlay__blackout').addClass('overlay__blackout_active');
        $('.overlay__element-request').addClass('overlay__element_active');
    });
    $('button.intro__order-call').on('click', function() {
        $('.overlay__blackout').addClass('overlay__blackout_active');
        $('.overlay__element-request').addClass('overlay__element_active');
    });
    $('button.catalog__button').on('click', function() {
        $('.overlay__blackout').addClass('overlay__blackout_active');
        $('.overlay__element-order').addClass('overlay__element_active');
    });
    $('button.overlay__button-buy').on('click', function(){
        $('.overlay__element-order').removeClass('overlay__element_active');
        $('.overlay__element-thanks').addClass('overlay__element_active');
    });
    $('.overlay__close').on('click', function(){
        $('.overlay__blackout').removeClass('overlay__blackout_active');
        $('.overlay__element').removeClass('overlay__element_active');
    });
  });