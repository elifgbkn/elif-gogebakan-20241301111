// DOM Elementleri
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const scrollToTopBtn = document.createElement('button');

// Scroll to Top Butonu
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--accent-color);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    font-size: 20px;
    z-index: 1000;
    transition: all 0.3s ease;
`;
document.body.appendChild(scrollToTopBtn);

// Mobil Menü Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Scroll to Top Fonksiyonu
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Reveal Animasyonu
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item, .gallery-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

// Sayfa Geçiş Animasyonu
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-transition');
});

// Sayfa yüklendiğinde animasyonları başlat
document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animasyonlarını başlat
    revealOnScroll();
    
    // Hero bölümü animasyonları
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .btn');
    
    if (heroTitle) heroTitle.classList.add('animate-fade-in');
    if (heroText) heroText.classList.add('animate-slide-left');
    if (heroButton) heroButton.classList.add('animate-slide-right');
    
    // Feature kartları animasyonları
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.2}s`;
    });
    
    // Sosyal medya ikonları animasyonu
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.classList.add('animate-scale');
        link.style.animationDelay = `${index * 0.1}s`;
    });

    // Yetenek çubukları animasyonu
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        bar.style.animationDelay = `${index * 0.2}s`;
    });

    // Zaman çizelgesi animasyonu
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.3}s`;
    });

    // Galeri animasyonu
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Scroll event listener
window.addEventListener('scroll', () => {
    revealOnScroll();
    
    // Scroll to top butonu
    if (window.pageYOffset > 200) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.classList.add('animate-scale');
    } else {
        scrollToTopBtn.style.display = 'none';
        scrollToTopBtn.classList.remove('animate-scale');
    }
});

// Smooth Scroll için tüm iç linkleri yakala
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Mobil menüyü kapat
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}); 