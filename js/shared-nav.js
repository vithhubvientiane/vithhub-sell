/* ════════════════════════════════════════════
   VITH HUB 2026 — shared-nav.js
   Injects navbar + ticker + footer into every page
   Usage: <script src="../js/shared-nav.js"></script>
          Then call: injectNav(); injectFooter();
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
    <span class="ticker-item">🏪 100+ EXHIBITION BOOTHS</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🌐 5+ COUNTRIES · CLMV + GMS</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">✦ VITH HUB INTERNATIONAL EXHIBITION 2026</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">📅 28 MAY – 1 JUNE 2026</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">📍 BIG C VIENTIANE · LAOS PDR</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🏪 100+ EXHIBITION BOOTHS</span>
    <span class="ticker-item ticker-sep">·</span>
    <span class="ticker-item">🌐 5+ COUNTRIES · CLMV + GMS</span>
    <span class="ticker-item ticker-sep">·</span>
  </div>
</div>

<!-- NAVBAR -->
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="navbar-inner">
    <a href="${root}index.html" class="navbar-logo">
      <img src="${root}images/VITH.webp" alt="VITH HUB" style="height:36px;width:auto;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="logo-mark" style="display:none">V</div>
      <div>
        <div class="logo-text">VITH<span>HUB</span></div>
        <div class="logo-sub">International Exhibition 2026</div>
      </div>
    </a>
    <div class="navbar-links">
      <a href="${root}index.html"            class="nav-a">Home</a>
      <a href="${root}pages/event.html"      class="nav-a">Event</a>
      <a href="${root}pages/floorplan.html"  class="nav-a">Floorplan</a>
      <a href="${root}pages/exhibitors.html" class="nav-a">Exhibitors</a>
      <a href="${root}pages/visit.html"      class="nav-a">Visit</a>
      <a href="${root}pages/program.html"    class="nav-a">Program</a>
      <a href="${root}pages/partners.html"   class="nav-a">Partners</a>
      <a href="${root}pages/contact.html"    class="nav-a">Contact</a>
    </div>
    <div class="navbar-right">
      <a href="${root}pages/floorplan.html" class="btn-book-nav">🏪 Book Booth</a>
      <a href="${root}pages/visit.html"     class="btn-visit-nav">🎟️ Register Visit</a>
      <button class="hamburger" id="hamburger" aria-expanded="false" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
  <a href="${root}index.html"            class="mob-link">🏠 Home</a>
  <a href="${root}pages/event.html"      class="mob-link">📅 Event</a>
  <a href="${root}pages/floorplan.html"  class="mob-link">🗺️ Floorplan</a>
  <a href="${root}pages/exhibitors.html" class="mob-link">🏢 Exhibitors</a>
  <a href="${root}pages/visit.html"      class="mob-link">🎟️ Visit</a>
  <a href="${root}pages/program.html"    class="mob-link">📋 Program</a>
  <a href="${root}pages/partners.html"   class="mob-link">🤝 Partners</a>
  <a href="${root}pages/contact.html"    class="mob-link">📞 Contact</a>
  <div class="mob-ctas">
    <a href="${root}pages/floorplan.html" class="btn btn-primary" style="flex:1">🏪 Book Booth</a>
    <a href="${root}pages/visit.html"     class="btn btn-accent"  style="flex:1">🎟️ Register</a>
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
        <div class="navbar-logo">
          <img src="${root}images/VITH.webp" alt="VITH HUB" style="height:36px;width:auto;object-fit:contain" onerror="this.style.display='none'">
          <div>
            <div class="logo-text">VITH<span>HUB</span></div>
            <div class="logo-sub">International Exhibition 2026</div>
          </div>
        </div>
        <p>Connect Thai SMEs with global investors and buyers. Mekong's premier trade exhibition — Big C Vientiane, Laos PDR.</p>
        <div class="social-links mt-3">
          <a href="#" class="social-link" aria-label="Facebook">f</a>
          <a href="#" class="social-link" aria-label="LINE">L</a>
          <a href="#" class="social-link" aria-label="Instagram">ig</a>
          <a href="#" class="social-link" aria-label="YouTube">yt</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <a href="${root}pages/event.html">Event Info</a>
        <a href="${root}pages/venue.html">Venue</a>
        <a href="${root}pages/about.html">About VITH HUB</a>
        <a href="${root}pages/program.html">Program</a>
      </div>
      <div class="footer-col">
        <h4>Exhibit</h4>
        <a href="${root}pages/floorplan.html">Floor Plan</a>
        <a href="${root}pages/booth.html">Booth Detail</a>
        <a href="${root}pages/exhibitors.html">Exhibitors</a>
        <a href="${root}pages/partners.html">Partners</a>
      </div>
      <div class="footer-col">
        <h4>Visit</h4>
        <a href="${root}pages/visit.html">Register Visit</a>
        <a href="${root}pages/venue.html">How to Get There</a>
        <a href="${root}pages/program.html">Schedule</a>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="${root}pages/contact.html">Contact Us</a>
        <a href="mailto:sales@vithhub.asia">sales@vithhub.asia</a>
        <a href="tel:+66">+66 (TH)</a>
        <a href="tel:+856">+856 (LAO)</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 VITH HUB International Exhibition · Big C Vientiane, Laos PDR</p>
      <p>Organized by VITH HUB · Co-hosted with LITSE Market</p>
    </div>
  </div>
</footer>`;
}

function injectNav(root){
  const el = document.getElementById('nav-placeholder');
  if(el) el.innerHTML = getNavHTML(root);
}
function injectFooter(root){
  const el = document.getElementById('footer-placeholder');
  if(el) el.innerHTML = getFooterHTML(root);
}
