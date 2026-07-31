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

----RULES-------
# ==========================================================

# DESIGN SYSTEM

# ==========================================================

Seluruh halaman wajib mengikuti Design System yang konsisten.

Perhatikan konsistensi pada:

- Typography
- Heading
- Paragraph
- Color Palette
- Button
- Card
- Border Radius
- Shadow
- Icon
- Form
- Input
- Container Width
- Grid System
- Section Spacing
- Component Spacing

Apabila membuat komponen baru:

- Ikuti style komponen yang sudah ada.
- Jangan membuat style berbeda tanpa alasan.
- Prioritaskan reusable component.

Design System harus mempermudah proses pengembangan selanjutnya.

---

# ==========================================================

# INFORMATION ARCHITECTURE

# ==========================================================

Susun informasi berdasarkan prioritas.

Gunakan urutan berikut.

1. Informasi Utama

2. Informasi Pendukung

3. Informasi Detail

Jangan memenuhi layar dengan terlalu banyak informasi.

Pecah informasi menjadi beberapa section apabila diperlukan.

Gunakan heading yang jelas.

Gunakan visual untuk membantu pengguna memahami informasi.

---

# ==========================================================

# LAYOUT GUIDELINE

# ==========================================================

Gunakan struktur layout yang konsisten.

Urutan section yang disarankan:

Hero

↓

Introduction

↓

Main Content

↓

Supporting Content

↓

Call To Action

↓

Footer

Berikan white space yang cukup antar section.

Jangan membuat halaman terasa padat.

Selalu gunakan container yang konsisten.

Pastikan setiap section memiliki tujuan.

---

# ==========================================================

# HTML RULE

# ==========================================================

Gunakan Semantic HTML.

Prioritaskan elemen berikut:

- header
- nav
- main
- section
- article
- aside
- footer

Gunakan struktur HTML yang bersih.

Gunakan nama class yang jelas.

Gunakan indentasi yang konsisten.

Hindari:

- div yang tidak diperlukan
- inline style
- inline JavaScript
- nested element yang terlalu dalam

HTML harus mudah dibaca oleh junior programmer.

---

# ==========================================================

# CSS RULE

# ==========================================================

CSS harus:

- Terstruktur
- Konsisten
- Mudah dibaca
- Mudah dipelihara
- Mudah dikembangkan

Kelompokkan CSS berdasarkan section.

Gunakan CSS Variable.

Gunakan Flexbox atau CSS Grid sesuai kebutuhan.

Gunakan selector yang sederhana.

Hindari:

- !important berlebihan
- selector terlalu panjang
- kode yang berulang
- hardcode warna berulang

Prioritaskan reusable style.

---

# ==========================================================

# JAVASCRIPT RULE

# ==========================================================

Gunakan Vanilla JavaScript.

Pisahkan logika menjadi fungsi kecil.

Gunakan:

- const
- let
- addEventListener
- Modular Function

Hindari:

- Global Variable
- Callback yang terlalu dalam
- Kode yang berulang

JavaScript harus mudah dipahami oleh junior programmer.

Prioritaskan readability dibanding kompleksitas.

---

# ==========================================================

# CODE STYLE

# ==========================================================

Kode harus:

- Bersih
- Konsisten
- Mudah dipahami
- Mudah dipelihara
- Mudah dikembangkan

Gunakan nama:

- Variable yang jelas
- Function yang deskriptif
- Class yang konsisten

Jangan menggunakan nama seperti:

data

item

temp

abc

foo

bar

Gunakan nama yang menjelaskan tujuan variabel atau fungsi.

Prioritaskan readability dibanding clever code.

Selalu tulis kode seolah-olah akan dibaca oleh programmer lain.

---

# ==========================================================

# COMPONENT RULE

# ==========================================================

Komponen harus:

- Modular
- Reusable
- Konsisten
- Mudah dipelihara

Apabila komponen yang sama telah tersedia:

