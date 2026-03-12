/* =============================================
   121212 MOVEMENT — script.js
   ============================================= */

(function () {
  'use strict';

  // --- Scroll Progress Bar ---
  const progressBar = document.getElementById('scroll-progress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }

  // --- Nav Shadow on Scroll ---
  const nav = document.getElementById('nav');

  function updateNav() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // Combined scroll handler
  window.addEventListener('scroll', function () {
    updateScrollProgress();
    updateNav();
  }, { passive: true });

  // Initial call
  updateScrollProgress();
  updateNav();

  // --- Mobile Hamburger Toggle ---
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      closeMobileNav();
    } else {
      mobileNav.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
  });

  // Close mobile nav when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !mobileNav.contains(e.target)) {
      closeMobileNav();
    }
  });

  // --- Join Form Submit Handler ---
  const joinForm = document.getElementById('join-form');
  const successMsg = document.getElementById('success-msg');

  joinForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Basic validation
    if (!firstName || !lastName || !email) {
      shakeForm();
      return;
    }

    if (!isValidEmail(email)) {
      const emailInput = document.getElementById('email');
      emailInput.style.borderColor = '#ff4444';
      emailInput.focus();
      setTimeout(function () {
        emailInput.style.borderColor = '';
      }, 2000);
      return;
    }

    // Simulate submission
    const submitBtn = joinForm.querySelector('.btn-white');
    submitBtn.textContent = 'Joining...';
    submitBtn.disabled = true;

    setTimeout(function () {
      joinForm.style.display = 'none';
      successMsg.classList.add('show');
    }, 800);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function shakeForm() {
    joinForm.style.animation = 'none';
    joinForm.offsetHeight; // reflow
    joinForm.style.animation = 'shake 0.4s ease';
  }

  // Inject shake keyframe if not present
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-6px); }
      80% { transform: translateX(6px); }
    }
  `;
  document.head.appendChild(shakeStyle);

  // --- Smooth anchor scrolling with nav offset ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav.offsetHeight + 8;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    });
  });

  // --- Intersection Observer: animate progress bars on scroll ---
  const progressFills = document.querySelectorAll('.progress-bar-fill');

  if ('IntersectionObserver' in window) {
    const barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const targetWidth = fill.getAttribute('data-width') || fill.style.width;
          fill.style.width = '0%';
          // Trigger reflow then animate
          fill.offsetWidth;
          fill.style.width = targetWidth;
          barObserver.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    progressFills.forEach(function (fill) {
      const w = fill.style.width;
      fill.setAttribute('data-width', w);
      fill.style.width = '0%';
      barObserver.observe(fill);
    });
  }

  // --- Intersection Observer: fade-in on scroll ---
  const fadeEls = document.querySelectorAll(
    '.why-card, .campaign-card, .voice-card, .resource-card, .event-card'
  );

  const fadeStyle = document.createElement('style');
  fadeStyle.textContent = `
    .fade-in-ready {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .fade-in-ready.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(fadeStyle);

  if ('IntersectionObserver' in window) {
    fadeEls.forEach(function (el, i) {
      el.classList.add('fade-in-ready');
      // Stagger delay based on position
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
    });

    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  // --- Resource card download handler ---
  document.querySelectorAll('.btn-green').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const card = this.closest('.resource-card');
      const title = card ? card.querySelector('h3').textContent : 'Resource';
      this.textContent = 'Sending to Email...';
      this.style.background = '#1a5c32';
      const self = this;
      setTimeout(function () {
        self.textContent = 'Sent!';
        setTimeout(function () {
          self.textContent = 'Download Free';
          self.style.background = '';
        }, 2000);
      }, 900);
    });
  });

  // --- Event card register handler ---
  document.querySelectorAll('.btn-outline-sm').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const originalText = this.textContent;
      this.textContent = 'Registered!';
      this.style.background = '#1a1a1a';
      this.style.color = '#fff';
      const self = this;
      setTimeout(function () {
        self.textContent = originalText;
        self.style.background = '';
        self.style.color = '';
      }, 2500);
    });
  });

})(); // end IIFE

// Exposed globally for mobile nav onclick attributes
function closeMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}
