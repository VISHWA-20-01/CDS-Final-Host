/**
 * Technology Ticker - Enhanced Functionality
 * Features: Pause on hover, keyboard controls, intersection observer
 */

(function () {
    'use strict';

    const ticker = document.getElementById('tickerTrack');
    const tickerWrapper = document.querySelector('.ticker-wrapper');

    if (!ticker || !tickerWrapper) return;

    // Clone items for seamless loop (reduces HTML duplication)
    const items = Array.from(ticker.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true'); // Best practice for duplicate content
        ticker.appendChild(clone);
    });

    let isPaused = false;

    // Keyboard Controls: Space to pause/play
    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space' && isTickerInView()) {
            e.preventDefault();
            toggleTicker();
        }
    });

    function toggleTicker() {
        isPaused = !isPaused;
        if (isPaused) {
            ticker.style.animationPlayState = 'paused';
        } else {
            ticker.style.animationPlayState = 'running';
        }
    }

    function isTickerInView() {
        const rect = tickerWrapper.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Intersection Observer for performance
    // Pause animation when ticker is not visible
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting && !isPaused) {
                ticker.style.animationPlayState = 'paused';
            } else if (entry.isIntersecting && !isPaused) {
                ticker.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    observer.observe(tickerWrapper);

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        ticker.style.animationDuration = '80s'; // Slower for reduced motion
    }

    // Listen for changes to reduced motion preference
    prefersReducedMotion.addEventListener('change', function () {
        if (prefersReducedMotion.matches) {
            ticker.style.animationDuration = '80s';
        } else {
            ticker.style.animationDuration = '40s';
        }
    });

})();
