/* ═══════════════════════════════════════
   VITH HUB — main.js
   Global JS for all pages
═══════════════════════════════════════ */

/* ── Navbar scroll effect (supports id="vithNav" and id="mainNav") ── */
(function() {
  const nav = document.getElementById('vithNav') || document.getElementById('mainNav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ── Mobile menu (supports navMobile, mMobile, mobileMenu) ── */
function toggleNav() {
  const menu = document.getElementById('navMobile')
             || document.getElementById('mMobile')
             || document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

/* ── Reveal on scroll ── */
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -48px 0px', threshold: 0 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ── FAQ accordion ── */
function toggleFaq(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ── Sticky apply button (accelerator page) ── */
(function() {
  const btn = document.getElementById('stickyApply');
  const hero = document.getElementById('hero');
  if (!btn || !hero) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > hero.offsetHeight * 0.7);
  });
})();

/* ── Slot counter (accelerator page) ── */
(function() {
  const TOTAL = 26;
  const booked = parseInt(localStorage.getItem('vith_acc_booked') || '0');
  const remaining = Math.max(0, TOTAL - booked);
  ['heroSlot', 'pricingSlot'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = remaining;
      if (remaining <= 5) el.style.color = '#e5141e';
    }
  });
})();
