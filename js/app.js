$(document).ready(function(){

  var footerHeight = $('.footer').outerHeight();
  $('.sticky-page').css({
    'padding-bottom': footerHeight
  });

  $('.footer').css({
    'margin-top':-footerHeight
  });

  $(window).resize(function(){
    var footerHeight = $('.footer').outerHeight();
    $('.sticky-page').css({
      'padding-bottom': footerHeight
    });

    $('.footer').css({
      'margin-top':-footerHeight
    });
  });

  $(".main-slider .owl-carousel").owlCarousel({
    items : 1,
    navigation : true,
    pagination: false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav:true,
    navText: [
      "<i class='my-arrow-left'></i>",
      "<i class='my-arrow-right'></i>"
    ],
  });

  //init slick card
  if(document.querySelector('.slick')) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.slider-nav',
      infinite: false
    });

    $('.slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      infinite: false,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      prevArrow:"<button type='button' class='slick-prev'></button>",
      nextArrow:"<button type='button' class='slick-next'></button>"
    });
  }
});