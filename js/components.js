/**
 * Master Components Loader & Interactivity (Navbar & Footer)
 * RS Awal Bros Dumai - Pure Native Web
 * 
 * Mendukung mode HTTP Server (fetch) & Local File System (file:// fallback)
 * Otomatis menyesuaikan path subfolder (folder content/)
 */

function getNavbarTemplate() {
  return `
<div class="topbar">
  <div class="container">
    <div class="topbar-ticker-wrapper">
      <div class="topbar-ticker-track">
        <div class="topbar-item">
          <span class="emergency-badge neon-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" class="ambulance-icon">
              <path d="M4.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h9A1.5 1.5 0 0 1 12 1.5V3h1.365a1.5 1.5 0 0 1 1.258.683l1.17 1.756A1.5 1.5 0 0 1 16 6.324V11.5a1.5 1.5 0 0 1-1.5 1.5h-.5a2.5 2.5 0 0 1-5 0h-2a2.5 2.5 0 0 1-5 0H1.5A1.5 1.5 0 0 1 0 11.5v-10zM10.5 4V1.5a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h.5a2.5 2.5 0 0 1 4.5 0h2a2.5 2.5 0 0 1 4.5 0h.5a.5.5 0 0 0 .5-.5V6.324a.5.5 0 0 0-.077-.268L12.8 4.3a.5.5 0 0 0-.419-.228H10.5z"/>
              <path d="M7 4h1.5v1.5H10V7H8.5v1.5H7V7H5.5V5.5H7V4z"/>
            </svg>
            IGD 24 JAM
          </span>
        </div>
        <div class="topbar-item highlight-phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l.975-.978a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
          </svg>
          <span>Call Center Emergency: <strong>(0765) 38888</strong></span>
        </div>
        <div class="topbar-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span>Jl. Jend. Sudirman No. 88, Dumai, Riau</span>
        </div>
        <div class="topbar-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
          <span>Jam Operasional: <strong>24 Jam Setiap Hari</strong></span>
        </div>
      </div>
    </div>
  </div>
</div>

<header class="header-navbar">
  <div class="container navbar-container">
    <a href="index.html" class="brand-logo-wrapper" aria-label="Beranda RS Awal Bros Dumai">
      <img src="../assets/img/logo-banner.png" alt="RS Awal Bros Red Banner" class="navbar-logo-banner">
      <img src="../assets/img/logo-rs-awalbros.png" alt="Logo Emblem RS Awal Bros" class="navbar-logo-img">
    </a>

    <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Toggle Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <nav>
      <ul class="nav-menu" id="nav-menu-list">
        <li><a href="index.html" class="nav-link">Beranda</a></li>
        <li><a href="layanan.html" class="nav-link">Layanan</a></li>
        <li><a href="dokter.html" class="nav-link">Dokter</a></li>
        <li><a href="fasilitas.html" class="nav-link">Fasilitas</a></li>
        <li><a href="janji-temu.html" class="nav-link">Janji Temu</a></li>
        <li><a href="kontak.html" class="nav-link">Kontak</a></li>
      </ul>
    </nav>
  </div>
</header>
`;
}

function getFooterTemplate() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>RS Awal Bros Dumai</h4>
        <p style="margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.6;">
          Rumah sakit terkemuka berstandar internasional di Kota Dumai yang berkomitmen memberikan pelayanan kesehatan berkualitas, cepat, dan profesional bagi masyarakat.
        </p>
        <div style="display: flex; gap: 0.75rem;">
          <span class="emergency-badge" style="display: inline-block;">Akreditasi Paripurna KARS</span>
        </div>
      </div>

      <div class="footer-col">
        <h4>Navigasi Utama</h4>
        <ul class="footer-links">
          <li><a href="index.html">Beranda</a></li>
          <li><a href="layanan.html">Layanan</a></li>
          <li><a href="dokter.html">Dokter Spesialis</a></li>
          <li><a href="fasilitas.html">Fasilitas Medis</a></li>
          <li><a href="janji-temu.html">Janji Temu Online</a></li>
          <li><a href="kontak.html">Kontak & Lokasi</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Layanan Unggulan</h4>
        <ul class="footer-links">
          <li><a href="layanan.html">Instalasi Gawat Darurat (IGD 24/7)</a></li>
          <li><a href="layanan.html">Poliklinik Spesialis</a></li>
          <li><a href="layanan.html">Rawat Inap & ICU</a></li>
          <li><a href="layanan.html">Laboratorium & Radiologi</a></li>
          <li><a href="layanan.html">Medical Check Up (MCU)</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Kontak & Alamat</h4>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--primary-container)" viewBox="0 0 16 16" style="flex-shrink: 0; margin-top: 3px;">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span>Jl. Jendral Sudirman No. 88, Kota Dumai, Riau 28812</span>
        </div>
        <div class="footer-contact-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--primary-container)" viewBox="0 0 16 16" style="flex-shrink: 0; margin-top: 3px;">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l.975-.978a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
          </svg>
          <span>Emergency IGD: (0765) 38888<br>Call Center: (0765) 38889</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 RS Awal Bros Dumai. Hak Cipta Dilindungi Undang-Undang.</p>
      <p style="font-size: 0.8rem; color: #9ca3af;">Corporate Style &bull; Pure Native Web</p>
    </div>
  </div>
</footer>
`;
}

// 2. Inisialisasi Pemuatan Komponen saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace(/\\/g, '/');
  const isSubfolder = currentPath.includes('/content/') || currentPath.endsWith('/content');
  const pathPrefix = isSubfolder ? '../' : '';

  loadComponent('navbar-placeholder', pathPrefix + 'components/navbar.html', getNavbarTemplate(), initNavbar);
  loadComponent('footer-placeholder', pathPrefix + 'components/footer.html', getFooterTemplate());
});

/**
 * Pemuat Komponen HTML Universal (HTTP Fetch dengan Local Fallback)
 */
function loadComponent(placeholderId, componentPath, fallbackHtml, callback) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  fetch(componentPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;
      if (callback && typeof callback === 'function') {
        callback();
      }
    })
    .catch(() => {
      // Fallback otomatis jika dipanggil langsung via file://
      if (fallbackHtml) {
        placeholder.innerHTML = fallbackHtml;
        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    });
}

/**
 * Inisialisasi Logika Navbar (Active State & Mobile Toggle)
 */
function initNavbar() {
  highlightActiveNav();
  setupMobileToggle();
}

/**
 * Highlight link menu yang aktif sesuai URL saat ini
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Penanganan Tombol Toggle Menu Mobile
 */
function setupMobileToggle() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu-list');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}
