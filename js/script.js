// ─── VITH HUB v3 · script.js ───

const LINE_URL = 'https://line.me/ti/p/@cef8930n';

// ─── LANGUAGE ───
function setLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => el.classList.remove('active'));
  if (lang === 'la') {
    document.querySelectorAll('[data-lang="la"]').forEach(el => el.classList.add('active'));
    document.querySelectorAll('[data-lang="th"]').forEach(el => {
      if (!el.parentElement.querySelector('[data-lang="la"]')) el.classList.add('active');
    });
  } else {
    document.querySelectorAll('[data-lang="' + lang + '"]').forEach(el => el.classList.add('active'));
  }
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector('.lang-btn[onclick="setLang(\'' + lang + '\')"]');
  if (btn) btn.classList.add('active');
  document.documentElement.lang = lang === 'la' ? 'lo' : lang;
  localStorage.setItem('vith-lang', lang);
}

// ─── PHASE SWITCHER (Nav tabs → scroll to phase sections) ───
function switchPhase(num) {
  // Update tab UI
  document.querySelectorAll('.phase-tab').forEach(t => t.classList.remove('active'));
  const tab = document.getElementById('tab-p' + num);
  if (tab) tab.classList.add('active');

  // Scroll to relevant section smoothly
  const target = num === 1 ? '#packages' : '#bundle';
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── FLOOR PLAN PHASE TOGGLE ───
function showFloorPhase(num, btn) {
  document.querySelectorAll('.fp-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  ['fp-phase1', 'fp-phase2'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.style.display = (i + 1 === num) ? 'flex' : 'none';
  });
}

// ─── FLOOR PLAN ZONE SELECT ───
function fpSelectZone(zone) {
  document.querySelectorAll('.fp-zone-card').forEach(c => c.classList.remove('zone-active'));
  document.querySelectorAll('.fp-hotspot').forEach(h => h.classList.remove('active'));
  const card = document.getElementById('fz-' + zone);
  if (card) {
    card.classList.add('zone-active');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  const hs = document.querySelector('[data-zone="' + zone + '"]');
  if (hs) hs.classList.add('active');
  // pre-select in form
  const pkg = document.getElementById('f-package');
  if (pkg) {
    const map = { a: 'zone-a-managed', shock: 'shock-managed', b: 'zone-b-managed', c: 'zone-c-managed' };
    if (map[zone]) pkg.value = map[zone];
  }
}

// ─── BUNDLE PRE-SELECT ───
function selectBundle() {
  const radio = document.getElementById('f-phase-bundle');
  if (radio) { radio.checked = true; radio.dispatchEvent(new Event('change')); }
  const pkg = document.getElementById('f-package');
  if (pkg) pkg.value = 'bundle';
}

// ─── PHASE RADIO HANDLER ───
function onPhaseRadio(el) {
  const pkg = document.getElementById('f-package');
  if (!pkg || !el) return;
  if (el.value === 'bundle') pkg.value = 'bundle';
}

// ─── SCROLL REVEAL ───
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      if (e.target.dataset.count) animateCounter(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── COUNTER ANIMATION ───
function animateCounter(el) {
  if (el._counted) return;
  el._counted = true;
  const target  = parseInt(el.dataset.count);
  const suffix  = el.dataset.suffix || '';
  const duration = 1800;
  const start   = performance.now();
  function update(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString() + suffix;
  }
  requestAnimationFrame(update);
}

// Observe hero stat counters individually
document.querySelectorAll('.stat-num[data-count]').forEach(el => {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounter(el); obs.disconnect(); }
  }, { threshold: 0.5 });
  obs.observe(el);
});

// ─── PROGRESS BAR ───
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  const bar = document.getElementById('progressBar');
  if (bar) bar.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

// ─── NAV scroll effect ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(8,8,16,0.97)';
    nav.style.boxShadow  = '0 2px 24px rgba(0,0,0,0.5)';
  } else {
    nav.style.background = 'rgba(8,8,16,0.88)';
    nav.style.boxShadow  = 'none';
  }
}, { passive: true });

