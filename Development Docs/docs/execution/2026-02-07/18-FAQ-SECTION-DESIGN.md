# FAQ SECTION DESIGN PLAN

**Goal:** implement a high-performance, light-themed FAQ section that answers core business questions without slowing down the page.

## 1. 🎨 Visual Design
- **Background:** Light Gray (`#f8f9fa`) to provide a "breather" after the dark Testimonials.
- **Typography:** Dark Slate (`#111827`) for questions, softer Gray (`#4b5563`) for answers.
- **Style:** Clean lines, minimal borders. No heavy shadows.
- **Iconography:** Simple `+` / `-` or chevron arrows for toggles.

## 2. 📐 Layout Architecture
### Desktop (2-Column)
| Left Column (Sticky) | Right Column (Scrollable) |
| :--- | :--- |
| **Headline:** "Common Questions" | **Q1:** How quickly can we start? |
| **Sub:** "Everything you need to know about working with us." | [ Answer Content ] |
| **CTA:** "Can't find it? Contact Us ->" | **Q2:** How do you handle security? |
| | **Q3:** ... |

### Mobile (Stacked)
- Headline & Subtext on top.
- Accordions below taking full width.

## 3. 🚀 Performance & Technical Approach
- **HTML:** Semantic `<div class="faq-item">` with `<button>` triggers.
- **CSS:**
  - use `display: grid; grid-template-rows: 0fr; transition: ...` for smooth height animation (The modern "Zero JS Layout calculation" trick).
  - This prevents CLS (Layout Shift) penalties because the animation is handled by the compositor.
- **JS:** Minimal functional script (~10 lines) just to toggle the `.active` class.

## 4. 📝 Validated Content (8 Questions)

**Category: Engagement & Process**
1.  **How quickly can you ramp up a team for my project?**
    *   *Ans:* We typically deploy core teams within 2 weeks, ensuring a swift start without compromising quality.
2.  **Do you support legacy system modernization?**
    *   *Ans:* Yes, we specialize in refactoring and migrating legacy monoliths to modern cloud-native architectures (AWS/Azure).
3.  **What is your communication process during a sprint?**
    *   *Ans:* We use agile methodologies with weekly sprints, daily standups, and transparent access to Jira/Trello boards.

**Category: Trust & Security**
4.  **How do you handle data security and compliance?**
    *   *Ans:* We follow DevSecOps best practices, ensuring SOC2 and HIPAA compliance where necessary. Security is baked in from Day 1.
5.  **Who owns the Intellectual Property (IP)?**
    *   *Ans:* You do. 100%. Once the project is delivered and paid for, all code and assets belong to your company.

**Category: Scaling & Support**
6.  **Can you scale the team up or down based on demand?**
    *   *Ans:* Absolutely. Our elastic resource model allows you to scale engineering capacity as your business needs fluctuate.
7.  **Do you provide maintenance after launch?**
    *   *Ans:* Yes, we offer tailored SLAs (Service Level Agreements) for 24/7 monitoring, security patching, and updates.
8.  **What industries do you specialize in?**
    *   *Ans:* We have deep expertise in FinTech, Healthcare, Logistics, and Retail, but our tech stack is industry-agnostic.

## 5. 🏗️ Implementation Steps
1.  **HTML:** Add `<section id="faq">` after Testimonials.
2.  **CSS:** Add Light Theme variables and Accordion styles to `sections.css`.
3.  **JS:** Add simple toggle logic to `main.js` (or a tiny inline script).
