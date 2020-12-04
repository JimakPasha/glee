$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  });

  $('.product-page__num').styler();

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.star').rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffd633",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider(
    {
      type: 'double',
      onStart: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
      },
    });

  $('.slider-top__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.products__content', {
    selectors: {
      control: '.products__btn'
    },
    animation: {
      duration: 600
    }
  });
    var mixer = mixitup('.new-design__content', {
    selectors: {
      control: '.new-design__btn'
    },
    animation: {
      duration: 600
    }
  });
  
});