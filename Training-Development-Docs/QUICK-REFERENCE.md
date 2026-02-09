# ⚡ CDS WEBSITE - QUICK REFERENCE GUIDE

**Fast lookup for common development tasks**  
**Version:** 1.0  
**Last Updated:** February 9, 2026

---

## 🎯 COMMON TASKS

### **1. Change Website Colors**

**File:** `Backup-CSS-JS-HTML/css/variables.css`

```css
:root {
    /* Change these values */
    --primary-600: #7C3AED;      /* Main purple */
    --accent-600: #D946EF;       /* Pink accent */
    --dark-900: #0F0F23;         /* Background */
}
```

**Then rebuild:**
```powershell
cd Backup-CSS-JS-HTML
./minify-css.ps1
```

---

### **2. Change Font Sizes**

**File:** `Backup-CSS-JS-HTML/css/global.css`

```css
h1 { font-size: 4rem; }      /* Change hero title size */
h2 { font-size: 3rem; }      /* Change section title size */
body { font-size: 1rem; }    /* Change body text size */
```

**Then rebuild:**
```powershell
./minify-css.ps1
```

---

### **3. Add New Page**

**Step 1:** Copy existing HTML
```powershell
cp cds-website/index.html cds-website/new-page.html
```

**Step 2:** Update content
- Change `<title>`
- Update navigation active state
- Replace section content

**Step 3:** Add to navigation
```html
<!-- In all HTML files -->
<li><a href="new-page.html">New Page</a></li>
```

**Step 4:** Update sitemap.xml
```xml
<url>
    <loc>https://yoursite.com/new-page.html</loc>
    <lastmod>2026-02-09</lastmod>
    <priority>0.8</priority>
</url>
```

---

### **4. Add New Service Card**

**File:** `cds-website/index.html` (or services.html)

```html
<div class="service-card" data-aos="fade-up">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Service Name</h3>
    <p>Service description goes here.</p>
    <a href="services.html#service-id" class="service-link">
        Learn More
        <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

**Find icons:** https://fontawesome.com/icons

---

### **5. Change Hero Background**

**File:** `Backup-CSS-JS-HTML/css/hero.css`

```css
.hero {
    background: linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%);
    /* Or use image: */
    background-image: url('../images/hero-bg.webp');
    background-size: cover;
    background-position: center;
}
```

**Then rebuild:**
```powershell
./minify-css.ps1
```

---

### **6. Add Animation to Element**

**Using AOS (Scroll Animation):**
```html
<div data-aos="fade-up">Content</div>
<div data-aos="fade-up" data-aos-delay="200">Delayed</div>
<div data-aos="zoom-in" data-aos-duration="1000">Slower</div>
```

**Available animations:**
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`

---

### **7. Change Button Style**

**File:** `Backup-CSS-JS-HTML/css/components.css`

```css
.btn-primary {
    background: linear-gradient(135deg, var(--primary-600), var(--accent-600));
    padding: 1rem 2rem;
    border-radius: var(--radius-lg);
    /* Customize here */
}
```

**Then rebuild:**
```powershell
./minify-css.ps1
```

---

### **8. Fix Mobile Menu**

**File:** `Backup-CSS-JS-HTML/js/navigation.js`

**Check:**
1. Mobile toggle button exists: `.mobile-toggle`
2. Menu container exists: `.nav-menu`
3. JavaScript is loaded: `main.min.js`

**Debug:**
```javascript
// Open browser console (F12)
console.log(Navigation); // Should show object
```

---

### **9. Add FAQ Item**

**File:** `cds-website/index.html`

```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>Your question here?</span>
        <i class="fas fa-plus"></i>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

**JavaScript auto-handles accordion behavior.**

---

### **10. Change Footer Content**

**File:** All HTML files (footer section)

```html
<footer class="footer">
    <div class="container">
        <!-- Update company info -->
        <p class="footer-desc">Your company description</p>
        
        <!-- Update links -->
        <ul class="footer-links">
            <li><a href="#">Your Link</a></li>
        </ul>
        
        <!-- Update contact -->
        <a href="mailto:your@email.com">your@email.com</a>
    </div>
