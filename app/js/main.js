$(function () {

  $('.related-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4
  });

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
    starWidth: "16px",
    spacing: "14px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffd633",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="15pt" height="14pt" viewBox="0 0 15 14" version="1.1"><g><path d="M 6.753906 0.488281 L 5.050781 4.105469 L 1.246094 4.6875 C 0.566406 4.792969 0.292969 5.675781 0.785156 6.183594 L 3.539062 9 L 2.886719 12.976562 C 2.769531 13.695312 3.492188 14.234375 4.097656 13.898438 L 7.5 12.019531 L 10.902344 13.898438 C 11.507812 14.234375 12.230469 13.695312 12.113281 12.976562 L 11.460938 9 L 14.214844 6.183594 C 14.707031 5.675781 14.433594 4.792969 13.753906 4.691406 L 9.949219 4.105469 L 8.246094 0.488281 C 7.941406 -0.160156 7.058594 -0.167969 6.753906 0.488281 Z M 6.753906 0.488281 " /></g></svg >'
  });

  $('.star-small').rateYo({
    starWidth: "10px",
    spacing: "7px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffd633",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="10pt" height="9pt" viewBox="0 0 10 9" version="1.1"><g><path d="M 4.5 0.3125 L 3.367188 2.640625 L 0.832031 3.015625 C 0.375 3.082031 0.195312 3.648438 0.523438 3.972656 L 2.359375 5.785156 L 1.925781 8.34375 C 1.847656 8.804688 2.328125 9.152344 2.730469 8.933594 L 5 7.726562 L 7.269531 8.933594 C 7.671875 9.148438 8.152344 8.804688 8.074219 8.34375 L 7.640625 5.785156 L 9.476562 3.972656 C 9.804688 3.648438 9.625 3.082031 9.167969 3.015625 L 6.632812 2.640625 L 5.5 0.3125 C 5.296875 -0.101562 4.707031 -0.105469 4.5 0.3125 Z M 4.5 0.3125 " /></g></svg >'
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