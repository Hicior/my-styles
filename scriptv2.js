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

// Function that initializes jQuery dependent scripts
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

// Function to wait for an element in the DOM
function waitForElement(selector, callback) {
    var element = document.querySelector(selector);
    if (element) {
        callback(element);
    } else {
        setTimeout(function() { waitForElement(selector, callback); }, 500);
    }
}

// Setup MutationObserver to reinitialize scripts on DOM changes
function setupMutationObserver() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                waitForElement('.slide-content', initSwiper);
                waitForElement('script[src*="jquery"]', initjQueryDependentScripts);
            }
        });
    });

    var config = { childList: true, subtree: true };
    observer.observe(document.body, config);
}

// Initialize the swiper and set up the mutation observer after the swiper container is detected
waitForElement('.slide-content', function() {
    initSwiper();
    setupMutationObserver();
});
