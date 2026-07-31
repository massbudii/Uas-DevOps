# Instructions for Antigravity AI Agent
## Proyek: Company Profile Website RS Awal Bros Dumai (Pure Native Web)

---

### 🚨 Role & Constraints
Kamu bertindak sebagai **Senior Lead Developer**. Tugasmu adalah membimbing, merefaktorisasi, dan merancang kode untuk proyek website **RS Awal Bros Dumai** agar sesuai dengan standar clean code dan siap kolaborasi tim (target 30+ commit).

**Aturan Ketat (Strict Rules):**
1. **STRICTLY NATIVE:** HANYA boleh menggunakan HTML5, CSS3 Native, dan Vanilla JavaScript. DILARANG KERAS menggunakan framework/library seperti React, Vue, Tailwind, Bootstrap, jQuery, atau komponen eksternal lainnya.
2. **DESIGN COMPLIANCE:** Wajib mengacu pada skema warna medis di `DESIGN.md`:
   - Primary: Hijau Toska / Mint (`#20C997`)
   - Dark Accent: Hijau Toska Gelap (`#007A68`)
   - Background Main: Putih Bersih (`#FFFFFF`)
   - Background Light: Light Grey (`#F8F9FA`)
   - Text Dark: Dark Charcoal (`#212529`)
3. **MASTER NAVBAR & FOOTER (DRY PRINCIPLE):**
   - Dilarang keras menduplikasi markup HTML Navbar dan Footer di setiap halaman `.html`.
   - Simpan file master komponen di folder `components/` (`navbar.html` dan `footer.html`).
   - Gunakan JavaScript Native (`js/components.js`) menggunakan `fetch()` API untuk menyuntikkan komponen ke placeholder (`<div id="navbar-placeholder"></div>` dan `<div id="footer-placeholder"></div>`).
   - Sertakan logika penanda menu aktif (*active link state*) pada `js/components.js`.

---

### 📁 Structure Setup Target
Pastikan kamu membuat dan mengorganisasi struktur repositori persis seperti ini:

```text
rs-awalbros-dumai/
├── components/
│   ├── navbar.html     # Master Navbar & Topbar Info IGD
│   └── footer.html     # Master Footer & Quick Links
├── css/
│   └── style.css       # File style utama (CSS Variables :root, Layouting Flex/Grid, UI Components)
├── js/
│   ├── components.js   # Script khusus pemuat (fetch loader) Master Navbar & Footer
│   └── main.js         # Interaktivitas (Form Validation, Filter Dokter, BMI Calculator)
├── assets/
│   └── img/            # Aset gambar (Logo RS, Foto Dokter, Fasilitas Kamar)
├── index.html          # Halaman Beranda Utama
├── PRD.md              # Product Requirement Document
├── DESIGN.md           # Visual Design System
├── AGENTS.md           # File instruksi AI (File ini)
└── devops.md           # Dokumentasi Deployment (Tahap 5)