// ─── FAQ ───
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── LEAD FORM ───
function submitLead() {
  const name    = (document.getElementById('f-name')    || {}).value?.trim() || '';
  const contact = (document.getElementById('f-contact') || {}).value?.trim() || '';
  const product = (document.getElementById('f-product') || {}).value?.trim() || '';
  const pkg     = (document.getElementById('f-package') || {}).value || '';
  const phaseEl = document.querySelector('input[name="f-phase"]:checked');
  const phase   = phaseEl ? phaseEl.value : '';

  const nameEl    = document.getElementById('f-name');
  const contactEl = document.getElementById('f-contact');
  if (nameEl)    nameEl.style.borderColor    = '';
  if (contactEl) contactEl.style.borderColor = '';

  if (!name || !contact) {
    if (nameEl && !name)       nameEl.style.borderColor    = '#E31E24';
    if (contactEl && !contact) contactEl.style.borderColor = '#E31E24';
    return;
  }

  const msg = encodeURIComponent(
    'สนใจจองบูถ VITH Hub\nชื่อ/บริษัท: ' + name +
    '\nติดต่อ: ' + contact + '\nสินค้า: ' + product +
    '\nPackage: ' + pkg + '\nPhase: ' + phase
  );

  const toast = document.getElementById('toast');
  if (toast) { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 4000); }

  const form = document.getElementById('leadForm');
  if (form) {
    form.innerHTML =
      '<div style="text-align:center;padding:2.5rem 1rem;">' +
      '<div style="font-size:3rem;margin-bottom:1rem;">🎉</div>' +
      '<div style="font-family:\'Kanit\',sans-serif;font-size:1.8rem;font-weight:900;margin-bottom:0.5rem;color:#fff;">ขอบคุณมากครับ!</div>' +
      '<p style="color:rgba(245,242,236,0.6);font-size:0.95rem;margin-bottom:1.5rem;line-height:1.7;">ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง<br>inbox LINE เราได้เลยเพื่อความเร็วยิ่งขึ้น</p>' +
      '<a href="' + LINE_URL + '?text=' + msg + '" target="_blank" ' +
      'style="display:inline-block;background:#06C755;color:#fff;padding:14px 32px;border-radius:99px;font-weight:800;font-size:0.95rem;text-decoration:none;box-shadow:0 8px 28px rgba(6,199,85,0.4);">💬 ส่งข้อมูลผ่าน LINE ทันที</a>' +
      '</div>';
  }
}

// ─── POPUP ───
function openPopup()  {
  // Suppress if closed within the last 24 hours
  const dismissed = localStorage.getItem('vith-popup-dismissed');
  if (dismissed && Date.now() - parseInt(dismissed) < 86400000) return;
  const el = document.getElementById('popupOverlay');
  if (el) el.classList.add('popup-open');
}
function closePopup() {
  const el = document.getElementById('popupOverlay');
  if (el) el.classList.remove('popup-open');
  // Remember dismissal time
  localStorage.setItem('vith-popup-dismissed', Date.now().toString());
}
function handlePopupOverlayClick(e) { if (e.target === document.getElementById('popupOverlay')) closePopup(); }
function handlePopupRemind() {
  const btn = document.getElementById('popupRemindBtn');
  if (!btn) return;
  btn.textContent = '✅ จะแจ้งให้นะครับ!';
  btn.style.background   = 'rgba(6,199,85,0.15)';
  btn.style.borderColor  = 'rgba(6,199,85,0.4)';
  btn.style.color        = '#06C755';
  btn.disabled = true;
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

// ─── COUNTDOWN (shared) ───
const EVENT_DATE = new Date('2026-03-25T00:00:00+07:00');
function updateAllCountdowns() {
  const diff = EVENT_DATE - new Date();
  if (diff <= 0) return;
  const s  = v => String(Math.floor(v)).padStart(2, '0');
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);
  const g = id => document.getElementById(id);
  if (g('popupDays'))  g('popupDays').textContent  = s(days);
  if (g('popupHours')) g('popupHours').textContent = s(hours);
  if (g('popupMins'))  g('popupMins').textContent  = s(mins);
  if (g('popupSecs'))  g('popupSecs').textContent  = s(secs);
  if (g('uDays'))  g('uDays').textContent  = s(days);
  if (g('uHours')) g('uHours').textContent = s(hours);
  if (g('uMins'))  g('uMins').textContent  = s(mins);
  if (g('uSecs'))  g('uSecs').textContent  = s(secs);
}
updateAllCountdowns();
setInterval(updateAllCountdowns, 1000);

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  // Language
  const saved = localStorage.getItem('vith-lang');
  setLang(['th','la','en'].includes(saved) ? saved : 'th');
  // Floor plan default: show phase 1
  showFloorPhase(1, null);
});

window.addEventListener('load', () => setTimeout(openPopup, 1200));

// ─── GALLERY TAB SWITCHER ───
function switchGallery(tab, btn) {
  document.querySelectorAll('.gallery-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.getElementById('gallery-now').style.display   = tab === 'now'    ? 'block' : 'none';
  document.getElementById('gallery-future').style.display = tab === 'future' ? 'block' : 'none';
}
