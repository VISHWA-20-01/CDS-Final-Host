/* ===================================
   CDS Website - Animations
   File: animations.js
   Purpose: Animation and visual effects
   =================================== */

// ===================================
// Dynamic Background Effects
// ===================================
function initBackgroundEffects() {
    // Parallax effect for gradient orbs
    const orbs = document.querySelectorAll('.gradient-orb');

    window.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Binary pattern animation
    createBinaryAnimation();
}

function createBinaryAnimation() {
    const binaryPattern = document.querySelector('.binary-pattern');
    if (!binaryPattern) return;

    // Create floating binary numbers
    setInterval(function () {
        const binary = document.createElement('div');
        binary.className = 'floating-binary';
        binary.textContent = Math.random() > 0.5 ? '1' : '0';
        binary.style.left = Math.random() * 100 + '%';
        binary.style.animationDuration = (Math.random() * 3 + 2) + 's';
        binary.style.fontSize = (Math.random() * 20 + 10) + 'px';
        binary.style.opacity = Math.random() * 0.5 + 0.1;

        binaryPattern.appendChild(binary);

        setTimeout(function () {
            binary.remove();
        }, 5000);
    }, 500);
}

// ===================================
// Page Transition Effect
// ===================================
function initPageTransitions() {
    // Add fade-in effect when page loads
    document.body.style.opacity = '0';

    window.addEventListener('load', function () {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => observer.observe(element));
}

// ===================================
// Mobile Flip Card Support (iOS/Touch Devices)
// ===================================
function initMobileFlipCards() {
    // Only enable on touch devices (mobile/tablet)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        const flipCards = document.querySelectorAll('.service-flip-card');

        flipCards.forEach(card => {
            card.addEventListener('click', function (e) {
                // Prevent default behavior
                e.preventDefault();

                // Toggle flipped class
                this.classList.toggle('flipped');

                // Remove flipped class from other cards (optional - one at a time)
                flipCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('flipped');
                    }
                });
            });

            // Also support tap event for better iOS compatibility
            card.addEventListener('touchend', function (e) {
                e.preventDefault();
                this.classList.toggle('flipped');

                flipCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('flipped');
                    }
                });
            });
        });
    }
}

// ===================================
// Cursor Trail Effect (Optional Premium Feature)
// ===================================
function initCursorTrail() {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, #8B5CF6, #D946EF);
        pointer-events: none;
        z-index: 99999;
        opacity: 0.6;
        transition: transform 0.2s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Scale cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Uncomment to enable cursor trail on desktop
// if (window.innerWidth > 968) {
//     initCursorTrail();
// }
