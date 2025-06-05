// DOM Elementleri
const modal = document.getElementById('imageModal');
const modalImage = modal.querySelector('.modal-image');
const modalClose = modal.querySelector('.modal-close');
const modalPrev = modal.querySelector('.modal-prev');
const modalNext = modal.querySelector('.modal-next');
const galleryItems = document.querySelectorAll('.gallery-item');

// Galeri görsellerini diziye al
const galleryImages = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').src,
    title: item.querySelector('h3').textContent,
    description: item.querySelector('p').textContent
}));

let currentImageIndex = 0;

// Modal'ı aç
function openModal(index) {
    currentImageIndex = index;
    updateModalImage();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı engelle
}

// Modal'ı kapat
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Sayfa kaydırmayı tekrar etkinleştir
}

// Modal görselini güncelle
function updateModalImage() {
    const image = galleryImages[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.title;
}

// Önceki görsel
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateModalImage();
}

// Sonraki görsel
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateModalImage();
}

// Event Listeners
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openModal(index));
});

modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', showPrevImage);
modalNext.addEventListener('click', showNextImage);

// ESC tuşu ile modal'ı kapat
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// Modal dışına tıklandığında kapat
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Lazy Loading için Intersection Observer
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

// Tüm lazy load görsellerini gözlemle
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
}); 