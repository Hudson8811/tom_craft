$(document).ready(function(){
    $('.card-slider-main').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        variableWidth: true,
        appendArrows:$('.card'),
        prevArrow:'<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.761257 19.2026L19.6306 0.333211C20.0749 -0.11107 20.7874 -0.11107 21.2317 0.333211C21.676 0.777493 21.676 1.49002 21.2317 1.9343L3.16708 19.999L21.2317 38.0636C21.676 38.5079 21.676 39.2204 21.2317 39.6647C21.0138 39.8826 20.7204 40 20.4354 40C20.1504 40 19.857 39.891 19.639 39.6647L0.769638 20.7953C0.325356 20.3594 0.325359 19.6385 0.761257 19.2026Z" fill="#999999"/></svg>',
        nextArrow:'<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2387 19.2026L2.36936 0.333211C1.92508 -0.11107 1.21255 -0.11107 0.76827 0.333211C0.323988 0.777493 0.323988 1.49002 0.76827 1.9343L18.8329 19.999L0.76827 38.0636C0.323988 38.5079 0.323988 39.2204 0.76827 39.6647C0.986219 39.8826 1.27961 40 1.56462 40C1.84963 40 2.14303 39.891 2.36098 39.6647L21.2304 20.7953C21.6746 20.3594 21.6746 19.6385 21.2387 19.2026Z" fill="#666666"/></svg>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
              }
            }
          ]
    });

    $('.card-modal-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: true, 
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows:$('.card-modal-slider'),
        prevArrow:'<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.761257 19.2026L19.6306 0.333211C20.0749 -0.11107 20.7874 -0.11107 21.2317 0.333211C21.676 0.777493 21.676 1.49002 21.2317 1.9343L3.16708 19.999L21.2317 38.0636C21.676 38.5079 21.676 39.2204 21.2317 39.6647C21.0138 39.8826 20.7204 40 20.4354 40C20.1504 40 19.857 39.891 19.639 39.6647L0.769638 20.7953C0.325356 20.3594 0.325359 19.6385 0.761257 19.2026Z" fill="#999999"/></svg>',
        nextArrow:'<svg width="22" height="40" viewBox="0 0 22 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2387 19.2026L2.36936 0.333211C1.92508 -0.11107 1.21255 -0.11107 0.76827 0.333211C0.323988 0.777493 0.323988 1.49002 0.76827 1.9343L18.8329 19.999L0.76827 38.0636C0.323988 38.5079 0.323988 39.2204 0.76827 39.6647C0.986219 39.8826 1.27961 40 1.56462 40C1.84963 40 2.14303 39.891 2.36098 39.6647L21.2304 20.7953C21.6746 20.3594 21.6746 19.6385 21.2387 19.2026Z" fill="#666666"/></svg>',
    });

    $('.card-modal-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.card-modal-nav div').removeClass('is-active');
        $(`.card-modal-nav div:nth-child(${nextSlide + 1})`).addClass('is-active');
    });

    $('.card-modal-nav div').click(function(){
        const slideIndex = $(this).index();
        $('.card-modal-slider').slick('slickGoTo', slideIndex, true);
    });

    $('.card-slider-item').click(function(){
        $('.card-modal').addClass('is-active');
    });

    $('.card-close').click(function(){
        $('.card-modal').removeClass('is-active');
    });
    
    $('.header-burger').click(function(e){
        e.preventDefault();
        $('.header-menu').addClass('is-active');
    });

    $('.menu-close').click(function(e){
        e.preventDefault();
        $('.header-menu').removeClass('is-active');
    });

    $('.catalog-filters-more').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.catalog-filters-item').addClass('is-active');
            $('.catalog-filters-close').addClass('is-active');
        } else{
            $(this).removeClass('is-active');
            $('.catalog-filters-item').removeClass('is-active');
            $('.catalog-filters-close').removeClass('is-active');
        }
    });

    $('.catalog-filters-title').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active');
            $('.catalog-filters-more').removeClass('is-active');
            $('.catalog-filters-item').removeClass('is-active');
            $('.catalog-filters-close').removeClass('is-active');
            $('.catalog-filters').removeClass('is-active');
        } else{
            $(this).removeClass('is-active');
            $('.catalog-filters-close').removeClass('is-active');
            $('.catalog-filters-item').removeClass('is-active');
            $('.catalog-filters-more').removeClass('is-active');
            $('.catalog-filters').removeClass('is-active');
        }
        
    });

    $('.catalog-filters-close').click(function(e){
        e.preventDefault();
        $(this).removeClass('is-active');
        $('.catalog-filters-more').removeClass('is-active');
        $('.catalog-filters-item').removeClass('is-active');
        $('.catalog-filters-title').removeClass('is-active');   
    });

    $('.catalog-filters-mobile-btn').click(function(e){
        $('.catalog-filters').addClass('is-active');
    });

    $('.filters-close').click(function(e){
        $('.catalog-filters').removeClass('is-active');
        $('.catalog-filters-close').removeClass('is-active');
        $('.catalog-filters-item').removeClass('is-active');
        $('.catalog-filters-more').removeClass('is-active');
    });

    $('.header-basket').click(function(){
        $('.emerge_basket-wrapper').addClass('is-active');
    });

    $('.emerge_basket-close, .emerge_basket-overlay').click(function(){
        $('.emerge_basket-wrapper').removeClass('is-active');
    });

    $('.emerge_basket-item_close').click(function(){
        $(this).parents('.emerge_basket-item').remove();

        if($('.emerge_basket-item').length == 0){
            $('.emerge_basket-content-title').addClass('is-active');
            $('.emerge_basket-pays').addClass('is-active');
        } else{
            $('.emerge_basket-content-title').removeClass('is-active');
            $('.emerge_basket-pays').removeClass('is-active');
        }
    });

    $(document).on("focus", ".payment-label input", function() {
        $(this).parent().addClass('is-active');
        $(this).parent().removeClass('error');
    });

    $(document).on("blur", ".payment-label input", function() {
        if ($(this).val() == "") {
            $(this).parent().removeClass('is-active');
            $(this).parent().addClass('error');
        } else {
            $(this).parent().removeClass("error");
        }
    });

    $('.payment-tabs-item--on').click(function(){
        $(this).addClass('is-active');
        $('.payment-tabs-item--off').removeClass('is-active');
        $('.payment-form').removeClass('disabled');
    });

    $('.payment-tabs-item--off').click(function(){
        $(this).addClass('is-active');
        $('.payment-tabs-item--on').removeClass('is-active');
        $('.payment-form').addClass('disabled');
    });

    $('.card-description-open').click(function(e){
        e.preventDefault();
        $(this).addClass('is-active');
        $('.card-description-close').addClass('is-active');
        $('.card-description').addClass('is-active');
    });

    $('.card-description-close').click(function(e){
        e.preventDefault();
        $(this).removeClass('is-active');
        $('.card-description-open').removeClass('is-active');
        $('.card-description').removeClass('is-active');
    });

    $('.card-size-btn').click(function(e){
        e.preventDefault();
        $('.size-modal').addClass('is-active');
    });

    $('.size-close').click(function(e){
        e.preventDefault();
        $('.size-modal').removeClass('is-active');
    });

});

// function set100vhVar() {
//     // If less than most tablets, set CSS var to window height.
//     let value = "100vh"
//     if (this.winWidth <= 1024) {
//         value = `${window.innerHeight}px`
//     }
//     document.documentElement.style.setProperty("--real100vh", value)
// }

// set100vhVar()