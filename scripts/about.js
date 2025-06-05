// Intersection Observer için seçenekler
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Profil içeriği için observer
const profileObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Yetenek çubukları için observer
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Zaman çizelgesi öğeleri için observer
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Sayfa geçiş animasyonunu başlat
    document.body.classList.add('page-transition');

    // Profil içeriğini gözlemle
    const profileContent = document.querySelector('.profile-content');
    if (profileContent) {
        profileObserver.observe(profileContent);
    }

    // Yetenek çubuklarını gözlemle
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        skillsObserver.observe(bar);
    });

    // Zaman çizelgesi öğelerini gözlemle
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Parallax efekti için header arka planı
    const header = document.querySelector('.about-header');
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            header.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }
});

// Sayfa geçiş animasyonu
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
}); 