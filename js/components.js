// Generate common HTML components (navbar, footer) for RxTaper website

/**
 * Generate navbar HTML
 * @param {boolean} isHomePage - Whether this is the home page
 */
function generateNavbar(isHomePage = false) {
    const navLinks = isHomePage ? SITE_CONFIG.navLinks.home : SITE_CONFIG.navLinks.other;
    
    const navLinksHTML = navLinks.map(link => {
        const classAttr = link.class ? ` class="${link.class}"` : '';
        return `<a href="${link.href}"${classAttr}>${link.text}</a>`;
    }).join('\n                ');
    
    return `
    <header class="navbar">
        <div class="container">
            <div class="logo">
                <a href="index.html" style="display:flex; align-items:center; color:inherit;">
                    <img src="${SITE_CONFIG.icon}" alt="RxTaper App Icon" class="app-icon">
                    <span>${SITE_CONFIG.name}</span>
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
            : SITE_CONFIG.mobileMenuOther.map(link => `<a href="${link.href}" onclick="toggleMenu()">${link.text}</a>`).join('\n        ')
        }
    </div>`;
}

/**
 * Generate footer HTML
 */
function generateFooter() {
    const footerLinksHTML = SITE_CONFIG.footerLinks.map(link => 
        `<a href="${link.href}">${link.text}</a>`
    ).join('\n                ');
    
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-logo">
                <img src="${SITE_CONFIG.icon}" alt="RxTaper App Icon" class="app-icon">
                <span>${SITE_CONFIG.name}</span>
            </div>
            <p>&copy; ${SITE_CONFIG.year} RxTaper. All rights reserved.</p>
            <div class="footer-links">
                ${footerLinksHTML}
            </div>
            <p class="legal-footer">此網站僅為產品介紹，實際功能以 App 內版本與條款為主。</p>
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
    // Insert navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = generateNavbar(isHomePage);
    }
    
    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooter();
    }
}

