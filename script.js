var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

document.addEventListener('DOMContentLoaded', (event) => {
  const scrollAmount = 200; // The amount to scroll, adjust as needed

  const scrollContainer = document.querySelector('.scrollable-wrapper');
  document.querySelector('.left-arrow').addEventListener('click', () => {
      // Scroll left
      scrollContainer.scrollLeft -= scrollAmount;
  });

  document.querySelector('.right-arrow').addEventListener('click', () => {
      // Scroll right
      scrollContainer.scrollLeft += scrollAmount;
  });
});
