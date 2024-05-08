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

// Funkcja ustawiająca MutationObserver dla przycisku back-to-top
function setupButtonObserver() {
    const backButton = document.querySelector('button.back-to-top');
    if (!backButton) {
        console.log('Back-to-top button not found, observer not set.');
        return;
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && backButton.classList.contains('show')) {
                console.log('Back-to-top button class changed to show, reinitializing Swiper.');
                initSwiper(); // Re-inicjalizacja Swipera
            }
        });
    });

    observer.observe(backButton, {
        attributes: true // Monitoruje tylko zmiany atrybutów
    });
}

// Dodaj tę funkcję do Twojego skryptu, który jest już załadowany po załadowaniu strony
document.addEventListener('DOMContentLoaded', function() {
    setupButtonObserver();
});
