console.log("Skrypt się załadował");

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired. Setting up the button event listener.');

    var initButton = document.getElementById('initialize-button');
    if (initButton) {
        console.log('Button found in the DOM, adding click event listener.');
        initButton.addEventListener('click', function() {
            console.log('Button clicked. Initializing all components.');
            initializeAllComponents();
        });
    } else {
        console.log('Button not found in the DOM.');
    }
});

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

// Combined function to initialize all components
function initializeAllComponents() {
    initSwiper();
    initjQueryDependentScripts();
}
