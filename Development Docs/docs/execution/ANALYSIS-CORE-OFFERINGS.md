# ANALYSIS: Core Offerings Responsive Issue

**Date:** 2026-02-07 00:35 IST  
**Topic:** Why "Core Offerings" section was not responsive/clumsy on small screens.

---

## 🔍 ROOT CAUSE ANALYSIS

### **1. The Problematic CSS Rule**
The original code in `sections.css` (Line 869) was:
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

### **2. Why This Failed on Smaller Screens**
The `minmax(250px, 1fr)` rule creates a strict mathematical logic:
- **Constraint:** "Every column MUST be at least 250px wide."
- **Behavior:**
  - If the screen space is **540px**, it fits **two** 250px columns.
  - If the screen space drops to **500px** (e.g., Small Tablet or Large Phone), it **cannot** fit two columns (250px + 250px + gap > 500px).
  - **Result:** It forcefully switches to **1 COLUMN**.

### **3. The Visual "Clumsiness"**
- **Premature Stacking:** On many tablets and horizontal mobiles, the grid would collapse into a single vertical stack much earlier than needed.
- **Stretched Cards:** This resulted in massive, full-width cards on medium screens, wasting screen real estate and requiring excessive scrolling.
- **Lack of Control:** The layout was decided by pixel math, not design intent.

---

## ✅ THE SOLUTION (Already Applied)

We overrode this behavior with **Device-Specific Logic** in `sections.css` (Lines 1482-1491):

1.  **Force 2 Columns on Tablet/Desktop:**
    ```css
    grid-template-columns: repeat(2, 1fr) !important;
    ```
    *Result: Keeps the layout compact and side-by-side on iPads/Laptops, preventing the "clumsy" giant cards.*

2.  **Force 1 Column on Mobile (<640px):**
    ```css
    @media (max-width: 640px) { grid-template-columns: 1fr !important; }
    ```
    *Result: Ensures readability on small phones without squishing.*

**Status:** The issue is purely logic-based in CSS grid calculation, and it is now resoloved by the explicit override.
