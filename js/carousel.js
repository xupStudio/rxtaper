// Carousel functionality for app screenshots

let carouselInterval = null;
let currentSlide = 0;
let currentLang = 'zh';
const slidesPerLang = 7; // 1-7 screenshots per language

/**
 * Initialize carousel
 */
function initCarousel() {
    // Get current language
    if (typeof getCurrentLanguage === 'function') {
        currentLang = getCurrentLanguage();
    } else if (typeof detectLanguage === 'function') {
        currentLang = detectLanguage();
    }
    
    // Show slides for current language and hide others
    const allSlides = document.querySelectorAll('.carousel-slide');
    allSlides.forEach((slide, index) => {
        const slideLang = slide.getAttribute('data-lang');
        if (slideLang === currentLang) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    
    // Get visible slides for current language
    const visibleSlides = document.querySelectorAll(`.carousel-slide[data-lang="${currentLang}"]`);
    
    if (visibleSlides.length === 0) return;
    
    // Initialize first slide
    visibleSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === 0) {
            slide.classList.add('active');
        }
    });
    
    // Reset current slide index
    currentSlide = 0;
    
    // Start auto-play
    startCarousel();
    
    console.log('Carousel initialized with language:', currentLang, 'slides:', visibleSlides.length);
}

/**
 * Go to specific slide
 */
function goToSlide(index) {
    const visibleSlides = document.querySelectorAll(`.carousel-slide[data-lang="${currentLang}"]`);
    if (visibleSlides.length === 0) return;
    
    // Update current slide index
    currentSlide = index;
    if (currentSlide >= visibleSlides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = visibleSlides.length - 1;
    }
    
    // Update slides
    visibleSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
    
    // Don't reset carousel here to avoid infinite loop
    // Auto-play will continue from the interval
}

/**
 * Go to next slide
 */
function nextSlide() {
    const visibleSlides = document.querySelectorAll(`.carousel-slide[data-lang="${currentLang}"]`);
    if (visibleSlides.length === 0) {
        console.warn('No visible slides found for language:', currentLang);
        return;
    }
    
    currentSlide = (currentSlide + 1) % visibleSlides.length;
    goToSlide(currentSlide);
}

/**
 * Start auto-play carousel
 */
function startCarousel() {
    // Clear existing interval first
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
    // Start new interval
    carouselInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

/**
 * Reset carousel (stop and restart)
 */
function resetCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
    // Start new interval
    carouselInterval = setInterval(nextSlide, 3000);
}

/**
 * Update carousel when language changes
 */
function updateCarouselLanguage(event) {
    const newLang = event ? event.detail.lang : (typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'zh');
    if (newLang !== currentLang) {
        currentLang = newLang;
        currentSlide = 0;
        
        // Show slides for current language and hide others
        const allSlides = document.querySelectorAll('.carousel-slide');
        allSlides.forEach((slide) => {
            const slideLang = slide.getAttribute('data-lang');
            if (slideLang === currentLang) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        
        // Get visible slides for current language
        const visibleSlides = document.querySelectorAll(`.carousel-slide[data-lang="${currentLang}"]`);
        
        if (visibleSlides.length === 0) return;
        
        // Reset to first slide
        visibleSlides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === 0) {
                slide.classList.add('active');
            }
        });
        
        // Reset auto-play
        resetCarousel();
    }
}

// Initialize carousel when DOM is ready and i18n is loaded
function waitForI18n() {
    if (typeof getCurrentLanguage === 'function' || typeof detectLanguage === 'function') {
        // Small delay to ensure DOM is fully ready
        setTimeout(initCarousel, 100);
    } else {
        // Retry after a short delay if i18n not loaded yet
        setTimeout(waitForI18n, 50);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForI18n);
} else {
    waitForI18n();
}

// Update carousel when language changes (listen to language change events)
document.addEventListener('languageChanged', updateCarouselLanguage);

// Pause carousel on hover
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.app-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            if (carouselInterval) {
                clearInterval(carouselInterval);
            }
        });
        carousel.addEventListener('mouseleave', () => {
            startCarousel();
        });
    }
});