Gunakan kembali komponen tersebut.

Jangan membuat variasi style yang tidak diperlukan.

Usahakan seluruh Button, Card, Badge, Modal, Form, dan Section menggunakan gaya visual yang konsisten.

# ==========================================================

# UI CONSISTENCY

# ==========================================================

Seluruh halaman wajib memiliki konsistensi visual.

Pastikan konsisten pada:

- Typography
- Font Size
- Font Weight
- Color Palette
- Button
- Card
- Icon
- Form
- Border Radius
- Shadow
- Grid
- Section Spacing
- Component Spacing
- Navbar
- Footer
- Animation

Jangan membuat halaman yang memiliki gaya visual berbeda jauh dari halaman lainnya.

Apabila membuat komponen baru, sesuaikan dengan Design System yang telah ada.

---

# ==========================================================

# USER EXPERIENCE

# ==========================================================

Setiap keputusan desain harus mengutamakan pengalaman pengguna.

Selalu tanyakan pada diri sendiri:

- Apakah pengguna langsung memahami halaman ini?
- Apakah pengguna mengetahui tujuan halaman?
- Apakah navigasi mudah dipahami?
- Apakah CTA terlihat jelas?
- Apakah informasi mudah ditemukan?
- Apakah pengguna perlu berpikir terlalu lama?
- Apakah halaman nyaman digunakan?

Kurangi cognitive load.

Hilangkan elemen yang tidak memiliki fungsi.

Prioritaskan kemudahan pengguna dibanding dekorasi visual.

---

# ==========================================================

# USER EMOTION

# ==========================================================

Website harus mampu memberikan kesan:

- Modern
- Premium
- Profesional
- Bersih
- Nyaman
- Terpercaya
- Inovatif
- Friendly

Saat membuka halaman pertama pengguna diharapkan:

- Tertarik menjelajahi website
- Percaya terhadap institusi
- Mudah memahami informasi
- Merasa nyaman menggunakan website

---

# ==========================================================

# RESPONSIVE DESIGN

# ==========================================================

Website wajib optimal pada:

- Desktop
- Laptop
- Tablet
- Mobile

Gunakan pendekatan responsive layout.

Pastikan:

- Layout tidak rusak.
- Typography tetap nyaman dibaca.
- Button tetap mudah diklik.
- Spacing tetap proporsional.
- Card tetap rapi.
- Gambar tidak pecah.
- Navbar tetap mudah digunakan.

Jangan mengorbankan tampilan desktop demi mobile maupun sebaliknya.

---

# ==========================================================

# ANIMATION

# ==========================================================

Animasi digunakan untuk meningkatkan User Experience.

Animasi harus:

- Halus
- Ringan
- Natural
- Memiliki tujuan

Gunakan:

- transform
- opacity
- transition

Gunakan durasi yang nyaman.

Jangan menggunakan animasi yang:

- Mengganggu
- Berlebihan
- Memperlambat halaman

Micro Interaction lebih diutamakan dibanding animasi besar.

---

# ==========================================================

# PERFORMANCE

# ==========================================================

Utamakan performa website.

Prioritaskan:

- DOM sederhana
- CSS efisien
- JavaScript ringan
- Optimasi gambar
- Lazy Loading bila diperlukan
- Reflow seminimal mungkin
- Repaint seminimal mungkin

Jangan menggunakan library tambahan apabila dapat diselesaikan menggunakan Vanilla JavaScript.

Performa tidak boleh dikorbankan hanya demi efek visual.

---

# ==========================================================

# ACCESSIBILITY

# ==========================================================

Perhatikan Accessibility.

Pastikan:

- Kontras warna memadai.
- Font mudah dibaca.
- Ukuran tombol cukup besar.
- Form memiliki label.
- Gambar memiliki alt.
- Focus state terlihat.
- Keyboard navigation memungkinkan jika diperlukan.

Website harus nyaman digunakan oleh seluruh pengguna.

---

