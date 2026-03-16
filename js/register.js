/* ════════════════════════════════════════════
   VITH HUB 2026 — register.js
   Visitor registration and form utilities
   Used by visit.html and contact.html
════════════════════════════════════════════ */

// ── Field validation helper
function markFieldError(id, msg){
  const el = document.getElementById(id);
  if(!el) return;
  el.style.borderColor = 'rgba(239,68,68,.6)';
  el.style.background  = 'rgba(239,68,68,.04)';
  el.title = msg;
  el.addEventListener('input', function clear(){
    el.style.borderColor = '';
    el.style.background  = '';
    el.title = '';
    el.removeEventListener('input', clear);
  }, {once:true});
}

// ── Email validator
function isValidEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ── POST to Google Sheets (replace URL with real Apps Script URL)
async function postToSheet(SHEET_URL, payload){
  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return true;
  } catch(e){
    console.warn('Sheet post failed, using mailto fallback', e);
    return false;
  }
}

// ── Mailto fallback
function openMailto(to, subject, body){
  window.open(
    `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  );
}

// ── Show success state
function showSuccess(formId, successId){
  const form = document.getElementById(formId);
  const sbox = document.getElementById(successId);
  if(form) form.style.display = 'none';
  if(sbox) sbox.classList.add('show');
}

// ── Scroll to element
function scrollTo(id){
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({ behavior:'smooth', block:'start' });
}
