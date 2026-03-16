/* ════════════════════════════════════════════
   VITH HUB 2026 — shared-nav.js v2
   Navy+Gold theme · 7-item menu · Lang switcher
════════════════════════════════════════════ */

function getNavHTML(root){
  root = root || '';
  return `
<!-- TICKER -->
<div class="ticker-wrap" aria-hidden="true">
  <div class="ticker-track">
    <span class="ticker-item">✦ VITH HUB INTERNATIONAL EXHIBITION 2026</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">📅 28 MAY – 1 JUNE 2026</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">📍 BIG C VIENTIANE · LAOS PDR</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🏪 120+ EXHIBITION BOOTHS</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🌐 5 COUNTRIES · CLMV + GMS</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">✦ VITH HUB INTERNATIONAL EXHIBITION 2026</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">📅 28 MAY – 1 JUNE 2026</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">📍 BIG C VIENTIANE · LAOS PDR</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🏪 120+ EXHIBITION BOOTHS</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🌐 5 COUNTRIES · CLMV + GMS</span>
    <span class="ticker-item ticker-sep">·</span>
  </div>
</div>

<!-- NAVBAR -->
<nav class="navbar" id="mainNav" role="navigation" aria-label="Main navigation">
  <div class="navbar-inner">

    <!-- Logo -->
    <a href="${root}index.html" class="navbar-logo">
      <img src="${root}images/VITH.webp" alt="VITH HUB" class="logo-img"
           onerror="this.style.display='none'">
      <div>
        <div class="logo-text">VITH<span>HUB</span></div>
        <div class="logo-sub">International Exhibition 2026</div>
      </div>
    </a>

    <!-- Nav Links — 7 items -->
    <div class="navbar-links">
      <a href="${root}index.html"               class="nav-a">Home</a>
      <a href="${root}pages/exhibition.html"    class="nav-a">Exhibition</a>
      <a href="${root}pages/floorplan.html"     class="nav-a">Booth Booking</a>
      <a href="${root}pages/visit.html"         class="nav-a">Visitors</a>
      <a href="${root}pages/exhibitors.html"    class="nav-a">Exhibitors</a>
      <a href="${root}pages/venue.html"         class="nav-a">Venue</a>
      <a href="${root}pages/contact.html"       class="nav-a">Contact</a>
    </div>

    <!-- Right actions -->
    <div class="navbar-right">
      <!-- Language switcher -->
      <div class="lang-sw" id="langSw">
        <button class="lang-btn active" data-lang="EN" onclick="switchLang('EN')">EN</button>
        <button class="lang-btn" data-lang="TH" onclick="switchLang('TH')">TH</button>
        <button class="lang-btn" data-lang="LA" onclick="switchLang('LA')">LA</button>
        <button class="lang-btn" data-lang="CN" onclick="switchLang('CN')">CN</button>
      </div>
      <a href="${root}pages/floorplan.html" class="btn-book-nav">🏪 Book Booth</a>
      <a href="${root}pages/visit.html"     class="btn-visit-nav">🎟️ Visit</a>
      <button class="hamburger" id="hamburger" aria-expanded="false" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
  <a href="${root}index.html"               class="mob-link">🏠 Home</a>
  <a href="${root}pages/exhibition.html"    class="mob-link">📅 Exhibition</a>
  <a href="${root}pages/floorplan.html"     class="mob-link">🗺️ Booth Booking</a>
  <a href="${root}pages/visit.html"         class="mob-link">🎟️ Visitors</a>
  <a href="${root}pages/exhibitors.html"    class="mob-link">🏢 Exhibitors</a>
  <a href="${root}pages/venue.html"         class="mob-link">📍 Venue</a>
  <a href="${root}pages/contact.html"       class="mob-link">📞 Contact</a>
  <div class="mob-ctas">
    <a href="${root}pages/floorplan.html" class="btn btn-gold"  style="flex:1;justify-content:center">🏪 Book Booth</a>
    <a href="${root}pages/visit.html"     class="btn btn-navy" style="flex:1;justify-content:center">🎟️ Register</a>
  </div>
</div>`;
}

function getFooterHTML(root){
  root = root || '';
  return `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:.75rem">
          <img src="${root}images/VITH.webp" alt="VITH HUB" style="height:32px;width:auto;object-fit:contain;background:rgba(255,255,255,.08);border-radius:6px;padding:4px" onerror="this.style.display='none'">
          <div>
            <div style="font-size:.95rem;font-weight:900;color:#fff;line-height:1">VITH<span style="color:var(--goldL)">HUB</span></div>
            <div style="font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-top:2px">International Exhibition 2026</div>
          </div>
        </div>
        <p>Connecting Thai SMEs with global buyers and investors across the Mekong region.</p>
        <div style="margin-top:.625rem;font-size:.78rem;color:rgba(255,255,255,.4)">📅 28 May – 1 June 2026<br>📍 Big C Vientiane, Laos PDR</div>
        <div class="social-links mt-3">
          <a href="#" class="social-link">fb</a>
          <a href="#" class="social-link">li</a>
          <a href="#" class="social-link">ig</a>
          <a href="#" class="social-link">yt</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Exhibition</h4>
        <a href="${root}pages/exhibition.html">Event Info</a>
        <a href="${root}pages/floorplan.html">Floor Plan</a>
        <a href="${root}pages/exhibitors.html">Exhibitors</a>
        <a href="${root}pages/venue.html">Venue</a>
      </div>
      <div class="footer-col">
        <h4>Participate</h4>
        <a href="${root}pages/floorplan.html">Book a Booth</a>
        <a href="${root}pages/visit.html">Register Visit</a>
        <a href="${root}pages/contact.html">Become Sponsor</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:sales@vithhub.asia">sales@vithhub.asia</a>
        <a href="${root}pages/contact.html">Contact Form</a>
        <a href="${root}pages/venue.html">Directions</a>
        <a href="${root}pages/exhibition.html#program">Program</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 VITH HUB International Exhibition · Big C Vientiane, Laos PDR · Organized by VITH HUB Co., Ltd.</p>
      <p style="color:rgba(255,255,255,.2)">Partners: Big C Laos · LITSE Market · Royal Bridge 99</p>
    </div>
  </div>
</footer>`;
}

function injectNav(root){ const el=document.getElementById('nav-placeholder'); if(el) el.innerHTML=getNavHTML(root); }
function injectFooter(root){ const el=document.getElementById('footer-placeholder'); if(el) el.innerHTML=getFooterHTML(root); }

/* Language switcher — static UI only */
function switchLang(lang){
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===lang);
  });
  localStorage.setItem('vith-lang', lang);
  /* TODO: plug in i18n translations */
}

/* Override switchLang to use i18n system if available */
window.switchLang = function(lang){
  if(window.switchLang_i18n) window.switchLang_i18n(lang);
  else {
    document.querySelectorAll('.lang-btn').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang===lang);
    });
    localStorage.setItem('vith-lang', lang);
  }
};
