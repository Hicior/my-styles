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

function setupMutationObserver() {
    var target = document.querySelector('.sections');  // Ustal cel obserwacji na div 'sections'
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {  // Sprawdzaj tylko dodanie nowych węzłów
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains('section-wrapper')) {  // Jeśli dodany węzeł jest odpowiednim elementem
                        initSwiper();
                        initjQueryDependentScripts();
                    }
                });
            }
        });
    });

    var config = { childList: true, subtree: true };  // Obserwuj dodanie/usunięcie dzieci, w tym pod-drzew
    observer.observe(target, config);  // Rozpocznij obserwację
}
