// Function to initialize Swiper
function initSwiper() {
  console.log('Initializing Swiper...');
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
  console.log('Swiper initialized.');
}

// Function that initializes jQuery dependent scripts
function initjQueryDependentScripts() {
  console.log('Initializing jQuery dependent scripts...');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      $('button.back-to-top').addClass('show');
      console.log('Back-to-top button shown.');
    } else {
      $('button.back-to-top').removeClass('show');
      console.log('Back-to-top button hidden.');
    }
  });

  $('button.back-to-top').click(function() {
    console.log('Animating scroll to top...');
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    console.log('Scroll to top complete.');
    return false;
  });
}

// Combine initialization functions into one
function initializeAllComponents() {
  initSwiper();
  initjQueryDependentScripts();
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  var initButton = document.getElementById('initialize-button');
  if (initButton) {
    initButton.addEventListener('click', initializeAllComponents);
  }
});
