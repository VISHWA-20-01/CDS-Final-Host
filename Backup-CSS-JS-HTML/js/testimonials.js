/**
 * Testimonial Carousel Logic
 * Handles the auto-rotation and navigation for the testimonials section.
 */

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-nav.prev');
    const nextBtn = document.querySelector('.testimonial-nav.next');
    const dotsContainer = document.querySelector('.testimonial-indicators');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;
    let cardsPerView = getCardsPerView();
    let totalSlides = Math.ceil(cards.length / cardsPerView);
    let autoPlayInterval;

    // Initialize
    createDots();
    updateCarousel();
    startAutoPlay();

    // Event Listeners
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            currentIndex = 0; // Reset to start
            createDots(); // Recreate dots
            updateCarousel();
        }
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1; // Loop to end
            }
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop to start
            }
            updateCarousel();
        });
    }

    // Touch Support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        stopAutoPlay();
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    }, { passive: true });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe Left (Next)
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe Right (Prev)
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1;
            }
            updateCarousel();
        }
    }

    const trackContainer = document.querySelector('.testimonials-track-container');

    // Helper Functions
    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        totalSlides = Math.ceil(cards.length / cardsPerView);

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('t-dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                stopAutoPlay();
                currentIndex = i;
                updateCarousel();
                startAutoPlay();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateCarousel() {
        const slideWidth = trackContainer.offsetWidth; // Width of the visible window
        const gap = 32; // 2rem = 32px (approx, based on CSS)
        // Actually, if we move directly by container width, we respect the flow if configured right.
        // Let's stick to simple container width translation for now.
        // But we need to account for the gap between the last item of page 1 and first of page 2?
        // Yes, the gap is part of the flow.

        // Better logic: Percentage of total cards?
        // Each card width is (100% - gaps) / cardsPerView.
        // Let's use simple CSS Transform X relative to Viewport width.
        // translateX( -currentIndex * 100 ) % works if the 'unit' is the viewport.
        // But transform % is typically relative to element width.

        // Pixel math is safest:
        // We want to shift by (container width + gap) * currentIndex.
        // But the container width ALREADY includes the cards + gaps visible.
        // So just shifting by container width should land mostly correctly.
        // Let's add a small buffer if needed, but container width is standard.

        let moveAmount = currentIndex * (slideWidth + 32); // Adding gap to ensure clear separation
        // Wait, 'gap' is inside the flex container.

        // Correct logic:
        // shift = currentIndex * (cardsPerView * (cardWidth + gap))
        // But cardWidth is dynamic.

        // SIMPLEST:
        // Use scrollLeft instead of transform!
        // trackContainer.scrollTo({ left: ..., behavior: 'smooth' });
        // This is much more robust than CSS transform for variable widths.

        const scrollAmount = currentIndex * trackContainer.offsetWidth;
        trackContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });

        // Update Dots
        const dots = document.querySelectorAll('.t-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }
});
