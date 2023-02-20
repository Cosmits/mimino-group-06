
 var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev", 
    },
    
    autoplay: {
        delay: 4000,
      },
      loop: true,

      breakpoints: {
        // when window width is >= 414px
        414: {
          slidesPerView: 1,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 1,
     
        },
        // when window width is >= 1280px
        1280: {
          slidesPerView: 1,

        }
      }}
  );