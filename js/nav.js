/* ════════════════════════════════════════════
   VITH HUB 2026 — nav.js
   Shared navbar: active state, mobile menu, scroll
════════════════════════════════════════════ */

(function(){
  // ── Mark active nav link based on current page
  const path = window.location.pathname;
  document.querySelectorAll('.nav-a, .mob-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if(
      (path.endsWith(href)) ||
      (href !== '/' && href !== '/index.html' && path.includes(href.replace('.html','')))
    ){
      a.classList.add('active');
    }
  });

  // ── Sticky navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if(navbar){
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, {passive:true});
  }

  // ── Mobile hamburger toggle
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if(ham && menu){
    ham.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
      // Animate spans
      const spans = ham.querySelectorAll('span');
      if(open){
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform=''; s.style.opacity=''; });
      }
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if(!ham.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove('open');
        ham.setAttribute('aria-expanded','false');
        ham.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
      }
    });
  }
})();