</footer>
```

---

## 🔧 BUILD COMMANDS

### **Rebuild CSS**
```powershell
cd Backup-CSS-JS-HTML
./minify-css.ps1
```

### **Rebuild JS**
```powershell
cd Backup-CSS-JS-HTML
./minify-js.ps1
```

### **Rebuild Both**
```powershell
cd Backup-CSS-JS-HTML
./minify-css.ps1
./minify-js.ps1
```

---

## 🎨 DESIGN TOKENS QUICK REFERENCE

### **Colors**
```css
--primary-600: #7C3AED;    /* Main purple */
--accent-600: #D946EF;     /* Pink accent */
--dark-900: #0F0F23;       /* Background */
--white: #FFFFFF;          /* Text on dark */
--gray-500: #6B7280;       /* Secondary text */
```

### **Spacing**
```css
--spacing-xs: 0.5rem;      /* 8px */
--spacing-sm: 1rem;        /* 16px */
--spacing-md: 1.5rem;      /* 24px */
--spacing-lg: 2rem;        /* 32px */
--spacing-xl: 3rem;        /* 48px */
```

### **Border Radius**
```css
--radius-sm: 0.375rem;     /* 6px */
--radius-md: 0.5rem;       /* 8px */
--radius-lg: 1rem;         /* 16px */
--radius-xl: 1.5rem;       /* 24px */
--radius-full: 9999px;     /* Fully rounded */
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile (default) */
/* 320px - 767px */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1280px) { }
```

---

## 🐛 TROUBLESHOOTING

### **CSS not updating?**
1. Rebuild CSS: `./minify-css.ps1`
2. Clear browser cache: `Ctrl+Shift+R`
3. Check file path in HTML

### **JS not working?**
1. Rebuild JS: `./minify-js.ps1`
2. Open console: `F12` → Check for errors
3. Verify script tag in HTML

### **Images not showing?**
1. Check file path (case-sensitive)
2. Verify file exists in `assets/images/`
3. Check image format (WebP supported?)

### **Mobile menu not opening?**
1. Check `.mobile-toggle` button exists
2. Check `navigation.js` is loaded
3. Open console for errors

---

## 📂 FILE LOCATIONS

### **Production Files (Deploy)**
```
cds-website/
├── index.html
├── assets/
│   ├── css/main.min.css
│   └── js/main.min.js
```

### **Source Files (Edit)**
```
Backup-CSS-JS-HTML/
├── css/
│   ├── variables.css    ← Colors, spacing
│   ├── global.css       ← Typography, base styles
│   ├── components.css   ← Buttons, cards
│   └── ...
└── js/
    ├── navigation.js    ← Mobile menu
    ├── carousel.js      ← Carousel logic
    └── ...
```

---

## 🚀 DEPLOYMENT

### **Netlify (Current)**
```bash
git add .
git commit -m "Your changes"
git push origin main
# Auto-deploys in ~2 minutes
```

### **AWS S3**
```bash
aws s3 sync cds-website/ s3://your-bucket/ --delete
```

### **Cloudflare Pages**
```bash
# Push to GitHub
# Cloudflare auto-deploys
```

---

## 📊 PERFORMANCE CHECKLIST

Before deploying:
- ✅ Run `./minify-css.ps1`
- ✅ Run `./minify-js.ps1`
- ✅ Optimize images (WebP, 80% quality)
- ✅ Test on mobile (Chrome DevTools)
- ✅ Check Lighthouse score (aim for 90+)
- ✅ Verify all links work
- ✅ Test forms (if any)

---

## 🎯 COMMON CSS CLASSES

### **Layout**
```css
.container          /* Max-width wrapper */
.section-padding    /* Standard section padding */
.text-center        /* Center text */
```

### **Components**
```css
.btn-primary        /* Primary button */
.btn-outline        /* Outline button */
.card               /* Card container */
.badge              /* Small badge */
.gradient-text      /* Gradient text effect */
```

### **Utilities**
```css
.mt-lg              /* Margin top large */
.mb-xl              /* Margin bottom extra large */
.pt-md              /* Padding top medium */
```

---

## 🔗 USEFUL LINKS

- **FontAwesome Icons:** https://fontawesome.com/icons
- **AOS Animations:** https://michalsnik.github.io/aos/
- **WebP Converter:** https://squoosh.app/
- **Lighthouse:** Chrome DevTools → Lighthouse tab
- **Repository:** https://github.com/Ajaytata123/CDS-project

---

## 📞 NEED HELP?

1. **Check DEVELOPER-BLUEPRINT.md** - Comprehensive guide
2. **Check TECHNICAL-SPECIFICATION.md** - Detailed specs
3. **Check this file** - Quick reference
4. **Open browser console** - Check for errors (F12)
5. **Contact:** dev@cds.com

---

**Document Version:** 1.0  
**Last Updated:** February 9, 2026  
**Author:** CDS Development Team
