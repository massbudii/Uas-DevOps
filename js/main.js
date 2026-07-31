/**
 * RS Awal Bros Dumai - Main Interactivity Script
 * Standar: Vanilla JavaScript, Modular Functions, Clean Code (DESIGN.md RULES)
 */

document.addEventListener('DOMContentLoaded', () => {
  initParticleNetwork();
  initCorporateCounters();
  initHealthCalculator();
  initQuickAccessCards();
});

/**
 * 1. Full-Page Connecting Dots / Particle Network Background Animation (Dari Atas Hingga Atas Footer)
 */
function initParticleNetwork() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const context = canvas.getContext('2d');
  let particlesArray = [];
  const numberOfParticles = 90; // Diperbanyak agar tersebar merata di seluruh halaman
  const maxConnectDistance = 135;

  const mousePosition = {
    x: null,
    y: null,
    radius: 160
  };

  // Set ukuran canvas menutupi seluruh layar viewport
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();

  window.addEventListener('resize', () => {
    resizeCanvas();
    createParticles();
  });

  // Melacak koordinat kursor mouse di seluruh viewport layar
  window.addEventListener('mousemove', (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mousePosition.x = null;
    mousePosition.y = null;
  });

  class Particle {
    constructor(x, y, velocityX, velocityY, radius) {
      this.x = x;
      this.y = y;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.radius = radius;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = 'rgba(0, 168, 143, 0.45)';
      context.fill();
    }

    update() {
      if (this.x > canvas.width || this.x < 0) {
        this.velocityX = -this.velocityX;
      }
      if (this.y > canvas.height || this.y < 0) {
        this.velocityY = -this.velocityY;
      }

      if (mousePosition.x !== null && mousePosition.y !== null) {
        const deltaX = mousePosition.x - this.x;
        const deltaY = mousePosition.y - this.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < mousePosition.radius) {
          if (mousePosition.x < this.x && this.x < canvas.width - this.radius * 10) {
            this.x += 1.5;
          }
          if (mousePosition.x > this.x && this.x > this.radius * 10) {
            this.x -= 1.5;
          }
          if (mousePosition.y < this.y && this.y < canvas.height - this.radius * 10) {
            this.y += 1.5;
          }
          if (mousePosition.y > this.y && this.y > this.radius * 10) {
            this.y -= 1.5;
          }
        }
      }

      this.x += this.velocityX;
      this.y += this.velocityY;

      this.draw();
    }
  }

  function createParticles() {
    particlesArray = [];
    for (let index = 0; index < numberOfParticles; index++) {
      const radius = Math.random() * 2 + 1.5;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const velocityX = (Math.random() - 0.5) * 1.2;
      const velocityY = (Math.random() - 0.5) * 1.2;

      particlesArray.push(new Particle(x, y, velocityX, velocityY, radius));
    }
  }

  function connectParticles() {
    for (let outer = 0; outer < particlesArray.length; outer++) {
      for (let inner = outer; inner < particlesArray.length; inner++) {
        const deltaX = particlesArray[outer].x - particlesArray[inner].x;
        const deltaY = particlesArray[outer].y - particlesArray[inner].y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < maxConnectDistance) {
          const opacity = 1 - (distance / maxConnectDistance);
          context.strokeStyle = `rgba(0, 107, 90, ${opacity * 0.25})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particlesArray[outer].x, particlesArray[outer].y);
          context.lineTo(particlesArray[inner].x, particlesArray[inner].y);
          context.stroke();
        }
      }
    }
  }

  function animateParticleLoop() {
    requestAnimationFrame(animateParticleLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let index = 0; index < particlesArray.length; index++) {
      particlesArray[index].update();
    }
    connectParticles();
  }

  createParticles();
  animateParticleLoop();
}

/**
 * 2. Corporate Counter Statistics Animated Count-Up (50+ Dokter, 200+ Bed, 98% Kepuasan)
 */
function initCorporateCounters() {
  const counterElements = document.querySelectorAll('.counter-number[data-target]');
  if (!counterElements.length) return;

  const observerOptions = {
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const targetNumber = parseInt(targetElement.getAttribute('data-target'), 10);
        const suffix = targetElement.getAttribute('data-suffix') || '';

        animateCounterNumber(targetElement, 0, targetNumber, 1800, suffix);
        observerInstance.unobserve(targetElement);
      }
    });
  }, observerOptions);

  counterElements.forEach(element => observer.observe(element));
}

function animateCounterNumber(element, startValue, endValue, durationMilliseconds, suffix) {
  let startTime = null;

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / durationMilliseconds, 1);
    
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easeProgress * (endValue - startValue) + startValue);

    element.textContent = currentValue + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = endValue + suffix;
    }
  }

  requestAnimationFrame(updateCounter);
}

/**
 * 3. Inisialisasi Kalkulator BMI Interaktif untuk Pengunjung
 */
function initHealthCalculator() {
  const calculateButton = document.getElementById('btn-calculate-bmi');
  const heightInput = document.getElementById('input-patient-height');
  const weightInput = document.getElementById('input-patient-weight');
  const resultBox = document.getElementById('bmi-result-box');
  const scoreDisplay = document.getElementById('bmi-score-display');
  const categoryDisplay = document.getElementById('bmi-category-display');
  const adviceDisplay = document.getElementById('bmi-advice-display');

  if (!calculateButton || !heightInput || !weightInput || !resultBox) {
    return;
  }

  calculateButton.addEventListener('click', (event) => {
    event.preventDefault();

    const heightCentimeters = parseFloat(heightInput.value);
    const weightKilograms = parseFloat(weightInput.value);

    if (isNaN(heightCentimeters) || heightCentimeters <= 0 || isNaN(weightKilograms) || weightKilograms <= 0) {
      alert('Mohon masukkan nilai tinggi badan (cm) dan berat badan (kg) yang valid.');
      return;
    }

    const heightMeters = heightCentimeters / 100;
    const bodyMassIndex = weightKilograms / (heightMeters * heightMeters);
    const roundedScore = bodyMassIndex.toFixed(1);

    let healthCategory = '';
    let healthRecommendation = '';
    let categoryColor = '#00a88f';

    if (bodyMassIndex < 18.5) {
      healthCategory = 'Berat Badan Kurang (Underweight)';
      healthRecommendation = 'Disarankan berkonsultasi dengan Dokter Spesialis Gizi Klinis RS Awal Bros Dumai untuk pola asupan nutrisi seimbang.';
      categoryColor = '#f59e0b';
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
      healthCategory = 'Berat Badan Ideal (Normal)';
      healthRecommendation = 'Kondisi fisik Anda berada pada rentang sehat ideal. Pertahankan gaya hidup sehat dan lakukan pemeriksaan berkala di Medical Check Up RS Awal Bros Dumai.';
      categoryColor = '#00a88f';
    } else if (bodyMassIndex >= 25 && bodyMassIndex <= 29.9) {
      healthCategory = 'Kelebihan Berat Badan (Overweight)';
      healthRecommendation = 'Sebaiknya tingkatkan aktivitas fisik harian dan berkonsultasi mengenai program kebugaran dengan tim medis kami.';
      categoryColor = '#f97316';
    } else {
      healthCategory = 'Obesitas (Obese)';
      healthRecommendation = 'Sangat disarankan melakukan evaluasi metabolik menyeluruh bersama Dokter Spesialis Penyakit Dalam dan Gizi RS Awal Bros Dumai.';
      categoryColor = '#ba1a1a';
    }

    scoreDisplay.textContent = roundedScore;
    categoryDisplay.textContent = healthCategory;
    categoryDisplay.style.color = categoryColor;
    adviceDisplay.textContent = healthRecommendation;

    resultBox.classList.add('active');
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/**
 * 4. Inisialisasi Kartu Akses Cepat (Quick Access Navigation)
 */
function initQuickAccessCards() {
  const quickCards = document.querySelectorAll('.quick-card');
  quickCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetPage = card.getAttribute('data-target');
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });
}
