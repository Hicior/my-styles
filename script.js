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
    console.log('jQuery scripts initialized.');
}

// Function to wait for an element in the DOM
function waitForElement(selector, callback) {
    console.log('Waiting for element:', selector);
    var element = document.querySelector(selector);
    if (element) {
        console.log('Element found:', selector);
        callback(element);
    } else {
        console.log('Element not found, retrying:', selector);
        setTimeout(function() { waitForElement(selector, callback); }, 500);
    }
}

function setupMutationObserver() {
    console.log('Setting up MutationObserver...');
    var target = document.querySelector('.sections');
    if (!target) {
        console.warn('Target element not found.');
        return; // Jeśli element nie istnieje, przerwij funkcję
    }
    console.log('Observer target found:', target);

    var observer = new MutationObserver(function(mutations) {
        console.log('Mutation observed.');
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length) {  // Sprawdzaj tylko dodanie nowych węzłów
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains('section-wrapper')) {  // Jeśli dodany węzeł jest odpowiednim elementem
                        console.log('Relevant node added:', node);
                        initSwiper();
                        initjQueryDependentScripts();
                    }
                });
            }
        });
    });

    var config = { childList: true, subtree: true };  // Obserwuj dodanie/usunięcie dzieci, w tym pod-drzew
    observer.observe(target, config);  // Rozpocznij obserwację
    console.log('MutationObserver set up complete.');
}