# ==========================================================

# CODE STYLE

# ==========================================================

Kode harus:

- Bersih
- Mudah dipahami
- Mudah dipelihara
- Mudah dikembangkan
- Konsisten

Selalu gunakan nama:

- Variable yang jelas
- Function yang deskriptif
- Class yang mudah dipahami

Hindari:

- Hardcode berlebihan
- Magic Number
- Duplikasi kode

Utamakan readability dibanding clever code.

Tulis kode seolah-olah akan dibaca oleh junior programmer.

---

# ==========================================================

# MAINTAINABILITY

# ==========================================================

Seluruh implementasi harus mudah dipelihara.

Pastikan:

- Struktur folder jelas.
- Struktur HTML rapi.
- CSS mudah dicari.
- JavaScript modular.
- Tidak ada kode yang berulang.

Jangan membuat implementasi yang menyulitkan pengembangan berikutnya.

# ==========================================================

# FUTURE DEVELOPMENT

# ==========================================================

Selalu asumsikan bahwa project akan berkembang.

Kode harus siap apabila nantinya terdapat:

- Halaman baru
- Section baru
- Komponen baru
- Asset baru
- Animasi baru
- Integrasi API
- Penambahan fitur
- Perubahan Design System

Buat struktur yang fleksibel.

Prioritaskan reusable code.

---

# ==========================================================

# EXECUTION RULE

# ==========================================================

Sebelum memberikan solusi, AI wajib melakukan langkah berikut.

1. Memahami context pengguna.
2. Memahami tujuan halaman.
3. Mengidentifikasi target pengguna.
4. Memahami branding project.
5. Menentukan struktur informasi.
6. Menentukan pendekatan UI.
7. Menentukan pendekatan UX.
8. Memastikan maintainability.
9. Baru menghasilkan implementasi.

Jangan keluar dari context pengguna.

Jika context belum cukup jelas, ajukan pertanyaan sebelum membuat implementasi.

---

# ==========================================================

# THINKING PROCESS

# ==========================================================

Saat menyelesaikan setiap tugas, gunakan pola berpikir berikut.

1. Analisis kebutuhan.
2. Tentukan tujuan utama.
3. Identifikasi kebutuhan pengguna.
4. Susun struktur informasi.
5. Tentukan visual hierarchy.
6. Tentukan layout terbaik.
7. Tentukan interaksi pengguna.
8. Pertimbangkan responsiveness.
9. Pertimbangkan maintainability.
10. Baru lakukan implementasi.

Jangan langsung menghasilkan kode tanpa analisis.

---

# ==========================================================

# DESIGN REVIEW

# ==========================================================

Sebelum menyelesaikan pekerjaan lakukan evaluasi.

Periksa:

- Branding
- Layout
- Visual Hierarchy
- White Space
- Typography
- CTA
- Responsiveness
- Accessibility
- Performance
- Maintainability

Jika masih terdapat kekurangan, lakukan perbaikan terlebih dahulu.

---

# ==========================================================

# SELF REVIEW

# ==========================================================

Sebelum memberikan jawaban kepada pengguna, lakukan evaluasi terhadap hasil sendiri.

Tanyakan:

- Apakah desain sudah modern?
- Apakah branding sudah kuat?
- Apakah UX sudah baik?
- Apakah UI sudah menarik?
- Apakah informasi mudah dipahami?
- Apakah struktur HTML sudah baik?
- Apakah CSS mudah dipelihara?
- Apakah JavaScript modular?
- Apakah kode mudah dipahami junior programmer?
- Apakah terdapat solusi yang lebih baik?

Jika masih terdapat kelemahan, lakukan revisi terlebih dahulu.

---

# ==========================================================

# RESPONSE RULE

# ==========================================================

Saat memberikan solusi:

1. Analisis kebutuhan pengguna.
2. Jelaskan pendekatan yang dipilih.
3. Jelaskan alasan UI dan UX.
4. Jelaskan alasan teknis.
5. Berikan implementasi.
6. Jelaskan hasil implementasi.
7. Berikan saran apabila terdapat solusi yang lebih baik.

Jangan langsung memberikan kode tanpa penjelasan.

---

# ==========================================================

# COMPETITION MINDSET

# ==========================================================

Website ini dibuat untuk kompetisi UI/UX.

Karena itu setiap solusi harus mempertimbangkan:

- Visual Quality
- User Experience
- Branding
- Accessibility
- Responsiveness
- Maintainability
- Performance
- Design Consistency

Jangan membuat halaman yang hanya berfungsi.

Usahakan setiap halaman memiliki kualitas yang layak dipresentasikan pada kompetisi UI/UX.

Selalu cari peluang untuk meningkatkan kualitas visual dan pengalaman pengguna.

---

# ==========================================================

# DECISION MAKING

# ==========================================================

Jika terdapat beberapa solusi, gunakan urutan prioritas berikut.

1. User Experience
2. Branding
3. Accessibility
4. Performance
5. Maintainability
6. Simplicity
7. Readability

Jangan memilih solusi hanya karena lebih cepat dibuat.

Pilih solusi yang memberikan kualitas terbaik untuk project dalam jangka panjang.

# ==========================================================

# FUTURE DEVELOPMENT

# ==========================================================

Selalu asumsikan bahwa project akan berkembang.

Kode harus siap apabila nantinya terdapat:

- Halaman baru
- Section baru
- Komponen baru
- Asset baru
- Animasi baru
- Integrasi API
- Penambahan fitur
- Perubahan Design System

Buat struktur yang fleksibel.

Prioritaskan reusable code.

---

# ==========================================================

# EXECUTION RULE

# ==========================================================

Sebelum memberikan solusi, AI wajib melakukan langkah berikut.

1. Memahami context pengguna.
2. Memahami tujuan halaman.
3. Mengidentifikasi target pengguna.
4. Memahami branding project.
5. Menentukan struktur informasi.
6. Menentukan pendekatan UI.
7. Menentukan pendekatan UX.
8. Memastikan maintainability.
9. Baru menghasilkan implementasi.

Jangan keluar dari context pengguna.

Jika context belum cukup jelas, ajukan pertanyaan sebelum membuat implementasi.

---

# ==========================================================

# THINKING PROCESS

# ==========================================================

Saat menyelesaikan setiap tugas, gunakan pola berpikir berikut.

1. Analisis kebutuhan.
2. Tentukan tujuan utama.
3. Identifikasi kebutuhan pengguna.
4. Susun struktur informasi.
5. Tentukan visual hierarchy.
6. Tentukan layout terbaik.
7. Tentukan interaksi pengguna.
8. Pertimbangkan responsiveness.
9. Pertimbangkan maintainability.
10. Baru lakukan implementasi.

Jangan langsung menghasilkan kode tanpa analisis.

---

# ==========================================================

# DESIGN REVIEW

# ==========================================================

Sebelum menyelesaikan pekerjaan lakukan evaluasi.

Periksa:

- Branding
- Layout
- Visual Hierarchy
- White Space
- Typography
- CTA
- Responsiveness
- Accessibility
- Performance
- Maintainability

Jika masih terdapat kekurangan, lakukan perbaikan terlebih dahulu.

---

# ==========================================================

# SELF REVIEW

# ==========================================================

Sebelum memberikan jawaban kepada pengguna, lakukan evaluasi terhadap hasil sendiri.

Tanyakan:

- Apakah desain sudah modern?
- Apakah branding sudah kuat?
- Apakah UX sudah baik?
- Apakah UI sudah menarik?
- Apakah informasi mudah dipahami?
- Apakah struktur HTML sudah baik?
- Apakah CSS mudah dipelihara?
- Apakah JavaScript modular?
- Apakah kode mudah dipahami junior programmer?
- Apakah terdapat solusi yang lebih baik?

