# CDS Website - Detailed Restructuring Plan

**Created:** 2026-02-06  
**Purpose:** Line-by-line mapping for CSS/JS modularization  
**Status:** Ready for Execution

---

## 📋 CSS MODULARIZATION PLAN

### Current State:
- **File:** concept1/styles.css
- **Size:** 50,985 bytes
- **Lines:** 2,337 lines
- **Status:** Monolithic (all styles in one file)

### Target State:
- **Files:** 9 modular CSS files
- **Total Size:** Same (50,985 bytes)
- **Organization:** Logical separation by component/section

---

## 🗂️ CSS FILE BREAKDOWN

### 1. variables.css (Lines 1-70)
**Purpose:** All CSS custom properties  
**Size:** ~2 KB  
**Lines:** 70

**Content:**
```
Lines 1-70 from styles.css:
- :root { }
- All color variables (--primary-*, --accent-*, --cyan-*, --dark-*, --gray-*)
- Typography variables (--font-primary, --font-display)
- Spacing variables (--spacing-*)
- Border radius variables (--radius-*)
- Shadow variables (--shadow-*)
- Transition variables (--transition-*)
```

**Import Order:** 1st (must be loaded first)

---

### 2. reset.css (Lines 72-110)
**Purpose:** Browser reset and base styles  
**Size:** ~1 KB  
**Lines:** 40

**Content:**
```
Lines 72-110 from styles.css:
- * { margin: 0; padding: 0; box-sizing: border-box; }
- html { scroll-behavior: smooth; }
- body { font-family, color, background, line-height, overflow-x }
- img { max-width: 100%; height: auto; display: block; }
- a { text-decoration: none; color: inherit; transition }
- ul { list-style: none; }
```

**Import Order:** 2nd

---

### 3. global.css (Lines 112-168)
**Purpose:** Global typography and layout  
**Size:** ~2 KB  
**Lines:** 80

**Content:**
```
Lines 112-168 from styles.css:
- h1, h2, h3, h4, h5, h6 { font-family, font-weight, line-height, color }
- h1 { font-size: clamp(...) }
- h2 { font-size: clamp(...) }
- h3 { font-size: clamp(...) }
- p { font-size, line-height, color }
- .gradient-text { background: linear-gradient, -webkit-background-clip, etc. }
- .container { width, max-width, margin, padding }
- section { padding, position }
```

**Import Order:** 3rd

---

### 4. components.css (Lines 170-235)
**Purpose:** Reusable component styles (buttons, badges, cards)  
**Size:** ~2 KB  
**Lines:** 100

**Content:**
```
Lines 170-235 from styles.css:
- .btn { display, align-items, gap, padding, font, border-radius, etc. }
- .btn-primary { background: linear-gradient, color, box-shadow }
- .btn-primary:hover { transform, box-shadow }
- .btn-outline { background, color, border-color }
- .btn-outline:hover { background, color, transform }
- .btn-white { background, color }
- .btn-white:hover { transform, box-shadow }
- .btn-lg { padding, font-size }
- .btn i { transition }
- .btn:hover i { transform }

PLUS:
- .badge { } (if exists in later sections)
- .card { } (base card styles if needed)
```

**Import Order:** 4th

---

### 5. navigation.css (Lines 237-336)
**Purpose:** Navigation and header styles  
**Size:** ~3 KB  
**Lines:** 100

**Content:**
```
Lines 237-336 from styles.css:
- .navbar { position: fixed, top, left, right, z-index, background, backdrop-filter, border-bottom, transition }
- .navbar.scrolled { box-shadow }
- .nav-wrapper { display, align-items, justify-content, padding }
- .logo { display, align-items, gap, font-family, font-weight, font-size }
- .logo-icon { width, height, background: linear-gradient, color, display, align-items, justify-content, border-radius, font-size, font-weight, box-shadow }
- .logo-text { color }
- .nav-menu { display, align-items, gap }
- .nav-link { font-weight, color, position, padding }
- .nav-link::after { content, position, bottom, left, width, height, background: linear-gradient, transition }
- .nav-link:hover::after, .nav-link.active::after { width: 100% }
- .mobile-toggle { display: none, flex-direction, gap, background, border, cursor, padding }
- .mobile-toggle span { width, height, background, border-radius, transition }

PLUS mobile menu styles from responsive section:
- @media (max-width: 768px) { .mobile-toggle { display: flex } }
- .nav-menu.active { } (mobile menu open state)
```

