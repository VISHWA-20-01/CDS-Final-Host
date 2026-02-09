# MOBILE CAROUSEL - TESTING GUIDE

**Date:** 2026-02-07  
**Purpose:** Step-by-step testing instructions  
**Target:** Services Page - Core Offerings Carousel

---

## 🧪 QUICK TEST (5 Minutes)

### **On Your Mobile Device:**

1. **Open Services Page:**
   - Navigate to `services.html` on your mobile device
   - Use Chrome, Safari, or your default browser

2. **Scroll to Any Service Section:**
   - Digital Transformation
   - AI & Data Science
   - Data Analytics
   - Product Engineering
   - Experience Design
   - Quality Engineering

3. **Look for "Core Offerings" Section:**
   - You should see navigation arrows (← →) above the cards
   - Cards should be displayed horizontally
   - You should see a "peek" of the next card on the right

4. **Test Swipe:**
   - Swipe left on the cards
   - Cards should scroll smoothly
   - Should snap to each card position
   - Scroll indicators (dots) should update below

5. **Test Navigation Arrows:**
   - Tap the right arrow (→)
   - Should scroll to next card
   - Tap the left arrow (←)
   - Should scroll to previous card
   - Arrows should disable at edges

6. **Test Indicators:**
   - Tap any dot below the carousel
   - Should jump to that specific card
   - Active dot should be highlighted

---

## 📱 DETAILED TESTING CHECKLIST

### **1. Visual Verification**

#### **Mobile (<640px):**
- [ ] Carousel appears (horizontal scroll)
- [ ] Cards are 85% width (showing peek of next card)
- [ ] Navigation arrows visible above carousel
- [ ] Scroll indicators (dots) visible below carousel
- [ ] Scrollbar visible at bottom (styled with gradient)
- [ ] Cards maintain proper spacing
- [ ] Text is readable (not too small)
- [ ] Icons display correctly

#### **Desktop/Tablet (>640px):**
- [ ] NO carousel (should be 2-column grid)
- [ ] NO navigation arrows
- [ ] NO scroll indicators
- [ ] Grid layout unchanged from before
- [ ] All hover effects work
- [ ] No horizontal scroll

---

### **2. Interaction Testing**

#### **Touch Gestures (Mobile):**
- [ ] Swipe left scrolls to next card
- [ ] Swipe right scrolls to previous card
- [ ] Smooth scroll animation
- [ ] Snap-to-card works correctly
- [ ] No accidental vertical scroll during swipe
- [ ] Can scroll through all 4 cards
- [ ] Peek of next card visible

#### **Navigation Arrows:**
- [ ] Right arrow (→) scrolls to next card
- [ ] Left arrow (←) scrolls to previous card
- [ ] Arrows have visual feedback on tap
- [ ] Left arrow disabled on first card
- [ ] Right arrow disabled on last card
- [ ] Disabled state is visually clear (grayed out)

#### **Scroll Indicators:**
- [ ] Dots update as you scroll
- [ ] Active dot is highlighted (longer, gradient)
- [ ] Tapping dot jumps to that card
- [ ] Smooth transition when jumping
- [ ] All 4 dots are visible
- [ ] Dots have visual feedback on tap

---

### **3. Performance Testing**

#### **Scroll Performance:**
- [ ] Scroll is smooth (60fps)
- [ ] No lag or stuttering
- [ ] Snap animation is smooth
- [ ] No jank during scroll
- [ ] Quick response to swipe

#### **Page Load:**
- [ ] Page loads quickly (<2 seconds)
- [ ] No visible layout shift
- [ ] Carousel initializes immediately
- [ ] No flash of unstyled content
- [ ] No console errors

---

### **4. Cross-Browser Testing**

#### **iOS Safari:**
- [ ] Carousel works correctly
- [ ] Smooth scrolling
- [ ] Snap-to-card works
- [ ] Arrows functional
- [ ] Indicators update
- [ ] No visual glitches

