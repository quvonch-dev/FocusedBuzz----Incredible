// ============== HERO SLIDER ==============
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.getElementById('heroDots');
let current = 0;
let timer;

// Build dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(n) {
  slides[current].classList.remove('active');
  document.querySelectorAll('.hero-dot')[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
  document.querySelectorAll('.hero-dot')[current].classList.add('active');
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), 5000);
}

document.getElementById('heroNext').addEventListener('click', () => goTo(current + 1));
document.getElementById('heroPrev').addEventListener('click', () => goTo(current - 1));
resetTimer();

// ============== HAMBURGER ==============
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// ============== SCROLL REVEAL ==============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .cat-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
