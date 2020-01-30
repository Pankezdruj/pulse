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
  });