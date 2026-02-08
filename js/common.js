// Common JavaScript functions for RxTaper website

/**
 * Toggle mobile menu visibility
 */
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        if (mobileMenu.style.display === 'flex') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'flex';
        }
    }
}

/**
 * Initialize smooth scrolling for anchor links
 * This needs to be called after dynamic content (like navbar) is loaded
 */
function initSmoothScroll() {
    // Remove existing listeners to avoid duplicates
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Clone and replace to remove old listeners
        const newAnchor = anchor.cloneNode(true);
        anchor.parentNode.replaceChild(newAnchor, anchor);
    });

    // Add new listeners
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu after clicking (if on mobile)
                    if (window.innerWidth <= 768) {
                        toggleMenu();
                    }
                }
            }
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function () {
    // Initial smooth scroll setup
    // Note: This will be called again after components are loaded
    initSmoothScroll();
});

