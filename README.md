# 🏥 Company Profile Website - RS Awal Bros Dumai

[![Pure Native Web](https://img.shields.io/badge/Tech_Stack-HTML5_%7C_CSS3_%7C_Vanilla_JS-006B5A?style=for-the-badge)](https://github.com)
[![DevOps Workflow](https://img.shields.io/badge/DevOps-Git_30%2B_Commits-00A88F?style=for-the-badge)](https://github.com)
[![UI/UX Grade](https://img.shields.io/badge/Design_System-Competition_Grade-BA1A1A?style=for-the-badge)](https://github.com)

---

## 📌 1. Tentang Proyek

Platform digital resmi **Company Profile Website RS Awal Bros Dumai** yang dirancang untuk memberikan akses cepat dan terpadu mengenai informasi pelayanan kesehatan berstandar internasional di Kota Dumai, Riau.

Proyek ini dibangun sebagai pemenuhan **Tugas Mata Kuliah DevOps**, dengan mengimplementasikan standar *Clean Code*, *Git Feature Branch Workflow*, *Component-Driven Architecture* (DRY Principle), dan dokumentasi terstruktur.

---

## 🎨 2. Standar Desain & Skema Warna

Website ini mengikuti sistem desain medis profesional (*Competition Grade*) yang mengacu pada `DESIGN.md`:

| Token Desain | Kode Warna | Penggunaan Utamanya |
| :--- | :--- | :--- |
| **Primary Mint** | `#006B5A` / `#20C997` | Header, Tombol Utama, Indikator Aktif, Element Branding |
| **Primary Container** | `#00A88F` | Accent Segar, Tombol CTA, Badge Spesialisasi |
| **Surface Canvas** | `#FBF9F8` | Latar Belakang Off-White Lembut & Comfortable |
| **On-Surface / Text** | `#1B1C1C` | Teks Utama Kontras Tinggi (Standar WCAG AA > 7:1) |
| **Secondary Neutral** | `#5D5F5F` | Subtitle, Metadata, Teks Instruksional |
| **Emergency Accent** | `#BA1A1A` | Peringatan Darurat IGD 24 Jam & Ambulans |
| **WhatsApp Green** | `#25D366` | Floating Action Button Customer Service |

---

## ✨ 3. Fitur-Fitur Utama Website

1. **Header & Emergency Topbar 24/7:** Akses cepat nomor darurat IGD `(0765) 38888`, jam operasional, dan lokasi rumah sakit.
2. **Master Component Loader (DRY Principle):** Suntikan komponen Navbar & Footer reusable (`components/navbar.html` & `components/footer.html`) menggunakan `js/components.js` yang mendukung *Live Server/Fetch API* maupun *Local File System Fallback*.
3. **Pencarian & Filter Dokter Spesialis Real-Time:** Filter berdasarkan nama dokter dan kategori spesialisasi (Penyakit Dalam, Anak, Jantung, Kebidanan, Bedah, Saraf, Mata, THT).
4. **Pendaftaran Janji Temu Online & Modal Tiket Digital:** Form pendaftaran interaktif dengan pilihan waktu kunjungan, sinkronisasi otomatis poliklinik-dokter, dan generator **Kode Booking Resmi** (contoh: `AB-20260802-9823`).
5. **Kalkulator Kesehatan Interaktif (BMI):** Penghitung Indeks Massa Tubuh instan beserta rekomendasi medis bagi pengunjung.
6. **Pusat Informasi & Peta Lokasi:** Halaman kontak lengkap dengan alamat resmi, email CS, form pesan, dan *Interactive Embedded Google Maps*.
7. **Galeri Foto & Lightbox Preview:** Galeri fasilitas dan lingkungan rumah sakit dengan filter kategori dan modal preview foto.

---

## 🛠️ 4. Tech Stack & Aturan Pengkodean

- **STRICTLY NATIVE WEB:** HANYA menggunakan HTML5 Semantic, CSS3 Native, dan Vanilla JavaScript (ES6+).
- **NO FRAMEWORKS / NO LIBRARIES:** Bebas dari kebergantungan React, Vue, TailwindCSS, Bootstrap, maupun jQuery untuk menjamin performa muat halaman yang sangat cepat.
- **System Font Stack:** Menggunakan font bawaan OS modern tanpa external web font demi optimasi *speed index*.

---

## 📁 5. Struktur Direktori Repositori

```text
Uas-DevOps/
├── 📄 README.md                # Dokumentasi Repositori GitHub
├── 📄 AGENTS.md                # Panduan & Strict Rules AI / Developer Lead
├── 📄 PRD.md                   # Product Requirement Document & DevOps Plan
├── 📄 DESIGN.md                # Visual Design System & Spesifikasi UI/UX
├── 📄 index.html                # Entry point utama (auto-redirect ke content/index.html)
├── 📁 components/              # Master Reusable Components (DRY)
│   ├── navbar.html             # Topbar IGD + Main Sticky Navbar
│   └── footer.html             # Site Footer & Quick Links
├── 📁 content/                 # Halaman Halaman Web Utama
│   ├── index.html              # Landing Page Beranda
│   ├── dokter.html             # Direktori & Filter Dokter Spesialis
│   ├── janji-temu.html         # Form Pendaftaran Online & Modal Tiket
│   ├── kontak.html             # Informasi Kontak, Form Pesan, & Peta Maps
│   ├── profil.html             # Profil RS Awal Bros Dumai
│   ├── tentang-kami.html       # Informasi Tentang Kami
│   ├── poliklinikspesialis.html# Katalog Poliklinik
│   ├── layananrawatinap.html   # Pilihan Kelas Rawat Inap
│   ├── laboratorium-radiologi.html
│   ├── medical-check-up.html   # Layanan MCU
│   ├── igd-ambulans.html       # Layanan Darurat IGD
│   ├── galeri.html             # Galeri Foto RS & Lightbox
│   └── layanan-*.html          # Sub-layanan spesialis (Jantung, Kanker, Mata, Saraf, THT)
├── 📁 css/
│   └── style.css               # Styling utama (CSS Variables, Flex/Grid, Components, Media Queries)
├── 📁 js/
│   ├── components.js           # Fetch Loader Navbar & Footer + Active Link State
│   └── main.js                 # Interaktivitas JS (Filter Dokter, Form Validation, BMI Calc, Modal)
└── 📁 assets/
    └── 📁 img/                 # Gambar (Logo RS, Foto Dokter per Spesialisasi, Banner Hero, Fasilitas)
```

---

## 👥 6. Rencana Pembagian Kerja & Commit Tim (30+ Commit Target)

- **Anggota 1 — Lead Layout & Base Structure (Commit 1–10):**
  - Setup struktur repositori & konfigurasi awal.
  - Pengerjaan Topbar IGD, Navbar, Hero Section, dan Refactoring HTML Semantik.
- **Anggota 2 — Content & Medical Features (Commit 11–20):**
  - Pengerjaan Section Services, Direktori Dokter Spesialis, Katalog Kamar, & Optimasi Aset Gambar.
- **Anggota 3 — Interactive JS & DevOps Lead (Commit 21–30):**
  - Pengembangan Form Janji Temu (Validation & Booking Modal Ticket Generator).
  - Filter Dokter Interaktif & Kalkulator BMI.
  - Setup dokumentasi repositori (`README.md`, `PRD.md`, `DESIGN.md`, & `devops.md`).

---

## 🚀 7. Cara Menjalankan Proyek

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/username/Uas-DevOps.git
   cd Uas-DevOps
   ```

2. **Jalankan Web Server Lokal:**
   - Gunakan **Laragon / XAMPP** (letakkan folder di `www` atau `htdocs`), atau
   - Gunakan extension **Live Server** di VS Code, atau
   - Cukup buka file `index.html` langsung di browser favorit Anda.

---

## 📝 8. Lisensi & Hak Cipta

&copy; 2026 **RS Awal Bros Dumai**. Proyek Mata Kuliah DevOps. Hak Cipta Dilindungi Undang-Undang.