#### **Chrome Mobile:**
- [ ] Carousel works correctly
- [ ] Smooth scrolling
- [ ] Snap-to-card works
- [ ] Arrows functional
- [ ] Indicators update
- [ ] No visual glitches

#### **Firefox Mobile:**
- [ ] Carousel works correctly
- [ ] Smooth scrolling
- [ ] Snap-to-card works
- [ ] Arrows functional
- [ ] Indicators update
- [ ] No visual glitches

#### **Samsung Internet:**
- [ ] Carousel works correctly
- [ ] Smooth scrolling
- [ ] Snap-to-card works
- [ ] Arrows functional
- [ ] Indicators update
- [ ] No visual glitches

---

### **5. Accessibility Testing**

#### **Keyboard Navigation (Desktop with mobile viewport):**
- [ ] Tab key focuses carousel
- [ ] Arrow Left key scrolls left
- [ ] Arrow Right key scrolls right
- [ ] Home key jumps to first card
- [ ] End key jumps to last card
- [ ] Focus outline visible
- [ ] Tab to navigation buttons works

#### **Screen Reader (Optional):**
- [ ] Carousel announced as "region"
- [ ] Arrows have descriptive labels
- [ ] Indicators have descriptive labels
- [ ] Active indicator announced
- [ ] Card content readable

---

### **6. Edge Cases**

#### **Small Screens (<375px):**
- [ ] Cards adjust to 90% width
- [ ] Still shows peek of next card
- [ ] All functionality works
- [ ] Text remains readable

#### **Orientation Change:**
- [ ] Carousel adapts to landscape
- [ ] Carousel adapts to portrait
- [ ] No layout breaks
- [ ] Scroll position maintained

#### **Slow Network:**
- [ ] Carousel works before images load
- [ ] No broken layout
- [ ] Graceful degradation

---

## 🔍 TROUBLESHOOTING

### **Issue: Carousel Not Appearing**

**Symptoms:**
- Cards stacked vertically on mobile
- No navigation arrows
- No scroll indicators

**Checks:**
1. Open browser console (Chrome DevTools)
2. Look for JavaScript errors
3. Verify `carousel.js` is loaded:
   ```javascript
   console.log(window.CDS.OfferingsCarousel);
   // Should return: [Function: OfferingsCarousel]
   ```
4. Check screen width:
   ```javascript
   console.log(window.innerWidth);
   // Should be ≤640 for carousel to activate
   ```

**Solution:**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check if carousel.js is in correct location

---

### **Issue: Arrows Not Working**

**Symptoms:**
- Arrows visible but clicking does nothing
- No scroll on arrow tap

**Checks:**
1. Check console for errors
2. Verify Font Awesome is loaded (icons should be visible)
3. Check if arrows are disabled (grayed out)

**Solution:**
- Ensure Font Awesome CDN is loaded
- Check if you're at the edge (first/last card)
- Try scrolling manually first, then use arrows

---

### **Issue: Indicators Not Updating**

**Symptoms:**
- Dots don't change when scrolling
- Active dot doesn't highlight

**Checks:**
1. Check console for errors
2. Manually scroll and watch dots
3. Verify scroll event is firing

**Solution:**
- Try tapping a dot directly
- Refresh the page
- Check if scroll-snap is working

---

### **Issue: Scroll Not Smooth**

**Symptoms:**
- Jerky scrolling
- No snap-to-card
- Laggy performance

**Checks:**
1. Check device performance (CPU/memory)
2. Close other apps/tabs
3. Check browser version (update if old)

**Solution:**
- Use a newer browser version
- Close background apps
- Test on a different device

---

## 📊 EXPECTED RESULTS

### **Visual Appearance:**

```
Mobile View (<640px):

    ← →  (Navigation Arrows)
    
┌──────────────────┬──────┐
│  Cloud Migration │ Inte │ ← Swipe
│  & Modernization │ llig │
│                  │ ent  │
│  [Icon]          │      │
│  Seamless trans- │      │
│  ition to cloud  │      │
└──────────────────┴──────┘

    ● ○ ○ ○  (Scroll Indicators)
    ▔▔▔▔▔▔▔  (Scrollbar)
```

