function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        callback(element);
    } else {
        setTimeout(() => waitForElement(selector, callback), 500);
    }
}

// Function to initialize Swiper
function initSwiper() {
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
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

// Function to add scrolling functionality
function addScrolling(scrollContainer) {
    const scrollAmount = 200;
    document.querySelector('.left-arrow').addEventListener('click', () => {
        scrollContainer.scrollLeft -= scrollAmount;
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        scrollContainer.scrollLeft += scrollAmount;
    });
}

// Wait for the swiper container to be available in the DOM before initializing Swiper
waitForElement('.slide-content', initSwiper);

// Wait for the scrollable container to be available in the DOM before adding scrolling functionality
waitForElement('.scrollable-wrapper', addScrolling);
