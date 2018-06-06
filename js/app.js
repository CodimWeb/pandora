$(document).ready(function(){

  if(document.querySelector('.order-form__phone')) {
    $('.order-form__phone').mask("+38 (999) 999-99-99");
  }

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
    responsive : {
      // breakpoint from 0 up
      0 : {
          items : 1,
      },
      // breakpoint from 480 up
      480 : {
          items : 2,
          margin: 15,
      },
      // breakpoint from 768 up
      768 : {
          items : 3,
          margin: 15,
      },
      // breakpoint from 992 up
      992 : {
          items : 3,
          // margin: 15,
      }
    }
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
      minimumResultsForSearch: Infinity,
      'containerCssClass': 'card__size-container',
      'dropdownCssClass': 'card__size-dropdown',
    });
  }

  if(document.querySelector('.sort')) {
    $('.sort').select2({
      placeholder: 'Сортировка',
      width: '100%',
      theme: "bootstrap",
      minimumResultsForSearch: Infinity,
      'containerCssClass': 'sort-container',
      'dropdownCssClass': 'sort-dropdown',
    });
  }



// //multiselect
//   $('.select__filter').each(function(){
//     var placeholder = $(this).data('placeholder');

//     $(this).multiselect({
//       minHeight: 0,
//       maxHeight: 250,
//       texts: {
//           placeholder: placeholder,
//       }
//     });
//   });

//select order-form
  $('.delivery-method-item').on('click', function(e){
    e.preventDefault();
    var text = $(this).text();
    $('#delivery-method .selected').text(text);
  });
// end


$('.cabinet__menu').on('click', function(){
  $('.cabinet__backdrop').toggleClass('active');
  $('.cabinet-left').toggleClass('active');
});

$('.cabinet__close').on('click', function(){
  $('.cabinet__backdrop').toggleClass('active');
  $('.cabinet-left').toggleClass('active');
});

$(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });


  $('body').on('change',".filter-check", function (){
    console.log($(this));
    console.log($('.dropdown.open input:checkbox:checked').length);
    var length = $('.dropdown.open input:checkbox:checked').length;
    if(length  < 1) {
      var name = $(this).parents('dropdown').find('button').data('name');
    } else if (length == 1) {
      var name = $(this).siblings('label').text();
    } else {
      var name = 'Выбрано ' + length;
    }
    $('.dropdown.open .category__filters__name').text(name);
  });
  
});