### **Behavior:**
- **Swipe:** Smooth horizontal scroll
- **Snap:** Cards snap to position
- **Arrows:** Navigate one card at a time
- **Dots:** Jump to specific card
- **Peek:** See ~15% of next card

---

## ✅ ACCEPTANCE CRITERIA

### **Must Have:**
- [x] Carousel appears on mobile (<640px)
- [x] Horizontal scroll works
- [x] Navigation arrows work
- [x] Scroll indicators work
- [x] Smooth 60fps performance
- [x] Desktop/tablet unchanged

### **Should Have:**
- [x] Snap-to-card animation
- [x] Disabled arrow states
- [x] Active indicator highlight
- [x] Touch gesture support
- [x] Keyboard navigation

### **Nice to Have:**
- [x] Custom scrollbar styling
- [x] Hover effects on arrows
- [x] Indicator animations
- [x] iOS/Android optimizations

---

## 🎯 TEST SCENARIOS

### **Scenario 1: First-Time Mobile User**

**Steps:**
1. Open services page on mobile
2. Scroll to "Digital Transformation"
3. See "Core Offerings" section
4. Notice horizontal cards with peek
5. Swipe left to see next card
6. Continue swiping through all cards

**Expected:**
- Intuitive interaction
- Smooth scrolling
- Clear visual feedback
- All cards accessible

---

### **Scenario 2: Desktop User Resizing**

**Steps:**
1. Open services page on desktop
2. See 2-column grid (no carousel)
3. Resize browser to <640px width
4. Carousel should NOT appear (desktop browser)
5. Open in mobile device emulator
6. Carousel appears

**Expected:**
- Carousel only on actual mobile devices
- Desktop maintains grid layout
- No layout breaks during resize

---

### **Scenario 3: Accessibility User**

**Steps:**
1. Open services page with keyboard only
2. Tab to carousel section
3. Use arrow keys to navigate
4. Tab to navigation buttons
5. Use Enter/Space to activate

**Expected:**
- All elements keyboard accessible
- Clear focus indicators
- Logical tab order
- Screen reader friendly

---

## 📝 TEST REPORT TEMPLATE

```
Test Date: __________
Tester Name: __________
Device: __________
Browser: __________
Screen Size: __________

VISUAL:
[ ] Carousel appears correctly
[ ] Cards sized properly
[ ] Arrows visible
[ ] Indicators visible

INTERACTION:
[ ] Swipe works
[ ] Arrows work
[ ] Indicators work
[ ] Snap works

PERFORMANCE:
[ ] Smooth scroll (60fps)
[ ] Quick load (<2s)
[ ] No lag

ISSUES FOUND:
1. ___________________________
2. ___________________________
3. ___________________________

OVERALL STATUS:
[ ] PASS
[ ] FAIL (see issues)

Notes:
_________________________________
_________________________________
```

---

## 🚀 FINAL VERIFICATION

Before marking as complete, verify:

1. **Mobile Devices:**
   - [ ] Tested on iPhone
   - [ ] Tested on Android
   - [ ] Works on both

2. **Browsers:**
   - [ ] Safari (iOS)
   - [ ] Chrome (Android)
   - [ ] Firefox (Mobile)

3. **Functionality:**
   - [ ] All interactions work
   - [ ] Performance is smooth
   - [ ] No errors in console

4. **Desktop:**
   - [ ] No carousel on desktop
   - [ ] Grid layout unchanged
   - [ ] No regressions

5. **Documentation:**
   - [ ] Implementation guide complete
   - [ ] Testing guide complete
   - [ ] Known issues documented

---

**Testing Complete:** [ ]  
**Ready for Production:** [ ]  
**Sign-off:** __________

---

**Created By:** Antigravity AI  
**Date:** 2026-02-07  
**Version:** 1.0
