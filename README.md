# Foto.in.id — Web Portofolio Fotografi (Astro + Tailwind CSS)

Website portofolio dan layanan fotografi profesional **Foto.in.id**, dimigrasikan dari format HTML statis ke framework modern **Astro JS** dengan styling **Tailwind CSS**.

---

## 📸 Sumber Foto (`photo/`)
Folder [photo/](file:///Users/macbook/Folder/Tugas%20Kuliah/semester%205/kewirausahaan/fotoinid/photo) adalah direktori sumber utama untuk semua foto karya (Wisuda, Aksi Bela Diri, Pertunjukan Panggung Malam, dan Dokumentasi Kegiatan).
- File foto beresolusi tinggi otomatis disinkronkan ke folder `public/photo/` untuk disajikan secara optimal di browser.
- Format HEIC telah dikonversi ke JPEG beresolusi penuh agar kompatibel dengan seluruh web browser.

---

## 🚀 Fitur Utama
1. **Astro JS Framework**: Performa statis ultra-cepat, modular berbasis komponen (`.astro`).
2. **Tailwind CSS**: Desain estetik editorial bernuansa modern, responsif untuk mobile hingga desktop.
3. **Hero Section Sinematik**: Menampilkan foto aksi malam utama dengan tipografi premium dan visual mask.
4. **Galeri Interaktif & Filter**:
   - Filter kategori: *Semua Karya*, *Wisuda*, *Aksi & Bela Diri*, *Portrait*, *Event & Tim*.
   - Grid masonry asimetris yang dinamis dan berkelas.
5. **Interactive Lightbox Modal**:
   - Klik pada foto untuk melihat preview resolusi penuh.
   - Navigasi keyboard (panah kiri/kanan, tombol `Esc` untuk menutup).
   - Tautan langsung untuk membuka dan mengunduh foto kualitas tinggi original.
6. **Showcase Karya Pilihan (Dark Editorial)**: Sorotan aksi semburan api dengan shutter speed tinggi.
7. **Layanan & Paket Transparan**: Daftar spesifikasi deliverables, file original, color grading, dan alur pengerjaan.
8. **Direct WhatsApp Booking & Form Generator**: Tombol CTA WhatsApp dan form konsultasi langsung terintegrasi.

---

## 🛠️ Perintah Menjalankan

### Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Akses di browser melalui: `http://localhost:4322` (atau port yang tertera di terminal).

### Membangun Versi Produksi (Build)
```bash
npm run build
```

### Preview Hasil Build
```bash
npm run preview
```

---

## 📁 Struktur Proyek
```text
fotoinid/
├── photo/                     # Sumber utama foto (asli & beresolusi tinggi)
├── public/
│   └── photo/                 # Aset foto yang disajikan langsung ke web
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigasi atas & mobile menu drawer
│   │   ├── Hero.astro         # Bagian pembuka dengan latar foto utama
│   │   ├── Gallery.astro      # Galeri foto dengan tombol filter
│   │   ├── Feature.astro      # Sorotan karya pilihan (mode gelap)
│   │   ├── Services.astro     # Daftar rincian layanan fotografi
│   │   ├── About.astro        # Profil & standar komitmen kualitas
│   │   ├── Packages.astro     # Spesifikasi teknis paket & hasil akhir
│   │   ├── Contact.astro      # Form WhatsApp & informasi pemesanan
│   │   ├── Footer.astro       # Tautan navigasi bawah & hak cipta
│   │   └── Lightbox.astro     # Modal penampil foto resolusi penuh
│   ├── data/
│   │   └── photos.ts          # Dataset metadata seluruh koleksi foto
│   ├── layouts/
│   │   └── Layout.astro       # Template utama (SEO, Fonts, Animations)
│   ├── pages/
│   │   └── index.astro        # Halaman utama
│   └── styles/
│       └── global.css         # Styling global Tailwind CSS
├── astro.config.mjs           # Konfigurasi Astro & Tailwind CSS Vite
└── package.json               # Konfigurasi dependensi & npm scripts
```