**Import Order:** 5th

---

### 6. hero.css (Lines 338-590)
**Purpose:** Hero section styles and animations  
**Size:** ~8 KB  
**Lines:** 250

**Content:**
```
Lines 338-590 from styles.css:
- .hero { min-height, display, align-items, justify-content, position, overflow, padding-top }
- .hero-background { position, inset, z-index, background: linear-gradient }
- .binary-pattern { position, inset, background-image, opacity }
- .binary-pattern::before { content: '010101...', position, top, left, right, font-family, font-size, color, word-wrap, line-height, animation }
- @keyframes binaryScroll { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
- .gradient-orb { position, border-radius, filter: blur, opacity, animation }
- .orb-1 { width, height, background: radial-gradient, top, right, animation-delay }
- .orb-2 { width, height, background: radial-gradient, bottom, left, animation-delay }
- .orb-3 { width, height, background: radial-gradient, top, left, transform, animation-delay }
- @keyframes float { 0%, 100% { transform: translateY(0) scale(1) } 50% { transform: translateY(-30px) scale(1.1) } }
- .hero-content { text-align, max-width, margin, position, z-index }
- .hero-badge { display, align-items, gap, padding, background, backdrop-filter, border, border-radius, color, font-size, font-weight, margin-bottom }
- .hero-badge i { color }
- .hero-title { color, margin-bottom, text-shadow }
- .hero-subtitle { font-size, color, margin-bottom }
- .hero-stats { display: grid, grid-template-columns, gap, margin }
- .stat-item { display, align-items, gap, padding, background, backdrop-filter, border, border-radius, transition }
- .stat-item:hover { background, transform, box-shadow }
- .stat-icon { width, height, background: linear-gradient, border-radius, display, align-items, justify-content, font-size, color, flex-shrink }
- .stat-content { text-align }
- .stat-number { font-size, color, margin-bottom }
- .stat-label { font-size, color, margin }
- .hero-cta { display, align-items, justify-content, gap, flex-wrap }
- .scroll-indicator { position, bottom, left, transform, animation }
- .mouse { width, height, border, border-radius, position }
- .wheel { width, height, background, border-radius, position, top, left, transform, animation }
- @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0) } 50% { transform: translateX(-50%) translateY(-10px) } }
- @keyframes scroll { 0% { opacity: 1, transform: translateX(-50%) translateY(0) } 100% { opacity: 0, transform: translateX(-50%) translateY(15px) } }
```

**Import Order:** 6th

---

### 7. sections.css (Lines 592-1500)
**Purpose:** All page section styles  
**Size:** ~25 KB  
**Lines:** 900

