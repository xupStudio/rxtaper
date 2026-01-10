// Generate common HTML components (navbar, footer) for RxTaper website

/**
 * Generate navbar HTML
 * @param {boolean} isHomePage - Whether this is the home page
 * @param {string} lang - Language code ('en' or 'zh')
 */
function generateNavbar(isHomePage = false, lang = 'zh') {
    const navLinks = isHomePage 
        ? SITE_CONFIG.navLinks.home[lang] 
        : SITE_CONFIG.navLinks.other[lang];
    
    const navLinksHTML = navLinks.map(link => {
        const classAttr = link.class ? ` class="${link.class}"` : '';
        return `<a href="${link.href}"${classAttr}>${link.text}</a>`;
    }).join('\n                ');
    
    const siteName = SITE_CONFIG.name[lang];
    
    return `
    <header class="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html" style="display:flex; align-items:center; color:inherit;">
                    <img src="${SITE_CONFIG.icon}" alt="RxTaper App Icon" class="app-icon">
                    <span>${siteName}</span>
                </a>
            </div>
            <nav class="nav-links">
                ${navLinksHTML}
            </nav>
            <div class="hamburger" onclick="toggleMenu()">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <div class="mobile-menu" id="mobileMenu">
        ${isHomePage 
            ? navLinks.map(link => `<a href="${link.href}" onclick="toggleMenu()">${link.text}</a>`).join('\n        ')
            : SITE_CONFIG.mobileMenuOther[lang].map(link => `<a href="${link.href}" onclick="toggleMenu()">${link.text}</a>`).join('\n        ')
        }
    </div>`;
}

/**
 * Generate footer HTML
 * @param {string} lang - Language code ('en' or 'zh')
 */
function generateFooter(lang = 'zh') {
    const footerLinksHTML = SITE_CONFIG.footerLinks[lang].map(link => 
        `<a href="${link.href}">${link.text}</a>`
    ).join('\n                ');
    
    const siteName = SITE_CONFIG.name[lang];
    const legalFooter = lang === 'zh' 
        ? '此網站僅為產品介紹，實際功能以 App 內版本與條款為主。'
        : 'This website is for product introduction only. Actual features are subject to the in-app version and terms.';
    
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-logo">
                <img src="${SITE_CONFIG.icon}" alt="RxTaper App Icon" class="app-icon">
                <span>${siteName}</span>
            </div>
            <p>&copy; ${SITE_CONFIG.year} RxTaper. All rights reserved.</p>
            <div class="footer-links">
                ${footerLinksHTML}
            </div>
            <p class="legal-footer">${legalFooter}</p>
        </div>
    </footer>`;
}

/**
 * Generate common head HTML
 * @param {string} title - Page title
 */
function generateHead(title) {
    return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>${title}</title>
    
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="css/pages.css">
    <link rel="icon" href="${SITE_CONFIG.iconWithBg}" type="image/png">
    <link rel="apple-touch-icon" href="${SITE_CONFIG.iconWithBg}">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">`;
}

/**
 * Initialize components on page load
 * @param {boolean} isHomePage - Whether this is the home page
 */
function initComponents(isHomePage = false) {
    // Get current language - i18n.js should be loaded first
    let lang = 'zh'; // Default
    if (typeof getCurrentLanguage === 'function') {
        lang = getCurrentLanguage();
    } else if (typeof detectLanguage === 'function') {
        lang = detectLanguage();
    }
    
    // Insert navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = generateNavbar(isHomePage, lang);
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooter(lang);
    }
}

