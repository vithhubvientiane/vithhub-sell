/* ════════════════════════════════════════════
   VITH HUB 2026 — floorplan.js
   Handles zone pre-selection from URL ?zone= param
   Usage: loaded after main floorplan page scripts
════════════════════════════════════════════ */

(function(){
  // Pre-select zone from URL param e.g. floorplan.html?zone=B
  const params = new URLSearchParams(window.location.search);
  const zone   = (params.get('zone') || '').toUpperCase();

  if(zone && zone !== 'ALL'){
    // Wait for DOM to be ready with booth data
    document.addEventListener('DOMContentLoaded', function(){
      const btn = document.querySelector(`.zf-btn[data-zone="${zone}"]`);
      if(btn){
        btn.click();
        // Scroll to canvas
        const canvas = document.getElementById('fpWrap');
        if(canvas) canvas.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  }
})();
