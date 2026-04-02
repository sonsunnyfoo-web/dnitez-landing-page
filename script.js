// script.js
// Floating CTA visibility
const floatingCta = document.getElementById('floatingCta');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 500) {
    floatingCta.classList.add('visible');
  } else {
    floatingCta.classList.remove('visible');
  }
  lastScroll = scrollY;
});

// FAQ toggle
function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}

// Fade-in and other animations on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeEls = document.querySelectorAll('.fade-in, .problem-card, .ingredient-card, .timeline__item, .testimonial-card, .step, .faq-item');
    
    // Add fade-in base class to things we want to animate but don't have it yet
    fadeEls.forEach(el => {
        if (!el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
        }
    });

    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeEls.forEach(el => fadeObserver.observe(el));
});
