/* ════════════════════════════════════════════
   VITH HUB 2026 — nav.js v2
   Active state, scroll, hamburger, lang restore
════════════════════════════════════════════ */
(function(){
  const path = window.location.pathname;

  /* ── Active link ── */
  document.querySelectorAll('.nav-a,.mob-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    const page = href.replace('../','').replace('./','');
    if(
      (path.endsWith('index.html') || path.endsWith('/')) && (href.endsWith('index.html') || href === '') ||
      (page && path.includes(page.replace('.html','')) && page !== 'index.html')
    ){ a.classList.add('active'); }
  });

  /* ── Scroll effect ── */
  const nav = document.getElementById('mainNav');
  if(nav){
    window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});
  }

  /* ── Hamburger ── */
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if(ham && mob){
    ham.addEventListener('click',()=>{
      const open = mob.classList.toggle('open');
      ham.setAttribute('aria-expanded', open);
      const s = ham.querySelectorAll('span');
      if(open){ s[0].style.transform='translateY(7px) rotate(45deg)'; s[1].style.opacity='0'; s[2].style.transform='translateY(-7px) rotate(-45deg)'; }
      else { s.forEach(x=>{x.style.transform='';x.style.opacity='';}); }
    });
    document.addEventListener('click',e=>{
      if(!ham.contains(e.target)&&!mob.contains(e.target)){
        mob.classList.remove('open');
        ham.setAttribute('aria-expanded','false');
        ham.querySelectorAll('span').forEach(x=>{x.style.transform='';x.style.opacity='';});
      }
    });
  }

  /* ── Restore lang ── */
  const savedLang = localStorage.getItem('vith-lang');
  if(savedLang && window.switchLang) window.switchLang(savedLang);

  /* ── Lazy loading ── */
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ const img=e.target; if(img.dataset.src){img.src=img.dataset.src;delete img.dataset.src;} io.unobserve(img); } });
    },{rootMargin:'100px'});
    document.querySelectorAll('img[data-src]').forEach(img=>io.observe(img));
  }
})();