**Content:**
```
Lines 592-616: Mission Section
- .mission-section { background: linear-gradient, padding }
- .mission-content { text-align }
- .mission-section .section-title { color, max-width, margin }
- .mission-section .gradient-text { background: linear-gradient, -webkit-background-clip, etc. }

Lines 618-649: Section Headers
- .section-header { text-align, margin-bottom }
- .section-label { display, padding, background: linear-gradient, color, border-radius, font-size, font-weight, text-transform, letter-spacing, margin-bottom }
- .section-title { margin-bottom }
- .section-subtitle { font-size, color, max-width, margin }

Lines 651-726: Focus Areas Section
- .focus-section { background }
- .focus-grid { display: grid, grid-template-columns, gap }
- .focus-card { background, padding, border-radius, border, transition, position, overflow }
- .focus-card::before { content, position, top, left, right, height, background: linear-gradient, transform, transform-origin, transition }
- .focus-card:hover::before { transform: scaleX(1) }
- .focus-card:hover { transform, box-shadow, border-color }
- .focus-icon { width, height, background: linear-gradient, border-radius, display, align-items, justify-content, font-size, color, margin-bottom, transition }
- .focus-card:hover .focus-icon { transform: scale(1.1) rotate(5deg) }
- .focus-card h3 { font-size, margin-bottom, color }
- .focus-card p { font-size, color, margin }

Lines 728-820: Why Choose CDS Section
- .why-section { background, color }
- .why-section .section-label { background, color }
- .why-section .section-title { color }
- .why-grid { display: grid, grid-template-columns, gap }
- .why-card { background, backdrop-filter, padding, border-radius, border, position, overflow, transition }
- .why-card::before { content, position, top, right, width, height, background: radial-gradient, opacity, transition }
- .why-card:hover::before { opacity: 1 }
- .why-card:hover { transform, border-color, box-shadow }
- .why-number { font-family, font-size, font-weight, background: linear-gradient, -webkit-background-clip, etc., margin-bottom, line-height }
- .why-card h3 { color, margin-bottom }
- .why-card p { color, margin }
- .why-decoration { } (if exists)

Lines 822-900: Industries Section
- .industries-section { }
- .industries-grid { display: grid, grid-template-columns, gap }
- .industry-card { background, padding, border-radius, border, transition, position, overflow }
- .industry-card i { font-size, color, margin-bottom }
- .industry-card h3 { font-size, margin-bottom, color }
- .industry-card .badge { display, padding, background, color, border-radius, font-size, font-weight }
- .industry-card:hover { transform, box-shadow, border-color }

Lines 902-1100: Services Preview Carousel
- .services-preview { }
- .services-carousel-wrapper { position: relative }
- .services-carousel { display, gap, overflow }
- .service-flip-card { perspective, width, height }
- .flip-card-inner { position: relative, width, height, transition, transform-style }
- .service-flip-card:hover .flip-card-inner { transform: rotateY(180deg) }
- .flip-card-front, .flip-card-back { position: absolute, width, height, backface-visibility, border-radius, padding, background, box-shadow }
- .flip-card-front { z-index: 2, transform: rotateY(0deg) }
- .flip-card-back { transform: rotateY(180deg) }
- .service-icon-large { width, height, background: linear-gradient, border-radius, display, align-items, justify-content, font-size, color, margin-bottom }
- .flip-card-front h3 { font-size, margin-bottom, color }
- .service-tagline { font-size, color, margin-bottom }
- .flip-hint { display, align-items, gap, font-size, color, margin-top }
- .flip-card-back h3 { font-size, margin-bottom, color }
- .service-list-compact { list-style, padding, margin }
- .service-list-compact li { display, align-items, gap, margin-bottom, font-size }
- .service-list-compact li i { color, font-size }
- .carousel-nav { position: absolute, top, transform, width, height, background, border, border-radius, cursor, transition, z-index }
- .carousel-nav.prev { left }
- .carousel-nav.next { right }
- .carousel-nav:hover { background, color }
- .carousel-dots { display, align-items, justify-content, gap, margin-top }
- .carousel-dot { width, height, background, border-radius, cursor, transition }
- .carousel-dot.active { background, width }

Lines 1100-1200: Testimonial Section
- .testimonial-section { background, padding }
- .testimonial-wrapper { max-width, margin, text-align }
- .testimonial-icon { font-size, color, margin-bottom }
- .testimonial-text { font-size, line-height, color, margin-bottom, font-style }
- .testimonial-author { display, align-items, gap, justify-content }
- .author-avatar { width, height, background: linear-gradient, border-radius, display, align-items, justify-content, font-size, font-weight, color }
- .author-info { text-align }
- .author-info h4 { font-size, margin-bottom, color }
- .author-info p { font-size, color, margin }

Lines 1200-1300: Global Presence Section
- .global-section { }
- .global-grid { display: grid, grid-template-columns, gap }
- .location-card { background, padding, border-radius, border, transition, text-align }
- .country-flag { font-size, margin-bottom }
- .location-card h3 { font-size, margin-bottom, color }
- .location-detail { font-size, color, margin }
- .location-card:hover { transform, box-shadow, border-color }

Lines 1300-1400: CTA/Contact Section
- .cta-section { background, padding }
- .cta-wrapper { max-width, margin, background, padding, border-radius, box-shadow }
- Form styles (may be inline in HTML)

Lines 1400-1500: Footer
- .footer { background, color, padding }
- .footer-top { display, justify-content, gap, margin-bottom }
- .footer-brand { }
- .footer-tagline { font-size, color, margin-top }
- .footer-links { display, gap }
- .footer-column { }
- .footer-column h4 { font-size, margin-bottom, color }
- .footer-column ul { list-style, padding }
- .footer-column li { margin-bottom }
- .footer-column a { color, transition }
- .footer-column a:hover { color }
- .footer-bottom { text-align, padding-top, border-top, margin-top }
- .footer-bottom p { font-size, color, margin }
```

