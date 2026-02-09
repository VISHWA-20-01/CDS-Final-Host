/* ===================================
   CDS Website - Utilities
   File: utils.js
   Purpose: Utility functions and helpers
   =================================== */

// ===================================
// Utility Functions
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// Loading Animation
// ===================================
function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loader-spinner">
            <div class="spinner"></div>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(15, 15, 35, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
    `;

    document.body.appendChild(loader);
}

function hideLoader() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
}

// ===================================
// Performance Optimization
// ===================================

// Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Services Carousel
// ===================================
// ===================================
// Services Carousel
// ===================================
function initServicesCarousel() {
    const carousel = document.getElementById('servicesCarousel');
    if (!carousel) return; // Safety check

    const prevBtn = document.getElementById('prevService');
    const nextBtn = document.getElementById('nextService');
    const dotsContainer = document.getElementById('carouselDots');

    if (!carousel || !prevBtn || !nextBtn) return;

    const cards = carousel.querySelectorAll('.service-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    const cardsPerView = window.innerWidth >= 992 ? 3 : (window.innerWidth >= 768 ? 2 : 1);
    const totalPages = Math.ceil(totalCards / cardsPerView);

    // Create dots
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToPage(i));
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        // Hide all cards
        cards.forEach(card => card.style.display = 'none');

        // Show current set of cards
        const start = currentIndex * cardsPerView;
        const end = Math.min(start + cardsPerView, totalCards);

        for (let i = start; i < end; i++) {
            cards[i].style.display = 'block';
        }

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        nextBtn.style.opacity = currentIndex === totalPages - 1 ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex === totalPages - 1 ? 'not-allowed' : 'pointer';

        // Refresh AOS to handle layout changes
        if (typeof AOS !== 'undefined') {
            setTimeout(() => AOS.refresh(), 100);
        }
    }

    function goToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < totalPages) {
            currentIndex = pageIndex;
            updateCarousel();
        }
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Auto-rotate carousel (optional)
    let autoRotate = setInterval(() => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000);

    // Pause auto-rotate on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
    carousel.addEventListener('mouseleave', () => {
        autoRotate = setInterval(() => {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000);
    });

    // Initial update
    updateCarousel();

    // Update on window resize (Only if width changes to prevent mobile scroll reload)
    let resizeTimer;
    let initialWidth = window.innerWidth;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth !== initialWidth) {
                initialWidth = window.innerWidth;
                location.reload();
            }
        }, 500);
    });
}


// ===================================
// Dynamic Copyright Year
// ===================================
function updateCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCopyrightYear();
});
