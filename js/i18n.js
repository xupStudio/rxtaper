// Internationalization (i18n) system for RxTaper website

/**
 * Detect user's preferred language from browser
 * @returns {string} Language code ('en' or 'zh')
 */
function detectLanguage() {
    // Check if language is stored in localStorage (user preference)
    const savedLang = localStorage.getItem('rxtaper_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
        return savedLang;
    }
    
    // Detect from browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0];
    
    // Check if browser language starts with 'zh' (Chinese variants)
    if (langCode.startsWith('zh')) {
        return 'zh';
    }
    
    // Default to English for all other languages
    return 'en';
}

/**
 * Set language preference
 * @param {string} lang - Language code ('en' or 'zh')
 */
function setLanguage(lang) {
    if (lang === 'en' || lang === 'zh') {
        localStorage.setItem('rxtaper_lang', lang);
        // Reload page to apply language change
        window.location.reload();
    }
}

/**
 * Get current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
    return detectLanguage();
}

// Page titles in different languages
const PAGE_TITLES = {
    'index.html': {
        zh: 'RxTaper: AI減藥追蹤日記',
        en: 'RxTaper: AI Tapering Diary'
    },
    'privacy.html': {
        zh: '隱私權政策 | RxTaper: AI減藥追蹤日記',
        en: 'Privacy Policy | RxTaper: AI Tapering Diary'
    },
    'terms.html': {
        zh: '使用條款 | RxTaper: AI減藥追蹤日記',
        en: 'Terms of Use | RxTaper: AI Tapering Diary'
    },
    'support.html': {
        zh: '技術支援 | RxTaper: AI減藥追蹤日記',
        en: 'App Support | RxTaper: AI Tapering Diary'
    }
};

/**
 * Show content for specific language and hide others
 * @param {string} lang - Language code ('en' or 'zh')
 */
function showLanguage(lang) {
    // Hide all language content
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show content for selected language
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
        el.style.display = '';
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    
    // Update page title based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (PAGE_TITLES[currentPage] && PAGE_TITLES[currentPage][lang]) {
        document.title = PAGE_TITLES[currentPage][lang];
    }
    
    // Dispatch language change event for other components
    const event = new CustomEvent('languageChanged', { detail: { lang } });
    document.dispatchEvent(event);
}

/**
 * Initialize language on page load
 */
function initLanguage() {
    const lang = detectLanguage();
    showLanguage(lang);
    return lang;
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