**Import Order:** 7th

---

### 8. animations.css (Lines scattered + new)
**Purpose:** All animations and keyframes  
**Size:** ~3 KB  
**Lines:** 100

**Content:**
```
Extract all @keyframes from styles.css:
- @keyframes binaryScroll { }
- @keyframes float { }
- @keyframes bounce { }
- @keyframes scroll { }
- @keyframes slideIn { } (if exists)
- @keyframes slideOut { } (if exists)
- @keyframes flipCard { } (if exists)

Plus AOS customizations:
- [data-aos] { } (if any custom AOS styles)

Plus hover effect utilities:
- .hover-lift:hover { transform: translateY(-5px); }
- .hover-glow:hover { box-shadow: var(--shadow-glow); }
```

**Import Order:** 8th

---

### 9. responsive.css (Lines 1500-2337)
**Purpose:** All media queries and responsive styles  
**Size:** ~15 KB  
**Lines:** 700

**Content:**
```
Lines 1500-2337 from styles.css:
All @media queries organized by breakpoint:

/* Mobile: < 480px */
@media (max-width: 480px) {
  - Font size adjustments
  - Padding/margin adjustments
  - Hide/show elements
}

/* Mobile Large: 480px - 768px */
@media (min-width: 480px) and (max-width: 768px) {
  - Grid adjustments
  - Layout changes
}

/* Tablet: 768px - 1024px */
@media (max-width: 768px) {
  - .mobile-toggle { display: flex; }
  - .nav-menu { position: fixed, top, right, width, height, background, flex-direction, padding, transform, transition }
  - .nav-menu.active { transform: translateX(0); }
  - .hero-stats { grid-template-columns: 1fr; }
  - .focus-grid { grid-template-columns: 1fr; }
  - .why-grid { grid-template-columns: 1fr; }
  - .industries-grid { grid-template-columns: repeat(2, 1fr); }
  - .services-carousel { grid-template-columns: 1fr; }
  - .global-grid { grid-template-columns: repeat(2, 1fr); }
  - Font size reductions
}

/* Desktop: > 1024px */
@media (min-width: 1024px) {
  - Container max-width adjustments
  - Grid columns adjustments
}

/* Large Desktop: > 1280px */
@media (min-width: 1280px) {
  - Larger spacing
  - Larger fonts
}
```

**Import Order:** 9th (last)

---

## 📝 HTML UPDATE PLAN

### Current (index.html line 19):
```html
<link rel="stylesheet" href="styles.css">
```

### New (all HTML files):
```html
<!-- Design System -->
<link rel="stylesheet" href="assets/css/variables.css">
<link rel="stylesheet" href="assets/css/reset.css">
<link rel="stylesheet" href="assets/css/global.css">

<!-- Components -->
<link rel="stylesheet" href="assets/css/components.css">
<link rel="stylesheet" href="assets/css/navigation.css">

<!-- Sections -->
<link rel="stylesheet" href="assets/css/hero.css">
<link rel="stylesheet" href="assets/css/sections.css">

<!-- Effects & Responsive -->
<link rel="stylesheet" href="assets/css/animations.css">
<link rel="stylesheet" href="assets/css/responsive.css">
```

---

