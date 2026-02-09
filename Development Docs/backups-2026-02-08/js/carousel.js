/* ===================================
   CDS Website - Mobile Carousel Enhancement
   File: carousel.js
   Purpose: Enhanced mobile carousel with navigation & indicators
   Optimized for: iOS/Android, Cross-browser compatibility
   =================================== */

(function() {
    'use strict';

    // ===================================
    // Configuration
    // ===================================
    const CONFIG = {
        mobileBreakpoint: 640,
        scrollBehavior: 'smooth',
        autoInitDelay: 100,
        debounceDelay: 150,
        indicatorUpdateThrottle: 100
    };

    // ===================================
    // Utility Functions
    // ===================================
    
    /**
     * Debounce function for performance optimization
     */
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

    /**
     * Throttle function for scroll events
     */
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Check if device is mobile based on screen width
     */
    function isMobile() {
        return window.innerWidth <= CONFIG.mobileBreakpoint;
    }

    /**
     * Detect iOS devices for specific optimizations
     */
    function isIOS() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    /**
     * Detect Android devices
     */
    function isAndroid() {
        return /Android/.test(navigator.userAgent);
    }

    // ===================================
    // Carousel Class
    // ===================================
    class OfferingsCarousel {
        constructor(container) {
            this.container = container;
            this.grid = container.querySelector('.offerings-grid');
            this.items = Array.from(this.grid.querySelectorAll('.offering-item'));
            this.currentIndex = 0;
            this.isInitialized = false;
            
            // Navigation elements
            this.navContainer = null;
            this.prevButton = null;
            this.nextButton = null;
            this.indicators = null;
            
            // Bind methods
            this.handleScroll = throttle(this.updateIndicators.bind(this), CONFIG.indicatorUpdateThrottle);
            this.handleResize = debounce(this.handleResponsiveChange.bind(this), CONFIG.debounceDelay);
            
            this.init();
        }

        /**
         * Initialize carousel
         */
        init() {
            if (!isMobile()) return;
            
            this.createNavigationArrows();
            this.createScrollIndicators();
            this.attachEventListeners();
            this.updateIndicators();
            this.isInitialized = true;
            
            // iOS-specific optimizations
            if (isIOS()) {
                this.applyIOSOptimizations();
            }
            
            // Android-specific optimizations
            if (isAndroid()) {
                this.applyAndroidOptimizations();
            }
        }

        /**
         * Create navigation arrow buttons
         */
        createNavigationArrows() {
            // Create navigation container
            this.navContainer = document.createElement('div');
            this.navContainer.className = 'carousel-navigation';
            this.navContainer.setAttribute('aria-label', 'Carousel Navigation');
            
            // Previous button
            this.prevButton = this.createArrowButton('prev', 'Previous offerings');
            this.prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            
            // Next button
            this.nextButton = this.createArrowButton('next', 'Next offerings');
            this.nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            
            this.navContainer.appendChild(this.prevButton);
            this.navContainer.appendChild(this.nextButton);
            
            // Insert navigation before grid
            this.grid.parentElement.insertBefore(this.navContainer, this.grid);
            
            // Initial button state
            this.updateNavigationButtons();
        }

        /**
         * Create individual arrow button
         */
        createArrowButton(direction, ariaLabel) {
            const button = document.createElement('button');
            button.className = `carousel-arrow carousel-arrow-${direction}`;
            button.setAttribute('aria-label', ariaLabel);
            button.setAttribute('type', 'button');
            
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scroll(direction);
            });
            
            return button;
        }

        /**
         * Create scroll indicator dots
         */
        createScrollIndicators() {
            const indicatorContainer = document.createElement('div');
            indicatorContainer.className = 'carousel-indicators';
            indicatorContainer.setAttribute('role', 'tablist');
            indicatorContainer.setAttribute('aria-label', 'Carousel position indicators');
            
            this.items.forEach((item, index) => {
                const dot = document.createElement('button');
                dot.className = 'carousel-indicator';
                dot.setAttribute('role', 'tab');
                dot.setAttribute('aria-label', `Go to offering ${index + 1}`);
                dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
                dot.setAttribute('type', 'button');
                
                dot.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.scrollToIndex(index);
                });
                
                indicatorContainer.appendChild(dot);
            });
            
            this.indicators = indicatorContainer;
            this.grid.parentElement.appendChild(indicatorContainer);
        }

        /**
         * Scroll to specific direction
         */
        scroll(direction) {
            const scrollAmount = this.grid.offsetWidth * 0.85; // Match card width
            const currentScroll = this.grid.scrollLeft;
            const targetScroll = direction === 'next' 
                ? currentScroll + scrollAmount 
                : currentScroll - scrollAmount;
            
            this.grid.scrollTo({
                left: targetScroll,
                behavior: CONFIG.scrollBehavior
            });
        }

        /**
         * Scroll to specific index
         */
        scrollToIndex(index) {
            if (index < 0 || index >= this.items.length) return;
            
            const item = this.items[index];
            const scrollLeft = item.offsetLeft - this.grid.offsetLeft;
            
            this.grid.scrollTo({
                left: scrollLeft,
                behavior: CONFIG.scrollBehavior
            });
            
            this.currentIndex = index;
            this.updateIndicators();
        }

        /**
         * Update scroll indicators based on current position
         */
        updateIndicators() {
            if (!this.indicators) return;
            
            const scrollLeft = this.grid.scrollLeft;
            const itemWidth = this.items[0].offsetWidth;
            const gap = parseInt(getComputedStyle(this.grid).gap) || 16;
            const newIndex = Math.round(scrollLeft / (itemWidth + gap));
            
            if (newIndex !== this.currentIndex) {
                this.currentIndex = Math.max(0, Math.min(newIndex, this.items.length - 1));
                
                // Update indicator dots
                const dots = this.indicators.querySelectorAll('.carousel-indicator');
                dots.forEach((dot, index) => {
                    const isActive = index === this.currentIndex;
                    dot.classList.toggle('active', isActive);
                    dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
                });
                
                this.updateNavigationButtons();
            }
        }

        /**
         * Update navigation button states
         */
        updateNavigationButtons() {
            if (!this.prevButton || !this.nextButton) return;
            
            const isAtStart = this.currentIndex === 0;
            const isAtEnd = this.currentIndex === this.items.length - 1;
            
            this.prevButton.disabled = isAtStart;
            this.prevButton.classList.toggle('disabled', isAtStart);
            this.prevButton.setAttribute('aria-disabled', isAtStart ? 'true' : 'false');
            
            this.nextButton.disabled = isAtEnd;
            this.nextButton.classList.toggle('disabled', isAtEnd);
            this.nextButton.setAttribute('aria-disabled', isAtEnd ? 'true' : 'false');
        }

        /**
         * Attach event listeners
         */
        attachEventListeners() {
            // Scroll event for indicator updates
            this.grid.addEventListener('scroll', this.handleScroll, { passive: true });
            
            // Resize event for responsive changes
            window.addEventListener('resize', this.handleResize);
            
            // Touch events for better mobile experience
            this.attachTouchEvents();
            
            // Keyboard navigation
            this.attachKeyboardNavigation();
        }

        /**
         * Attach touch event handlers
         */
        attachTouchEvents() {
            let touchStartX = 0;
            let touchEndX = 0;
            
            this.grid.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            this.grid.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe(touchStartX, touchEndX);
            }, { passive: true });
        }

        /**
         * Handle swipe gestures
         */
        handleSwipe(startX, endX) {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                // Swipe detected - indicators will update via scroll event
                // No additional action needed due to scroll-snap
            }
        }

        /**
         * Attach keyboard navigation
         */
        attachKeyboardNavigation() {
            this.grid.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.scroll('prev');
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.scroll('next');
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    this.scrollToIndex(0);
                } else if (e.key === 'End') {
                    e.preventDefault();
                    this.scrollToIndex(this.items.length - 1);
                }
            });
            
            // Make grid focusable for keyboard navigation
            this.grid.setAttribute('tabindex', '0');
            this.grid.setAttribute('role', 'region');
            this.grid.setAttribute('aria-label', 'Core offerings carousel');
        }

        /**
         * Handle responsive changes
         */
        handleResponsiveChange() {
            if (isMobile() && !this.isInitialized) {
                this.init();
            } else if (!isMobile() && this.isInitialized) {
                this.destroy();
            }
        }

        /**
         * Apply iOS-specific optimizations
         */
        applyIOSOptimizations() {
            // Prevent bounce scrolling at edges
            this.grid.addEventListener('touchmove', (e) => {
                const scrollLeft = this.grid.scrollLeft;
                const scrollWidth = this.grid.scrollWidth;
                const clientWidth = this.grid.clientWidth;
                
                if ((scrollLeft === 0 && e.touches[0].clientX > e.touches[0].clientX) ||
                    (scrollLeft + clientWidth >= scrollWidth && e.touches[0].clientX < e.touches[0].clientX)) {
                    // At edge - allow default behavior
                }
            }, { passive: true });
        }

        /**
         * Apply Android-specific optimizations
         */
        applyAndroidOptimizations() {
            // Ensure smooth scrolling on Android
            this.grid.style.scrollBehavior = 'smooth';
        }

        /**
         * Destroy carousel and remove elements
         */
        destroy() {
            if (!this.isInitialized) return;
            
            // Remove event listeners
            this.grid.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
            
            // Remove navigation elements
            if (this.navContainer) {
                this.navContainer.remove();
            }
            
            if (this.indicators) {
                this.indicators.remove();
            }
            
            this.isInitialized = false;
        }
    }

    // ===================================
    // Initialization
    // ===================================
    
    /**
     * Initialize all carousels on the page
     */
    function initializeCarousels() {
        if (!isMobile()) return;
        
        const containers = document.querySelectorAll('.service-offerings');
        containers.forEach(container => {
            new OfferingsCarousel(container);
        });
    }

    /**
     * DOM Ready handler
     */
    function onDOMReady() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(initializeCarousels, CONFIG.autoInitDelay);
            });
        } else {
            setTimeout(initializeCarousels, CONFIG.autoInitDelay);
        }
    }

    // Start initialization
    onDOMReady();

    // Expose for manual initialization if needed
    window.CDS = window.CDS || {};
    window.CDS.OfferingsCarousel = OfferingsCarousel;
    window.CDS.initCarousels = initializeCarousels;

})();
