$(function () {

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