## 🔧 JAVASCRIPT MODULARIZATION PLAN

### Current State:
- **File:** concept1/script.js
- **Size:** 17,168 bytes
- **Lines:** 561 lines
- **Status:** Monolithic

### Target State:
- **Files:** 6 modular JS files
- **Total Size:** ~17 KB (minus Firebase code)
- **Organization:** Logical separation by functionality

---

## 🗂️ JAVASCRIPT FILE BREAKDOWN

### 1. main.js (Lines 6-32 + new)
**Purpose:** Main initialization and orchestration  
**Size:** ~1 KB  
**Lines:** 50

**Content:**
```javascript
// Main initialization
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
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
    setActiveNavLink();
    initLazyLoading();
    initServicesCarousel();
});
```

**Import Order:** Last (loads after all other modules)

---

### 2. navigation.js (Lines 37-78 + 324-339)
**Purpose:** Navigation functionality  
**Size:** ~2 KB  
**Lines:** 100

**Content:**
```javascript
Lines 37-58: initMobileNav()
- Mobile menu toggle
- Close menu on link click
- Prevent body scroll

Lines 63-78: initNavbarScroll()
- Add 'scrolled' class on scroll
- Navbar shadow effect

Lines 324-339: setActiveNavLink()
- Highlight current page in navigation
- Based on window.location.pathname
```

---

### 3. animations.js (Lines 153-194 + 344-419)
**Purpose:** Animation and visual effects  
**Size:** ~3 KB  
**Lines:** 150

**Content:**
```javascript
Lines 153-172: initBackgroundEffects()
- Parallax effect for gradient orbs
- Mouse move event listener

Lines 174-194: createBinaryAnimation()
- Create floating binary numbers
- Interval-based DOM manipulation

Lines 199-207: initPageTransitions()
- Fade-in effect on page load

Lines 344-361: initScrollAnimations()
- Intersection Observer for .animate-on-scroll elements

Lines 366-419: initCursorTrail()
- Custom cursor with gradient
- Mouse tracking
- Scale on hover
- CURRENTLY COMMENTED OUT
```

---

### 4. counters.js (Lines 83-125)
**Purpose:** Counter animations  
**Size:** ~1 KB  
**Lines:** 50

**Content:**
```javascript
Lines 83-101: initCounters()
- Intersection Observer for stat counters
- Trigger animation when in view

Lines 103-118: animateCounter(element)
- Animate number from 0 to target
- 2-second duration
- 60fps smooth animation

Lines 120-125: formatNumber(num)
- Format numbers (1200 → 1.2K+)
```

---

### 5. forms.js (Lines 130-148 + 243-287)
**Purpose:** Form handling and notifications  
**Size:** ~2 KB  
**Lines:** 80

**Content:**
```javascript
Lines 130-148: initSmoothScroll()
- Smooth scroll to anchor links
- Account for fixed navbar offset

Lines 243-260: initFormHandling()
- Form submission handler
- Show notification
- Reset form
- NOTE: Remove Firebase code

Lines 262-287: showNotification(message, type)
- Create notification element
- Auto-dismiss after 3 seconds
- Slide in/out animations
```

**IMPORTANT:** Remove Firebase integration code (lines 600-634 from index.html)

---

### 6. utils.js (Lines 213-238 + 292-319 + 426-552)
**Purpose:** Utility functions and helpers  
**Size:** ~4 KB  
**Lines:** 150

**Content:**
```javascript
Lines 213-224: debounce(func, wait)
- Performance optimization for events

Lines 227-238: throttle(func, limit)
- Scroll event optimization

Lines 292-311: showLoader()
- Full-screen loading animation

Lines 313-319: hideLoader()
- Fade out loader

Lines 426-441: initLazyLoading()
- Intersection Observer for images
- Load images with data-src attribute

Lines 449-552: initServicesCarousel()
- Initialize carousel
- Prev/Next navigation
- Dot navigation
- Auto-rotate
- Pause on hover
- Responsive handling
```

---

## 📝 HTML UPDATE PLAN (JavaScript)

