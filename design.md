# Design System & UI Specification
## RS Awal Bros Dumai (Native Web Design)

---

### 1. Color Palette (Skema Warna Medis)
Diimplementasikan menggunakan CSS Native Custom Properties (`:root`):

- **Primary Mint (`#006b5a`)**: Memberikan kesan profesionalitas medis, ketenangan, dan kepercayaan tinggi. Digunakan untuk header, elemen tombol utama, dan indikator aktif.
- **Primary Container (`#00a88f`)**: Accent warna segar untuk tombol CTA, pendaftaran online, serta badge penting.
- **Surface Canvas (`#fbf9f8`)**: Off-white lembut dan hangat yang nyaman di mata tanpa silau.
- **On-Surface / Text (`#1b1c1c`)**: Teks utama dengan kontras tinggi sesuai standar WCAG AA (rasio > 7:1).
- **Secondary Neutral (`#5d5f5f`)**: Teks instruksional, subtitle, dan meta data.
- **Emergency Accent (`#ba1a1a`)**: Warna merah darurat khusus untuk IGD 24 Jam, panggilan ambulans, dan peringatan kritis.
- **WhatsApp Green (`#25D366`)**: Digunakan khusus untuk Floating Action Button customer service WhatsApp.
---

### 2. Typography & Layout Guidelines
- **Font Family:** `System-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` (Tanpa external web font agar performa cepat).
- **Layouting System:** Pure CSS Flexbox & CSS Grid.
- **Responsiveness:** Mobile-First Approach menggunakan `@media (min-width: ...)` Native.
- **Display Headings**: Bold/Black tracking-tight untuk headline utama.
- **Body Text**: 16px base font size dengan line-height 1.6 untuk keterbacaan optimal di semua perangkat mobile dan desktop.


---

### 3. Component Specs
- **Emergency Topbar:** Background Hijau Toska Gelap (`#007A68`), Teks Putih (`#FFFFFF`), ikon SVG sederhana.
- **Navbar:** Sticky Header, Latar Putih, Logo RS Awal Bros Dumai di kiri, Menu Navigasi di kanan.
- **Buttons:**
  - *Primary Button:* Background Hijau Toska (`#20C997`), Teks Putih, Hover Effect (`#007A68`).
  - *Emergency Button:* Akses merah/putih khusus untuk Panggilan Darurat IGD.
- **Cards (Services & Dokter):** Border-radius `8px`, box-shadow halus (`0 4px 6px rgba(0,0,0,0.05)`), latar putih.