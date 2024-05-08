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

// Wait for the swiper container to be available in the DOM before initializing Swiper
waitForElement('.slide-content', initSwiper);

// BACK TO TOP
function waitForElement(selector, callback) {
  var element = document.querySelector(selector);
  if (element) {
    callback(element);
  } else {
    setTimeout(function() { waitForElement(selector, callback); }, 500);
  }
}

// Funkcja, która będzie inicjować Twój skrypt z jQuery
function initjQueryDependentScripts() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
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
}

// Czekaj na załadowanie biblioteki jQuery przed uruchomieniem skryptów zależnych od jQuery
waitForElement('script[src*="jquery"]', initjQueryDependentScripts);

function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        console.log(selector + ' found.');
        callback(element);
    } else {
        console.log(selector + ' not found, retrying...');
        setTimeout(function() { waitForElement(selector, callback); }, 500);
    }
}

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
}

function setupButtonObserver(button) {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && button.classList.contains('show')) {
                console.log('Back-to-top button class changed to show, reinitializing Swiper.');
                initSwiper();
            }
        });
    });

    observer.observe(button, {
        attributes: true
    });
    console.log('Observer set on back-to-top button.');
}

document.addEventListener('DOMContentLoaded', function() {
    waitForElement('button.back-to-top', setupButtonObserver);
});
