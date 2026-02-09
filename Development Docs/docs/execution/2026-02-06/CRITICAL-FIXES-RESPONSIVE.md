# CRITICAL FIXES - Responsive Issues

**Date:** 2026-02-06 23:56 IST  
**Issues:** 3 critical responsive problems identified  
**Status:** ⏳ ANALYZING & FIXING

---

## 🔍 ISSUE 1: iPad Pro Navigation Wrapping (1024px)

### **Problem:**
- Navigation links wrap to 2 lines at exactly 1024px
- No hamburger menu visible
- Breakpoint is at 968px, but iPad Pro is 1024px

### **Root Cause:**
```css
/* Current in responsive.css */
@media (max-width: 968px) {
    .mobile-toggle { display: flex; }
}
```
- At 1024px, desktop nav shows but not enough space
- Hamburger only appears at 968px and below

### **Fix:**
Change breakpoint from 968px to 1100px to cover iPad Pro
```css
@media (max-width: 1100px) {
    .mobile-toggle { display: flex; }
    .nav-menu { /* mobile menu styles */ }
}
```

**Files to Modify:**
- `responsive.css` - Change @media (max-width: 968px) to 1100px

---

## 🔍 ISSUE 2: Services/Impact Pages - Missing Hamburger on Small Devices

### **Problem:**
- Hamburger menu not visible on iPad and mobile
- Core offerings stacking incorrectly
- Vision/Mission section CSS missing
- "Meet Our Team", "What Drives Us" lost CSS

### **Root Cause:**
- Same as Issue 1 - breakpoint too narrow
- Sections.css may have conflicting styles

### **Analysis Needed:**
1. Check if sections.css has duplicate responsive code
2. Verify all page sections have proper responsive styles
3. Check for CSS conflicts between files

### **Fix:**
1. Update breakpoint to 1100px (same as Issue 1)
2. Remove duplicate responsive code from sections.css if exists
3. Ensure all sections inherit responsive styles properly

**Files to Check:**
- `sections.css` - Check for duplicate @media queries
- `responsive.css` - Ensure all sections covered

---

## 🔍 ISSUE 3: Hero Section Mouse Scroll Indicator

### **Problem:**
- Mouse scroll indicator appears on mobile/tablet
- Should only show on desktop
- Creating layout issues on small screens

### **Root Cause:**
```css
/* hero.css */
.scroll-indicator {
    position: absolute;
    bottom: var(--spacing-xl);
    /* Always visible */
}
```
- No responsive hiding for mobile/tablet

### **Fix:**
Hide scroll indicator on mobile/tablet, show only on desktop
```css
/* Base - hide on mobile */
.scroll-indicator {
    display: none;
}

/* Desktop 1280px+ - show */
@media (min-width: 1280px) {
    .scroll-indicator {
        display: block;
    }
}
```

**Files to Modify:**
- `hero.css` - Add display: none to base
- `responsive.css` - Add display: block at 1280px+

---

## ✅ FIX EXECUTION PLAN

### **Step 1: Fix Navigation Breakpoint (Issue 1 & 2)**
**File:** `responsive.css`
**Action:** Change max-width: 968px to max-width: 1100px
**Impact:** iPad Pro, iPad, and all smaller devices will show hamburger menu

### **Step 2: Hide Scroll Indicator on Mobile (Issue 3)**
**File:** `hero.css`
**Action:** Add `display: none` to `.scroll-indicator`
**File:** `responsive.css`
**Action:** Add `display: block` at 1280px+ breakpoint

### **Step 3: Check for Duplicate Responsive Code**
**File:** `sections.css`
**Action:** Search for duplicate @media queries
**Action:** Remove if found to avoid conflicts

### **Step 4: Verify All Sections**
**Pages to Test:**
- index.html - Hero, Services
- services.html - Core offerings
- impact.html - Vision/Mission, Team, Culture
- case-studies.html - Navigation
- company.html - Team sections

---

## 📊 IMPACT ANALYSIS

### **Files to Modify:**
1. ✅ `responsive.css` - Change breakpoint, add scroll indicator fix
2. ✅ `hero.css` - Hide scroll indicator by default
3. ❓ `sections.css` - Check for duplicates

### **Breakpoint Change Impact:**
**Before:** 968px
**After:** 1100px

**Devices Affected:**
- iPad Pro (1024px) ✅ Will now show hamburger
- iPad (768px) ✅ Already covered
- Large tablets (800-1000px) ✅ Will now show hamburger
- Desktop (1280px+) ✅ Still shows full nav

### **No Breaking Changes:**
- Desktop nav still works at 1100px+
- Mobile nav still works below 1100px
- Just expanding the mobile nav range

---

## 🎯 EXECUTION ORDER

1. **Fix responsive.css breakpoint** (968px → 1100px)
2. **Hide scroll indicator in hero.css**
3. **Show scroll indicator in responsive.css at 1280px+**
4. **Check sections.css for duplicates**
5. **Test all pages**

---

**Ready to Execute:** YES  
**Estimated Time:** 10 minutes  
**Risk Level:** LOW (additive changes only)

---

**Next:** Execute fixes systematically