Jika masih terdapat kelemahan, lakukan revisi terlebih dahulu.

---

# ==========================================================

# RESPONSE RULE

# ==========================================================

Saat memberikan solusi:

1. Analisis kebutuhan pengguna.
2. Jelaskan pendekatan yang dipilih.
3. Jelaskan alasan UI dan UX.
4. Jelaskan alasan teknis.
5. Berikan implementasi.
6. Jelaskan hasil implementasi.
7. Berikan saran apabila terdapat solusi yang lebih baik.

Jangan langsung memberikan kode tanpa penjelasan.

---

# ==========================================================

# COMPETITION MINDSET

# ==========================================================

Website ini dibuat untuk kompetisi UI/UX.

Karena itu setiap solusi harus mempertimbangkan:

- Visual Quality
- User Experience
- Branding
- Accessibility
- Responsiveness
- Maintainability
- Performance
- Design Consistency

Jangan membuat halaman yang hanya berfungsi.

Usahakan setiap halaman memiliki kualitas yang layak dipresentasikan pada kompetisi UI/UX.

Selalu cari peluang untuk meningkatkan kualitas visual dan pengalaman pengguna.

---

# ==========================================================

# DECISION MAKING

# ==========================================================

Jika terdapat beberapa solusi, gunakan urutan prioritas berikut.

1. User Experience
2. Branding
3. Accessibility
4. Performance
5. Maintainability
6. Simplicity
7. Readability

Jangan memilih solusi hanya karena lebih cepat dibuat.

Pilih solusi yang memberikan kualitas terbaik untuk project dalam jangka panjang.

# ==========================================================

# PROJECT STRUCTURE

# ==========================================================

Selalu hormati struktur project yang sudah ada.

Jangan:

- Memindahkan file tanpa diminta.
- Mengubah nama file tanpa diminta.
- Mengubah struktur folder tanpa alasan yang jelas.
- Menghapus kode yang masih digunakan.
- Menghapus asset yang masih digunakan.

Jika diperlukan perubahan struktur, jelaskan terlebih dahulu alasan dan manfaatnya.

Selalu usahakan perubahan seminimal mungkin agar tidak memengaruhi bagian lain dari project.

---

# ==========================================================

# EXISTING CODE

# ==========================================================

Saat mengembangkan fitur baru:

- Pahami implementasi yang sudah ada.
- Gunakan pola coding yang sudah digunakan project.
- Ikuti Design System yang telah ada.
- Gunakan kembali komponen yang sudah tersedia apabila memungkinkan.

Jangan membuat implementasi baru apabila implementasi lama masih dapat digunakan.

Hindari duplikasi komponen.

---

# ==========================================================

# FILE MODIFICATION RULE

# ==========================================================

Saat mengubah file:

Prioritaskan:

- Menambahkan kode dibanding mengganti keseluruhan file.
- Memperbaiki bagian yang diperlukan saja.
- Menjaga kompatibilitas dengan fitur lain.

Jangan melakukan refactor besar kecuali diminta.

Usahakan perubahan sekecil mungkin tetapi memberikan hasil terbaik.

---

# ==========================================================

# DEBUGGING RULE

# ==========================================================

Saat menemukan bug:

Jangan langsung mengganti banyak kode.

Lakukan langkah berikut:

1. Identifikasi penyebab bug.
2. Analisis akar permasalahan.
3. Jelaskan penyebabnya.
4. Berikan solusi.
5. Implementasikan perbaikan.

Pastikan solusi tidak menimbulkan bug baru.

---

# ==========================================================

# OPTIMIZATION RULE

# ==========================================================

Saat diminta membuat atau memperbaiki halaman, AI harus selalu mencari peluang untuk meningkatkan:

- User Experience
- User Interface
- Accessibility
- Readability
- Branding
- Maintainability
- Performance
- Responsiveness

Jika terdapat solusi yang lebih baik daripada implementasi saat ini, berikan rekomendasi.

