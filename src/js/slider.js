(() => {
  var swiper = new Swiper('.mySwiper_room', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
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

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    // allowSlideNext: true,
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
    //   autoplay: {
    // delay: 3000,
    //   },
    loop: true,
    slideToClickedSlide: true,

    // centeredSlides: true,
  });

  var swiper = new Swiper('.mySwiper_2', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    // allowSlideNext: true,
    freeMode: true,
    speed: 1500,

    // autoplay: {
    //   delay: 2000,
    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is >= 414px
      1024: {
        slidesPerView: 3,
        spaceBetween: 34,
      },
      // when window width is >= 930px

      1280: {
        slidesPerView: 3,
        spaceBetween: 86,
      },
    },
    //   autoplay: {
    // delay: 3000,
    //   },
    loop: true,
    slideToClickedSlide: true,

    // centeredSlides: true,
  });
})();
