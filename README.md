# Otobiyografi Web Sitesi

Bu proje, kişisel bir otobiyografi web sitesi için HTML5, CSS3 ve vanilla JavaScript kullanılarak oluşturulmuştur.

## Görsel Gereksinimleri

Aşağıdaki görselleri `assets/images` klasörüne eklemeniz gerekmektedir:

1. `hero-bg.jpg` - Ana sayfa arka plan görseli (1920x1080px)
2. `profile.jpg` - Profil fotoğrafı (800x800px)
3. `project1.jpg` - Proje görseli 1 (800x600px)
4. `project2.jpg` - Proje görseli 2 (800x600px)
5. `project3.jpg` - Proje görseli 3 (800x600px)

## Örnek Görseller

Aşağıdaki ücretsiz stok fotoğraf sitelerinden görseller kullanabilirsiniz:

1. [Unsplash](https://unsplash.com)
2. [Pexels](https://pexels.com)
3. [Pixabay](https://pixabay.com)

## Görsel Önerileri

- `hero-bg.jpg` için: Minimal, profesyonel bir ofis veya teknoloji temalı görsel
- `profile.jpg` için: Profesyonel bir portre fotoğrafı
- Proje görselleri için: Web tasarımı, mobil uygulama veya UI/UX çalışmalarınızı gösteren ekran görüntüleri

## Görsel Optimizasyonu

Tüm görselleri web için optimize etmeyi unutmayın:

1. JPEG formatı kullanın
2. Görsel kalitesini %80-85 arasında tutun
3. Görsel boyutlarını belirtilen ölçülere uygun şekilde ayarlayın
4. Görselleri sıkıştırın (örn. TinyPNG kullanarak)

## Kurulum

1. Görselleri `assets/images` klasörüne ekleyin
2. Görsel yollarını HTML dosyalarında güncelleyin
3. Yerel sunucuda projeyi çalıştırın

## Not

Tüm görseller telif hakkı sorunlarından kaçınmak için ücretsiz stok fotoğraf sitelerinden seçilmelidir.

# Elif Göğebakan Kişisel Web Sitesi

Bu proje, Elif Göğebakan'ın kişisel web sitesidir. Mimarlık öğrencisi, tasarımcı ve fotoğrafçı olarak çalışmalarını sergilemektedir.

## 📁 Proje Yapısı

```
├── index.html          # Ana sayfa
├── about.html          # Hakkımda sayfası
├── timeline.html       # Zaman çizelgesi
├── gallery.html        # Galeri sayfası
├── contact.html        # İletişim sayfası
├── assets/            # Medya dosyaları
│   ├── images/        # Görseller
│   │   ├── gallery/   # Galeri görselleri
│   │   └── profile.jpg # Profil fotoğrafı
├── styles/            # CSS dosyaları
└── scripts/           # JavaScript dosyaları
```

## ��️ Galeri Yönetimi

### 1. Fotoğraf Hazırlama ve Adlandırma
- Fotoğrafları `assets/images/gallery/` klasörüne yükleyin
- Dosya adlandırma formatı: `gallery-[NUMARA].jpg` (örn: gallery-1.jpg, gallery-2.jpg)
- Önerilen boyut: 1200x800 piksel
- Format: JPG veya PNG
- Tüm fotoğraflar aynı boyutta olmalı

### 2. Galeri HTML Yapısı
Her fotoğraf için aşağıdaki HTML yapısını kullanın:

```html
<div class="gallery-item" data-aos="fade-up" data-aos-delay="[GECİKME]">
    <img src="assets/images/gallery/gallery-[NUMARA].jpg" alt="[AÇIKLAMA]">
    <div class="gallery-overlay">
        <div class="gallery-overlay-content">
            <h3>[BAŞLIK]</h3>
            <p>[KISA_AÇIKLAMA]</p>
        </div>
    </div>
</div>
```

Örnek:
```html
<div class="gallery-item" data-aos="fade-up" data-aos-delay="100">
    <img src="assets/images/gallery/gallery-1.jpg" alt="Mimari Tasarım">
    <div class="gallery-overlay">
        <div class="gallery-overlay-content">
            <h3>Mimari Tasarım</h3>
            <p>Modern mimari tasarım projesi, İstanbul</p>
        </div>
    </div>
</div>
```

### 3. Fotoğraf Ekleme Adımları
1. Fotoğrafı hazırlayın ve optimize edin
2. `assets/images/gallery/` klasörüne `gallery-[NUMARA].jpg` formatında kaydedin
3. `gallery.html` dosyasında yeni bir `gallery-item` div'i ekleyin
4. `src` özelliğinde doğru dosya yolunu belirtin
5. Animasyon gecikmesini ayarlayın (her fotoğraf için 100ms artırın)

### 4. Önemli Kontrol Noktaları
- Dosya adları tam olarak `gallery-1.jpg`, `gallery-2.jpg` şeklinde olmalı
- Klasör yapısı doğru olmalı: `assets/images/gallery/`
- HTML'deki `src` yolları doğru yazılmalı
- Tüm fotoğraflar aynı boyutta olmalı
- Dosya uzantıları küçük harfle yazılmalı (.jpg, .png)

### 5. Animasyon Ayarları
- `data-aos="fade-up"`: Yukarıdan aşağıya kayma animasyonu
- `data-aos-delay="[MS]"`: Animasyon gecikmesi (milisaniye)
  - Her fotoğraf için 100ms artırın (100, 200, 300, ...)

### 6. Öneriler
- Fotoğrafları optimize edin (boyut ve kalite dengesi)
- Açıklamaları kısa ve öz tutun
- Her fotoğraf için anlamlı başlıklar kullanın
- Fotoğrafları sıralı bir şekilde numaralandırın
- Dosya adlarında boşluk veya özel karakter kullanmayın

### 7. Responsive Tasarım
- Galeri otomatik olarak ekran boyutuna uyum sağlar
- Mobil cihazlarda tek sütun görünüm
- Tablet ve masaüstünde çoklu sütun görünüm

## 🚀 Özellikler

- Modern ve responsive tasarım
- AOS animasyon kütüphanesi entegrasyonu
- Hover efektleri
- Mobil uyumlu menü
- SEO dostu yapı

## 🛠️ Teknolojiler

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
- AOS (Animate On Scroll)

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın. 