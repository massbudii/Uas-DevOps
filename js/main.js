/**
 * RS Awal Bros Dumai - Main Interactivity Script
 * Standar: Vanilla JavaScript, Modular Functions, Clean Code (DESIGN.md RULES)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHealthCalculator();
  initQuickAccessCards();
});

/**
 * Inisialisasi Kalkulator BMI Interaktif untuk Pengunjung
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
 * Inisialisasi Kartu Akses Cepat (Quick Access Navigation)
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
