# REMAINING SECTIONS DESIGN PLAN (v1.0)

**Date:** 2026-02-07  
**Status:** DRAFT (Waiting for Approval)  
**Objective:** Complete homepage redesign with Testimonials, Global Map, FAQ, CTA, and Footer.

---

## 1. TESTIMONIALS CAROUSEL (🔄 NEW)

**Concept:** A dynamic, trustworthy showcase of client success stories using a modern glassmorphism aesthetic.

### **Visual Design:**
- **Layout:** Interactive Carousel (1 main card focused, partial view of others).
- **Style:** Glassy cards with a subtle border glow.
- **Elements per Card:**
  - ⭐⭐⭐⭐⭐ (5 Stars)
  - "Quote text..."
  - Client Photo (Circle)
  - Name & Title
  - Company Logo (Grayscale, color on hover)
- **Background:** Geometric shapes or subtle gradient flow behind the carousel.

### **Functional Requirements:**
- **Auto-rotate:** Every 5 seconds.
- **Navigation:** Arrows (Left/Right) + Dots.
- **Touch Support:** Swipeable on mobile.

---

## 2. GLOBAL PRESENCE MAP (🔄 NEW)

**Concept:** Visualizing 24/7 global coverage with an interactive world map.

### **Visual Design:**
- **Map Asset:** Dark-themed SVG World Map (dotted or silhouette).
- **Markers:** Pulsing "Hotspots" (CSS Ripple Animation) at key cities (NY, London, Dubai, Singapore, Sydney).
- **Interactivity:**
  - Hovering a hotspot shows a **Tooltip Card** with:
    - Office Name (e.g., "New York HQ")
    - Local Time (Live JS clock optional, or just static timezone)
    - "Active Now" status indicator.

### **Implementation:**
- Use a lightweight SVG for the map.
- Absolute positioning for "Hotspot" divs (percentages for responsiveness).

---

## 3. FAQ SECTION (🆕 NEW)

**Concept:** Addressing common client queries in a clean, space-saving format.

### **Visual Design:**
- **Style:** Modern Accordion.
- **Default State:** Question text + "+" Icon. Dark card background.
- **Active State:** Expanded answer + "-" Icon. Card glows or border highlights.
- **Layout:** 2 Columns on Desktop (Left: "Got Questions?", Right: Accordion list).

### **Content (8-10 Questions):**
1. "How do you handle data security?"
2. "What is your typical engagement model?"
3. "Do you work with startups?"
4. "What technologies do you specialize in?"
(etc.)

---

## 4. CTA / CONTACT SECTION (🔄 NEW)

**Concept:** High-impact "Call to Action" to convert visitors.

### **Visual Design:**
- **Layout:** Asymmetric Split (40% Text / 60% Form).
- **Left Side:** Large Headline ("Ready to Transform?"), Value Prop list, "Schedule Consultation" info.
- **Right Side:** Modern Multi-step feel form (or clean single step).
  - Floating Labels.
  - Gradient Submit Button ("Send Message").
- **Background:** Deep gradient with subtle animated noise or mesh.

---

## 5. FOOTER (🔄 NEW)

**Concept:** Comprehensive navigation and brand anchor.

### **Visual Design:**
- **Layout:** 4-Column Grid.
  1. **Brand Identity:** Logo, Tagline, Social Media Icons (round buttons).
  2. **Quick Links:** Company, Careers, Blog, Contact.
  3. **Services:** (Links to top 5 services).
  4. **Contact Info:** Address, Phone, Email (Clickable).
- **Bottom Bar:** Copyright 2026, Privacy Policy, Terms of Service.
- **Style:** Darkest shade of theme (`#0f172a`), lighter text (`#94a3b8`).

---

## 🛠️ IMPLEMENTATION PLAN

1.  **Step 1: Testimonials** - Create HTML structure + `carousel-testimonials.js`.
2.  **Step 2: Global Map** - Add SVG asset + CSS animations.
3.  **Step 3: FAQ** - Implement Accordion structure + `accordion.js` (or add to `main.js`).
4.  **Step 4: CTA & Footer** - Finalize layout and form styles.
5.  **Step 5: Master Integration** - Verify spacing, responsiveness, and dark mode consistency.

**Ready to execute?**