### Current (index.html lines 688-689):
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="script.js"></script>
```

### New (all HTML files):
```html
<!-- AOS Library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

<!-- Custom Scripts -->
<script src="assets/js/navigation.js"></script>
<script src="assets/js/animations.js"></script>
<script src="assets/js/counters.js"></script>
<script src="assets/js/forms.js"></script>
<script src="assets/js/utils.js"></script>
<script src="assets/js/main.js"></script> <!-- Load last -->
```

---

## ⚠️ CRITICAL CHANGES TO MAKE

### 1. Remove Firebase Integration:
**Files to modify:**
- index.html (remove lines 600-634)
- services.html (if has Firebase)
- case-studies.html (if has Firebase)
- impact.html (if has Firebase)
- company.html (if has Firebase)
- DELETE firebase-config.js

**Replace with:**
- Formspree integration (or placeholder for now)

### 2. Fix Mobile Flip Cards:
**File:** sections.css  
**Change:** Add click/tap functionality for mobile

```css
@media (max-width: 768px) {
    .service-flip-card .flip-card-inner {
        /* Don't flip on hover on mobile */
    }
    
    .service-flip-card.active .flip-card-inner {
        transform: rotateY(180deg);
    }
}
```

**JavaScript:** Add click handler in utils.js

### 3. Add Vendor Prefixes:
**Files:** global.css, hero.css, sections.css

```css
.gradient-text {
    background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.navbar {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* Safari */
}
```

---

## ✅ VERIFICATION CHECKLIST

### After CSS Modularization:
- [ ] All 9 CSS files created
- [ ] All HTML files updated with new CSS links
- [ ] Website looks EXACTLY the same
- [ ] No broken styles
- [ ] All animations work
- [ ] All hover effects work
- [ ] Mobile menu works
- [ ] Test on Chrome, Firefox, Safari, Edge

### After JS Modularization:
- [ ] All 6 JS files created
- [ ] All HTML files updated with new JS links
- [ ] All functionality works
- [ ] Mobile nav works
- [ ] Counters animate
- [ ] Carousel works
- [ ] Smooth scroll works
- [ ] No console errors
- [ ] Firebase code removed
- [ ] Test on all browsers

---

## 📊 EXECUTION ORDER

### Step 1: CSS Modularization
1. Create assets/css/ folder
2. Create variables.css (copy lines 1-70)
3. Create reset.css (copy lines 72-110)
4. Create global.css (copy lines 112-168)
5. Create components.css (copy lines 170-235)
6. Create navigation.css (copy lines 237-336 + mobile styles)
7. Create hero.css (copy lines 338-590)
8. Create sections.css (copy lines 592-1500)
9. Create animations.css (extract all @keyframes)
10. Create responsive.css (copy lines 1500-2337)
11. Update index.html with new CSS links
12. Test index.html
13. Update other HTML files
14. Test all pages

### Step 2: JS Modularization
1. Create assets/js/ folder
2. Create navigation.js (copy lines 37-78, 324-339)
3. Create animations.js (copy lines 153-194, 344-419)
4. Create counters.js (copy lines 83-125)
5. Create forms.js (copy lines 130-148, 243-287, remove Firebase)
6. Create utils.js (copy lines 213-238, 292-319, 426-552)
7. Create main.js (new file, orchestrate all)
8. Update index.html with new JS links
9. Remove Firebase code from HTML
10. Test index.html
11. Update other HTML files
12. Test all pages

### Step 3: Verification
1. Visual comparison (before/after screenshots)
2. Functionality testing (all interactive elements)
3. Cross-browser testing
4. Mobile testing
5. Performance testing (Lighthouse)

---

## 🚨 IMPORTANT NOTES

1. **DO NOT change any design** - Only reorganize code
2. **DO NOT change any text** - Keep all content identical
3. **DO NOT add new features** - Only restructure existing code
4. **DO test thoroughly** - Every page, every browser
5. **DO document changes** - Update phase tracking

---

**Plan Complete!** ✅  
**Ready for execution upon your approval.**

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-06 21:45 IST  
**Status:** Ready for Phase 1 Execution
