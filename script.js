// ========================================
// 1. SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});


// ========================================
// 2. GENERAL REVEAL (for elements like .reveal or .reveal-line)
// ========================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.reveal, .reveal-line').forEach(el => {
  revealObserver.observe(el);
});


// ========================================
// 3. STICKY SLIDES - REVEAL EFFECT
// ========================================
// Watch slides with the "sticky-slide" class (animation triggers as they enter viewport)
const stickySlides = document.querySelectorAll('.sticky-slide');

const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5, rootMargin: '0px 0px -30% 0px' });

stickySlides.forEach(slide => slideObserver.observe(slide));


// ========================================
// 4. NAVIGATION BACKGROUND CHANGE ON SCROLL
// ========================================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(255, 255, 255, 0.98)';
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    nav.style.color = '#1e4d7b';
  } else {
    nav.style.background = 'linear-gradient(90deg, rgba(173, 200, 225, 0.95), rgba(36, 106, 176, 0.9))';
    nav.style.boxShadow = 'none';
    nav.style.color = '#fff';
  }
});


// ========================================
// 5. OPTIONAL: IMAGE PARALLAX / ZOOM-IN EFFECT
// ========================================
// Adds subtle zoom-in when a slide becomes active (smooth + classy)
const observerZoom = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const img = entry.target.querySelector('.slide-image img');
    if (entry.isIntersecting && img) {
      img.style.transform = 'scale(1.05)';
    } else if (img) {
      img.style.transform = 'scale(1)';
    }
  });
}, { threshold: 0.6 });

stickySlides.forEach(slide => observerZoom.observe(slide));
// Optional: Add subtle fade-in on scroll
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});