# Final Content & Configuration Guide for CDS Website

This document provides a step-by-step guide to finalizing your website content, legal pages, and configuration files. **No code changes have been made automatically**; follow these instructions to manually update your site for production.

---

## 1. ⚖️ Legal Pages Implementation

You need to create three new HTML files in the root directory (`cds-website/`) for compliance.

### Recommended Files:
1.  **`privacy.html`** (Privacy Policy)
2.  **`terms.html`** (Terms of Service)
3.  **`cookies.html`** (Cookie Policy)

### How to Implement:
> **Pro Tip:** Duplicate `index.html` or `about-us.html` to keep the Header, Navigation, and Footer styles intact. Then, replace the main content area (between `<nav>` and `<footer>`) with your legal text.

**Linking Them:**
Currently, your footer (in all pages) has placeholders:
```html
<a href="#privacy">Privacy Policy</a>
<a href="#terms">Terms of Service</a>
<a href="#cookies">Cookie Policy</a>
```
**Action:** Update these `href` values in **ALL 5 HTML files** (`index.html`, `about-us.html`, `services.html`, `case-studies.html`, `impact.html`) to:
```html
<a href="privacy.html">Privacy Policy</a>
<a href="terms.html">Terms of Service</a>
<a href="cookies.html">Cookie Policy</a>
```

---

## 2. 📝 Content Replacement Checklist

**CRITICAL NOTE:** Since this is a static website, the Header and Footer code is repeated in every HTML file. You must make these changes in **ALL 5 HTML PAGES** manually to ensure consistency.

### A. Contact Details (Email, Phone, Address)
**Locations to Update:**
1.  **Footer (All Pages):** Approx Line 840-850.
    *   **Email:** Replace `hello@cds.com` with your real email (e.g., `contact@cdsgroups.com`).
    *   **Phone:** Replace `+1 (234) 567-890` with your real number.
    *   **Address:** Replace `Kingston, Jamaica` with your full business address.
2.  **Schema Markup (`index.html` only):** Line ~60 (inside `<script type="application/ld+json">`).
    *   Update `"telephone"`.
    *   Update `"addressRegion"` (or add `"streetAddress"`).

### B. Social Media Links
**Locations to Update:**
1.  **Footer (All Pages):** Approx Line 806-810 & 384-388.
    *   Update `href="#"` with your actual Facebook, LinkedIn, Twitter/X URLs.
2.  **Schema Markup (`index.html`):** Update `"sameAs"` array with your social URLs.
3.  **CEO Social Links (`about-us.html`):** Line ~292. Update the specific LinkedIn/Twitter links for the CEO.

### C. Team & CEO Images
**Location:** `about-us.html` (Line 270).
**Current Code:**
```html
<div class="ceo-image-placeholder"><i class="fas fa-user-tie"></i></div>
```
**Action:**
1.  Create folder `assets/images/team/`.
2.  Upload CEO headshot (Recommend: JPG/WebP, 500x600px).
3.  Replace the placeholder `div` with:
```html
<img src="assets/images/team/ceo.webp" alt="Sathish - CEO" class="ceo-visual-img" style="width:100%; height:100%; object-fit:cover; border-radius: var(--radius-lg);">
```

### D. Branding (Logo & Favicon)
1.  **Favicon:** Upload your `favicon.ico` file to the root folder (`cds-website/`).
2.  **Web App Icons:** Upload `logo-192.png` (192x192px) and `logo-512.png` (512x512px) to `assets/images/`.

---

## 3. ⚙️ Configuration File Impacts

Adding new pages and changing details affects these specific files. Here is the detailed analysis:

### 1. `sitemap.xml`
*   **Status:** Needs Update.
*   **Why:** Search engines read this file to discover pages.
*   **Action:** You must manually add entries for the new legal pages.
    ```xml
    <url>
      <loc>https://cdsgroups.com/privacy.html</loc>
      <lastmod>2026-02-07</lastmod>
    </url>
    <url>
      <loc>https://cdsgroups.com/terms.html</loc>
      <lastmod>2026-02-07</lastmod>
    </url>
    ```

### 2. `robots.txt`
*   **Status:** No Change Required.
*   **Why:** It currently allows all crawling (`User-agent: * Allow: /`).
*   **Action:** Unless you specifically want to hide your legal pages from Google (adds `Disallow: /privacy.html`), leave this file as is.

### 3. `manifest.json`
*   **Status:** Needs Icons.
*   **Why:** This file controls how your app looks when installed on mobile.
*   **Action:** It strictly references `assets/images/logo-192.png` and `logo-512.png`. Ensure these files exist, or update the JSON to point to your real logo files.

### 4. Schema Markup (JSON-LD)
*   **Status:** Needs Update.
*   **Why:** This provides "rich results" in Google.
*   **Action:** As noted in Section 2A, the Organization Schema in `index.html` contains your business phone/address/logo. **This must match your website footer perfectly** to avoid SEO penalties for inconsistent NAP (Name, Address, Phone).

---
