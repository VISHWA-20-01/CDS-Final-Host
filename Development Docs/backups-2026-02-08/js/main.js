/* ===================================
   CDS Website - Main JavaScript
   File: main.js
   Purpose: Main initialization and orchestration
   =================================== */

// Main initialization
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            disable: 'mobile', // Performance: Disable on mobile for smooth scrolling
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 0
        });
    }

    // Initialize all modules
    initMobileNav();
    initNavbarScroll();
    initCounters();
    initSmoothScroll();
    initBackgroundEffects();
    initMobileFlipCards(); // Mobile/iOS flip card support
    setActiveNavLink();
    initLazyLoading();
    initServicesCarousel();
    initCookieBanner(); // Initialize Cookie Banner
});

// Console Branding
console.log('%c🚀 Caribbean Digital Solutions', 'font-size: 20px; font-weight: bold; color: #8B5CF6;');
console.log('%cInnovating Tomorrow, Today', 'font-size: 14px; color: #D946EF;');
console.log('%cWebsite built with ❤️ by CDS', 'font-size: 12px; color: #6B7280;');

/* ===================================
   Cookie Banner Logic
   =================================== */
function initCookieBanner() {
    // Check if user has already made a choice
    if (localStorage.getItem('cds_cookie_consent')) {
        return;
    }

    // HTML Structure
    const cookieHTML = `
        <div class="cookie-banner" id="cookieBanner">
            <div class="cookie-content">
                <h4>We value your privacy</h4>
                <p>We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="privacy-policy.html">Read Policy</a></p>
            </div>
            <div class="cookie-actions">
                <button class="cookie-btn cookie-decline" id="cookieDecline">Decline</button>
                <button class="cookie-btn cookie-accept" id="cookieAccept">Accept All</button>
            </div>
        </div>
    `;

    // Inject into body
    document.body.insertAdjacentHTML('beforeend', cookieHTML);

    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    const declineBtn = document.getElementById('cookieDecline');

    // Show after slight delay for better UX
    setTimeout(() => {
        banner.classList.add('show');
    }, 4000);

    // Event Handlers
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cds_cookie_consent', 'true');
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 500); // Remove from DOM after animation
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cds_cookie_consent', 'false');
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 500);
    });
}
