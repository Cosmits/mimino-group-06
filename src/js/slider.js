 var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

        }
      }
  }
  );