# 🔧 Backup CSS, JS & HTML - Developer Guide

This folder contains the **source files** for the CDS website. Use these files when you need to make changes to the website's styling or functionality.

---

## 📁 Folder Structure

```
Backup-CSS-JS-HTML/
├── css/                    ← CSS Source Files (9 files)
│   ├── variables.css       (Design tokens: colors, fonts, spacing)
│   ├── reset.css           (Browser normalization)
│   ├── global.css          (Base styles, typography)
│   ├── components.css      (Buttons, cards, forms)
│   ├── navigation.css      (Header, nav, mobile menu)
│   ├── hero.css            (Hero sections)
│   ├── sections.css        (Content sections)
│   ├── animations.css      (Transitions, effects)
│   └── responsive.css      (Media queries, mobile-first)
│
├── js/                     ← JavaScript Source Files (10 files)
│   ├── navigation.js       (Menu toggle, scroll behavior)
│   ├── animations.js       (AOS initialization)
│   ├── counters.js         (Number animations)
│   ├── forms.js            (Contact form validation)
│   ├── utils.js            (Helper functions)
│   └── main.js             (App initialization)
│
├── minify-css.ps1          ← Script to rebuild main.min.css
└── minify-js.ps1           ← Script to rebuild main.min.js
```

---

## 🚀 How to Make Changes

### **Step 1: Edit Source Files**
- Modify CSS files in `css/` folder
- Modify JavaScript files in `js/` folder
- **DO NOT** edit `main.min.css` or `main.min.js` directly!

### **Step 2: Rebuild Minified Files**
Run the minification scripts:

```powershell
# Rebuild CSS
./minify-css.ps1

# Rebuild JavaScript
./minify-js.ps1
```

This will create new `main.min.css` and `main.min.js` files in `../cds-website/assets/`

### **Step 3: Test Changes**
- Open `../cds-website/index.html` in a browser
- Verify your changes work correctly
- Test on mobile devices

### **Step 4: Deploy**
- Commit changes to Git
- Push to GitHub
- Deploy to Netlify

---

## 📐 CSS Architecture

### **Modular Design Pattern**
Each CSS file has a specific purpose:

1. **variables.css** - Define once, use everywhere
   - Colors, fonts, spacing, shadows
   - Change here to update site-wide

2. **components.css** - Reusable UI elements
   - Buttons, cards, badges, forms
   - Consistent design system

3. **responsive.css** - Mobile-first breakpoints
   - Tablet: 768px
   - Desktop: 1024px
   - Large: 1440px

### **Best Practices**
- ✅ Use CSS variables from `variables.css`
- ✅ Follow BEM naming convention
- ✅ Mobile-first approach
- ✅ Keep specificity low
- ❌ Don't use `!important` unless absolutely necessary

---

## 🎨 JavaScript Architecture

### **Modular Structure**
Each JS file handles specific functionality:

1. **navigation.js** - Menu & scroll behavior
2. **animations.js** - AOS (Animate On Scroll)
3. **counters.js** - Number counting animations
4. **forms.js** - Form validation & submission
5. **utils.js** - Shared helper functions
6. **main.js** - Initialization & orchestration

### **Best Practices**
- ✅ Use ES6+ features
- ✅ Keep functions small and focused
- ✅ Add comments for complex logic
- ✅ Handle errors gracefully
- ❌ Avoid global variables

---

## 🔄 Workflow Summary

```
1. Edit source files (css/ or js/)
   ↓
2. Run minify scripts
   ↓
3. Test in browser
   ↓
4. Commit & push to GitHub
   ↓
5. Deploy to Netlify
```

---

## 📞 Need Help?

- Check `../Development Docs/` for detailed documentation
- Review existing code for patterns
- Test thoroughly before deploying

---

**Last Updated:** February 9, 2026
**Version:** 1.0.0
