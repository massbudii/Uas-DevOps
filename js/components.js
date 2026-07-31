/**
 * Master Components Loader & Interactivity (Navbar & Footer)
 * RS Awal Bros Dumai - Pure Native Web
 */

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar-placeholder', 'components/navbar.html', initNavbar);
  loadComponent('footer-placeholder', 'components/footer.html');
});

/**
 * Loads HTML component via fetch API into target placeholder
 * @param {string} placeholderId 
 * @param {string} componentPath 
 * @param {Function} callback 
 */
function loadComponent(placeholderId, componentPath, callback) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;

  fetch(componentPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Gagal memuat ${componentPath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      placeholder.innerHTML = html;
      if (callback && typeof callback === 'function') {
        callback();
      }
    })
    .catch(error => {
      console.error(`Error loading component [${componentPath}]:`, error);
    });
}

/**
 * Inisialisasi logika navbar (Highlight Active Link & Mobile Toggle)
 */
function initNavbar() {
  highlightActiveNav();
  setupMobileToggle();
}

/**
 * Menandai link menu yang sedang aktif berdasarkan halaman URL saat ini
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  let currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
  }

  const navLinks = document.querySelectorAll('.nav-link, .btn-appointment');
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
 * Handles mobile menu toggle action
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
