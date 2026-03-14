// ── Theme: restore saved preference ──────────────────────────────────────────
(function () {
  const savedTheme = localStorage.getItem("theme");
  const savedLang = localStorage.getItem("lang");
  if (savedTheme === "light") document.documentElement.classList.add("light");
  if (savedLang) document.documentElement.dataset.lang = savedLang;
})();

// ── DOM ready ────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // ── State ──────────────────────────────────────────────────────────────────
  let currentLang = localStorage.getItem("lang") || "en";

  // ── Theme toggle ───────────────────────────────────────────────────────────
  const btnTheme = document.getElementById("themeBtn");
  const optDark = document.getElementById("optDark");
  const optLight = document.getElementById("optLight");

  const isLightOnLoad = document.documentElement.classList.contains("light");
  optDark.classList.toggle("active", !isLightOnLoad);
  optLight.classList.toggle("active", isLightOnLoad);

  btnTheme.addEventListener("click", () => {
    const isLight = document.documentElement.classList.toggle("light");
    optDark.classList.toggle("active", !isLight);
    optLight.classList.toggle("active", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // ── Language toggle ────────────────────────────────────────────────────────
  const btnLang = document.getElementById("langBtn");
  const optEN = document.getElementById("optEN");
  const optID = document.getElementById("optID");

  optEN.classList.toggle("active", currentLang === "en");
  optID.classList.toggle("active", currentLang === "id");
  applyLang(currentLang);

  btnLang.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "id" : "en";
    optEN.classList.toggle("active", currentLang === "en");
    optID.classList.toggle("active", currentLang === "id");
    localStorage.setItem("lang", currentLang);
    applyLang(currentLang);
  });

  function applyLang(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    // Update title attribute untuk tooltip (dipakai JS tooltip system)
    document.querySelectorAll("[data-tooltip]").forEach((el) => {
      const key = el.dataset.tooltip;
      if (t[key] !== undefined) {
        el.setAttribute("title", t[key]);
        // Reset binding agar initTooltips bisa re-attach jika perlu
        delete el.dataset.tooltipBound;
      }
    });
    initTooltips();
  }

  // ── Scroll spy with IntersectionObserver ───────────────────────────────────
  // Urutan: obfuscation (04) sebelum desktop (05)
  const sectionIds = [
    "demos",
    "sync",
    "wac",
    "licensing",
    "obfuscation",
    "desktop",
    "analyst",
  ];
  const pills = document.querySelectorAll(".nav-pill[data-section]");

  const setActive = (id) => {
    pills.forEach((p) =>
      p.classList.toggle("active", p.dataset.section === id),
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-30% 0px -65% 0px" },
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  const initialActive = sectionIds.find((id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= 80;
  });
  setActive(initialActive || sectionIds[0]);

  // ── Reading progress bar ───────────────────────────────────────────────────
  const progressBar = document.getElementById("progressBar");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + "%";
  }

  // ── Back to top button ─────────────────────────────────────────────────────
  const backToTop = document.getElementById("backToTop");

  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ── Custom Tooltip ─────────────────────────────────────────────────────────
  const tooltip = document.createElement("div");
  tooltip.id = "custom-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  let tooltipTimer = null;

  function showTooltip(el) {
    const text = el.title;
    if (!text) return;

    // Hapus title agar native tooltip tidak muncul
    el.dataset.titleCache = text;
    el.removeAttribute("title");

    tooltip.textContent = text;
    tooltip.classList.add("visible");

    positionTooltip(el);
  }

  function positionTooltip(el) {
    const rect = el.getBoundingClientRect();
    const tw = tooltip.offsetWidth;
    const th = tooltip.offsetHeight;
    const gap = 10;
    const margin = 8;

    // Hitung posisi horizontal — tengah elemen, clamp ke viewport
    let left = rect.left + rect.width / 2 - tw / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));

    // Smart flip: default top, flip ke bottom kalau tidak muat
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    let top;
    let placement;

    if (spaceAbove >= th + gap + margin) {
      top = rect.top + window.scrollY - th - gap;
      placement = "top";
    } else if (spaceBelow >= th + gap + margin) {
      top = rect.bottom + window.scrollY + gap;
      placement = "bottom";
    } else {
      // Fallback: posisi yang punya ruang lebih besar
      top =
        spaceAbove > spaceBelow
          ? rect.top + window.scrollY - th - gap
          : rect.bottom + window.scrollY + gap;
      placement = spaceAbove > spaceBelow ? "top" : "bottom";
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
    tooltip.dataset.placement = placement;
  }

  function hideTooltip(el) {
    // Kembalikan title attribute
    if (el.dataset.titleCache) {
      el.setAttribute("title", el.dataset.titleCache);
      delete el.dataset.titleCache;
    }
    tooltip.classList.remove("visible");
  }

  // Attach events ke semua elemen dengan data-tooltip
  function initTooltips() {
    document.querySelectorAll("[data-tooltip]").forEach((el) => {
      // Hindari double-binding
      if (el.dataset.tooltipBound) return;
      el.dataset.tooltipBound = "1";

      el.addEventListener("mouseenter", () => {
        tooltipTimer = setTimeout(() => showTooltip(el), 300);
      });
      el.addEventListener("mouseleave", () => {
        clearTimeout(tooltipTimer);
        hideTooltip(el);
      });
      el.addEventListener("focus", () => showTooltip(el));
      el.addEventListener("blur", () => hideTooltip(el));
      el.addEventListener("click", () => hideTooltip(el));
    });
  }

  initTooltips();

  // ── Unified scroll handler ─────────────────────────────────────────────────
  window.addEventListener(
    "scroll",
    () => {
      updateProgress();
      updateBackToTop();
      tooltip.classList.remove("visible");
    },
    { passive: true },
  );

  // Init on load
  updateProgress();
  updateBackToTop();
});
