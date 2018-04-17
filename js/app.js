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

  $(".recomend-slider").owlCarousel({
    items : 3,
    navigation : true,
    pagination: false,
    loop:true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    nav:true,
    navText: [
      "<i class='my-arrow-left'></i>",
      "<i class='my-arrow-right'></i>"
    ],
  });

  $('.recomend-slider .product-item').on('mouseenter',function(e){
    $(this).parents('.recomend-slider').trigger('stop.owl.autoplay');
    console.log('enter');
  })

  $('.recomend-slider .product-item').on('mouseleave',function(e){
    $(this).parents('.recomend-slider').trigger('play.owl.autoplay');
  })

  if(document.querySelector('.card__size')) {
    $('.card__size').select2({
      placeholder: 'Размер:',
      width: '100%',
      theme: "bootstrap",
      minimumResultsForSearch: Infinity
    });
  }

  $('.select__filter').each(function(){
    var placeholder = $(this).data('placeholder');

    $(this).multiselect({
      minHeight: 0,
      maxHeight: 250,
      texts: {
          placeholder: placeholder,
      }
    });
  });
  
});
