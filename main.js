// =========================================================
//  PRIYANKA MOURA — SHARED JS
// =========================================================

(function () {
  const html = document.documentElement;

  // ---------- THEME ----------
  const saved = localStorage.getItem('pm-theme') || 'light';
  html.setAttribute('data-theme', saved);

  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('.theme-toggle');
    if (!toggle) return;
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pm-theme', next);
  });

  // ---------- MOBILE MENU ----------
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('open');
      })
    );
  }

  // ---------- NAV SHADOW ON SCROLL ----------
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 30 ? '0 4px 24px rgba(0,0,0,0.08)' : 'none';
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // ---------- SCROLL REVEAL ----------
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.classList.add('in');
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 80}ms`;
      io.observe(el);
    });
  }

  // ---------- COUNTER ANIMATION ----------
  function animate(el, target, suffix, prefix, duration) {
    const isFloat = target % 1 !== 0;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(ent => {
        if (!ent.isIntersecting) return;
        const el = ent.target;
        const raw = el.getAttribute('data-count');
        const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
        const prefix = (raw.match(/^[^0-9]*/) || [''])[0];
        const suffix = (raw.match(/[^0-9.]*$/) || [''])[0];
        if (!isNaN(num)) animate(el, num, suffix, prefix, 1600);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  // ---------- CONTACT FORM ----------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const txt = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true; btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent = '✓ Message sent!';
        btn.style.background = '#22C55E';
        setTimeout(() => {
          btn.textContent = txt; btn.disabled = false;
          btn.style.opacity = ''; btn.style.background = '';
          form.reset();
        }, 2800);
      }, 1200);
    });
  }
})();
