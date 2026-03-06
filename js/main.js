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

  // Sync button state with saved theme on load
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

  // Sync button state with saved lang on load
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
  }

  // ── Scroll spy with IntersectionObserver ───────────────────────────────────
  const sectionIds = [
    "demos",
    "sync",
    "wac",
    "licensing",
    "desktop",
    "analyst",
  ];
  const pills = document.querySelectorAll(".nav-pill[data-section]");

  const setActive = (id) => {
    pills.forEach((p) =>
      p.classList.toggle("active", p.dataset.section === id)
    );
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-30% 0px -65% 0px" }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Set initial active pill on page load based on scroll position
  const initialActive = sectionIds.find((id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top <= 80;
  });
  setActive(initialActive || sectionIds[0]);
});
