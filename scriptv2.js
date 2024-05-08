// Function to wait for an element in the DOM
function waitForElement(selector, callback) {
  console.log('Looking for element:', selector);  // Log the search for the element
  var element = document.querySelector(selector);
  if (element) {
    console.log('Element found:', selector);  // Log if the element is found
    callback(element);
  } else {
    console.log('Element not found, retrying:', selector);  // Log if the element is not found
    setTimeout(function() { waitForElement(selector, callback); }, 500);
  }
}

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
  console.log('Swiper initialized.');  // Log after initializing Swiper
}

// Wait for the swiper container to be available in the DOM before initializing Swiper
waitForElement('.slide-content', initSwiper);

// Function that initializes jQuery dependent scripts
function initjQueryDependentScripts() {
  console.log('Initializing jQuery dependent scripts...');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      $('button.back-to-top').addClass('show');
      console.log('Back-to-top button shown.');  // Log when the button is shown
    } else {
      $('button.back-to-top').removeClass('show');
      console.log('Back-to-top button hidden.');  // Log when the button is hidden
    }
  });

  $('button.back-to-top').click(function() {
    console.log('Animating scroll to top...');  // Log before starting the animation
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    console.log('Scroll to top complete.');  // Log after completing the animation
    return false;
  });
}

// Wait for the jQuery library to load before running scripts dependent on jQuery
waitForElement('script[src*="jquery"]', initjQueryDependentScripts);

// Funkcjonalność do przycisku
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed.');

    // Ustawiamy nasłuchiwanie na elemencie body lub innym stałym elemencie,
    // który zawsze istnieje w strukturze strony.
    document.body.addEventListener('click', function(event) {
        console.log('Click detected on body. Event target:', event.target);

        // Sprawdzamy, czy element, który wywołał zdarzenie, jest przyciskiem, który nas interesuje.
        if (event.target.id === 'reinit-button') {
            console.log('Reinit button clicked. Initializing scripts...');
            reinitializeScripts();  // Wywołujemy funkcję ponownie inicjalizującą skrypty.
            console.log('Scripts reinitialized.');
        }
    });
});
