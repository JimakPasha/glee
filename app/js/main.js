$(function () {

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