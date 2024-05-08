function waitForElement(selector, callback) {
  var element = document.querySelector(selector);
  if (element) {
      callback(element);
  } else {
      setTimeout(function() { waitForElement(selector, callback); }, 500);
  }
}

// Function to initialize Swiper
function initSwiper() {
  var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
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
      breakpoints: {
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
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Twój kod używający jQuery
  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $('button.back-to-top').addClass('show');
    } else {
      $('button.back-to-top').removeClass('show');
    }
  });

  $('button.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});
