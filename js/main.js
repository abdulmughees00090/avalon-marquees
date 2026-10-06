/* ==========================================================================
   AVALON BANQUET ARENA — INTERACTIVE LUXURY SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. HEADER SCROLL EFFECT
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // 2. MOBILE MENU OVERLAY
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-overlay');
  const mobileClose = document.querySelector('.mobile-menu-close');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    if (mobileClose) {
      mobileClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close when clicking nav link inside mobile menu
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. HERO VIDEO PLAY / PAUSE TOGGLE
  const heroVideo = document.querySelector('.hero-video');
  const videoControlBtn = document.querySelector('.video-control-btn');

  if (heroVideo && videoControlBtn) {
    videoControlBtn.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        videoControlBtn.innerHTML = '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        videoControlBtn.setAttribute('aria-label', 'Pause Video');
      } else {
        heroVideo.pause();
        videoControlBtn.innerHTML = '<svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        videoControlBtn.setAttribute('aria-label', 'Play Video');
      }
    });
  }

  // 4. LIGHTBOX MODAL FOR GALLERIES
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.querySelector('.lightbox-close');

  const galleryItems = document.querySelectorAll('.gallery-item, [data-lightbox]');

  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const imgTarget = item.querySelector('img') || item;
      const src = imgTarget.getAttribute('src');
      const alt = imgTarget.getAttribute('alt') || 'Avalon Banquet Arena';
      const captionText = item.getAttribute('data-caption') || alt;

      if (lightboxModal && lightboxImg) {
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        if (lightboxCaption) lightboxCaption.textContent = captionText;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. DIRECT BOOKING FORM HANDLING
  const directForm = document.getElementById('directBookingForm');
  if (directForm) {
    directForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = directForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Submitting Reservation...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert('Reservation Request Received! Avalon Banquet Arena management team has received your booking preferences and will reach out shortly.');
        directForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1200);
    });
  }
});
