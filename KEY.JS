// ترجمة المحتوى
const translations = {
    en: {
        home: "Home",
        features: "Features",
        download: "Download",
        discord: "Discord",
        hero_title: "The best tool to run games on <span>PC</span>",
        hero_subtitle: "NEW KEY provides a unique experience to run games with high quality on your computer",
        download_now: "Download Now",
        join_discord: "Join our server",
        features_title: "<span>NEW KEY</span> Features",
        features_subtitle: "Why choose our software to run games?",
        feature1_title: "High Performance",
        feature1_desc: "Improve game performance on your computer",
        feature2_title: "Wide Support",
        feature2_desc: "Supports most popular games",
        feature3_title: "Full Protection",
        feature3_desc: "No risk to your device or account",
        download_title: "Download <span>NEW KEY</span> for PC",
        download_subtitle: "Current version: v1.1.0 (Last update: 2025-3-24)",
        download_btn: "Download Now (Windows)",
        install_steps: "Installation Steps:",
        step1: "Download the file from the link above",
        step2: "Open the zip file",
        step3: "Run Setup.exe file",
        step4: "Follow the on-screen instructions",
        step5: "Enjoy the app!",
        sys_req: "System Requirements:",
        req1: "Windows 10/11 (64-bit only)",
        req2: "Core i3 processor or higher",
        req3: "2GB RAM minimum",
        req4: "2.5 KB storage space",
        req5: "Internet connection for activation",
        footer_desc: "The best tool to run games on PC",
        quick_links: "Quick Links",
        more_info: "More Info",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        faq: "FAQ",
        rights: "All rights reserved"
    },
    fr: {
        home: "Accueil",
        features: "Fonctionnalités",
        download: "Télécharger",
        discord: "Discord",
        hero_title: "Le meilleur outil pour exécuter des jeux sur <span>PC</span>",
        hero_subtitle: "NEW KEY offre une expérience unique pour exécuter des jeux en haute qualité sur votre ordinateur",
        download_now: "Télécharger maintenant",
        join_discord: "Rejoignez notre serveur",
        features_title: "Fonctionnalités <span>NEW KEY</span>",
        features_subtitle: "Pourquoi choisir notre logiciel pour exécuter des jeux?",
        feature1_title: "Haute Performance",
        feature1_desc: "Améliore les performances des jeux sur votre ordinateur",
        feature2_title: "Large Support",
        feature2_desc: "Prend en charge la plupart des jeux populaires",
        feature3_title: "Protection Complète",
        feature3_desc: "Aucun risque pour votre appareil ou compte",
        download_title: "Télécharger <span>NEW KEY</span> pour PC",
        download_subtitle: "Version actuelle: v1.1.0 (Dernière mise à jour: 2025-3-25)",
        download_btn: "Télécharger maintenant (Windows)",
        install_steps: "Étapes d'installation:",
        step1: "Téléchargez le fichier à partir du lien ci-dessus",
        step2: "Ouvrez le fichier zip",
        step3: "Exécutez le fichier Setup.exe",
        step4: "Suivez les instructions à l'écran",
        step5: "Profitez de l'application!",
        sys_req: "Configuration système requise:",
        req1: "Windows 10/11 (64-bit uniquement)",
        req2: "Processeur Core i3 ou supérieur",
        req3: "2GB RAM minimum",
        req4: "2.5 KB d'espace de stockage",
        req5: "Connexion Internet pour l'activation",
        footer_desc: "Le meilleur outil pour exécuter des jeux sur PC",
        quick_links: "Liens rapides",
        more_info: "Plus d'infos",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        faq: "FAQ",
        rights: "Tous droits réservés"
    },
    ar: {
        home: "الرئيسية",
        features: "المميزات",
        download: "التنزيل",
        discord: "الديسكورد",
        hero_title: "أفضل أداة لتشغيل الألعاب على <span>الكمبيوتر</span>",
        hero_subtitle: "NEW KEY يقدم لك تجربة فريدة في تشغيل الألعاب بجودة عالية على جهاز الكمبيوتر الخاص بك",
        download_now: "حمل التطبيق الآن",
        join_discord: "انضم لخادمنا",
        features_title: "مميزات <span>NEW KEY</span>",
        features_subtitle: "لماذا تختار برنامجنا لتشغيل الألعاب؟",
        feature1_title: "أداء عالي",
        feature1_desc: "تحسين أداء الألعاب على جهاز الكمبيوتر الخاص بك",
        feature2_title: "دعم واسع",
        feature2_desc: "يدعم معظم الألعاب الشهيرة",
        feature3_title: "حماية كاملة",
        feature3_desc: "لا يوجد خطر على جهازك أو حسابك",
        download_title: "حمل <span>NEW KEY</span> للكمبيوتر",
        download_subtitle: "الإصدار الحالي: v1.1.0 (آخر تحديث: 2025-3-24)",
        download_btn: "تنزيل الآن (Windows)",
        install_steps: "كيفية التثبيت:",
        step1: "قم بتنزيل الملف من الرابط أعلاه",
        step2: "افتح الملف المضغوط (Zip)",
        step3: "شغل ملف التثبيت Setup.exe",
        step4: "اتبع التعليمات الظاهرة على الشاشة",
        step5: "استمتع بالتطبيق!",
        sys_req: "متطلبات النظام:",
        req1: "Windows 10/11 (64-bit فقط)",
        req2: "معالج Core i3 أو أعلى",
        req3: "2GB RAM كحد أدنى",
        req4: "مساحة تخزين 2.5KB",
        req5: "اتصال بالإنترنت للتفعيل",
        footer_desc: "أفضل أداة لتشغيل الألعاب على الكمبيوتر",
        quick_links: "روابط سريعة",
        more_info: "معلومات إضافية",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        faq: "الأسئلة الشائعة",
        rights: "جميع الحقوق محفوظة"
    }
};

// تغيير اللغة
function changeLanguage(lang) {
    // تغيير اتجاه الصفحة حسب اللغة
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث النصوص
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // تحديث الزر النشط
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // حفظ اللغة المختارة
    localStorage.setItem('selectedLanguage', lang);
}

// تهيئة اللغة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد اللغة المفضلة من المتصفح أو من التخزين المحلي
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = navigator.language.split('-')[0];
    const defaultLang = savedLang || ['ar', 'en', 'fr'].includes(browserLang) ? browserLang : 'ar';
    
    changeLanguage(defaultLang);
    
    // أحداث أزرار تغيير اللغة
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });
    
    // باقي الكود السابق...
    // شريط التنقل الثابت وتغيير الشكل عند التمرير
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // قائمة الهاتف المتحرك
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // تنعيم التمرير للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // تأثيرات الظهور عند التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .section-header, .download-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // تشغيلها مرة عند التحميل
    
    // مؤشر التمرير للأعلى
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // تتبع نقرات رابط التنزيل
    const downloadBtn = document.querySelector('.download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('تم النقر على زر التنزيل');
            // يمكنك إضافة كود لتتبع النقرات هنا
        });
    }
});

// تأثيرات إضافية بعد تحميل الصفحة
window.onload = function() {
    // تأثير كتابة النص للهيرو (اختياري)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
};