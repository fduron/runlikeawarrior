/* ============================================================
   Warriors Zac — JavaScript principal
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Menú hamburguesa ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  /* ── Cerrar menú al hacer clic en un enlace ── */
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger?.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll suave para los botones del hero ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Animación de la barra de progreso al entrar en vista ── */
  const progressBars = document.querySelectorAll('.progress-bar-fill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar    = entry.target;
        const target = bar.dataset.progress || '0';
        bar.style.transition = 'width 1s ease-out';
        bar.style.width      = target + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  progressBars.forEach(bar => {
    const original     = bar.style.width;
    bar.dataset.progress = parseInt(original) || 0;
    bar.style.width    = '0%';
    observer.observe(bar);
  });

  /* ── Contador animado en las estadísticas ── */
  function animateCounter(el, end, duration = 1200) {
    const start     = 0;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(start + (end - start) * eased);
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el  = entry.target;
        const end = parseInt(el.dataset.count) || 0;
        animateCounter(el, end);
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => {
    el.dataset.count = el.textContent.trim();
    el.textContent   = '0';
    statsObserver.observe(el);
  });

  /* ── Sticky nav: sombra al hacer scroll ── */
  const nav = document.querySelector('.wz-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

});
