(() => {
  var mySwiper_room = new Swiper('.mySwiper_room', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 1000,
    loop: true,

    breakpoints: {
      // when window width is >= 414px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 1024px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 1280px
      640: {
        slidesPerView: 1,
      },
    },
  });

  var mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    freeMode: true,
    speed: 1500,

    autoplay: {
      delay: 2000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      // when window width is >= 414px
      414: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      // when window width is >= 930px

      930: {
        slidesPerView: 2,
        spaceBetween: 26,
      },
    },
    loop: true,
    slideToClickedSlide: true,
  });

  var mySwiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    freeMode: true,
    speed: 500,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 20,
      },
      // when window width is >= 414px
      1024: {
        spaceBetween: 34,
      },
      // when window width is >= 930px

      1280: {
        spaceBetween: 86,
      },
    },
    loop: true,
    slideToClickedSlide: true,

  });
})();

var mySwiper_0 = new Swiper('.mySwiper_0', {
  slidesPerView: 'auto',
  spaceBetween: 25,
  freeMode: true,
  speed: 500,

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  loop: true,
  slideToClickedSlide: true,
});