// Form elementlerini seç
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Form doğrulama fonksiyonları
function validateName(name) {
    return name.length >= 2;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateSubject(subject) {
    return subject.length >= 3;
}

function validateMessage(message) {
    return message.length >= 20;
}

// Hata mesajı gösterme fonksiyonu
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'var(--accent-color)';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '0.5rem';
    errorElement.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorElement);
    }
    
    input.style.borderColor = 'var(--accent-color)';
}

// Hata mesajını temizleme fonksiyonu
function clearError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    input.style.borderColor = '#ddd';
}

// Input event listener'ları
nameInput.addEventListener('input', () => {
    if (validateName(nameInput.value)) {
        clearError(nameInput);
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        clearError(emailInput);
    }
});

subjectInput.addEventListener('input', () => {
    if (validateSubject(subjectInput.value)) {
        clearError(subjectInput);
    }
});

messageInput.addEventListener('input', () => {
    if (validateMessage(messageInput.value)) {
        clearError(messageInput);
    }
});

// Form gönderimi
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // İsim doğrulama
    if (!validateName(nameInput.value)) {
        showError(nameInput, 'İsim en az 2 karakter olmalıdır.');
        isValid = false;
    }
    
    // E-posta doğrulama
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Geçerli bir e-posta adresi giriniz.');
        isValid = false;
    }
    
    // Konu doğrulama
    if (!validateSubject(subjectInput.value)) {
        showError(subjectInput, 'Konu en az 3 karakter olmalıdır.');
        isValid = false;
    }
    
    // Mesaj doğrulama
    if (!validateMessage(messageInput.value)) {
        showError(messageInput, 'Mesaj en az 20 karakter olmalıdır.');
        isValid = false;
    }
    
    if (isValid) {
        // Form verilerini hazırla
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        };
        
        // Form gönderim animasyonu
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Gönderiliyor...';
        submitButton.disabled = true;
        
        // Form verilerini gönder (örnek)
        setTimeout(() => {
            console.log('Form verileri:', formData);
            
            // Başarılı gönderim sonrası
            submitButton.textContent = 'Gönderildi!';
            submitButton.style.backgroundColor = '#28a745';
            
            // Formu temizle
            contactForm.reset();
            
            // 3 saniye sonra butonu eski haline getir
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
                submitButton.disabled = false;
            }, 3000);
        }, 1500);
    }
}); 