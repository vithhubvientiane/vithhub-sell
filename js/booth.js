/* ════════════════════════════════════════════
   VITH HUB 2026 — booth.js
   Utilities for booth detail page
════════════════════════════════════════════ */

// Zone color map — matches booth-data.js ZONE_COLOR
const ZONE_COLORS_MAP = {
  A: { bg:'rgba(59,130,246,.15)',  border:'rgba(59,130,246,.4)',  text:'#93c5fd' },
  B: { bg:'rgba(129,140,248,.15)', border:'rgba(129,140,248,.4)', text:'#a5b4fc' },
  P: { bg:'rgba(251,192,45,.15)',  border:'rgba(251,192,45,.4)',  text:'#fde68a' },
  N: { bg:'rgba(16,185,129,.15)',  border:'rgba(16,185,129,.4)',  text:'#6ee7b7' },
  C: { bg:'rgba(249,115,22,.15)',  border:'rgba(249,115,22,.4)',  text:'#fdba74' },
  D: { bg:'rgba(251,191,36,.15)',  border:'rgba(251,191,36,.4)',  text:'#fde68a' },
};

// Apply zone color theming to booth hero
function applyZoneTheme(zoneKey){
  const col = ZONE_COLORS_MAP[zoneKey];
  if(!col) return;
  const hero = document.getElementById('boothHero');
  if(hero) hero.style.background = `linear-gradient(135deg, ${col.bg}, rgba(0,0,0,0))`;
  const badge = document.getElementById('previewBadge');
  if(badge){
    badge.style.background = col.bg;
    badge.style.color = col.text;
    badge.style.border = `1px solid ${col.border}`;
  }
}

// Format currency
function fmtTHB(n){ return '฿' + Number(n).toLocaleString(); }

// Validate Thai/international phone
function isValidPhone(p){
  return /^[\d\s\+\-\(\)]{8,}$/.test(p);
}

// Validate email
function isValidEmail(e){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
