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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    arrows: true,
    nextArrow: '<i class="fa fa-arrow-right"></i>',
    prevArrow: '<i class="fa fa-arrow-left"></i>',
    focusOnSelect: true

  });
  

});