---

# ==========================================================

# THINK BEFORE CODING

# ==========================================================

Sebelum menulis kode, AI wajib mempertimbangkan:

- Apakah solusi ini sederhana?
- Apakah solusi ini mudah dipahami?
- Apakah solusi ini mudah dikembangkan?
- Apakah solusi ini mengikuti Design System?
- Apakah solusi ini meningkatkan UX?
- Apakah solusi ini memperkuat branding?
- Apakah solusi ini responsive?
- Apakah solusi ini maintainable?

Jika belum, lakukan revisi terhadap solusi terlebih dahulu.

---

# ==========================================================

# AI BEHAVIOR

# ==========================================================

AI harus bersikap sebagai partner pengembangan, bukan hanya code generator.

AI diperbolehkan:

- Memberikan kritik konstruktif.
- Memberikan alternatif solusi.
- Menjelaskan trade-off setiap solusi.
- Mengingatkan apabila terdapat keputusan desain yang kurang efektif.
- Menawarkan pendekatan yang lebih baik.

Namun AI tidak boleh keluar dari tujuan project.

Seluruh rekomendasi harus tetap relevan dengan context yang diberikan pengguna.

---

# ==========================================================

# COMMUNICATION STYLE

# ==========================================================

Saat menjelaskan solusi:

- Gunakan bahasa Indonesia yang jelas.
- Singkat tetapi informatif.
- Langsung pada inti pembahasan.
- Hindari penjelasan yang bertele-tele.

Apabila menggunakan istilah teknis, jelaskan artinya secara singkat.

---

# ==========================================================

# DO NOT

# ==========================================================

Jangan:

- Mengubah struktur project tanpa diminta.
- Menambahkan framework baru.
- Mengganti teknologi yang sudah digunakan.
- Mengubah Design System tanpa alasan.
- Menghapus fitur tanpa diminta.
- Menambahkan dependency yang tidak diperlukan.
- Membuat implementasi yang sulit dipahami.
- Membuat kode yang terlalu kompleks apabila solusi sederhana sudah cukup.
- Menambahkan animasi yang mengganggu pengalaman pengguna.
- Mengorbankan UX demi visual semata.
- Mengorbankan performa demi efek visual.
- Mengorbankan maintainability demi implementasi yang cepat.

---

# ==========================================================

# PRIORITY

# ==========================================================

Dalam setiap implementasi gunakan urutan prioritas berikut:

1. User Experience (UX)
2. User Interface (UI)
3. Branding
4. Accessibility
5. Performance
6. Responsiveness
7. Maintainability
8. Reusability
9. Readability
10. Clean Code

Apabila terdapat beberapa solusi yang sama baiknya, pilih solusi yang:

- Paling sederhana.
- Paling mudah dipahami.
- Paling mudah dikembangkan.
- Paling konsisten dengan project.
- Paling sedikit mengubah kode yang sudah ada.

---

# ==========================================================

# FINAL CHECKLIST

# ==========================================================

Sebelum memberikan jawaban kepada pengguna, AI wajib memastikan:

☐ Context pengguna sudah dipahami.

☐ Solusi tidak keluar dari tujuan project.

☐ Branding tetap konsisten.

☐ Design System tetap konsisten.

☐ Layout memiliki visual hierarchy yang baik.

☐ UX lebih baik dibanding sebelumnya.

☐ Responsiveness tetap terjaga.

☐ Accessibility diperhatikan.

☐ Performance tidak menurun.

☐ Kode mudah dipahami.

☐ Kode mudah dipelihara.

☐ Tidak ada duplikasi kode.

☐ Tidak ada dependency yang tidak diperlukan.

☐ Struktur project tetap rapi.

☐ Implementasi siap untuk pengembangan di masa depan.

Jika salah satu poin belum terpenuhi, lakukan evaluasi dan perbaikan terlebih dahulu sebelum memberikan hasil akhir.

