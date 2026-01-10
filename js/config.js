// Site configuration for RxTaper website

const SITE_CONFIG = {
    year: 2026,
    email: 'xup654m42@gmail.com',
    icon: 'app_icon.png',
    iconWithBg: 'app_icon_with_bg.png',
    
    // Site name in different languages
    name: {
        zh: 'RxTaper: AI減藥追蹤日記',
        en: 'RxTaper: AI Tapering Diary'
    },
    
    // Navigation links in different languages
    navLinks: {
        home: {
            zh: [
                { text: '功能介紹', href: '#features' },
                { text: '隱私保護', href: 'privacy.html' },
                { text: '重要聲明', href: '#disclaimer', class: 'nav-warning' },
                { text: '免費下載', href: '#', class: 'btn-download' }
            ],
            en: [
                { text: 'Features', href: '#features' },
                { text: 'Privacy', href: 'privacy.html' },
                { text: 'Disclaimer', href: '#disclaimer', class: 'nav-warning' },
                { text: 'Download', href: '#', class: 'btn-download' }
            ]
        },
        other: {
            zh: [
                { text: '功能介紹', href: 'index.html#features' },
                { text: '重要聲明', href: 'index.html#disclaimer', class: 'nav-warning' },
                { text: '免費下載', href: '#', class: 'btn-download' }
            ],
            en: [
                { text: 'Features', href: 'index.html#features' },
                { text: 'Disclaimer', href: 'index.html#disclaimer', class: 'nav-warning' },
                { text: 'Download', href: '#', class: 'btn-download' }
            ]
        }
    },
    
    // Footer links in different languages
    footerLinks: {
        zh: [
            { text: '隱私權政策', href: 'privacy.html' },
            { text: '服務條款 (EULA)', href: 'terms.html' },
            { text: '技術支援', href: 'support.html' }
        ],
        en: [
            { text: 'Privacy Policy', href: 'privacy.html' },
            { text: 'Terms of Use (EULA)', href: 'terms.html' },
            { text: 'Support', href: 'support.html' }
        ]
    },
    
    // Mobile menu links for other pages
    mobileMenuOther: {
        zh: [
            { text: '回首頁', href: 'index.html' },
            { text: '重要聲明', href: 'index.html#disclaimer' }
        ],
        en: [
            { text: 'Home', href: 'index.html' },
            { text: 'Disclaimer', href: 'index.html#disclaimer' }
        ]
    }
};

