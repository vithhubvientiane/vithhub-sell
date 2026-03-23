/* ============================================================
   VITH HUB — Lead Modal System
   Used on: gateway, accelerator (retail-entry), membership pages
   Flow: CTA click → modal → webhook + LINE redirect
   ============================================================ */

const WEBHOOK_URL = "YOUR_WEBHOOK_URL"; // 🔧 ใส่ Make/n8n webhook URL
const LINE_OA_URL = "https://lin.ee/YOUR_OA"; // 🔧 ใส่ LINE OA URL

/* ── Open modal ── */
function openLeadModal(path) {
  document.querySelector("[name=selected_path]").value = path || "";
  document.querySelector("[name=source_page]").value = window.location.pathname;
  document.getElementById("leadModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ── Close modal ── */
function closeLeadModal() {
  document.getElementById("leadModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ── CTA buttons → open modal ── */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cta-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openLeadModal(btn.dataset.path || "");
    });
  });

  /* Close on overlay click */
  document.getElementById("leadModal").addEventListener("click", e => {
    if (e.target === document.getElementById("leadModal")) closeLeadModal();
  });

  /* Close on ESC */
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLeadModal();
  });

  /* ── Form submit → webhook + LINE ── */
  document.getElementById("leadForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "กำลังส่ง...";

    const data = Object.fromEntries(new FormData(e.target));

    /* Track */
    track("lead_submit", { path: data.selected_path, page: data.source_page });

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      console.warn("Webhook failed:", err);
    }

    /* Redirect to LINE */
    const msg = encodeURIComponent(
      "สนใจ " + data.selected_path + " | " + data.brand_name + " | " + data.contact
    );
    window.location.href = LINE_OA_URL + "?text=" + msg;
  });
});

/* ── GTM / dataLayer tracking ── */
function track(event, data) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
