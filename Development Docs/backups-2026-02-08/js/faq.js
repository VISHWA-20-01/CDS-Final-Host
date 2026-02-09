/**
 * FAQ Toggle Function
 * Handles the 'Sleek Card' accordion behavior.
 * Triggered via onclick="toggleFaq(this)" in HTML.
 */
function toggleFaq(element) {
    // Close other items
    const allItems = document.querySelectorAll('.faq-item-card');
    allItems.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
            // Reset max-height for others if we were using JS (but we use CSS)
        }
    });

    // Toggle clicked item
    element.classList.toggle('active');
}
