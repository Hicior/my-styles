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
    var observer = new MutationObserver(function(mutations) {
        let shouldReInit = false;  // Flaga determinująca potrzebę re-inicjalizacji
        mutations.forEach(function(mutation) {
            for (let node of mutation.addedNodes) {  // Przechodzimy przez wszystkie dodane węzły
                if (node.nodeType === 1 && node.matches('.slide-content, script[src*="jquery"]')) {  // Sprawdzamy, czy dodany węzeł to nasz interesujący element
                    shouldReInit = true;
                }
            }
        });

        if (shouldReInit) {
            debounceInit();  // Debouncowana funkcja inicjująca
        }
    });

    var config = { childList: true, subtree: true };
    observer.observe(document.body, config);
}

function debounceInit() {
    clearTimeout(window.debounceInitTimer);
    window.debounceInitTimer = setTimeout(function() {
        initSwiper();
        initjQueryDependentScripts();
    }, 500);  // Debounce timer ustawiony na 500 ms
}

// Inicjacja obserwatora razem z oczekiwaniem na element
waitForElement('.slide-content', function() {
    initSwiper();
    setupMutationObserver();
});
