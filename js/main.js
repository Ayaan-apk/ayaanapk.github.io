document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"], .nav-links a, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default link behavior
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');

            // If the target is an anchor within the same page
            if (targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                // If the target is a different page
                window.location.href = targetId;
            }
        });
    });

    // Manual and Automatic Image Slider with Arrow Buttons
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slides img');
    let currentIndex = 0;
    let slideInterval;

    // Update Slide Position
    function updateSlide() {
        slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Next Slide
    function nextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlide();
    }

    // Previous Slide
    function prevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlide();
    }

    // Start Automatic Slide
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000); // Slide interval time in milliseconds
    }

    // Stop Automatic Slide
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Event Listeners for Arrow Buttons
    document.querySelector('.prev').addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    document.querySelector('.next').addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Start the slideshow if the slidesContainer exists
    if (slidesContainer) {
        startAutoSlide();
    }
});
