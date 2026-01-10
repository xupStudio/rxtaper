// Site configuration for RxTaper website

const SITE_CONFIG = {
    name: 'RxTaper: AI減藥日記',
    year: 2026,
    email: 'xup654m42@gmail.com',
    icon: 'app_icon.png',
    iconWithBg: 'app_icon_with_bg.png',
    
    // Navigation links
    navLinks: {
        home: [
            { text: '功能介紹', href: '#features' },
            { text: '隱私保護', href: 'privacy.html' },
            { text: '重要聲明', href: '#disclaimer', class: 'nav-warning' },
            { text: '免費下載', href: '#', class: 'btn-download' }
        ],
        other: [
            { text: '功能介紹', href: 'index.html#features' },
            { text: '重要聲明', href: 'index.html#disclaimer', class: 'nav-warning' },
            { text: '免費下載', href: '#', class: 'btn-download' }
        ]
    },
    
    // Footer links
    footerLinks: [
        { text: '隱私權政策', href: 'privacy.html' },
        { text: '服務條款 (EULA)', href: 'terms.html' },
        { text: '技術支援', href: 'support.html' }
    ],
    
    // Mobile menu links for other pages
    mobileMenuOther: [
        { text: '回首頁', href: 'index.html' },
        { text: '重要聲明', href: 'index.html#disclaimer' }
    ]
};

